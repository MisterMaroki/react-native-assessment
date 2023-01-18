# ReactNativeAssessment

Hi Dom, and anyone else that may be viewing this assignment!

Here, I have put together a simple react-native app that displays a list of retailers from the server, in a list format of pressable 'retailers'. Upon pressing one of these retailers, you are taken to that specific retailers detail screen. It features a very simple design that could definitely be improved upon.

I have added some wait time in the initial data fetch so you can preview what it would look like with a slow network connection. I hope you enjoy waiting for the network requests, whilst watching my beautiful skeleton placeholders.

In terms of technology choices:

- I have used zustand to create the store, as this is the fastest way to set up a small store, in my experience.
- I have used react-query to fetch and cache the data, considering we are pulling all our data from the server, the query caching that is offered by react-query is sufficient.
- Due to the fact that we aren't updating this state in-app, it makes more sense to use the query apis provided by this library.
- If we would mutate this data on the client, we could set up a redux store and initialise it with the data from server. If we wanted to maintain server-authority, I would personally continue to use react-query as they offer seamless, well-made mutation hooks.

Would love to chat about the tech choices I have made here and understand your point-of-view about these choices.

## Libraries used

@react-native-async-storage/async-storage
@react-native-masked-view/masked-view
@react-navigation/native
@react-navigation/native-stack
@types/react
@types/react-native
react
react-native
react-native-linear-gradient
react-native-safe-area-context
react-native-screens
react-native-skeleton-placeholder
react-query
zustand

## PreWarning

Setting up the test env for neact native with react-query, zustand-persist middleware and jest can take some time and I haven't set up a fresh test env with this combination of libraries before.
However, please do feel free to ask me more questions about testing, as I do believe that it's a vital part of any production app.

Writing unit tests, E2E tests, and integration tests is usually pretty fun in my opinion. But given that this takehome assessment is designed to only take a couple/few hours, I have made the executive decision not to continue with setting up the test env. Basically, it is going to take a while of reading through documentation to get it set up and it's probably not essential to showing you what I can do in terms of building an app. Moving forwards, assuming the test env is already set up, I would test the query hooks to ensure they return the correct data and error responses; I would create some tests around navigation and the store functions; and I would unit test my components to ensure the correct data is always being displayed in each component.

## Thanks for the opportunity!

After that brief intro call, it is clear to me that we would make a great team and there's a lot that I could learn from you. Again, re: the failed test env setup - if this is the only thing holding you back from hiring me, I'd love to have a further discussion around testing with you and even write some tests in an already set up env, just to prove that I can write tests.

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

- `npm install` <- from the source root
- `npm run ios` <- iOS simulator
- `npm run android` <- Android emulator
- `cd api && npm install` <- sets up express api server
- `node api/index.js` <- starts express api server, run from the source root

## API

Included is a simple api which exposes the following endpoints, hosted from `http://localhost:3000`

- GET `/api/retailers`
- GET `/api/retailer/:id`

## React Native

By following the steps in Getting started, your react native app will build and install onto the emulator/simulator.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest
