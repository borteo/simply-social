# simply-social
A simple social network

Current version: 0.1

## Features

- General development features:
  - Sass (Bourbon)
  - Gulp.js, Bower
  - Sprite images auto-generated
  - Angular.js

## Getting Started

To get you started you can simply clone the simply-social repository and install the dependencies:

### Prerequisites

You need git to clone the simply-social repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

I also use a number of node.js tools to initialise simply-social. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone simply-social

Clone the simply-social repository using [git](http://git-scm.com/):

```
git clone https://github.com/borteo/simply-social.git
cd simply-social
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code. The tools help to manage the application.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).
* `gulp` concatenates JavaScript, compiles Sass and move HTML files into dist/ [The streaming build system](http://gulpjs.com/).


I have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains Angular files 


### Run the application

I have preconfigured the project with a simple development web server. 

Firstly we have to build the application:

```
gulp build
```

The simplest way to start the server is:

```
gulp
```

At this point your browser will open the Web page (localhost -port 8080).

### Run tasks with gulp
- Run `gulp watch` for live compiling SCSS and JS
- Run `gulp build` for building
- Run `gulp` for starting the server


## Directory Layout

    src/          --> all of the files to be used in development
    gulp/         --> gulp tasks
    dist/         --> public folder - minified scripts (generated by gulp)
      index.html  --> index page
