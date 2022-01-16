# GitHub-Sample2

<!-- ABOUT THE PROJECT -->
## About The Project

Sample POC, gitHub repository search web application

### Built With

* [Angular](https://angular.io/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Fomantic-ui](https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.5/dist/semantic.min.css")
* [RxJs](https://rxjs.dev/)

### Other third party packages/tools used
* [ngx-countdown](https://cipchk.github.io/ngx-countdown/#/) - Used to display a countDown timer, when gitHub search api reaches request limit

* [Heroku](https://dashboard.heroku.com/login) - Used to deploy application

* [GitHub search-repository api](https://docs.github.com/en/rest/reference/search#search-repositories)
-NOTE - The free non-auth version of the api only allows, a max of 10 requests per 1 min.



## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
Things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g

### Installation

_Below is steps to run project locally

1. Clone the repo
   ```sh
   git clone https://github.com/BrendanBurger/GitHub-Sample2/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application locally
   ```sh
   npm start


### Deployment
* Deployed at http://github-search-brendan.herokuapp.com/


### Could use work
Areas that could use improvements, if more time

* Testing - Lacking unit test coverage, began to write a unit test for services.
* Styling - The stlying overall could use improvements, layout of page could be much better.
* Searching/Sorting features - Implemented only a couple (MVP)sorting features, could be expanded to more options.
* Error Handliing - Only implemented logic to handle gitHub-search-api request limit, could be expanded on via interceptors
* Search Results View - Search results view to be enhanced to show within a table, with more info per Result
