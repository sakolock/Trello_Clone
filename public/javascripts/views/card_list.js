var CardListView = Backbone.View.extend({
  className: 'list-card droppable-card',
  template: App.templates.card_list,
  events: {
    "click .js-open-quick-card-editor": "showQuickEditor"
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
      labels: this.labels,
      list_id: listId
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