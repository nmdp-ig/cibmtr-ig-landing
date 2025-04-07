#
# CIBMTR IG LANDING PAGE
The CIBMTR IG Landing Page provides a central location for accessing CIBMTR HL7 FHIR implementation guides. 

## Technologies Used (with links)
1. [HL7 / FHIR](https://www.hl7.org/fhir/)
2. [CSS / Style Sheets](Documentation found anywhere)
## Installation
> None

To install the landing page application for the first time:

1. Clone this repository to your local machine  
`git clone https://github.com/nmdp-ig/cibmtr-ig-landing.git`
2. Change to the project directory  
`cd cibmtr-ig-landing`
3. Open index.html in browser

This site is developed with simple HTML and CSS.


## Folder Structure

    /  
    |-- aboutus.html
    |-- applications.html
    |-- background.html
    |-- btmlogo.png
    |-- endpoints.html
    |-- favicon.ico
    |-- FHIR-transparent.png
    |-- HL7-FHIR.jpg
    |-- index.html
    |--style.css
    |-- terminologies.html

### Styling
**`style.css`** - Branding related styles, styles for the guide link cards, styles for the header, styles for the navbar, fonts.


## Development How-To
> IDE Recommendation: Visual Studio Code is available on all platforms, is light-weight, will not pollute your source code with configuration files, and has many one-click install plugins that make developing a Javascript-based site easy.

### How To: Add/Remove/Modify an IG Link
Modify the index.html

### How To: Add/Remove/Modify a supplementary web page
Add another HTML page and link to it from the index.html

    ---
    title: "About Us"
    ---


### How To: Modify the styling of the site
style.css:

