var router = new (Backbone.Router.extend({
  routes: {
    "list/:list_name/cards/:id": "renderCardDetails"
  },
  index: function() {
    this.navigate('/');
    App.renderIndex();
  },
  renderCardDetails: function(id) {
    
  },
  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});