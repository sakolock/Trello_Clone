var path = require('path');
// var Board = require(path.resolve(path.dirname(__dirname) + '/modules/board'));
var Lists = require(path.resolve(path.dirname(__dirname) + '/modules/lists'));
var Cards = require(path.resolve(path.dirname(__dirname) + '/modules/cards'));
var Labels = require(path.resolve(path.dirname(__dirname) + '/modules/labels'));
// var Comments = require(path.resolve(path.dirname(__dirname) + '/modules/comments'));

// removed Lists and BoardLists because I don't want to render them from the start

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      boardLists: Lists.get(),
      boardCards: Cards.get(),
      boardLabels: Labels.get()
      // boardComments: Comments.get()
    });
  });
};