# ReactNativeAssessment

This project was generated with the React Native CLI.

## Aims for the assessment

- Check ability to follow instructions to get a repository running & add features
- Think for yourself in how you want to approach a solution, there are many ways to achieve the tasks set out in the requirements
- Showcase technical ability in creating a simple solution
- Communication and documentation upon delivery

## Task

Use the api server endpoints to pull a list of retailers (into component state) with no interaction from the user

Loop through the retailers and display them in a component (see design folder for wireframe)

Add a handler to the component which when clicked navigates to a detail screen for that retailer.

## Bonus Points

- Unit Tests
- State Management (redux|thunk)
- Styling
- TypeScript Usage

## Getting Started

Get started by running the following:

* `npm install` <- from the source root
* `npm run ios` <- iOS simulator
* `npm run android` <- Android emulator
* `cd api && npm install` <- sets up express api server
* `node api/index.js` <- starts express api server, run from the source root

## API

Included is a simple api which exposes the following endpoints, hosted from `http://localhost:3000`

* GET `/api/retailers`
* GET `/api/retailer/:id`

## React Native

By following the steps in Getting started, your react native app will build and install onto the emulator/simulator.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest
