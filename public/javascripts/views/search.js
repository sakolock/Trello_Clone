var SearchView = Backbone.View.extend({
  template: App.templates.search_popover,
  searchResultsTemplate: App.templates.search_results,
  events: {
    "click .js-card-name": "navigateToCardDetails",
    "click .search-result-card-details-name": "navigateToCardDetails"
  },
  showSearchDropdown: function(e) {
    e.preventDefault();
    var searchFilter = $('.header-search-input').val();

    if (!searchFilter) {
      this.hideSearchDropdown();
    }

    App.$header.after(this.searchTemplate);
    this.renderResults(searchFilter);
    this.showExitSearchIcon();
  },
  renderResults: function() {
    var results = App.board.getSearchResultsCards(this.searchFilter);

    console.log(results);
    $('#searchResults').html(this.searchResultsTemplate({
      results: results
    }));
    $('.mod-search-over').show();
  },
  hideSearchDropdown: function() {
    console.log(this.$el);
    this.$el.remove();
    $('.mod-search-over').show();
  },
  navigateToCardDetails: function(e) {
    e.preventDefault();
    var cardId = $(e.currentTarget).attr('data-card-id');
    var listName = $(e.currentTarget).attr('data-list-name');
    var card = App.cards.get(cardId);
    var cardTitle = card.get('title');

    new CardDetailsView({
      model: card
    });
    router.navigate('/lists/' + listName + '/cards/' + cardTitle, {trigger: true});
    this.destroy();
  },
  destroy: function(e) {
    if (e) e.preventDefault();

    $('.mod-search-over').show();
    this.remove();
  },
  render: function() {
    this.$el.html(this.template);
    $('#header').after(this.$el);
    this.renderResults();
  },
  initialize: function(options) {
    this.searchFilter = options.searchFilter;
    this.render();
  }
});