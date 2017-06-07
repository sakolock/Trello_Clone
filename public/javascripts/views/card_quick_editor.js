var CardQuickEditView = Backbone.View.extend({
  className: 'quick-card-editor',
  template: App.templates.card_quick_editor,
  events: {
    "click .quick-card-editor-close-icon": "destroy",
    "click .js-edit-labels": "showCardPopover",
    "click .js-move-card": "showCardMovePopover",
    "click .js-copy-card": "showCardCopyPopover",
    "keyup .comment-box-input": "toggleSendButton",
    "click .js-edit-due-date": "showDatePicker",
    "click .js-archive": "destroyCard",
    "click .js-save-edits": "updateTitle"
  },
  showCardPopover: function(e) {
    this.popover = new CardLabelsPopoverView({
      model: this.model
    });
  },
  showCardMovePopover: function(e) {
    e.preventDefault();
    var x = e.pageX;
    var y = e.pageY;

    console.log('clicked it!');

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
    this.destroy();
  },
  destroy: function(e) {
    if (e) { e.preventDefault(); }

    this.remove();
  },
  updateTitle: function(e) {
    var self = this;
    var title = this.$el.find('.js-edit-card-title').val();

    this.model.save({ title: title }, {
      success: function() {
        self.destroy();
      }
    });
  },
  updateLabels: function() {
    var labels = {
      "labels": this.model.getLabelInformation()
    };

    this.labels = labels;
    this.render();
  },
  getLabelInformation: function() {
    this.labels = this.model.getLabelInformation();
  },
  placeContentBlock: function() {
    this.$el.find('.quick-card-editor-card').css({
      top: this.y - 13,
      left: this.x - 240
    });
  },
  render: function() {
    var title = this.model.get('title');
    this.getLabelInformation();

    this.$el.html(this.template({
      title: title,
      labels: this.labels
    }));
    $('#surface').append(this.$el);
    this.placeContentBlock();
  },
  initialize: function(options) {
    this.x = options.x;
    this.y = options.y;
    this.render();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'card_moved', this.destroy);
    this.listenTo(this.model, 'card_copied', this.destroy);
  }
});