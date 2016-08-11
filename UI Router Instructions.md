##Setting Up an Angular 1 project ui.router

Assuming that you already have a working knowledge of javascript, Angular 1, and routing -- this document will walk you through setting up ui router with a basic angular app.
(bonus points if you have used routing in angular, i.e. ngRoute, to see the difference)

To view this demo project on your computer:
* clone this repo (fork if you like)
* cd into the folder
* run `python -m SimpleHTTPServer 8000`
* go to `http://localhost:8000/#/` in your browser

Using a simple app structure:
-- index.html
-- app.js
-- home.html
-- notHome.html

**Outline of index.html file**

`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title></title>
  </head>
  <body>
    <div ng-app="app">
      <button>Home</button>
      <button>Not Home</button>
      <div ui-view></div>
    </div>

    <!-- JavaScript for: jQuery, angular, materialize, and angular-materialize. All of which are needed for Angular + Materialize -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>

    <!-- UI Router -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js"></script>
    <!-- Your Scripts -->
    <script src="app.js"></script>

  </body>
</html>`

**Then you need to have at least one view to utilize UI Router with***
In this case the view is called home.html (and using [Harry Potter Ipsum](http://www.christinachern.com/hpipsum/))

**Outline of home.html file**

`<div class="container">
  <p>
  Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.
  </p>
</div>`

**Outline of NotHome.html**
`<div class="container">
  <h2>Not Home</h2>
  <p>
    Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.
  </p>
</div>`

**Outline of an app.js file**

`angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
  }])`


  **References for this article**
  [Angularjs Tutorial for Beginners - learn Angular.js using UI-Router by LearnCode.academy](https://www.youtube.com/watch?v=QETUuZ27N0w&feature=youtu.be&noredirect=1)
