var App = {
  $header: $('#header'),
  $overlay: $('.window-overlay'),
  templates: JST,
  renderIndex: function() {
    this.board = new Board();
    this.boardView = new BoardView();
    this.renderHeader();
    this.renderBoardLists();
    this.bindEvents();
    this.enableDraggableEvents();
  },
  renderHeader: function() {
    this.header = new HeaderView();
  },
  renderBoardLists: function() {
    this.lists.each(this.renderBoardList.bind(this));
  },
  renderBoardList: function(model) {
    new ListView({
      model: model
    });
  },
  renderCardListView: function(model) {
    new CardListView({
      model: model
    });
  },
  reRenderBoardList: function(model) {
    this.removeListFromPage(model.get('id'));
    this.renderBoardList(model);
  },
  removeListFromPage: function(id) {
    this.lists.findWhere({ id: parseInt(id) }).view.remove();
  },
  removeCardFromPage: function(id) {
    this.cards.findWhere({ id: parseInt(id) }).view.remove();
  },
  updateCardListsFromDom: function() {
    var self = this;

    this.trigger('cards_updated');

    this.lists.each(function(list) {
      self.updateCardsInListFromDom(list);
    });
  },
  updateCardsInListFromDom: function(model) {
    var listId = model.get('id');
    console.log(listId);
    var cards = $('[data-board-list-id=' + listId + '] .list-card-cover');
    var cardIds = [];
    console.log(model.toJSON());
    console.log(cards);

    var cardsObjArray = _.map(cards, function(card, idx) {
      console.log(parseInt($(card).attr('data-card-id')));
      console.log(idx);
      return {
        card_id: parseInt($(card).attr('data-card-id')),
        position: idx
      };
    });

    console.log(cardsObjArray);
    model.save({ card_ids: cardsObjArray }, {
      success: function() {
        console.log(cardsObjArray);
      }
    });
  },
  enableDraggableEvents: function() {
    var containers = [$('#board .list-container'), $('#board .card-container')];

    this.drake = dragula(containers, {
      isContainer: function (el) {
        return el.classList.contains('list-container') ||
        el.classList.contains('card-container');
      },
      accepts: function (el, target, source, sibling) {
        var acceptable = function() {
          if (el.classList.contains('droppable-card')) {
            return target.classList.contains('card-container');
          } else if (el.classList.contains('droppable-list')) {
            return target.classList.contains('list-container');
          }
        }
        return acceptable();
      },
      moves: function(el) {
        var movable = function() {
          return el.classList.contains('droppable-card') || el.classList.contains('droppable-list');
        }
        return movable;
      },
    });
    
    this.setupDropListeners();
  },
  setupDropListeners: function() {
    var self = this;

    this.drake.on('drop', function(el, target, source, sibling) {
      if ($(el).hasClass('droppable-card')) {
        self.trigger('card_dropped', el, source, target);
      } else if ($(el).hasClass('droppable-list')) {
        self.trigger('list_dropped', el);
      }
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.boardView, 'create_list', this.lists.createList.bind(this.lists));
    this.listenTo(this.lists, 'new_list_created', this.renderBoardList.bind(this));
    this.on('popover_add_card', this.lists.createCard);
    this.on('destroy_list', this.lists.destroyList.bind(this.lists));
    this.on('destroy_card', this.cards.destroyCard.bind(this.cards));
    this.listenTo(this.lists, 'list_destroyed', this.removeListFromPage);
    this.listenTo(this.cards, 'card_destroyed', this.removeCardFromPage);
    this.listenTo(this.cards, 'remove_card_from_list', this.lists.removeCardFromList.bind(this.lists));
    this.on('card_submitted', this.lists.addCardToList.bind(this.lists));
    this.on('card_added_to_list', this.renderCardListView.bind(this));
    this.on('add_card_into_position', this.lists.addCardIntoPosition.bind(this));
    this.on('card_dropped', this.boardView.updateCardsFromDrop.bind(this.boardView));
    this.on('list_dropped', this.boardView.updateListsFromDrop.bind(this.boardView));
    this.on('copy_list', this.lists.copyList.bind(this.lists));
    this.on('archive_all_cards', this.cards.destroyListCards.bind(this.cards));
    this.on('move_all_cards', this.cards.moveAllCardsFromList.bind(this.cards));
    this.listenTo(this.boardView, 'card_position_updated', this.updateCardsInListFromDom.bind(this));
    this.listenTo(this.lists, 'update_list_from_dom', this.updateCardsInListFromDom.bind(this));
  },
  init: function() {
    this.renderIndex();
  }
}

Handlebars.registerHelper('count', function(array) {
  return array.length || 0;
});

Handlebars.registerHelper('getListName', function(list_id) {
  var list = App.lists.get(list_id);
  return list.get('name');
});

Handlebars.registerHelper('getCardPosition', function(id, list_id) {
  var list = App.lists.get(list_id);
  var cards = list.get('card_ids');
  var card = _.findWhere(cards, function(card) {
    return card.card_id === id;
  });

  return card.position;
});