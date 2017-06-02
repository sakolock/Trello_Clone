var List = Backbone.Model.extend({
  defaults: {
    card_ids: [],
    subscribed: false
  },
  addCard: function(card) {
    var listId = card.get('list_id');

    this.updateCardsInListFromData(list);
  },
  removeCardFromList: function(listId, cardId) {
    var containingList = this.get(listId);
    var listCardIds = containingList.get('card_ids');
    
    listCardIds = listCardIds.filter(function(card) {
      return card.id !== cardId;
    });
    containingList.save({ card_ids: listCardIds });
  },
  updateCardsInListFromData: function() {
    var cards = App.cards.where({ list_id: this.get('id') });
    var cardsObjArray = _.map(cards, function(card, idx) {
      return {
        card_id: $(card).attr('id'),
        position: idx
      };
    });
    list.save({ card_ids: cardsObjArray });
  },
  getCardPositions: function() {
    var card_ids = this.model.pluck('card_ids');
    return card_ids.map(function(card) {
      return card.position;
    });
  }
});