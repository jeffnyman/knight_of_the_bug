# Knight of the Bug

A pedagogical exploration into bug hunting.

---

## Development Notes

During development, you can run `npm start`, which will start up a local web server and load the `index.html` file.

This project uses [Rollup](https://rollupjs.org/guide/en/) as a JavaScript module bundler, which lets you compile multiple source files into a single bundle. It's similar to [Browserify](https://browserify.org/), [Webpack](https://webpack.github.io/), [Snowpack](https://www.snowpack.dev/), and [Parcel](https://parceljs.org/). A lot of those tools seem to try and andle everything: HTML templating, image optimizations, CSS processing, JavaScript bundling, and apparently other stuff. Out of the box, Rollup seemed to just focus on JavaScript, while allowing plugins for the rest.

Rollup uses a JavaScript configuration file to define the bundling options. The default name is `rollup.config.js`, which is what's used in this project. That file is always placed in the root of the project.

This project uses [Babel](https://babeljs.io/) is a JavaScript transpiler that converts JavaScript into plain old ES5 JavaScript that can run in any browser, apparently even the really old ones. Also being used is [babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) as apparently this would automatically provide all plugins that are needed to transpile any and all ES6 features, although whether that matters or not for this project is unclear to me at the moment.

For the presets, I use `loose`, which is said to produce smaller and faster ES5 code. However, I also hear that it can introduce unintended results when switching from transpiled ES6+ to native ES6+. Apparently this happens because the setting will produce code that is less faithful to ES6+ semantics. I also set `modules` to false and I do this because my understanding is that this setting will preserve ES modules. From what I've read, you are supposed to use this if you intend to have native ES Modules being used in a browser context.
