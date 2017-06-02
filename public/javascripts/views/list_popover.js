var ListPopoverView = Backbone.View.extend({
  className: 'pop-over is-shown',
  template: App.templates.list_popover,
  optionsTemplate: App.templates.select_options,
  namesListTemplate: App.templates.list_item_template,
  attributes: {
    "style": "position: absolute; top: 0px; left: 270px;"
  },
  events: {
    "click .js-close-list": "destroyList",
    "click .icon-close": "destroy",
    "click li .js-add-card": "showCardTextarea",
    "click li .js-copy-list": "showCopyListForm",
    "click li .js-move-list": "showMoveListForm",
    "click a.icon-back": "showPopOverMainList",
    "submit .pop-over-copy-list": "copyList",
    "change .js-select-list-pos": "selectNewListPosition",
    "click .js-commit-position": "moveList", // need to fix
    "click .js-list-subscribe": "updateSubscriptionStatus",
    "click .js-move-cards": "showMoveAllCardsList",
    "click #moveAllCards .js-select-list": "moveAllCards", 
    "click .js-archive-cards": "showArchiveAllCardsWarning",
    "click .js-confirm.full.negate": "archiveAllCards"
  },
  showCardTextarea: function(e) {
    e.preventDefault();

    this.model.cardForm = new CardFormView(this.model);
  },
  showBackIcon: function() {
    $('a.icon-back').show();
  },
  hideBackIcon: function() {
    $('a.icon-back').hide();
  },
  showPopOverMainList: function(e) {
    e.preventDefault();

    this.hideCurrentContent();
    this.hideBackIcon();
    this.updateHeaderText('List Actions');
    $('.pop-over-content > div').eq(0).show();
  },
  showCopyListForm: function(e) {
    e.preventDefault();

    this.hideCurrentContent();
    this.showBackIcon();
    this.updateHeaderText('Copy List');
    $('.pop-over-copy-list').show();
  },
  showMoveListForm: function(e) {
    e.preventDefault();

    this.showBackIcon();
    this.hideCurrentContent();
    this.updateHeaderText('Move List');
    $('.pop-over-move-list').show();
  },
  showMoveAllCardsList: function(e) {
    e.preventDefault();

    this.showBackIcon();
    this.hideCurrentContent();
    this.updateHeaderText('Move All Cards in List');
    $('.pop-over-move-cards').show();
    this.renderMoveCardsList();
  },
  showArchiveAllCardsWarning: function(e) {
    e.preventDefault();

    this.showBackIcon();
    this.hideCurrentContent();
    this.updateHeaderText('Move All Cards in List');
    $('.pop-over-archive-card-warning').show();
  },
  updateHeaderText: function(text) {
    $('.pop-over-header-title').text(text);
  },
  copyList: function(e) {
    e.preventDefault();
    var list = this.model;
    var copyName = $('.pop-over-copy-list textarea').val();
    var data = {
      name: copyName
    }

    App.trigger('copy_list', [data, list]);
    this.destroy();
  },
  updateListPosition: function() {
    var newPosition = $('.js-select-list-pos').val();
    $('.js-pos-value').text(newPosition);
  },
  selectNewListPosition: function(e) {
    var selected = $(e.currentTarget).val();
    console.log(selected);
    $('.value.js-pos-value').text(selected);
  },
  moveList: function(e) {
    e.preventDefault();
    var newPos = parseInt($('.value.js-pos-value').text());

    this.model.trigger('move_list', newPos);
    this.destroy();
  },
  updateSubscriptionStatus: function(e) {
    e.preventDefault();
    var self = this;
    var status = !this.model.get('subscribed');

    this.model.save({ subscribed: status }, {
      success: function() {
        self.setSubscriptionFlag();
      }
    });
  },
  setSubscriptionFlag: function() {
    var subscriptionLink = $('.js-list-subscribe');
    if (!$(subscriptionLink).find('span.icon-check').length) {
      $(subscriptionLink).append('<span class="icon-sm icon-check" />');
    } else {
      $(subscriptionLink).find('span').remove();
    }
  },
  moveAllCards: function(e) {
    e.preventDefault();
    var selected = $(e.currentTarget).attr('name');
    var oldList = this.model;
    var newList = App.lists.findWhere({ name: selected });

    App.trigger('move_all_cards', [oldList, newList]);
  },
  hideCurrentContent: function() {
    $('.pop-over-content > div').hide();
  },
  destroy: function() {
    this.remove();
  },
  destroyList: function() {
    App.trigger('destroy_list', this.model);
    this.model.view.remove();
    this.destroy();
  },
  archiveAllCards: function(e) {
    e.preventDefault();
    var id = this.model.get('id');

    App.trigger('archive_all_cards', id);
    this.destroy();
  },
  getListNames: function() {
    var listName = this.model.get('name');
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
  getListPositions: function() {
    var modelPosition = this.model.get('position');
    var positions = App.lists.pluck('position');
    var allPositions = [];

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

    allPositions = _.sortBy(allPositions, 'value');

    return { options: allPositions };
  },
  render: function() {
    var targetElement = $('[data-board-list-id=' + this.model.get('id') + ']');
    var name = this.model.get('name');
    var position = this.model.get('position');
    var subscribed = this.model.get('subscribed');
    var domPositions = {
      "positions": App.board.getDomPositions()
    };
    var listNames = {
      "names": App.board.getDomListNames()
    };
    var listLength = $('.droppable-list').length;

    this.$el.html(this.template({
      name: name,
      position: position,
      subscribed: subscribed
    }));
    $(targetElement).append(this.$el);

    this.renderListPositions();
  },
  renderListPositions: function() {
    $('#listPositions').html(this.optionsTemplate(this.getListPositions()));
  },
  renderListNames: function() {
    $('#listNames optgroup').html(this.optionsTemplate(this.getListNames()));
  },
  renderMoveCardsList: function() {
    $('#moveAllCards').html(this.namesListTemplate(this.getListNames()))
  },
  initialize: function() {
    this.render();
  }
});