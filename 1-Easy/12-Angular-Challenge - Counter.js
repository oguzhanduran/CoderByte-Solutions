// Front-end Challenge
// We provided some simple AngularJS template code. Change the title to "AngularJS Counter" and your goal is to modify the function so that the counter correctly displays and it increments by one whenever the button is pressed. Do not worry about modifying the HTML template to change the display, only try and get the counter to work.

// You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.

import angular from "angular";

angular.module("myApp", []).controller("myController", function() {

  // change below to get counter working
  let vm = this;
  vm.title = "AngularJS Counter";
  vm.buttonClickCount = 0;
  vm.increaseCount = function() {
  this.buttonClickCount = this.buttonClickCount + 1;
}

});