var HeaderView = Backbone.View.extend({
  tagName: 'nav',
  template: App.templates.header,
  events: {
    "keyup .header-search-input": "renderResults",
    "click .js-search-close": "destroySearchResults"
  },
  showExitSearchIcon: function() {
    $('.js-search-icon').hide();
    $('.js-search-close').removeClass('hide');
  },
  showStartSearchIcon: function() {
    $('.js-search-icon').show();
    $('.js-search-close').addClass('hide');
  },
  destroySearchResults: function(e) {
    if (e) { e.preventDefault(); }

    App.board.searchView.remove();
    this.showStartSearchIcon();
  },
  renderResults: function(e) {
    e.preventDefault();
    var searchFilter = $('.header-search-input').val();

    if (App.board.searchView) {
      this.destroySearchResults();
    }
    if (!searchFilter) { return; }

    App.board.searchView = new SearchView({
      searchFilter: searchFilter
    });
    this.showExitSearchIcon();
  },
  render: function() {
    this.$el.html(this.template());
    App.$header.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})