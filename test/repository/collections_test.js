var assert = require('assert');

var collectionRepository = require('../../app/repository/collections');

describe('repository', function(){
    describe('collections', function() {
        describe('#getById(1)', function() {
            it('should return a list with 1 element', function(done) {

                collectionRepository.getById(1)
                    .then(function(selected){
                        assert.equal(selected.length, 1);
                        done();
                    },function(err){ console.log(err) });
            
            });
        });
    });
});
