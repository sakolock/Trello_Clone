var CardCopyPopover = Backbone.View.extend({
  template: App.templates.card_copy_popover,
  optionsTemplate: App.templates.select_options,
  events: {
    "click .pop-over-header-close-btn": "destroy",
    "change #copyListNames": "selectNewList",
    "change #copyCardPositions": "selectNewPosition",
    "click .js-submit": "createCard"
  },
  destroy: function(e) {
    if (e) { e.preventDefault(); }

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
  renderCardPositions: function() {
    var list = App.lists.get(this.model.get('list_id'));
    var positions = App.lists.pluck('position');
    var allPositions = [];
    var domPositions;

    positions.forEach(function(p) {
      var position = {
        selected: false,
        value: p
      };

      if (p === modelPosition) {
        position.selected = true;
      };
      allPositions.push(position);
    });

    domPositions = {
      "options": allPositions
    };

    $('#listPositions').html(this.optionsTemplate(domPositions));
  },
  renderListNames: function() {
    $('#copyListNames').html(this.optionsTemplate(this.getListNames()));
  },
  getCardPositions: function(list) {
    var list = App.lists.get(list);
    return list.get('card_ids').map(function(card) {
      return card.position;
    });
  },
  placeContentBlock: function() {
    this.$el.find('.quick-card-editor-card').css({
      top: this.y - 20,
      right: this.x - 20
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
  createCard: function(e) {
    e.preventDefault();
    var self = this;
    var listName = $('#copyListNames').val();
    var list = App.lists.findWhere({ name: listName });
    var listId = list.get('id');
    var title = $('textarea[name=name]').val();
    var position = $('#copyCardPositions').val();
    var data = {
      title: title,
      list_id: listId
    };
    var model;

    model = App.cards.create(data, {
      success: function() {
        self.model.trigger('card_copied');
        // App.trigger('add_card_into_position', [listId, model, position]);
        console.log(listId);
        console.log(model);
        console.log(position);
        self.destroy();
      }
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

    $('#copyCardPositions').html(this.optionsTemplate(domPositions));
  },
  render: function() {
    var title = this.model.get('title');
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