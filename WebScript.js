const windowjs = require('./methods/src/window')



//CREATE FUNCTIONS
var create_window = function(){windowjs.create_window()}

module.exports = {
    create_window: create_window
}