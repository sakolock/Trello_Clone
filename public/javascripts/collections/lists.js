var ListsCollection = Backbone.Collection.extend({
  model: List,
  url: '/lists',
  comparator: 'position',
  createList: function(data) {
    var self = this;
    var model;

    model = this.create(data, {
      success: function() {
        self.trigger('new_list_created', model);
      }
    });
  },
  destroyList: function(model) {
    var self = this;
    var data = model.toJSON();
    var id = model.get('id');

    self.trigger('destroying_list', id);

    $.ajax({
      url: '/lists',
      type: 'delete',
      data: data,
      success: function(json) {
        self.trigger('list_destroyed', id);
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  copyList: function(args) {
    var self = this;
    var data = args[0];
    var list = args[1];
    var listId = list.get('id');
    var model;
    var cards = App.cards.where({ list_id: listId });;

    model = this.create(data, {
      success: function() {
        self.trigger('copy_cards', [cards, model]);        
      },
      error: function(err) {
        console.log(err);
      }
    });
  },
  addCardToList: function(args) {
    console.log(args[0]);
    var listId = args[0];
    var list = App.lists.get(args[0]);
    var cardsLength = list.get('card_ids').length;

    args.push(cardsLength);
    this.addCardIntoPosition(args);
  },
  addCardIntoPosition: function(args) {
    var listId = args[0];
    var model = args[1];
    var cardId = model.get('id');
    var position = args[2];
    var list = App.lists.get(listId);
    var cards = list.get('card_ids');

    _.sortBy(cards, 'position');

    cards.splice(position, 0, {
      card_id: cardId,
      position: parseInt(position)
    });

    _.each(cards, function(card, idx) {
      card.position = idx;
    });

    list.save({ card_ids: cards }, {
      success: function() {
        App.trigger('update_list_from_dom', list);
      }
    });
  },
  removeCardFromList: function(args) {
    var cardId = args[0];
    var listId = args[1];
    var containingList = App.lists.get(listId);
    var listCardIds = containingList.get('card_ids');
    
    listCardIds = listCardIds.filter(function(card) {
      return card.card_id !== cardId;
    });

    containingList.save({ card_ids: listCardIds });
  },
  // updateCardsInListFromData: function(list) {
  //   var cards = list.get('card_ids');
  //   var cardsObjArray = _.map(cards, function(card, idx) {
  //     return {
  //       card_id: $(card).attr('id'),
  //       position: idx
  //     };
  //   });
  //   list.save({ card_ids: cardsObjArray });
  // }
});