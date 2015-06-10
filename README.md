# Skivvy package: `@timkendrick/react-app`
[![npm version](https://img.shields.io/npm/v/@timkendrick/skivvy-package-react-app.svg)](https://www.npmjs.com/package/@timkendrick/skivvy-package-react-app)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)
[![Build Status](https://travis-ci.org/timkendrick/skivvy-package-react-app.svg?branch=master)](https://travis-ci.org/timkendrick/skivvy-package-react-app)

> ESLint/Mocha/ES6/JSX/Browserify/Stylus app tasks


## Installation

```bash
skivvy install @timkendrick/react-app
```


## Overview

This package allows you to perform ESLint/Mocha/ES6/JSX/Browserify/Stylus app tasks from within the [Skivvy](https://www.npmjs.com/package/skivvy) task runner.


## Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `source` | `object` | Yes | N/A | Paths to source files |
| `source.index` | `string` | Yes | N/A | Path to HTML page template |
| `source.scripts` | `string` | Yes | N/A | Path to JS source files (must contain an entry point named `index.js`) |
| `source.styles` | `string` | Yes | N/A | Path to Stylus source files (must contain an entry point named `index.styl`) |
| `source.assets` | `string` | Yes | N/A | Path to assets folder |
| `source.tests` | `string` | Yes | N/A | Path to Mocha tests |
| `destination` | `object` | Yes | N/A | Paths to destination files |
| `destination.root` | `object` | Yes | N/A | Path to destination root |
| `destination.js` | `string` | Yes | N/A | Path to destination JS file |
| `destination.css` | `string` | Yes | N/A | Path to destination CSS file |
| `port` | `number` | No | `3000` | Port to use for preview server |
| `debug` | `boolean` | No | `false` | Whether to run the tasks in dev mode |


## Included tasks

### `test`

Lint source files and run unit tests

#### Usage:

```bash
skivvy run test
```


### `build`

Run the `test` task, clean destination folder, copy assets and compile source files

If the package's `debug` configuration setting is `true`, this task will watch for changes.

#### Usage:

```bash
skivvy run build
```


### `serve`

Run the `build` task and launch a preview server

#### Usage:

```bash
skivvy run serve
```
