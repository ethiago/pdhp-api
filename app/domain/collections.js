

var collectionRepository = require('../repository/collections');

exports.getById = function (collectionId) {
    
    return collectionRepository.getById(collectionId)
        .then(function(collections){
            
            if ( collections.length === 1 ) { 
                return collections[0];
            }else if( collections.length === 0 )
            {
                throw 404;
            }else
            {
                throw 501;
            }
        });
}

exports.search = function (q, page, per_page) {
    
    return collectionRepository.search(q, page, per_page);
    
}