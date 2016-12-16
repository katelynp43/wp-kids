# Front-end Task Runner

## Required Software

1. Latest version of [NodeJS](http://nodejs.org/) (min v0.12.2)
2. Windows only - [GitBash](http://git-scm.com/downloads) (used instead of cmd)
3. Windows only - [GraphicsMagick](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.21/)

## Install the dependencies

Use GitBash on Windows or Terminal on OSX / Linux in the theme directory.

`$ npm install --global gulp && npm install`

## Watching for changes

Use this command when you start work on the project: 

`$ gulp`

This will start a process that watches for changes on the source files in the theme(e.g. postcss, templates, etc), and compile the bundle for you. 

## Build the app

You should build once you're done with the changes. This will take care of time consuming tasks like optimizing the images and creating sprites. 

$ `gulp build` 
