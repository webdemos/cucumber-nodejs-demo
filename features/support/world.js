// /**
//  * Created by dachao.chen on 12/27/2016.
//  */
// require('chromedriver');
// var seleniumWebdriver = require('selenium-webdriver');
// var {defineSupportCode} = require('cucumber');
//
// function CustomWorld() {
//   this.driver = new seleniumWebdriver.Builder()
//     .forBrowser('chrome')
//     .build();
// }
//
// defineSupportCode(function({setWorldConstructor}) {
//   setWorldConstructor(CustomWorld)
// });


/**
 * @function
 *
 * world is a constructor function
 * with utility properties,
 * destined to be used in step definitions
 */
var cwd = process.cwd();
var path = require('path');

var Calculator = require(path.join(cwd, 'lib', 'calculator'));

module.exports = function() {
  this.calculator = new Calculator();
  this.expect = require('chai').expect;
};