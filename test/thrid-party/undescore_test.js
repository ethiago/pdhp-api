var assert = require('assert');

var _ = require('underscore');

describe('thrid-party', function(){
    describe('undescore', function() {
        describe('#select()', function() {
            it('should return a list with 1 element', function() {

                var repo = [ { id: 1, name:"A"},{ id: 2, name:"B"},{ id: 3, name:"A"} ]
                
                var selected = _.select(repo, function(obj){ return obj.id === 1; } );

            assert.equal(selected.length, 1);
            });
        });
    });
});

