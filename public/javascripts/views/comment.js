var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  render: function() {
    this.$el.html(this.model.get('text'));
    $('.js-list-actions').append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});