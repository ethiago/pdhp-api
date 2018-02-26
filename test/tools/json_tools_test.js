var assert = require('assert');

var jTool = require('../../app/tools/json_tools')

describe('tools', function(){
    describe('json_tools', function() {
        describe('#split', function() {

            it('1', function() {

                var str = "  How      are  you_doing today?";
                var s = jTool.split(str, " ");

                assert.equal(4, s.length);
                assert.equal("How", s[0] );
                assert.equal("are", s[1] );
                assert.equal("you_doing", s[2] );
                assert.equal("today?", s[3] );
            });
        });
    });
});