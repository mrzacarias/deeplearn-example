# Deeplearn Node example

Basic deeplearn.js example running on node.js

## Docker Setup ##

1. Clone the repo
1. Build your container: `docker build -t deeplearn_example .`
1. Run: `docker run -it deeplearn_example yarn start`

```
yarn run v1.3.2
$ yarn build && node dist/bundle.js
$ browserify main.ts -p [tsify] -o dist/bundle.js
Option 1: With async/await. Float32Array [ 6, 5, 4 ]
Option 3: Synchronous download of data. Float32Array [ 6, 5, 4 ]
Option 2: With a Promise. Float32Array [ 6, 5, 4 ]
Done in 3.61s.
```
