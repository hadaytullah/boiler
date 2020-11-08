const types = require('./types');
class Data {
  getProjectType (type) {
    if (types[type]) {
      return types[type]
    }
    throw "the project type does not exists"
  }
}

module.exports = Data
