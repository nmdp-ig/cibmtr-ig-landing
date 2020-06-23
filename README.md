# CIBMTR IG LANDING PAGE
The CIBMTR IG Landing Page provides a central location for accessing CIBMTR HL7 FHIR implementation guides. 

## Technologies Used (with links)
1. [HL7 / FHIR](https://www.hl7.org/fhir/)
2. [Gatsby](https://www.gatsbyjs.org/docs/cheat-sheet/) - a high-performance static-site generator. Review the [Gatsby Cheat Sheet](https://www.gatsbyjs.org/docs/cheat-sheet/).
4. [ReactJS](https://reactjs.org/) - Gatsby sites may use ReactJS-style components and development patterns.
5. Markdown - Gatsby site content may be written in markdown. Review the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
6. [Graph QL](https://graphql.org/) - a powerful data querying language. Review how it is used in Gatsby [here](https://www.gatsbyjs.org/docs/graphql-concepts/).

## Installation
> Before installing this application, you should have the follow installed in your development environment:

- [NodeJS](https://nodejs.org/en/) - current or LTS (_Should include npm_)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) - `npm install -g gatsby-cli`


To install the landing page application for the first time:

1. Clone this repository to your local machine  
`git clone https://github.com/nmdp-ig/cibmtr-ig-landing.git`
2. Change to the project directory  
`cd cibmtr-ig-landing`
3. Install all the project dependencies  
`npm install`

The site is now ready for development! A more detailed guide can be found [here](https://www.gatsbyjs.org/tutorial/part-zero/).

## Running Locally for Development
> Gatsby projects come with a live reloading development server. As you make and save changes to project files, those changes will be immediately reflected in what you see in your browser window. (_Changes to gatsby-config.js require a stop and rebuild._)

The development server can be started with:   
`gatsby develop`

Your site will be running at `https://localhost:8000`.

## Browse the Site's Datasource with GraphiQL
GraphQL is the magic behind many of Gatsby's optimizations and features. The data stored is queried and retrieved at build time to create pages, fill page content, transform images, and more. While developing, it is very useful to be able to query this data source. Gatsby provides a graphical user interface, called Graph iQL, into this data source that is accessible while running a local development server.

You can access this data source and browse its contents at:   
`http://localhost:8000/___graphql`

Review the Gatsby [tutorial for Graph iQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)


## Build for Production
To create a production build for this site:   
`gatsby build`

The resulting output can be found in the `/public` directory. The contents of this directory are the entire site and they can be deployed from this folder to any Apache-style webserver.

To see the production build on your local machine:   
`gatsby serve`

## Folder Structure

    /  
    |-- /.cache
    |-- /public
    |-- /src
        |-- /components
        |-- /data
        |-- /images
        |-- /styles
        |-- /templates
    |-- gatsby-config.js
    |-- gatsby-node.js
    |-- gatsby-browser.js

**`.cache`** - Internal cache for the Gatsby framework. Do not include in source control. Do not modify this folder.

**`public`** - After running a build, Gatsby outputs the final, ready-to-deploy website to this folder.

**`src`** - This is the source code of the site. Modifications to look of the website and its content are done here.

**`src/components`** - Gatsby sites may use React user interface components. Such components are found in this folder. For example, the site's header, layout, and SEO can be modified here.

**`src/data`** - The data folder has files that insert data into the site's graph data source. This information can be used at build time to programmatically build pages or content. For example, the list of implementation guides and the data that generates a card-style visualization for the items in that list are found in `guides.yml` in this folder.

**`src/images`** - A folder for all the images used on the site. These images will be processed and transformed as needed by the Gatsby build process.

**`src/pages`** - Code for each of the site's pages is found here. Pages may be React-style or Markdown-style. Supplementary pages (those found in the navigation bar on the site) should be written in Markdown and added to this folder.

**`src/styles`** - Custom CSS files are found in this folder. A file called `nmdp-styles.css` has been provided for this purpose.

**`src/templates`** - Templates may be employed in a Gatsby site to enhance development and streamline code. The supplementary pages template is found in this folder. Modifying it will modify every supplementary page in the site.

Review the Gatsby project structure [guide](https://www.gatsbyjs.org/docs/gatsby-project-structure/).

## Important Files
### Configuration
**`gatsby-browser.js`** - Add/remove CSS files to the project. The CSS files must be in `src/styles`.

**`gatsby-config.js`** - Modify site meta data, add/remove Gatsby plugins, modify Gatsby config.

**`gatsby-node.js`** - Has code for programmatically creating supplementary pages. You should not need to modify this file.

**`pacakage.json`** - Add/remove dependencies to the project, modify some site meta data.

### Styling
**`styles/nmdp-styles.css`** - Branding related styles, styles for the guide link cards, styles for the header, styles for the navbar, fonts.

**`src/components/layout.css`** - Modify page styling (if the page uses the layout).

### UI Components
**`src/components/header.js`** - Code for the header of the site.

**`src/components/layout.js`** - Code that describes the structure of pages in the site. Markdown is injected into this code to make the various pages.

**`src/components/guide-link.js`** - A component used to represent each implementation guide link.

### SEO
**`src/components/seo.js`** - Code for manipulating the search engine optimization for the site.

## Development How-To
### How To: Add/Remove/Modify an IG
### How To: Add/Remove/Modify a supplementary web page
### How To: Modify the styling of the site
### How To: Change what links display in the nav bar
### How To: Add an image to the site
### How To: Update SEO