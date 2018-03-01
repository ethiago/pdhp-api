var db = require('../relationalDb')

var generic = require('./generic');

var jTool = require('../../tools/json_tools')

const includeCondition = { include: [ { model: db.Disc, as: 'discs', nested: true  } ] }

exports.getById = function(collectionId) {
    return db.Collection.findById(collectionId, includeCondition);
}

exports.search = function(q, page, per_page) {
    return []
}

exports.removeDiscsFrom = function( collectionEntity, listOfDiscIdsToRemove, opt){
    if( listOfDiscIdsToRemove.length == 0 ) return Promise.resolve( [0] )
    else return collectionEntity.removeDiscs( listOfDiscIdsToRemove, opt );
}

exports.addDiscsTo = function( collectionEntity, listOfDiscIdsToAdd, opt){
    if( listOfDiscIdsToAdd.length == 0 ) return Promise.resolve( [0] )
    else return collectionEntity.addDiscs( listOfDiscIdsToAdd, opt );
}

exports.update = function(collectionVO){

    return db.openTransaction( t => {

        return this.getById(collectionVO.id).then( storedCollection => {

            var toRemove = jTool.nSetSub( storedCollection.discs, collectionVO.discs, (a,b) => a.id == b.id ).map(c=>c.id);
            var toAdd = jTool.nSetSub( collectionVO.discs, storedCollection.discs, (a,b) => a.id == b.id).map(c=>c.id);

            return this.removeDiscsFrom(storedCollection, toRemove, {transaction: t} ).then( () => 
                
                this.addDiscsTo(storedCollection, toAdd, {transaction: t} ).then( () => 
                
                    storedCollection.update( { name: collectionVO.name }, {transaction: t} )
                )
            )
        })
    }).then( () => this.getById(collectionVO.id) )
}

exports.create = function(entity){
    return db.Collection.create( { name: entity.name} );
}
