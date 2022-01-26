# Employee-Compensation-Frontend

## Getting Started

## Installation

First time, setup project for development.
```bash
git clone git@github.com:codenuk/React-Native-Experiment.git
cd React-Native-Experiment
yarn install
yarn start
```

# Knowledge

## How to Setup Project
- Frist Time
```bash
npm install -g expo-cli
```
- Create React Native
```bash
expo init AwesomeProject

cd AwesomeProject

yarn start
```
[Reference](https://reactnative.dev/docs/environment-setup)

<hr/>

## Best Folder Structure
- hooks/
- assets/
- components/
- i18n/
- navigation/
- pages/
- store/
- utils/
- theme/

[Reference](https://learn.habilelabs.io/best-folder-structure-for-react-native-project-a46405bdba7)

<hr />

## How to create route
```bash
yarn add @react-navigation/native @react-navigation/native-stack
yarn add react-native-screens react-native-safe-area-context
```
/AwesomeProject/App.tsx
<br />
[Reference](https://reactnative.dev/docs/navigation#installation-and-setup)

<hr />

## How to Add Font Family
```bash
yarn add expo-font
```

/AwesomeProject/src/hooks/UseFonts.ts
<br />
[Reference](https://docs.expo.dev/versions/latest/sdk/font/#usage)

<hr />

## How to import file type svg
```bash
yarn add react-native-svg
yarn react-native link react-native-svg
yarn add react-native-svg-transformer
```
/AwesomeProject/declarations.d.js
/AwesomeProject/metro.config.js
<br />
[Reference](https://docs.expo.dev/versions/latest/sdk/font/#usage)

<hr />

## How create app multiple languages
```bash
yarn add i18next react-i18next
```
/AwesomeProject/src/i18n/i18n.ts
<br />
[Reference](https://medium.com/@raazthemystery273/how-to-use-i18next-react-i18next-in-react-native-f81ece184cd2)

<hr />

## How custom tages react native
```bash
yarn add react-native-global-props
```
/AwesomeProject/src/theme/customTags.ts
<br />
[Reference](https://www.npmjs.com/package/react-native-global-props)

<hr />

## How create Redux
```bash
yarn add redux react-redux redux-thunk
```
/AwesomeProject/src/stores
<br />
[Reference](https://github.com/codenuk/Redux-Experiment)

<hr />
