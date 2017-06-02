var CardDueDatePopover = Backbone.View.extend({
  template: App.templates.card_date_popover,
  events: {
    "click .pop-over-header-close-btn": "destroy",
    "click .js-submit": "saveDueDate"
  },
  saveDueDate: function(e) {
    e.preventDefault();
    var self = this;
    var dueDate = $('#datePicker').val();

    this.model.save({ dueDate: dueDate }, {
      success: function() {
        self.trigger('due_date_updated');
        self.destroy();
      }
    });
  },
  destroy: function(e) {
    if (e) { e.preventDefault(); }
    console.log('destroyyyying');
    this.remove();
  },
  placeContentBlock: function() {
    this.$el.find('.quick-card-editor-card').css({
      top: this.y - 20,
      right: this.x - 20
    });
  },
  render: function() {
    var dueDate = this.model.get('dueDate');

    this.$el.html(this.template);
    App.$overlay.after(this.$el);
    $('#datePicker').datepicker();
    $('#datePicker').val(dueDate);
    this.placeContentBlock();
  },
  initialize: function() {
    this.render();
  }
});