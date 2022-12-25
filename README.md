## 1. Create a new folder. You could use the following commands to create a new folder. Once the folder is created navigate to the folder using the cd command.
> mkdir <your_folder_name> 
___
<br>

## 2. Create a new package.json file
> npm init -y

or

> npm init (for manual version, author, licence, etc...)
___
<br>

## 3. Create folder 'src' for your code.
> mkdir src
___
<br>

## 4. Create in src folder:
 - Switch to directory
    > cd <your_folder_named>

 - Page which is rendered and visible to the user *`index.html`*
    > touch index.js

 - Entry point for our application *`index.js`*
    > touch index.html
___
<br>

## 5. Add the following content in *`index.html`*

\<!DOCTYPE html>

\<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React with Webpack and Babel</title>
    </head>
    <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">
            <!-- This div is where our app will run -->
        </div>
    </body>
\</html>
___
<br>

## 6. Install Webpack
> npm install webpack webpack-cli webpack-dev-server --save-dev

   - webpack - allows to configure app
   - webpack-cli - command line
   - webpack-dev-server - server which helps live reload the broser page on changes

*(dont forget about carets ^ in 
*package.json*

*...*

*"webpack": "^5.75.0",*

*...*

 it will auto updade your packages if newer version exists. So you can remove it to prevent dependency mismappings in future. It's always better to update the versions **manually**)*
---
<br>

7. Add `*webpack.config.js*`
> touch webpack.config.js
---
<br>

`const path = require('path');`

`const HtmlWebpackPlugin = require("html-webpack-plugin");`

`module.exports = {

    entry: path.join(__dirname, "src", "index.js"),

    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },

    mode: process.env.NODE_ENV || "development",

    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },

    devServer: { contentBase: path.join(__dirname, "src") },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};`

 - entry and output: tells our server what has to be compiled and from where. Also tells the server where the compiled version should be outputted.

 - mode: settings to ‘development’ or 'production' when the app is compiled (bundled)

 - resolve: we can import anything from the src folder and node_modules as well.

 - devServer: webpack-dev-server serve out src folder with source files

 - plugins: plugins we need in our app. As of this moment we only need the html-webpack-plugin which injected the index.bundle.js  to our index.html

---
<br>



### Add script command in package.json 

`"scripts": {`

`"start": "./node_modules/pm2/bin/pm2 serve build 3000 --spa"`

`"stop":"./node_modules/pm2/bin/pm2 delete all"`

`"serve": "webpack serve --open --mode development"`

`"dev": "webpack --mode development"`

`"build": "webpack --mode production"`

`}`
---
<br>

8. Adding react  and react-dom as normal dependencies

> npm install react react-dom --save

At this moment in our development, if we were to add React code inside our JS file, Webpack will give us an error. It doesn’t know how to compile React inside the bundle.js file.

This is where Babel comes to our aid. Babel will tell Webpack how to compile our React code.

---
<br>


9. Add a bunch of Babel packages to our app as devDependencies.

>  npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader

- @babel /core: used to compile ES6 and above to ES5.
- @babel /preset-env: determines which transformations or plugins to use and polyfills (i.e it provides modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support.
- @babel /preset-react: compiles the React code into ES5 code.
- babel-loader: a Webpack helper that transforms your JavaScript dependencies with Babel (i.e. will transform the import statements into require ones)
---
<br>

10. Add some styles to the project, as well as have the ability to display images on the webpage.

> npm install style-loader css-loader sass sass-loader less less-loader  mini-css-extract-plugin --save-dev 

- style-loader: will add styles to the DOM (injects a style tag inside the HTML file) and lets us improve styles bundling in dev mode.
- css-loader: lets us import CSS files in our project.
- sass: compiles SCSS files into normal CSS files (Dart version).
- sass-loader: lets us import SCSS files in our project.
- less: compiles LESS files into normal CSS
- less-loader: lets us to import LESS files in out project.
- mini-css-extract-plugin: helps in production mode to extract styles into separete files

---
<br>

## Setup (style, less, sass) loaders:


...
    {

        test: /\.s?css$/i,
        use: [
            argv.mode === 'production' ?
            MiniCssExtractPlugin.loader :
            'style-loader',
            'css-loader',
            'sass-loader'
        ],

    },
    {

        test: /\.less$/i,
        use: [
            argv.mode === 'production' ?
            MiniCssExtractPlugin.loader : 
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    url: true,
                    sourceMap: true,
                }
            },
            {
                loader: 'less-loader',
                options: {
                    sourceMap: true,
                }
            }
        ],

    },
...


---
<br>

11. Add .babelrc which will help us to configure Babel plugin

> touch .babelrc

{
    
    "presets": [
        "@babel/react",
        "@babel/preset-env"
    ]
}

Additional plugins:
   - @babel/preset-env - it helps work with Object Oriented Programming and add crossbrowser polifils for correct render

> npm install --save-dev @babel/preset-env


## Now we need make some changes in webpack.config.js

- setup using babel in webpack modules
- listen for style files for changes

## Add babel-loader to compile jsx in js
...
{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
},
...


<br>

### Add in package.json the settings listed below

"browserslist": [

    "last 2 version",
    "> 0.2%",
    "not dead"
]

---
<br>

12. Add fonts and image loaders with webpack 5 asset loaders

    {

        test: /\.(png|svg|jpg|jpeg|gif)\$/i,
        type: 'asset/resource',

    },
    {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext][query]'
        }

    }

---
<br>

13. Add App.jsx and index.js files with react starter content


`index.js`

    import React from "react";

    import ReactDOM from "react-dom";

    import App from "./App.js";

    import "./scss/main.scss";

    import "./less/main.less";

    const root = ReactDOM.createRoot(
        document.getElementById("root")
    );

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

`App.jsx`



14. **Additianal way of webpack configure with extended file structure 

> https://stackoverflow.com/questions/55678211/using-mini-css-extract-plugin-and-style-loader-together 



# Typescript 

15. Install React for typescript


>npm install typescript

>npm install @types/react @types/react-dom --save-dev

> npm install @babel/preset-typescript --save-dev

## And add @babel/preset-typescript preset in .babelrc

{

    "presets": [
        "@babel/react",
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]  
}

16. Install ts-loader

> npm install -D ts-loader

## Update webpack.config.js with setting below:

{
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ["ts-loader"],
},

## Add resolve extensions for import without extensions
resolve: 

{
            
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
},

17. Update tsconfig.json with the tutor on https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927 

18. Change extensions for main files `App.tsx` and `index.ts`
