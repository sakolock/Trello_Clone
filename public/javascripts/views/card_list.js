var CardListView = Backbone.View.extend({
  className: 'list-card droppable-card',
  template: App.templates.card_list,
  events: {
    "click .list-card-details": "showCardDetails",
    "click .js-open-quick-card-editor": "showQuickEditor"
  },
  showCardDetails: function(e) {
    e.preventDefault();
    var listName = this.list;
    var labels = {
      "labels": this.labels
    };

    this.model.detailsView = new CardDetailsView({
      model: this.model,
      listName: listName,
      labels: labels
    });
    router.navigate('/lists/' + listName + '/cards/' + this.model.get('title'), {trigger: true});
  },
  showQuickEditor: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    this.quickEditorView = new CardQuickEditView({
      model: this.model,
      x: x,
      y: y
    });
  },
  getList: function() {
    this.list = this.model.getListName();
  },
  getLabelInformation: function() {
    this.labels = this.model.getLabelInformation();
  },
  destroy: function() {
    this.remove();
  },
  render: function() {
    var listId = this.model.get('list_id');
    var $list = $('[data-board-list-id=' + listId + '] .card-container');
    var id = this.model.get('id');
    var title = this.model.get('title');
    var description = this.model.get('description');

    this.getLabelInformation();
    this.$el.html(this.template({
      id: id,
      title: title,
      description: description,
      labels: this.labels
    }));
    $list.append(this.$el);
  },
  initialize: function() {
    this.render();
    this.model.view = this;
    this.getList();
    this.on(this.model, 'destroy', this.destroy)
    this.on(this.model, 'updated_list', this.getList.bind(this));
    // this.listenTo(this.model, 'sync', this.render);
  }
});