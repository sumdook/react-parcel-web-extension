# react-parcel-web-extension
This is a boilerplate for building cross browser chrome extensions with React and Parcel. 

- Templated popup and options UI.
- Boilerplate for injecting react app into DOM with content script.
- Configured with HMR in development environment.

> Note: Since parcel 2 is still in beta, the parcel packages used are unstable at the time of writing this. 
> I've locked the template with the version of parcel packages that worked for me for the time being.

## Commands

In the project directory, you can run:

#### `yarn start`
This starts the extension in development mode. Builds the extension in `dist` folder which can be loaded into chrome/firefox/edge.
This is not optimized for production and is configured for development with sourcemaps and HMR enabled.

#### `yarn build`
Builds the extension for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.


## Project structure

```
├── assets [For all images]
├── manifest.json
├── package.json
├── .parcelrc [Parcel config]
└── src
    ├── components [common components to be used across react apps]
    ├── pages [The entry point for different react apps in the extension]
    │   ├── Content [App to be injected to content page using]
    │   │   └── index.js
    │   └── Popup [App for popup]
    │       └── index.js
    │   └── Options [App for options]
    │       └── index.js
    ├── scripts
    │   ├── background.js [Background Script]
    |   └── content.js [Inject react app and other operations]
    └── static [HTML entry point for different part of the extension]
        └── popup.html
        └── options.html
```

## TypeScript
If you're looking for a starter with just JavaScript, check the [typescript branch](https://github.com/sumdook/react-parcel-web-extension/tree/typescript).