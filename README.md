# Svelte Carbon Template


## Overview

* Coffeescript
* Pug
* Sass
* Svelte SPA Router
* Gulp
* Sugar
* Svelte Preprocess
* Svelte


## Carbon Information

This template does not use the npm for the carbon svelte library from IBM. Instead, it has the components in the `/src/components/carbon` folder instead.

The reason for this is that there are going to be inevitable bugs and customizations required for your app, and there's no point in waiting for updates when they can be easily fixed on your own.

The components have been curated to remove unnecessary items (i.e., skeletons and stories), or to improve stylings where required.

Where useful, new icons will be added.



## Installation

```bash
degit braintapper/svelte-carbon-template appname
npm install
```

## Shortcuts

To run the dev:

```bash
svelte
```

Navigate to http://localhost:5000

To build:

```bash
build
```

To run the built app

```bash
serve
```
This serves the SPA from `/public`

## Notes

Main template is `public/index.html`
