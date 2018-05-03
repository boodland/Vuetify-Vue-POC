# Vuetify-Vue-POC

> Proof Of Concept of a [Vue](https://vuejs.org/) app using [Vuetify](https://next.vuetifyjs.com/en/) CSS framework

The intent of this project is just to evaluate the different features/components of both frameworks. Any task related with testing, deploying, UX or any other development practice is out of the scope.

This project was generated with [Vue CLI](https://github.com/vuejs/vue-cli) version 2.9.2. using pwa template.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Notes on client-side routing

GitHub Pages/docs doesn’t support routers that use the HTML5 `pushState` history API under the hood. This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here is a solution:

* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).
