
var db = require('../inMemoryDb');

var jTool = require('../../tools/json_tools');

var generic = require("./generic");

var discRepository = require("./discs")

exports.getById = function(collectionId) {
    return new Promise(function(resolve, reject) {
        
        var selected = db.collections.filter(coll => coll.id === collectionId );

        if(selected.length == 1)
            resolve(selected[0]);
        else if(selected.length == 0)
            throw 400;
        else
            throw 501;
        
        resolve(selected);
    });
}

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.collections );
}

exports.update = function(collection){
    return this.getById(collection.id).then(function(storedCollection){

        storedCollection.name = collection.name;

        storedCollection.discs = storedCollection.discs.filter(sd => collection.discs.some( d => sd.id === d.id ))

        var diff = jTool.nSetSub( collection.discs, storedCollection.discs, (a,b) => a.id == b.id )

        return Promise.all(diff.map( d => discRepository.getById(d.id) )).then(l => {
            storedCollection.discs = storedCollection.discs.concat(l);
            return storedCollection;
        })

    })
}

exports.create = function(entity){
    return new Promise(function(resolve, reject) {

        var id = db.collections.map(c=>c.id).reduce( (a,c) => c>a?c:a ) + 1;
        entity.id = id;
        entity.discs = [];
        db.collections.push(entity);
        resolve(entity);
    })
}
