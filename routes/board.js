// var path = require('path');
// var _ = require('underscore');
// var Board = require(path.resolve(path.dirname(__dirname) + '/modules/board'));
// var Lists = require(path.resolve(path.dirname(__dirname) + '/modules/lists'));
// var Cards = require(path.resolve(path.dirname(__dirname) + '/modules/cards'));

module.exports = function(router) {
//   router.route('/board').get(function(req, res) {
//     res.json({
//       lists: Lists.get(),
//       cards: Cards.get()
//     });
//   })
  // .post(function(req, res) {
  //   var album = req.body;
  //   var albums = Albums.get();

  //   album.id = Albums.getLastId() + 1;
  //   albums.push(album);
  //   Albums.set(albums);
  //   console.log(albums);
  //   res.json(album);
  // }).put(function(req, res) {
  //   var albums = Albums.get();
  //   var current_album = _(albums).findWhere({ id: parseInt(req.body.id) });

  //   _.extend(current_album, req.body);
  //   Albums.set(albums);
  //   res.json(current_album);
  // }).delete(function(req, res) {
  //   var albums = _(Albums.get()).reject(function(a) {
  //     return a.id === parseInt(req.body.id);
  //   });
  //   Albums.set(albums);
  //   res.status(200).end();
  // });
};