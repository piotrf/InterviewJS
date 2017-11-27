# interviewjs

![Node](https://img.shields.io/node/v/interviewjs.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/interviewjs.svg?style=flat-square)](https://www.npmjs.com/package/interviewjs)
[![Travis](https://img.shields.io/travis/AJInteractive/interviewjs/master.svg?style=flat-square)](https://travis-ci.org/AJInteractive/interviewjs)
[![David](https://img.shields.io/david/AJInteractive/interviewjs.svg?style=flat-square)](https://david-dm.org/AJInteractive/interviewjs)
[![Coverage Status](https://img.shields.io/coveralls/AJInteractive/interviewjs.svg?style=flat-square)](https://coveralls.io/github/AJInteractive/interviewjs)
[![NPM](https://img.shields.io/npm/dt/interviewjs.svg?style=flat-square)](https://www.npmjs.com/package/interviewjs)

> FIXME-DESCRIPTION

### Usage

```js
import interviewjs from 'interviewjs';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add interviewjs (--dev)

or npm

	npm install interviewjs (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import interviewjs from 'interviewjs';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
interviewjs

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/AJInteractive/interviewjs) example.

### Builds

If you don't use a package manager, you can [access `interviewjs` via unpkg (CDN)](https://unpkg.com/interviewjs/), download the source, or point your package manager to the url.

`interviewjs` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `interviewjs` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/interviewjs/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/interviewjs) on your page. The UMD builds make `interviewjs` available as a `window.interviewjs` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
