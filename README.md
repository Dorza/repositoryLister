# Readme

## Running locally

* Pull the repo down with ```git clone https://github.com/Dorza/repositoryLister.git```
* Then ```npm install```
* Then ```npm start```
* Page should open showing an input box and "Get Repos" button.
* Tests can be run using ```npm run test``` for which there are a few basic tests.

## Usage
* Across thet top of the page are two links to "Repositories" and "Organisations" pages, this uses react router.

### Repositories page

* The input box is prefilled with a value of "wesbos", clicking the button will show repositories associated with that user.
* Returned results are limited to 10
* Clicking the Prev/Next buttons cycles you through the users repositories.
* If a username is entered that cannot be found a toast notification will pop up in the lower right of the screen.
* Found repositories display the: repository name, stars, creation date, last updated date, default branch and a link to view the repo on GitHub. CSS Grid is used to display the repository "panels" and will shrink and adapt the fit browser window size.

### Organisations page

* This page is similar to the previous page and shows the organisations the user is part of. 
* If no repositories are found for the user under an organisation an information toast appears at the bottom right.
* As above if the user cannot be found then an error toast is shown.

## Plugins used (beyond create-react-app defaults)
* axios - Ajax request library
* classnames - sets css classes based on passed props.
* date-fns - Destructible date library.
* enzyme - React testing utility
* enzyme-adapter-react-16 - Enzyme compatibility adapter for react 16
* gh-pages - for deploying to git hub pages
* prop-types - Basic typechecking

### Styling methodologies

Several methodologies were used using SCSS as a CSS pre-processor these include:

* ITCSS - For laying out the SCSS project files
* BEM - Block, Element, Modifier  methodology for naming and organizing classes
* Namespacing - For designating classnames to specific contexts i.e .c-my-class denotes a component class.

### Linting

Linting was handled with create-react-apps implimentation of eslint. Previously I have used AirBnBs eslint rules with Prettier as well as styleLint for linting CSS on styled-components.
