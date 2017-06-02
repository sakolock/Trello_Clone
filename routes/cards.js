var path = require('path');
var _ = require('underscore');
var Cards = require(path.resolve(path.dirname(__dirname) + '/modules/cards'));

module.exports = function(router) {
  router.route('/cards').get(function(req, res, next) {
    res.json({
      cards: Cards.get(),
    });
  }).post(function(req, res) {
    var card = req.body;
    var cards = Cards.get();

    card.id = Cards.getLastId() + 1;
    cards.push(card);
    Cards.set(cards);
    res.json(card);
  }).put(function(req, res) {
    var cards = Cards.get();
    var card_data = JSON.parse(req.body.data)
    var current_card = _.findWhere(cards, { id: parseInt(card_data.id) });

    _.extend(current_card, card_data);
    Cards.update(cards);
    res.json(current_card);
  }).delete(function(req, res) {
    var cards = _.reject(Cards.get(), function(a) {
      return a.id === parseInt(req.body.id);
    });
    Cards.update(cards);
    res.status(200).end();
  });

  router.route('/cards/:id').put(function(req, res, next) {
    var cards = Cards.get();
    var card_data = req.body
    var current_card = _.findWhere(cards, { id: card_data.id });

    _.extend(current_card, card_data);
    Cards.update(cards);
    res.json(current_card);
    res.status(200).end();
  }).delete(function(req, res) {
    var cards = _.reject(Cards.get(), function(a) {
      return a.id === parseInt(req.body.id);
    });
    Cards.update(cards);
    res.status(200).end();
  });
};