var Board = Backbone.Model.extend({
  getDomPositions: function() {
    return App.lists.pluck('position');
  },
  getDomListNames: function() {
    return App.lists.pluck('name');
  },
  getSearchResultsCards: function(query) {
    var cards = App.cards.toJSON();
    var re = new RegExp(query, 'gi')

    var results = _.filter(cards, function(card) {
      var title = card.title;
      var description = card.description;

      return title.match(re) || description.match(re);
    });

    return results;
  }
});