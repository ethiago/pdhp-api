
var db = require('../tools/in_memory_db');

var _ = require('underscore');

exports.getAll = function() { 
    return new Promise(function(resolve, reject) {
        resolve(db.collections);
    });
}

exports.getAllById = function(collectionId) {
    return new Promise(function(resolve, reject) {
        console.log("Select collection " + collectionId);
        
        var selected = _.select(db.collections, function(collection) { return collection.id === collectionId; } );
        
        console.log(selected.length + " collections selected");
        resolve(selected);
    });
}

