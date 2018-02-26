var assert = require('assert');

var set = require('../../app/tools/Set')

describe('tools', function(){
    describe('Set', function() {

        var mySet;

        beforeEach(function() {
            this.mySet = set.newSet( o => { return o.id; });
        });

        it('1', function() {

            this.mySet
                .addArray([ { id: 1, nome: "1" }, { id: 2, nome: "2"}])
                .addArray([ { id: 2, nome: "2" }, { id: 3, nome: "1"}])
            ;

            var array = this.mySet.toArray();

            assert.equal(3, array.length);
            assert.equal("1", array.find(x => { return x.id == 1 }).nome );
            assert.equal("2", array.find(x => { return x.id == 2 }).nome );
            assert.equal("1", array.find(x => { return x.id == 3 }).nome );
        
        });
    });
});
