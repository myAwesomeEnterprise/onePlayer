# React Native Boilerplate

[![React Native](https://img.shields.io/badge/React%20Native-v0.58.3-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v3.1-blue.svg)](https://reactnavigation.org/)

React Native Boilerplate is a starting point for React Native application. This project is configured with redux,
and redux persist. Latest version of react-navigation.

## Features

* [Redux](http://redux.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
* [Axios](https://github.com/axios/axios)
* [Jest](https://facebook.github.io/jest/)

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/myAwesomeEnterprise/reactNativeBoilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Rename the `env.example.json` file to `.env` and update content
6. Run `yarn` or `npm install` to install dependencies
7. Connect a mobile device to your development machine
8. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device

## Contributing

PRs are welcome
