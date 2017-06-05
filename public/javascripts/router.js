var router = new (Backbone.Router.extend({
  routes: {
    "lists/:list_name/cards/:id": "renderCardDetails"
  },
  index: function() {
    this.navigate('/');
    App.renderIndex();
    App.$overlay.removeClass('show');
  },
  renderCardDetails: function(list_name, id) {
    var model = App.cards.findWhere({ id: parseInt(id) });
    var listName = list_name;
    var labels = {
      "labels": model.getLabelInformation()
    };

    model.detailsView = new CardDetailsView({
      model: model,
      listName: listName,
      labels: labels
    });
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