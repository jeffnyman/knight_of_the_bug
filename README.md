# Knight of the Bug

A pedagogical exploration into bug hunting.

---

## Development Notes

During development, you can run `npm start`, which will start up a local web server and load the `index.html` file.

This project uses [Rollup](https://rollupjs.org/guide/en/) as a JavaScript module bundler, which lets you compile multiple source files into a single bundle. It's similar to [Browserify](https://browserify.org/), [Webpack](https://webpack.github.io/), [Snowpack](https://www.snowpack.dev/), and [Parcel](https://parceljs.org/). A lot of those tools seem to try and andle everything: HTML templating, image optimizations, CSS processing, JavaScript bundling, and apparently other stuff. Out of the box, Rollup seemed to just focus on JavaScript, while allowing plugins for the rest.

Rollup uses a JavaScript configuration file to define the bundling options. The default name is `rollup.config.js`, which is what's used in this project. That file is always placed in the root of the project.
