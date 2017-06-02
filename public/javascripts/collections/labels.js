var LabelsCollection = Backbone.Collection.extend({
  model: Label,
  url: '/labels'
});