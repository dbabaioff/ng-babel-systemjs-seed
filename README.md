ng-play
========

This repo is a 1.x version of ng2-play (https://github.com/pkozlowski-opensource/ng2-play)

## Install

Clone this repo and execute in your favourite shell:

* `npm i -g gulp` to install gulp globally (if you don't have it installed already)
* `npm i` to install local npm dependencies

## Play

After completing installation type in your favourite shell:

* `gulp play` (or `npm start`) to start a "Hello World" app in a new browser window. App files are observed and will be re-transpiled on each change.

## Dependencies

### Build-time

* [babel](https://github.com/babel/babel): ES6 -> ES5 transpilation

### Run-time

* [systemjs](https://github.com/systemjs/systemjs): ES6 modules loading (module loader polyfill)

## Learning materials

### ES6 module loading

* [Practical Workflows for ES6 Modules, Fluent 2014](https://www.youtube.com/watch?v=0VUjM-jJf2U)
* [Guy Bedford: Package Management for ES6 Modules, JSConf2014](https://www.youtube.com/watch?v=szJjsduHBQQ)
* [Loader API specification](http://whatwg.github.io/loader/)
