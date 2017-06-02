var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/cards.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  get: function() {
    return this.__readFile().data;
  },
  set: function(data) {
    data.id = this.getLastId() + 1;
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), "utf8");
  },
  update: function(data) {
    data.id = this.getLastId();
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), "utf8");
  },
  getLastId: function() {
    return this.__readFile().last_id;      
  }
};