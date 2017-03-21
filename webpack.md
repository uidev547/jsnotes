## installation
npm install webpack -g

## setup
entry.js
```
document.write("It works.");
```

index.html
```
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```
webpack ./entry.js bundle.js

## Adding loaders
style.css
```
body {
    background: yellow;
}
```

update **entry.js**
require("!style!css!./style.css");
document.write('It works.');

## BINDING LOADERS

update **entry.js**
require("!./style.css");
document.write('It works.');

webpack ./entry.js bundle.js --module-bind 'css=style!css'

## A CONFIG FILE
webpack.config.js
```
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

run: webpack

## A PRETTIER OUTPUT and watch
webpack --progress --colors --watch


## DEVELOPMENT SERVER
npm install webpack-dev-server -g
webpack-dev-server --progress --colors

