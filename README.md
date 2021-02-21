# ABOUT

The second applcation designed and implemented during Fintechchallenge in which I participated.
Draco Social Lending is a project introducing the idea of "social lending" to the Polish market. Simply put, our service allows for granting loans between individuals without the inter mediation of banks - offering customers speed, simplicity and convenience. We believe that such projects are the future of banking. From the very beginning, banks have linked people who have money (through deposits and other investment products of this type) with those who need it (by providing loans). It is only in recent years, with the development of the Internet and mobile phones, that this status quo may change for the first time. In order to connect people who need money with those who have it, you no longer need a bank - it is enough to use modern technologies, i.e. websites and applications for mobile phones. This is an analogous situation to the changes that have taken place in trade - bazaars and shops have partially replaced auction sites and online stores. The lack of "physicality" in both commerce and banking simply has many undeniable advantages. How do we want to function? What are our goals? Well, we believe that we have a unique opportunity to improve and simplify the transfer of money between people.

## Used technologies:

Create React App
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

React
To learn React, check out the [React documentation](https://reactjs.org/).

-   [React Router](https://reactrouter.com/)
-   [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
-   [React hooks](https://reactjs.org/docs/hooks-intro.html)
-   [Jest](https://jestjs.io/docs/en/getting-started.html)
-   [React testing library](https://testing-library.com/docs/react-testing-library/intro)
-   [Cypress](https://www.cypress.io/)
-   [Material-ui](https://material-ui.com/)
-   [Axios](https://github.com/axios/axios)
-   [Formik](https://formik.org/)

## Architecture

### React-Router

React Router is a powerful routing library built on top of React that adds new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.
React router allows to write and read from browser's url which makes it perfect place for context-like store of an application state. This leads us to render applications according to the url which is a key for further debugging (user may copy an url address not saying what actions been taken before) and SEO optimisation to name a few.

All routes are gathered in `src/helpers/routes.ts` file.

### Custom hooks

React Hooks are in-built functions that allow React developers to use state and lifecycle methods inside functional components, they also work together with existing code, so they can easily be adopted into a codebase.

All hooks are gathered in `src/hooks` folder.

### Context API

The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.

The interesting part of this pattern is that the custom hook returns same data no matter if it's called by top component or the one that resides at very low end of components tree. It makes the url a context-like source of information for our application.

Context API is stored in `src/context` folder.

## Setup

These instructions will get you a copy of the project up and running on your local machine.

### Installing and running

To run this project, install it locally using npm:

```
$ yarn install
$ yarn start
```

To launch the test runner in the interactive watch mode:

```
$ yarn test
```

### Testing credentials

To access to full functionality of the application you have to register or use below credential when login:

`e-mail:` example@example.com
<br />
`password:` example@2020

To deposit or withdraw to app account, you can use

`account-id:` 135b42cd-e068-4208-b1ec-564944de51bc

Traefik authentication:

`user:` ersa
<br />
`password:` 7c8aq9dp

## Demo

![usage gif](https://github.com/oskarwoj/FinTech/blob/main/lending-demo.gif?raw=true)

## Live

-   SIT - https://dragons-lending.ersa-team.sit.fintechchallenge.pl/
-   UAT - https://dragons-lending.ersa-team.uat.fintechchallenge.pl/
-   PROD - https://dragons-lending.ersa-team.fintechchallenge.pl/
