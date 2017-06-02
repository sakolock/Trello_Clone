var CardLabelsPopoverView = Backbone.View.extend({
  template: App.templates.card_labels_popover,
  labelsTemplate: App.templates.labels_list,
  events: {
    "click .icon-close": "destroy",
    "click .js-add-label": "showAddLabelContent",
    "click .icon-back": "showMainLabelsContent",
    "click .js-select-label": "updateCardLabelStatus",
    "mouseenter .card-label": "toggleSelected",
    "mouseleave .card-label": "toggleSelected",
    "click .js-edit-label": "showEditLabelContent",
    "click .mod-edit-label": "editLabelColor",
    "click .js-submit.save": "updateLabel",
    "click .js-submit.create": "createNewLabel",
    "click .negate": "showDeleteConfirmContent",
    "click .negate.full": "destroyLabel",
    "keyup .js-label-search": "filterLabels",
  },
  showAddLabelContent: function(e) {
    if (e) { e.preventDefault(); }

    $('.pop-over-content > div').hide();
    $('#labelsAddEdit').show();
    $('.icon-back').addClass('is-shown');
    $('.pop-over-header-title').text('Create Label');
    $('.js-submit').removeClass('save').addClass('create').val('Create');
  },
  showEditLabelContent: function(e) {
    e.preventDefault();
    var $label = $(e.currentTarget).next();
    var labelId = $label.attr('data-label-id');
    var text = $label.text();
    var color = $label.attr('data-color');

    this.showAddLabelContent();
    $('.pop-over-header-title').text('Change Label');
    $('form.edit-label').attr('data-label-id', labelId);
    $('#labelName').val(text);
    this.changeActiveColor(color);
    $('.js-submit').removeClass('create').addClass('save').val('Save');
    $('.js-accessory-view-holder').show();
  },
  showMainLabelsContent: function(e) {
    if (e) e.preventDefault();

    $('.pop-over-content > div').hide();
    $('#labelsMain').show();
    $('.icon-back').removeClass('is-shown');
    $('.pop-over-header-title').text('Labels');
    $('.js-accessory-view-holder').hide();
  },
  showDeleteConfirmContent: function(e) {
    e.preventDefault();

    $('.pop-over-content > div').hide();
    $('#destroyLabelConfirm').show()
    $('.pop-over-header-title').text('Delete Label?');
  },
  filterLabels: function(e) {
    var searchFilter = $('.js-label-search').val();
    var search = new RegExp(searchFilter, 'gi');
    var labels = $('.js-select-label');

    $('.js-select-label').closest('li').hide();
    labels.each(function() {
      $(this).text().match(search) ? $(this).closest('li').show() : false;
    });
  },
  editLabelColor: function(e) {
    e.preventDefault();
    var newColor = $(e.currentTarget).attr('data-color');

    this.changeActiveColor(newColor);
  },
  changeActiveColor: function(color) {
    $('[data-color]').find('.icon-check').addClass('hide');
    $('[data-color=' + color + '] .icon-check').removeClass('hide');
  },
  setLabelStatuses: function() {
    var cardLabels = this.model.get('label_ids');

    cardLabels.forEach(function(label) {
      $('[data-label-id=' + label + ']').addClass('active');
    });
  },
  toggleSelected: function(e) {
    $(e.currentTarget).toggleClass('selected');
  },
  updateCardLabelStatus: function(e) {
    e.preventDefault();
    var self = this;
    var target = $(e.currentTarget);
    var labelId = parseInt($(target).attr('data-label-id'));
    var labels = this.model.get('label_ids');

    var doesNotHaveLabel = _.every(labels, function(label) {
      return label !== labelId;
    });

    if (doesNotHaveLabel) {
      labels.push(labelId);
    } else {
      labels = _.reject(labels, function(label) {
        return label === labelId;
      });
    }

    this.model.save({ label_ids: labels }, {
      success: function() {
        self.toggleActiveClass(target);
        self.model.trigger('labels_updated');
      }
    });
  },
  toggleActiveClass: function(target) {
    $(target).toggleClass('active');
  },
  createNewLabel: function(e) {
    e.preventDefault();
    var self = this;
    var name = $('#labelName').val();
    var color = $('span .icon-check').not('.hide').closest('.card-label').attr('data-color');

    App.labels.create({
      name: name,
      color: color
    }, {
      success: function() {
        self.render();
      }
    })
  },
  updateLabel: function(e) {
    e.preventDefault();
    var self = this;
    var id = parseInt($('form.edit-label').attr('data-label-id'));
    var name = $('#labelName').val();
    var color = $('span .icon-check').not('.hide').closest('.card-label').attr('data-color');
    var model = App.labels.findWhere({ id: id });
    var data = {
      id: id,
      name: name,
      color: color
    };

    model.save(data, {
      success: function() {
        self.model.trigger('labels_updated');
        self.showMainLabelsContent();
      }
    });
  },
  destroyLabel: function(e) {
    e.preventDefault();
    var self = this;
    var id = parseInt($('form.edit-label').attr('data-label-id'));
    var model = App.labels.findWhere({ id: id });

    App.trigger('destroy_label', model);
    this.render();
    this.removeLabelFromList(id);
  },
  removeLabelFromList: function(id) {
    $('[data-label-id=' + id + ']').closest('li').remove();
  },
  destroy: function() {
    this.remove();
  },
  placeContentBlock: function() {
    this.$el.find('.quick-card-editor-card').css({
      top: this.y - 20,
      right: this.x - 20
    });
  },
  render: function() {
    var labels = App.labels.toJSON();

    this.$el.html(this.template({
      title: 'Labels',
      labels: labels
    }));
    App.$overlay.after(this.$el);
    this.setLabelStatuses();
    this.placeContentBlock();
  },
  initialize: function(options) {
    this.render();
    this.x = options.x;
    this.y = options.y;
  }
});