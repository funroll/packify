var sandbox = require("browser-module-sandbox")({"cdn": "http://wzrd.in", "inMemory": true, "container": {}})

var packify = function(source, callback) {
  sandbox.bundle(source, callback)
}

module.exports = packify

