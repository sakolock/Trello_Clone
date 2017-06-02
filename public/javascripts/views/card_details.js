var CardDetailsView = Backbone.View.extend({
  className: 'window',
  template: App.templates.card_details,
  labelsTemplate: App.templates.card_details_labels,
  commentTemplate: App.templates.comment,
  events: {
    "blur .js-card-detail-title-input": "updateTitle",
    "click .js-edit-desc": "showDescriptionEditor",
    "click .js-close-window": "closeModal",
    "click .js-save-edit": "updateDescription",
    "click .js-cancel-edit": "cancelEdit",
    "click .js-subscribe-sidebar-button .button-link": "updateSubscriptionStatus",
    "click .js-edit-labels": "showCardLabelsPopover",
    "click .js-edit-label": "showCardLabelsPopover",
    "click .js-move-card": "showCardMovePopover",
    "click .js-copy-card": "showCardCopyPopover",
    "keyup .comment-box-input": "toggleSendButton",
    "click .js-add-due-date": "showDatePicker",
    "click .js-archive-card": "destroyCard",
    "click .js-add-comment": "addComment"
  },
  updateTitle: function() {
    var title = this.$el.find('.js-card-detail-title-input').val();
    this.model.save({ title: title });
  },
  updateDescription: function() {
    var description = this.$el.find('.card-detail-edit textarea').val();
    this.model.save({ description: description });

    this.hideDescriptionEditor();
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
  updateLabels: function() {
    var labels = {
      "labels": this.model.getLabelInformation()
    };

    this.labels = labels;
  },
  setSubscriptionFlag: function() {
    var subscriptionButton = $('.js-subscribe-sidebar-button .button-link');
    if ($(subscriptionButton).hasClass('js-subscribe')) {
      $(subscriptionButton).removeClass('js-subscribe').addClass('js-unsubscribe is-on');
    } else {
      $(subscriptionButton).removeClass('js-unsubscribe');
      $(subscriptionButton).removeClass('is-on').addClass('js-subscribe');
    }
  },
  cancelEdit: function(e) {
    e.preventDefault();

    $('.card-detail-edit textarea').val(this.model.get('description'));
    this.hideDescriptionEditor();
  },
  showDescriptionEditor: function(e) {
    e.preventDefault();
    this.descriptionShowing = true;

    $('.js-hide-with-desc').hide();
    this.$el.find('.card-detail-item-block.editable').addClass('editing');
    this.$el.find('.card-detail-edit.edit').show().focus();
  },
  hideDescriptionEditor: function() {
    $('.js-hide-with-desc').show();
    this.$el.find('.card-detail-item-block.editable').removeClass('editing');
    this.$el.find('.card-detail-edit.edit').hide();
  },
  showUnsavedEditsMessage: function() {
    if ($('.card-detail-edit textarea').val().length) {
      $('.edits-warning.quiet').show();
    } 
  },
  toggleSendButton: function() {
    $('.comment-box-input').val().length ? $('.js-add-comment').prop('disabled', false) : $('.js-add-comment').prop('disabled', true);
  },
  showCardLabelsPopover: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    this.popoverView = new CardLabelsPopoverView({
      model: this.model,
      x: x,
      y: y
    });
  },
  showCardMovePopover: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    this.movePopover = new CardMovePopover({
      model: this.model,
      x: x,
      y: y
    });
  },
  showCardCopyPopover: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    this.copyPopover = new CardCopyPopover({
      model: this.model,
      x: x,
      y: y
    });
  },
  showDatePicker: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    this.datePopover = new CardDueDatePopover({
      model: this.model,
      x: x,
      y: y
    })
  },
  destroyCard: function(e) {
    if (e) { e.preventDefault(); }

    App.trigger('destroy_card', this.model);
    this.closeModal();
  },
  addComment: function(e) {
    e.preventDefault();
    var self = this;
    var text = $('#commentBox').val();
    var currComments = this.model.get('comments');
    
    currComments.push(text);

    this.model.save({ comments: currComments }, {
      success: function() {
        self.renderComment(text);
        $('#commentBox').val('');
      }
    });
  },
  closeModal: function(e) {
    if (e) { e.preventDefault(); }

    if (this.popoverView) { this.popoverView.remove(); }
    if (this.datePopover) { this.datePopover.remove(); }
    if (this.copyPopover) { this.copyPopover.remove(); }
    if (this.movePopover) { this.movePopover.remove(); }
    this.hideOverlay();
    this.remove();
    router.navigate('/', {trigger: true});
  },
  hideOverlay: function() {
    App.$overlay.removeClass('show');
  },
  render: function() {
    App.$overlay.addClass('show');

    this.$el.html(this.template(this.model.toJSON()));
    App.$overlay.html(this.$el);

    this.renderLabelsInfo();
    this.renderDueDateInfo();
    this.renderComments();
  },
  renderListInfo: function() {
    $('.js-open-move-from-header').text(this.listName);
  },
  renderLabelsInfo: function() {
    this.updateLabels();
    $('#labelsBlock').html(this.labelsTemplate(this.labels));
  },
  renderDueDateInfo: function() {
    if (this.model.get('dueDate').length > 0) {
      $('.js-card-detail-due-date').removeClass('hide');
      $('#dueDate').text(this.model.get('dueDate'));
    }
  },
  renderComments: function() {
    var self = this;
    var comments = this.model.get('comments');

    _.each(comments, function(comment) {
      self.renderComment(comment);
    });
  },
  renderComment: function(comment) {
    $('#comments').append(this.commentTemplate({
      text: comment
    }));
  },
  initialize: function(options) {
    this.listName = options.listName;
    this.labels = options.labels;
    this.render();
    this.listenTo(this.model, 'sync', this.renderLabelsInfo);
    this.listenTo(this.model, 'sync', this.renderDueDateInfo);
  }
});