var BoardView = Backbone.View.extend({
  el: '#content',
  template: App.templates.board,
  events: {
    "click .js-open-add-list": "showListForm",
    "click .js-save-edit": "createNewList",
    "click .js-cancel-edit": "hideListForm",
    "click .modal-overlay": "closeModal",
  },
  createNewList: function(e) {
    e.preventDefault();
    var data = { name: $('.list-name-input').val() };

    this.trigger('create_list', data);
    this.hideListForm();
  },
  removeListFromPage: function(id) {
    App.lists.where(id).view.remove();
  },
  destroyLabel: function(model) {
    var self = this;
    var data = model.toJSON();
    var label_id = model.get('id');

    console.log(label_id);

    $.ajax({
      url: '/labels',
      type: 'delete',
      data: data,
      success: function(json) {
        self.removeLabelFromCards(label_id);
      }
    });
  },
  removeLabelFromCards: function(label_id) {
    var self = this;

    App.cards.forEach(function(card) {
      var label_ids = card.get('label_ids');
      var card_id = card.get('id');

      if (label_ids.indexOf(label_id) >= 0) {
        self.removeLabelFromCard(card_id, label_id);
      }
    });
  },
  removeLabelFromCard: function(card_id, label_id) {
    var card = App.cards.findWhere({ id: card_id });
    var cardLabelIds = card.get('label_ids');

    console.log(cardLabelIds);
    cardLabelIds = _.reject(cardLabelIds, function(i) {
      console.log(i);
      console.log(label_id);
      return i === label_id;
    });
    console.log(cardLabelIds);

    card.save({ label_ids: cardLabelIds }, {
      success: function() {
        console.log('removed from ' + card_id);
      }
    });
  },
  showListForm: function(e) {
    e.preventDefault();
    $('.mod-add').removeClass('is-idle')
    $('#createList').find('.list-name-input').delay(500).focus();
  },
  hideListForm: function(e) {
    if (e) { e.preventDefault(); }

    $('form#createList').get(0).reset();
    $('.mod-add').addClass('is-idle');
  },
  updateCardsFromDrop: function(el, source, target) {
    var cardId = parseInt($(el).find('.js-card-cover').attr('data-card-id'));
    var oldListId = parseInt($(source).closest('.js-list-content').attr('data-board-list-id'));
    var newListId = parseInt($(target).closest('.js-list-content').attr('data-board-list-id'));
    var card = App.cards.findWhere({ id: cardId });
    var oldList = App.lists.get(oldListId);
    var newList = App.lists.get(newListId);

    console.log(oldList);
    console.log(newList);

    card.save({ list_id: newListId });
    this.trigger('card_position_updated', newList);
    this.trigger('card_position_updated', oldList);
  },
  updateListsFromDrop: function(el) {
    var self = this;
    var oldListPos = parseInt($(el).find('.js-list-content').attr('data-position'));
    var movedListId = parseInt($(el).find('.js-list-content').attr('data-board-list-id'));
    var lists = $('.droppable-list').not('.gu-mirror');
    var max;
    var min;
    var newListPos = $('[data-board-list-id="' + movedListId + '"]').closest('.droppable-list').index();

    max = Math.max(newListPos, oldListPos);
    min = Math.min(newListPos, oldListPos);

    _.each(lists, function(list, idx) {
      if (idx >= min && idx <= max) {
        var listId = parseInt($(list).find('.js-list-content').attr('data-board-list-id'));
        var model = App.lists.get(listId);

        model.save({ position: idx }, {
          success: function(model) {
            var listId = model.get('id');
            var newIdx = model.get('position');
            self.updateListPositionInDom(listId, newIdx); // check this
          }
        });
      }
    });
  },
  updateListPositionInDom: function(listId, idx) {
    var domList = $('.droppable-list').find('[data-board-list-id=' + listId + ']');
    domList.attr('data-position', idx);
  },
  getCardId: function(el) {
    return parseInt($(el).find('.js-card-cover').attr('data-card-id'));
  },
  getListId: function(el) {
    return parseInt($(el).closest('.js-list-content').attr('data-board-list-id'));
  },
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});