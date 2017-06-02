var ListView = Backbone.View.extend({
  className: 'js-list list-wrapper droppable-list',
  template: App.templates.list,
  cardSortKey: 'position',
  events: {
    "click .js-open-card-composer": "showCardTextarea",
    "click .js-open-list-menu": "renderListPopover",
    "click .js-editing-target": "makeHeaderEditable",
    "blur .mod-list-name": "saveHeaderTitle",
  },
  updateCardsInListFromDom: function(list) {
    var self = this;
    var cards = this.$el.find('.list-card-cover');
    var cardsObjArray = this.cards;
    var sortedCards;

    if (this.$el.find('.list-card-cover').length) {
      cardsObjArray = _.map(cards, function(card, idx) {
        var id = parseInt($(card).attr('data-card-id'));

        return {
          card_id: id,
          position: idx
        };
      });
    }

    sortedCards = this.sortCards(cardsObjArray);
    this.model.save({ card_ids: sortedCards });
  },
  updateAssociatedCardsFromData: function() {
    var self = this;
    var cards = App.cards.where({ list_id: this.model.get('id') });
    var currentCards = this.model.get('card_ids');

    _.each(cards, function(card, idx) {
      var cardId = card.get('id');

      if (_.find(currentCards, function(card) { return card.card_id === cardId; })) {
        return;
      } else {
        currentCards.push({
          card_id: cardId,
          position: currentCards.length
        });
      }
    });
    this.model.save({ card_ids: currentCards }, {
      success: function() {
        self.renderListCards();
      }
    });
  },
  makeHeaderEditable: function(e) {
    e.preventDefault();

    this.$headerTextarea.addClass('is-editing').focus().select();
  },
  saveHeaderTitle: function(e) {
    if (e) { e.preventDefault(); }
    var name = this.$el.find('.js-list-name-input').val();
    var data = this.model.set({ name: name });

    this.model.save();
    this.$headerTextarea.removeClass('is-editing');
  },
  showCardTextarea: function(e) {
    if (e) { e.preventDefault(); }
    var listId = this.model.get('id');

    this.cardForm = new CardFormView({
      listId: listId
    });
  },
  hideCardTextarea: function(e) {
    if (e) { e.preventDefault(); }

    this.$el.find('.card-composer').addClass('hide');
    this.$el.find('.js-open-card-composer').removeClass('hide');
  },
  moveList: function(newPos) {
    var currPos = this.model.get('position');
    var droppableListsTarget = $('.droppable-list')[newPos];

    if (newPos > currPos) {
      this.$el.insertAfter($('.droppable-list')[newPos]);
    } else {
      this.$el.insertBefore($('.droppable-list')[newPos]);
    }

    App.trigger('list_dropped', this.$el);
  },
  renderListPopover: function(e) {
    if (e) { e.preventDefault(); }

    this.hideCardTextarea();
    this.popoverView = new ListPopoverView({
      model: this.model
    });
  },
  sortedCards: function() {
    var self = this;
    this.cards = _.sortBy(this.cards, this.cardSortKey);
    return this.cards;
  },
  renderListCards: function() {
    var self = this;

    _.each(self.sortedCards(), function(c) {
      var card = App.cards.findWhere({ id: c.card_id });

      self.renderCardListView(card);
    });
  },
  renderCardListView: function(model) {
    new CardListView({
      model: model
    });
  },
  update: function() {
    var domLists = $('.droppable-list').not('.gu-mirror');
    var domPosition = this.model.get('position');
    var updatedPosition = domLists[domPosition - 1];

    this.$el.html(this.template(this.model.toJSON()));
    $(updatedPosition).before(this.$el);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('#board .js-add-list').before(this.$el);
    console.log('rendered');
    this.updateAssociatedCardsFromData();
    // this.renderListCards();
  },
  destroy: function() {
    this.remove();
  },
  initialize: function() {
    this.cards = this.model.get('card_ids');
    this.render();
    this.model.view = this;
    this.$headerTextarea = this.$el.find('.mod-list-name');
    this.listenTo(this.popoverView, 'destroy', this.destroy.bind(this));
    this.listenTo(this.model, 'move_list', this.moveList.bind(this));
  }
});