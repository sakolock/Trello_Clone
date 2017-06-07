var CardMovePopover = Backbone.View.extend({
  template: App.templates.card_move_popover,
  optionsTemplate: App.templates.select_options,
  events: {
    "click .pop-over-header-close-btn": "destroy",
    "change #moveListNames": "selectNewList",
    "change #moveCardPositions": "selectNewPosition",
    "click .js-submit": "moveCard"
  },
  destroy: function(e) {
    if(e) { e.preventDefault(); }

    this.remove();
  },
  getListNames: function() {
    var list = App.lists.get(this.model.get('list_id'));
    var listName = list.get('name');
    var names = App.lists.pluck('name');
    var allNames = [];
    var domNames;

    names.forEach(function(n) {
      var name = {
        selected: false,
        value: n
      };

      if (n === listName) {
        name.selected = true;
      };
      allNames.push(name);
    });
    
    domNames = {
      "options": allNames
    };

    return domNames;
  },
  getCardPositions: function(list) {
    var list = App.lists.get(list);
    return list.get('card_ids').map(function(card) {
      return card.position;
    });
  },
  getListInformation: function() {
    var self = this;
    var cardInList;
    this.listId = this.model.get('list_id');
    this.list = App.lists.get(this.listId);

    cardInList = _.findWhere(this.list.get('card_ids'), function() {
      this.card_id === self.id;
    });

    this.position = cardInList.position;
  },
  selectNewList: function(e) {
    var selected = $(e.currentTarget).val();
    var list = App.lists.findWhere({ name: selected });
    var positions = this.getCardPositions(list);

    $('.js-list-value').text(selected);
    this.renderCardPositions(list, positions);
  },
  selectNewPosition: function(e) {
    var selected = $(e.currentTarget).val();

    $('.js-pos-value').text(selected);
  },
  moveCard: function(e) {
    e.preventDefault();
    var self = this;
    var listName = $('#moveListNames').val();
    var list = App.lists.findWhere({ name: listName });
    var listId = list.get('id');
    var position = $('#moveCardPositions').val();

    this.model.save({ list_id: listId }, {
      success: function() {
        self.model.trigger('card_moved');
        console.log(listId);
        console.log(self.model);
        console.log(position);
        self.destroy();
      }
    });
  },
  placeContentBlock: function() {
    this.$el.find('.quick-card-editor-card').css({
      top: this.y - 20,
      right: this.x - 20
    });
  },
  renderCardPositions: function(list, positions) {
    var allPositions = [];
    var domPositions;

    positions.forEach(function(p) {
      var position = {
        selected: false,
        value: p
      };

      if (p === this.position && list !== this.list) {
        position.selected = true;
      };
      allPositions.push(position);
    });

    if (list !== this.list) {
      allPositions.push({
        selected: true,
        value: allPositions.length || 1,
      });
    }

    domPositions = {
      "options": allPositions
    };

    $('#moveCardPositions').html(this.optionsTemplate(domPositions));
  },
  renderListNames: function() {
    $('#moveListNames').html(this.optionsTemplate(this.getListNames()));
  },
  render: function() {
    var positions = this.getCardPositions(this.list);

    this.$el.html(this.template(this.model.toJSON()));
    App.$overlay.after(this.$el);
    this.renderListNames();
    this.placeContentBlock();
    this.renderCardPositions(this.list, positions);
  },
  initialize: function(options) {
    this.x = options.x;
    this.y = options.y;
    this.getListInformation();
    this.render();
  }
});