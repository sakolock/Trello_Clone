this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"board-wrapper\"><div class=\"board-main-content\"><div class=\"board-header u-clearfix js-board-header\"><a class=\"board-header-btn board-header-btn-name js-rename-board\" href=\"#\"><span class=\"board-header-btn-text\" dir=\"auto\">Welcome Board</span></a></div><div class=\"board-canvas\"><div id=\"board\" class=\"list-container\"><div class=\"js-add-list list-wrapper mod-add is-idle\"><form id=\"createList\" action=\"/lists\" method=\"post\"><span class=\"placeholder js-open-add-list\">Add a list…</span><input class=\"list-name-input\" type=\"text\" name=\"name\" placeholder=\"Add a list…\" autocomplete=\"off\" dir=\"auto\" maxlength=\"512\"><div class=\"list-add-controls u-clearfix\"><input class=\"primary mod-list-add-button js-save-edit\" type=\"submit\" value=\"Save\"><a class=\"icon-lg icon-close dark-hover js-cancel-edit\" href=\"#\"></a></div></form></div></div></div></div></div>";
},"useData":true});

this["JST"]["card_copy_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"pop-over is-shown\" style=\"left: 675px; top: 129px;\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span id=\"popoverTitle\" class=\"pop-over-header-title\">Copy Card</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 488px;\"><form><label>Title</label><textarea class=\"js-autofocus\" name=\"name\" style=\"margin-bottom: 12px;\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><label>Copy to…</label><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-threequarters\"><span class=\"label\">List</span><span class=\"value js-list-value\">"
    + alias3((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "</span><label>List</label><select id=\"copyListNames\" class=\"js-select-list\"></select></div><div class=\"button-link setting form-grid-child form-grid-child-quarter\"><span class=\"label\">Position</span><span class=\"value js-pos-value\">"
    + alias3((helpers.getCardPosition || (depth0 && depth0.getCardPosition) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.list_id : depth0),{"name":"getCardPosition","hash":{},"data":data}))
    + "</span><label>Position</label><select id=\"copyCardPositions\" class=\"js-select-position\"></select></div></div><input class=\"primary wide js-submit\" type=\"submit\" value=\"Create Card\"></form></div></div>";
},"useData":true});

this["JST"]["card_date_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over is-shown\" style=\"left: 675px; top: 129px;\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span id=\"popoverTitle\" class=\"pop-over-header-title\">Due Date</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 488px;\"><form><div id=\"editDueDate\"><input type=\"text\" id=\"datePicker\" /></div><input class=\"primary wide js-submit\" type=\"submit\" value=\"Save\"></form></div></div>";
},"useData":true});

this["JST"]["card_details_labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3 class=\"card-detail-item-header\">Labels</h3><div class=\"u-clearfix js-card-detail-labels-list js-edit-label\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a class=\"card-detail-item-add-button dark-hover js-details-edit-labels\"><span class=\"icon-sm icon-add\"></span></a></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"card-label card-label-"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " mod-card-detail mod-clickable\" title=\"This is a "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " label\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["card_details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button-link is-on js-unsubscribe\" title=\"If you unsubscribe you will lose notifications.\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button-link js-subscribe\" title=\"Subscribe to the card to get notifications when something changes.\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"focus-dummy\" href=\"#\"></a><div data-card-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"window-wrapper js-tab-parent\"><a class=\"icon-lg icon-close dialog-close-button js-close-window\" href=\"#\"></a><div class=\"card-detail-window u-clearfix\"><div class=\"window-header\"><span class=\"window-header-icon icon-lg icon-card\"></span><div class=\"window-title\"><h2 class=\"card-detail-title-assist js-title-helper\" dir=\"auto\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><textarea class=\"mod-card-back-title js-card-detail-title-input\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; height: 30px;\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"window-header-inline-content quiet js-current-list\"><p class=\"u-inline-block u-bottom\">in list <span class=\"js-open-move-from-header\">"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "</span></p></div><div class=\"window-header-inline-content hide js-subscribed-indicator-header\"><span class=\"icon-sm icon-subscribe\"></span></div></div><div class=\"window-main-col\"><div class=\"card-detail-data u-gutter\"><div id=\"labelsBlock\" class=\"card-detail-item card-detail-item-labels u-clearfix js-card-detail-labels\"></div><div class=\"card-detail-item hide js-card-detail-due-date\"><h3 class=\"card-detail-item-header\">Due Date</h3><span id=\"dueDate\" class=\"js-date-text card-detail-due-date-text\"></span></div><div class=\"card-detail-item card-detail-item-block u-clearfix editable\" attr=\"desc\"><h3 class=\"card-detail-item-header hide js-show-with-desc\">Description</h3><a class=\"card-detail-item-header-edit hide-on-edit js-show-with-desc js-edit-desc hide\" href=\"#\">Edit</a><div class=\"description-content js-desc-content\"><div class=\"description-content-fade-button\"><span class=\"description-content-fade-button-text\">Show full description.</span></div><div class=\"current markeddown hide-on-edit js-card-desc js-show-with-desc hide\" dir=\"auto\"></div><p class=\"u-bottom\"><a class=\"quiet-button mod-with-image hide-on-edit js-edit-desc js-hide-with-desc\" href=\"#\"><span class=\"icon-sm icon-description quiet-button-icon\"></span>&nbsp;Edit the description…</a></p><div class=\"card-detail-edit edit\" tabindex='-1' hidden><textarea class=\"field\" placeholder=\"Add a more detailed description…\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 108px;\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"edit-controls u-clearfix\"><input class=\"primary confirm mod-submit-edit js-save-edit\" type=\"submit\" value=\"Save\"><a class=\"icon-lg icon-close dark-hover cancel js-cancel-edit\" href=\"#\"></a></div></div></div></div></div><div class=\"window-module add-comment-section\"><div class=\"window-module-title window-module-title-no-divider\"><span class=\"window-module-title-icon icon-lg icon-comment\"></span><h3>Add Comment</h3><span class=\"editing-members js-editing-members hide\"></span></div><div class=\"new-comment js-new-comment\"><div class=\"member member-no-menu\"><span class=\"member-initials\" title=\"user\">User</span><span class=\"member-gold-badge\" title=\"This member has Trello Gold.\"></span></div><form><div class=\"comment-frame\"><div class=\"comment-box\"><textarea id=\"commentBox\" class=\"comment-box-input js-new-comment-input\" placeholder=\"Write a comment…\" tabindex=\"1\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; height: 75px;\"></textarea></div></div><div class=\"comment-controls u-clearfix\"><input class=\"primary confirm mod-no-top-bottom-margin js-add-comment\" disabled=\"\" tabindex=\"3\" type=\"submit\" value=\"Send\"></div></form></div></div><div class=\"window-module\"><div id=\"comments\" class=\"window-module-title window-module-title-no-divider\"><span class=\"window-module-title-icon icon-lg icon-activity\"></span><h3>Comments</h3></div></div></div><div class=\"window-sidebar\"><div class=\"window-module u-clearfix\"><h3>Add</h3><div class=\"u-clearfix\"><a class=\"button-link js-edit-labels\" href=\"#\"><span class=\"icon-sm icon-label\"></span>&nbsp;Labels</a><a class=\"button-link js-add-due-date\" href=\"#\"><span class=\"icon-sm icon-clock\"></span>&nbsp;Due Date</a></div></div><div class=\"js-plugin-buttons\"><div class=\"window-module u-clearfix hide\"><h3>Power-Ups</h3><div class=\"u-clearfix js-button-list\"></div></div></div><div class=\"window-module other-actions u-clearfix\"><h3>Actions</h3><div class=\"u-clearfix\"><a class=\"button-link js-move-card\" href=\"#\"><span class=\"icon-sm icon-move\"></span>&nbsp;Move</a><a class=\"button-link js-copy-card\" href=\"#\"><span class=\"icon-sm icon-card\"></span>&nbsp;Copy</a><div class=\"js-subscribe-sidebar-button\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"icon-sm icon-subscribe\"></span>&nbsp;Subscribe<span class=\"on\"><span class=\"icon-sm icon-check light\"></span></span></a></div><hr><a class=\"button-link js-archive-card\" href=\"#\"><span class=\"icon-sm icon-archive\"></span>&nbsp;Archive</a></div></div></div></div></div>";
},"useData":true});

this["JST"]["card_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div data-list-id="
    + container.escapeExpression(((helper = (helper = helpers.listId || (depth0 != null ? depth0.listId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"listId","hash":{},"data":data}) : helper)))
    + " class=\"list-card js-composer\"><div class=\"list-card-details u-clearfix\"><div class=\"list-card-labels u-clearfix js-list-card-composer-labels\"></div><textarea class=\"list-card-composer-textarea js-card-title\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; height: 36px;\"></textarea><div class=\"list-card-members js-list-card-composer-members\"></div></div></div><div class=\"cc-controls u-clearfix\"><div class=\"cc-controls-section\"><input class=\"primary confirm mod-compact js-add-card\" type=\"submit\" value=\"Add\"><a class=\"icon-lg icon-close dark-hover js-cancel\" href=\"#\"></a></div></div>";
},"useData":true});

this["JST"]["card_labels_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"card-label-edit-button icon-sm icon-edit js-edit-label\" href=\"#\" ></a><span data-label-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " class=\"card-label mod-selectable card-label-"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " js-select-label\" data-color=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<span class=\"icon-sm icon-check card-label-selectable-icon light\"></span></span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"pop-over is-shown\" style=\"left: 675px; top: 129px;\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span id=\"popoverTitle\" class=\"pop-over-header-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 488px;\"><div id=\"labelsMain\"><input class=\"js-autofocus js-label-search\" type=\"text\" placeholder=\"Search labels…\" value=\"\" autocomplete=\"off\"><ul id=\"labelsList\" class=\"edit-labels-pop-over js-labels-list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div><a class=\"quiet-button full js-add-label\" href=\"#\">Create a new label</a></div></div><!-- Edit Labels --><div id=\"labelsAddEdit\" hidden><form data-label-id class=\"edit-label\"><label for=\"labelName\">Name</label><input id=\"labelName\" class=\"js-autofocus js-label-name\" type=\"text\" name=\"name\" value=\"\"><label>Select a color</label><span class=\"card-label mod-edit-label mod-clickable card-label-green palette-color js-palette-color\" data-color=\"green\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-yellow palette-color js-palette-color\" data-color=\"yellow\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-orange palette-color js-palette-color\" data-color=\"orange\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-red palette-color js-palette-color\" data-color=\"red\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-purple palette-color js-palette-color\" data-color=\"purple\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-blue palette-color js-palette-color\" data-color=\"blue\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-black palette-color js-palette-color\" data-color=\"black\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-sky palette-color js-palette-color\" data-color=\"sky\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-lime palette-color js-palette-color\" data-color=\"lime\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-pink palette-color js-palette-color\" data-color=\"pink\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><span class=\"card-label mod-edit-label mod-clickable card-label-null palette-color js-palette-color\" data-color=\"\"><span class=\"card-label-color-select-icon icon-sm icon-check light hide js-palette-select\"></span></span><p class=\"u-bottom\">No color.</p><p class=\"u-bottom quiet\">This won't show up on the front of cards.</p><div class=\"u-clearfix\"><input class=\"primary wide js-submit\" type=\"submit\" value=\"Create\"><div class=\"u-float-right js-accessory-view-holder\" hidden><input type=\"submit\" value=\"Delete\" class=\"negate\"></div></div></form></div><div id=\"destroyLabelConfirm\" hidden><p>There is no undo. This will remove this label from all cards and destroy its history.</p><input class=\"js-confirm full negate\" type=\"submit\" value=\"Delete\"></div></div></div>";
},"useData":true});

this["JST"]["card_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"card-label card-label-"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " mod-card-front\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badges\"><span class=\"js-badges\"><div class=\"badge is-icon-only\" title=\"This card has a description.\"><span class=\"badge-icon icon-sm icon-description\"></span></div></span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-card-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " class=\"list-card-cover js-card-cover\"></div><span class=\"icon-sm icon-edit list-card-operation dark-hover js-open-quick-card-editor js-card-menu\"></span><div class=\"list-card-details\"><!-- LABELS --><div class=\"list-card-labels js-card-labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><a class=\"list-card-title js-card-name\" href=\"/lists/"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"card-short-id hide\">"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["card_move_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"pop-over is-shown\" style=\"left: 675px; top: 129px;\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span id=\"popoverTitle\" class=\"pop-over-header-title\">Move Card</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 488px;\"><form><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-threequarters\"><span class=\"label\">List</span><span class=\"value js-list-value\">"
    + alias3((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "</span><label>List</label><select id=\"moveListNames\" class=\"js-select-list\"></select></div><div class=\"button-link setting form-grid-child form-grid-child-quarter\"><span class=\"label\">Position</span><span class=\"value js-pos-value\">"
    + alias3((helpers.getCardPosition || (depth0 && depth0.getCardPosition) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.list_id : depth0),{"name":"getCardPosition","hash":{},"data":data}))
    + "</span><label>Position</label><select id=\"moveCardPositions\" class=\"js-select-position\"></select></div></div><input class=\"primary wide js-submit\" type=\"submit\" value=\"Move\"></form></div></div>";
},"useData":true});

this["JST"]["card_quick_editor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"card-label card-label-"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " mod-card-front\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<span class=\"icon-lg icon-close quick-card-editor-close-icon js-close-editor\"></span><div class=\"quick-card-editor-card\" style=\"width: 254px;\"><div class=\"list-card list-card-quick-edit js-stop\" style=\"width: 254px;\"><div class=\"list-card-cover js-card-cover\"></div><div class=\"list-card-details\"><div id=\"labelsBlock\" class=\"list-card-labels js-card-labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><textarea class=\"list-card-edit-title js-edit-card-title\" dir=\"auto\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 90px;\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div></div><input class=\"primary wide js-save-edits\" type=\"submit\" value=\"Save\"><div class=\"quick-card-editor-buttons fade-in\"><a class=\"quick-card-editor-buttons-item js-edit-labels\" href=\"#\"><span class=\"icon-sm icon-label light\"></span><span class=\"quick-card-editor-buttons-item-text\">Edit Labels</span></a><a class=\"quick-card-editor-buttons-item js-move-card\" href=\"#\"><span class=\"icon-sm icon-move light\"></span><span class=\"quick-card-editor-buttons-item-text\">Move</span></a><a class=\"quick-card-editor-buttons-item js-copy-card\" href=\"#\"><span class=\"icon-sm icon-card light\"></span><span class=\"quick-card-editor-buttons-item-text\">Copy</span></a><a class=\"quick-card-editor-buttons-item js-edit-due-date\" href=\"#\"><span class=\"icon-sm icon-clock light\"></span><span class=\"quick-card-editor-buttons-item-text\">Change Due Date</span></a><a class=\"quick-card-editor-buttons-item js-archive\" href=\"#\"><span class=\"icon-sm icon-archive light\"></span><span class=\"quick-card-editor-buttons-item-text\">Archive</span></a></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-position="
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + " class=\"list-card js-member-droppable ui-droppable\"> <div class=\"list-card-cover js-card-cover\"></div> <span class=\"icon-sm icon-edit list-card-operation dark-hover js-open-quick-card-editor js-card-menu\"></span> <div class=\"list-card-details\"><div class=\"list-card-labels js-card-labels\"></div><a class=\"list-card-title js-card-name\" dir=\"auto\" href=\"/c/1OPZKW9z/13-create-list-model\"><span class=\"card-short-id hide\">"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><div class=\"badges\"><span class=\"js-badges\"></span></div> </div></div>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"comment-container\"><div class=\"action-comment markeddown js-comment\"><div class=\"current-comment js-friendly-links js-open-card\"><p>"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</p></div></div><hr></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header-boards-button\"><a class=\"header-btn header-boards js-boards-menu\" href=\"#\"><span class=\"header-btn-icon icon-lg icon-board light\"></span><span class=\"header-btn-text\">Board</span></a></div><div id=\"headerSearch\" class=\"header-search\"><input class=\"header-search-input js-search-input js-disable-on-dialog\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" value=\"\"><span class=\"header-search-icon icon-lg icon-search light js-search-icon\"></span><span class=\"header-search-icon header-search-icon-close icon-lg icon-close light hide js-close-icon js-search-close\"></span></div>";
},"useData":true});

this["JST"]["labels_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"card-label-edit-button icon-sm icon-edit js-edit-label\" href=\"#\" ></a><span class=\"card-label mod-selectable card-label-"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " js-select-label\" data-color=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<span class=\"icon-sm icon-check card-label-selectable-icon light\"></span></span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["list_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pop-over is-shown\" style=\"left: 274px; top: 122px;\"><div data-reactroot=\"\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back is-shown\"></a><span class=\"pop-over-header-title\">Copy List</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 485px;\"><div><form><label>Name</label><textarea class=\"js-autofocus\" name=\"name\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><input class=\"primary wide js-submit\" type=\"submit\" value=\"Create List\"></form></div></div></div></div></div>";
},"useData":true});

this["JST"]["list_item_template"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"js-select-list highlight-icon\" href=\"#\" name=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" disabled>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + " (current)</a></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"js-select-list highlight-icon\" href=\"#\" name=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["list_popover"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-sm icon-check\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span class=\"pop-over-header-title\">List Actions</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 494px;\"><div><ul class=\"pop-over-list\"><li><a class=\"js-add-card\" href=\"#\">Add Card…</a></li><li><a class=\"js-copy-list\" href=\"#\">Copy List…</a></li><li><a class=\"js-move-list\" href=\"#\">Move List…</a></li><li><a class=\"highlight-icon js-list-subscribe\" href=\"#\">Subscribe "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li></ul><hr><ul class=\"pop-over-list\"><li><a class=\"js-move-cards\" href=\"#\">Move All Cards in This List…</a></li><li><a class=\"js-archive-cards\" href=\"#\">Archive All Cards in This List…</a></li></ul><hr><ul class=\"pop-over-list\"><li><a class=\"js-close-list\" href=\"#\">Archive This List</a></li></ul></div><div class=\"pop-over-copy-list\" hidden><form><label>Name</label><textarea class=\"js-autofocus\" name=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><input class=\"primary wide js-submit\" type=\"submit\" value=\"Create List\"></form></div><div class=\"pop-over-move-list\" hidden><form><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-full\"><span class=\"label\">Board</span><span class=\"value js-board-value\">Welcome Board</span><label>Board</label><select id=\"listNames\" class=\"js-select-board\"><optgroup label=\"Boards\"></optgroup></select></div></div><div class=\"form-grid\"><div class=\"button-link setting form-grid-child form-grid-child-full\"><span class=\"label\">Position</span><span class=\"value js-pos-value\">"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</span><label>Position</label><select id=\"listPositions\" class=\"js-select-list-pos\"></select></div></div><input class=\"primary wide js-commit-position\" type=\"submit\" value=\"Move\"></form></div><div class=\"pop-over-move-cards\" hidden><ul id=\"moveAllCards\" class=\"pop-over-list\"></ul></div><div class=\"pop-over-archive-card-warning\" hidden><p>This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click “Menu” &gt; “Archived Items.”</p><input class=\"js-confirm full negate\" type=\"submit\" value=\"Archive All\"></div></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-board-list-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-position=\""
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "\" class=\"list js-list-content\"><div class=\"list-header js-list-header u-clearfix is-menu-shown list-item-container\"><div class=\"list-header-target js-editing-target\"></div><h2 class=\"list-header-name-assist js-list-name-assist\" dir=\"auto\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2><textarea class=\"list-header-name mod-list-name js-list-name-input\" spellcheck=\"false\" dir=\"auto\" maxlength=\"512\" style=\"overflow: hidden; word-wrap: break-word; height: 24px;\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"list-header-extras\"><span class=\"list-header-extras-subscribe js-list-subscribed hide\"><span class=\"icon-sm icon-subscribe\"></span></span><a class=\"list-header-extras-menu dark-hover js-open-list-menu\" href=\"#\"><span class=\"icon-sm icon-overflow-menu-horizontal\"></span></a> </div></div><div class=\"list-cards u-fancy-scrollbar u-clearfix card-container\"></div><a class=\"open-card-composer js-open-card-composer\" href=\"#\">Add a card…</a></div>";
},"useData":true});

this["JST"]["popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pop-over is-shown\" style=\"left: 675px; top: 129px;\"><div class=\"pop-over-header js-pop-over-header\"><a href=\"#\" class=\"pop-over-header-back-btn icon-sm icon-back\" hidden></a><span id=\"popoverTitle\" class=\"pop-over-header-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><a href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\"></a></div><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 488px;\"><div id=\"popoverContent\"></div></div></div>";
},"useData":true});

this["JST"]["search_popover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-over mod-search-over is-shown\" style=\"left: 102.719px; top: 41px; width: 400px;\"><div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" style=\"max-height: 553px;\"><div class=\"search-results-view\"><div class=\"js-search-results u-clearfix u-relative\"><div class=\"search-results-section js-card-results u-clearfix\"><div class=\"search-results-section-header u-clearfix\"><h4>Cards</h4></div><div id=\"searchResults\" class=\"js-list\"></div></div></div></div></div></div></div>";
},"useData":true});

this["JST"]["search_results"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul id=\"resultsList\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><section class=\"search-result-card\"><div class=\"search-result-card-container js-list-card-container\"><div class=\"list-card\"><div class=\"list-card-details\"><a class=\"list-card-title js-card-name\" data-card-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"/lists/"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"card-short-id\">"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + ": </span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></div></div></div><div class=\"search-result-card-details\"><p class=\"u-bottom\"><a class=\"search-result-card-details-name\" data-card-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"/lists/"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></p><p class=\"u-bottom quiet\">in <strong>"
    + alias4((helpers.getListName || (depth0 && depth0.getListName) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"getListName","hash":{},"data":data}))
    + "</strong></p><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p></div></section></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-warning js-no-results\">We couldn't find any cards or boards that matched your search.</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["select_options"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" selected >"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});