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
| `source` | `object` | No | N/A | Paths to source files |
| `source.scripts` | `string` | No | `"src/scripts"` | Path to JS source files |
| `source.styles` | `string` | No | `"src/styles"` | Path to Stylus source files |
| `source.templates` | `string` | No | `"src/templates"` | Path to HTML page templates folder |
| `source.assets` | `string` | No | `"src/assets"` | Path to assets folder |
| `tests` | `string` | No | `"test"` | Path to test root |
| `destination` | `string` | No | `"dist"` | Path to destination root |
| `port` | `number` | No | `3000` | Port to use for preview server |
| `debug` | `boolean` | No | `false` | Whether to run the tasks in dev mode |


## Included tasks

### `test`

Lint source files and run unit tests

#### Usage:

```bash
skivvy run test
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `scripts` | `string` | No | `"<%= package.source.scripts %>"` | Path to JS source files |
| `tests` | `string` | No | `"<%= package.tests %>"` | Path to test root |
| `mocha` | `string` | No | `"<%= package.tests %>/**/*.spec.js"` | Path to Mocha specs |


### `build`

Run the `test` task, clean destination folder, copy assets and compile source files

If the package's `debug` configuration setting is `true`, this task will watch for changes.

#### Usage:

```bash
skivvy run build
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `source` | `object` | No | N/A | Paths to source files |
| `source.scripts` | `string` | No | `"<%= package.source.scripts %>"` | Path to JS source files |
| `source.js` | `string` | No | `"<%= package.source.scripts %>/index.js"` | Path to JS entry point |
| `source.styles` | `string` | No | `"<%= package.source.styles %>"` | Path to Stylus source files |
| `source.stylus` | `string` | No | `"<%= package.source.styles %>/index.styl"` | Path to Stylus entry point |
| `source.assets` | `string` | No | `"<%= package.source.assets %>"` | Path to assets folder |
| `source.index` | `string` | No | `"<%= package.source.templates %>/index.html"` | Path to HTML page template |
| `destination.root` | `string` | No | `"<%= package.destination %>"` | Path to destination root folder |
| `destination.index` | `string` | No | `"<%= package.destination %>/index.html"` | Path to destination HTML file |
| `destination.js` | `string` | No | `"<%= package.destination %>/js/app.js"` | Path to destination JS file |
| `destination.css` | `string` | No | `"<%= package.destination %>/css/app.css"` | Path to destination CSS file |


### `serve`

Run the `build` task and launch a preview server

#### Usage:

```bash
skivvy run serve
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `root` | `string` | No | `"<%= package.destination %>"` | Path to destination root |
| `port` | `number` | No | `"<%= package.port %>"` | Port to use for preview server |
| `watch` | `boolean` | No | `"<%= package.debug %>"` | Whether to reload on file changes |


### `create-app`

Create a new app component

#### Usage:

```bash
skivvy run create-app
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `name` | `string` | No | N/A | App component name |
| `destination` | `string` | No | `"<%= package.source.scripts %>/apps"` | Path to app components folder |



### `create-view`

Create a new view component

#### Usage:

```bash
skivvy run create-view
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `name` | `string` | No | N/A | View component name |
| `destination` | `string` | No | `"<%= package.source.scripts %>/views"` | Path to view components folder |



### `create-component`

Create a new component

#### Usage:

```bash
skivvy run create-component
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `name` | `string` | No | N/A | Component name |
| `destination` | `string` | No | `"<%= package.source.scripts %>/components"` | Components folder |
