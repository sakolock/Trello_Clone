var CardFormView = Backbone.View.extend({
  className: 'card-composer',
  template: App.templates.card_form,
  events: {
    "click .js-add-card": "addCard",
    "keypress": "checkForSubmit",
    "click .js-cancel": "destroy"
  },
  checkForSubmit: function(e) {
    var card_title = this.$el.find('.js-card-title').val();

    if (card_title.length && e.which === 13) { this.addCard(); };
  },
  addCard: function(e) {
    if (e) { e.preventDefault(); }
    var self = this;
    var listId = this.listId;
    var card_title = this.$el.find('.js-card-title').val();
    var model = new Card({
      title: card_title,
      list_id: listId
    });

    App.cards.create(model, {
      success: function() {
        App.trigger('card_submitted', [listId, model]);
        App.trigger('card_added_to_list', model);
        self.destroy();
      }
    });
  },
  destroy: function(e) {
    if (e) { e.preventDefault(); }
    var targetElement = $('[data-board-list-id=' + this.listId + '] .list-cards');

    $(targetElement).next('a').removeClass('hide');
    this.remove();
  },
  render: function() {
    var targetElement = $('[data-board-list-id=' + this.listId + '] .list-cards');

    this.$el.html(this.template({
      listId: this.listId
    }));
    $(targetElement).append(this.$el);

    $(targetElement).next('a').addClass('hide');
    $(targetElement).find('textarea').focus();
  },
  initialize: function(options) {
    this.listId = options.listId;
    this.render();
  }
});