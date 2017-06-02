var path = require('path');
var _ = require('underscore');
var Labels = require(path.resolve(path.dirname(__dirname) + '/modules/labels'));

module.exports = function(router) {
  router.route('/labels').get(function(req, res, next) {
    res.json({
      labels: Labels.get(),
    });
  }).post(function(req, res) {
    var label = req.body;
    var labels = Labels.get();

    label.id = Labels.getLastId() + 1;
    labels.push(label);
    Labels.set(labels);
    res.json(label);
  }).put(function(req, res) {
    var labels = Labels.get();
    var label_data = JSON.parse(req.body.data)
    var current_label = _.findWhere(labels, { id: parseInt(label_data.id) });

    _.extend(current_label, label_data);
    Labels.update(labels);
    res.json(current_label);
  }).delete(function(req, res) {
    var labels = _.reject(Labels.get(), function(a) {
      return a.id === parseInt(req.body.id);
    });
    Labels.update(labels);
    res.status(200).end();
  });

  router.route('/labels/:id').put(function(req, res, next) {
    var labels = Labels.get();
    var label_data = req.body
    var current_label = _.findWhere(labels, { id: label_data.id });

    _.extend(current_label, label_data);
    Labels.update(labels);
    res.json(current_label);
    res.status(200).end();
  }).delete(function(req, res) {
    var labels = _.reject(Labels.get(), function(a) {
      return a.id === parseInt(req.body.id);
    });
    Labels.update(labels);
    res.status(200).end();
  });
};