
const db = require('../relationalDb');

var generic = require("./generic");

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.Disc );
}

exports.getById = function(discId) {
    return db.Disc.findById(discId);
}

exports.update = function(disc){
    return db.Disc.update( { name: disc.name }, { where: { id: disc.id }} )
    .then( arr => {
        if(arr[0] == 1) return this.getById(disc.id);
        else throw 501
    });
}

exports.create = function(entity){
    return db.Disc.create( { name: entity.name } );
}