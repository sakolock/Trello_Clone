var CardsCollection = Backbone.Collection.extend({
  model: Card,
  url: '/cards',
  destroyCard: function(model) {
    var self = this;
    var data = model.toJSON();
    var id = model.get('id');
    var listId = model.get('list_id');

    $.ajax({
      url: '/cards',
      type: 'delete',
      data: data,
      success: function(json) {
        console.log('deleted!');
        self.trigger('remove_card_from_list', [id, listId]);
        self.trigger('card_destroyed', id);
      }
    });
  },
  copyCardInList: function(args) {
    var card = args[0].toJSON();
    var list = args[1];
    var listId = list.get('id');
    var data = {};
    var model;

    for (prop in card) {
      if (prop !== 'id' && prop !== 'list_id') {
        data[prop] = card[prop];
      }
    }
    data.list_id = listId;

    model = this.create(data, {
      success: function() {
        console.log(model.get('id'));
        App.trigger('card_submitted', model);
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  copyCardsToList: function(args) {
    var self = this;
    var cards = args[0];
    var list = args[1];

    cards.forEach(function(card) {
      self.copyCardInList([card, list]);
    });
  },
  destroyListCards: function(listId) {
    var self = this;
    var cards = this.where({ list_id: listId });

    cards.forEach(function(model) {
      self.destroyCard(model);
    })
  },
  moveAllCardsFromList: function(args) {
    var oldList = args[0];
    var newList = args[1];
    var cards = oldList.get('card_ids');
    var newListId = newList.get('id');
    var newListCards = newList.get('card_ids');
    var cardIds = cards.map(function(card) {
      return card.card_id;
    });

    cardIds.forEach(function(id) {
      var newPos = newList.get('card_ids').length;
      var card = App.cards.get(id);
      var cardInList = { card_id: id, position: newPos };
      
      card.save({ list_id: newListId });
      newListCards.push(cardInList);
    });

    newList.save({ card_ids: newListCards });
    this.trigger('list_updated', oldList);
    this.trigger('list_updated', newList);
  },
  initialize: function() {
    // this.on('destroying_list', this.destroyListCards.bind(this));
    this.listenTo(App.lists, 'destroying_list', this.destroyListCards.bind(this));
    this.listenTo(App.lists, 'copy_cards', this.copyCardsToList.bind(this));
  }
});