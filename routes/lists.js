var path = require('path');
var _ = require('underscore');
var Lists = require(path.resolve(path.dirname(__dirname) + '/modules/lists'));

module.exports = function(router) {
  router.route('/lists').get(function(req, res, next) {
    res.json({
      lists: Lists.get(),
    });
  }).post(function(req, res, next) {
    var list = req.body;
    var lists = Lists.get();

    list.id = Lists.getLastId() + 1;
    list.position = Lists.getLastPosition() + 1; // ensures we can render by position, will not align with total
    lists.push(list);
    Lists.set(lists);
    res.json(list);
  }).put(function(req, res, next) {
    var lists = Lists.get();
    var list_data = JSON.parse(req.body.data)
    var current_list = _.findWhere(lists, { id: parseInt(list_data.id) });

    _.extend(current_list, list_data);
    Lists.update(lists);
    res.json(current_list);
  }).delete(function(req, res) {
    var lists = _.reject(Lists.get(), function(l) {
      return l.id === parseInt(req.body.id);
    });
    Lists.update(lists);
    res.status(200).end();
  });

  router.route('/lists/:id').put(function(req, res, next) {
    var lists = Lists.get();
    var list_data = req.body
    var current_list = _.findWhere(lists, { id: list_data.id });

    _.extend(current_list, list_data);
    Lists.update(lists);
    res.json(current_list);
    res.status(200).end();
  }).delete(function(req, res) {
    var lists = _.reject(Lists.get(), function(l) {
      return l.id === parseInt(req.body.id);
    });
    Lists.update(lists);
    res.status(200).end();
  });
};