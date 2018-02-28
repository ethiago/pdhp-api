
var db = require('../tools/in_memory_db');

var generic = require("./generic");

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.discs);
}

exports.getById = function(discId) {
    return new Promise(function(resolve, reject) {
        
        var selected = db.discs.filter(rec => rec.id === discId );
        
        if(selected.length == 1)
            resolve(selected[0]);
        else if(selected.length == 0)
            throw 400;
        else
            throw 501;
    });
}

exports.update = function(disc){
    return new Promise(function(resolve, reject) {

        storedDisc = db.discs.find( rec => rec.id === disc.id);
        storedDisc.name = disc.name;

        resolve( storedDisc );
    });
}

exports.create = function(entity){
    return new Promise(function(resolve, reject) {

        var id = db.discs.map(c=>c.id).reduce( (a,c) => c>a?c:a ) + 1;
        entity.id = id;
        db.discs.push(entity);
        resolve(entity);
    })
}