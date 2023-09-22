# This is my porfolio repository

## Reccord of deployment of github pages
1. set `development/production` mode
 - (1) development:
    `package.json`: remove `"homepage": ""`
 - (2) production: 
    `package.json`: add `"homepage": ""`
2. git flow
```
$ git add .
$ git commit -m ""
$ git push origin
```
3. delete `gh-pages` branch on the remote git branch
```
$ git push origin -d gh-pages
```

4. deployment
```
$ npm run deploy
```