# Project Week 7-9 (João and Toni)

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

We have built a web app that helps a new Beamery starter on their first week by tracking their on-boarding events.  


## 'Product' design burst

We had a design burst that covered the main processes for designing a product/app usually followed by product designers/ux researchers. 

### who are we building this app for? What are our goals and motivations?

<a href="https://ibb.co/L0XqKFg"><img src="https://i.ibb.co/D1H6dJM/IMG-8727.jpg" alt="IMG-8727" border="0"></a>
<a href="https://ibb.co/R6qq2ry"><img src="https://i.ibb.co/rpVVk8s/IMG-8728.jpg" alt="IMG-8728" border="0"></a>

[] Learn Beamery's policies
[] 'Cure' first-week blues
[] Ease the overwhelming feeling of too many events/meetings
[] Give them confidence by tracking their progress

### personas, scenarios. Who is PAUL??

<a href="https://ibb.co/yqnFTh5"><img src="https://i.ibb.co/x6SqvmG/IMG-8729.jpg" alt="IMG-8729" border="0"></a>
<a href="https://ibb.co/BrX22MQ"><img src="https://i.ibb.co/8dWggZf/IMG-8730.jpg" alt="IMG-8730" border="0"></a>


## Rapid Prototyping

<a href="https://ibb.co/BPpN45G"><img src="https://i.ibb.co/VN1mHcx/IMG-8726.jpg" alt="IMG-8726" border="0"></a>

## Wireframing

[FIGMA](https://www.figma.com/file/Dh2wx7l98VUrHOERFe0Xx9/UI-Design?node-id=0%3A1)

This one was especially important for following a component-based software architecture. This helped us breaking down most elements into components.

## User Stories
## User Stories

As a DEVELOPER I need to WRITE INTEGRATION TESTS FOR MY APP so that I CAN PROVE MY APP WORKS AS EXPECTED

- [x] Integration tests written for one or more components using Jest and React Testing Library
- [x] API data is replaced with a mock/stub where required
- [x] Test files are colocated with the component being tested (e.g. MyComponent.test.js)

As a DEVELOPER I need to BUILD THE FRONTEND FIRST so that I CAN DEMONSTRATE THE FUNCTIONALITY BEFORE BUILDING THE BACKEND

- [x] API calls to the backend are stubbed out for now

As a DEVELOPER I need to FOLLOW A DESIGN CAREFULLY so that MY PRODUCT MATCHES THE INITIAL DESIGNS

- [x] Wireframes follow Beamery's design guidelines
- [x] App design matches wireframes (or if not, there is a justifiable reason)

As a DEVELOPER I need to USE A CONSISTENT METHOD OF STYLING so that MY CODEBASE IS CONSISTENT AND MY COMPONENTS ARE STYLED

- [x] Components are styled consistently
- [x] Styles for each component are declared using either CSS modules or Styled Components**
- [x] Inline style props are not used

As a DEVELOPER I need to WRITE HIGH QUALITY CODE so that OTHER PEOPLE AND MY FUTURE SELF CAN UNDERSTAND WHAT I WROTE

- [x] Variable and function names are descriptive (they don't need to be concise, they do need to be helpful)
- [x] Code is (mostly) self documenting
- [x] Team code standards are followed
- [x] No eslint errors (although where necessary errors may be commented out if the reason can be justified)
- [x] Logic tests make it clear what is being checked

## Improvements/Considerations

- Login system is, for now, just a 'button action'.
- Improve integration testing.
- Test coverage command should maybe consider ignoring components that we are not able to do integration tests with
- Backend will be added. Mock-api calls will have to be removed and consequently the code will be refactored.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
