# diggi

## TL;DR

diggi is basically a thoroughly structured skeleton angular.js app that includes a lot of useful css to help you quickly build rich webapps.
The resulting files are just static files that can be hosted by about any technology you care to choose for the task.
The source files are being compiled to a webapp via grunt.

## Prerequesites

Please check the online documentations on how to install these prerequesites on your platform.

- node.js
- npm
- ruby

## Using diggi

## Development

## DEPLOY TO HEROKU

After you added heroku as remote (see the heroku documentation) you will need to add the ruby and node.js buildpacks for heroku.
Everything else is already in place.

`heroku buildpacks:add heroku/ruby`

`heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs`

`git push heroku master`

