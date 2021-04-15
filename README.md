# Tempo.io Code Assignment by Ian McGonigle

To meet the requirements of this assignment I created a single page application with two routes. The routes are contained in `src/routes`. Routing is handled with `React Router`.

The first route `/` shows a clickable list of the team names. There is an input that lets you filter the list by the name. If you click a team name, you are taken to the other route.

The second route is `/team/:teamId`. This displays the team name, a card for each team member, and an input that lets you filter by the team members name. This is the same component used to filter the list of team names on the index page. This was accomplished by passing functions that handle the filter boolean logic, and the rendering as props.

In the `src/components` folder you will find the `FilteredList` and `UserCard` components.

`FilteredList` is used on both routes. It renders the input, and uses `itemRenderer` in a map function to render items. The list of items is filtered using `onFilter`. Using props for this logic and component means the component could be used in different contexts and different data structures.

`UserCard` Displays an avatar, a name, location, and in applicable instances a label for the team lead.

State management was done using `Recoil.js`. It is a small light weight library. The description of the assignment mentioned not to "go full redux". While Redux _is_ my preferred state management library, I have been looking for an excuse to try `Recoil.js` out. The `atoms` of state can be found in `src/state/index.js`.

There are unit tests for both `FilteredList` and `UserCard`. The tests are done `React Testing Library` and `Jest`.

To run the project, either checkout the code from Github, or extract the zipped directory that I will provide.

After you have the files locally `cd` into the `tempo` directory. Next run `npm install` to install the dependencies. After the dependencies have installed, run `npm start` to run the project on your localhost at port 3000.

You can run the tests by calling `npm run test` in the tempo directory.

More detailed instruction about running a project created with `create-react-app` can be found in the "Getting Started" section which is leftover from the initial install of `create-react-app`

Summary of the tools I used:
- [React](https://reactjs.org/) as the framework for the SPA
- [React Router](https://reactrouter.com/) for routing.
- [Recoil](https://recoiljs.org/) for state management.
- [Tailwinds CSS](https://tailwindcss.com/) for styling.

## Getting Started: Using Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
