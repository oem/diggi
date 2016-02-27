
## DEPLOY TO HEROKU

After you added heroku as remote (see the heroku documentation) you will need to add the ruby and node.js buildpacks for heroku.
Everything else is already in place.

`heroku buildpacks:add heroku/ruby`
`heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs`

`git push heroku master`

