/*
 * Dynamic IG version loader.
 *
 * Each IG card carries a `data-ig-metadata` attribute pointing at that IG's
 * published ImplementationGuide resource JSON (same-origin, served by Apache
 * under /ig/<name>/). On load we fetch each one and replace the ".version"
 * text with the live `version` field from the artifact.
 *
 * This keeps the landing page in sync with whatever IG build is actually
 * bundled in the Docker image -- no hand-editing of version numbers.
 *
 * The hardcoded "Latest version: x.y.z" in index.html is the fallback: if a
 * fetch fails (offline artifact, path change), the static value is left as-is.
 *
 * Note: loaded as an external script because the site CSP uses
 * `script-src 'self'` with no 'unsafe-inline'.
 */
(function () {
  "use strict";

  function setVersion(card, versionText) {
    var el = card.querySelector(".version");
    if (el) {
      el.textContent = "Latest version: " + versionText;
    }
  }

  function loadVersion(card) {
    var url = card.getAttribute("data-ig-metadata");
    if (!url) {
      return;
    }

    fetch(url, { headers: { Accept: "application/json" } })
      .then(function (resp) {
        if (!resp.ok) {
          throw new Error("HTTP " + resp.status + " for " + url);
        }
        return resp.json();
      })
      .then(function (ig) {
        if (ig && typeof ig.version === "string" && ig.version.length > 0) {
          setVersion(card, ig.version);
        }
      })
      .catch(function (err) {
        // Leave the static fallback version in place.
        if (window.console && console.warn) {
          console.warn("IG version load failed:", err.message);
        }
      });
  }

  function init() {
    var cards = document.querySelectorAll("[data-ig-metadata]");
    for (var i = 0; i < cards.length; i++) {
      loadVersion(cards[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
