var Card = Backbone.Model.extend({
  defaults: {
    label_ids: [],
    comments: [],
    description: '',
    subscribed: false,
    dueDate: ''
  },
  getListName: function() {
    var list = App.lists.findWhere({ id: this.get('list_id') });
    return list.get('name');
  },
  getLabelInformation: function() {
    var labelIds = this.get('label_ids');
    var labels = [];

    labelIds.forEach(function(labelId) {
      var label = App.labels.get(labelId);
      labels.push(label.toJSON());
    });

    this.trigger('labels_updated', labels);
    return labels;
  },
  initalize: function() {
    this.on(this.popoverView, 'labels_updated', this.getLabelInformation.bind(this));
    this.on(this.model, 'destroy_card', this.destroy.bind(this));
  }
});