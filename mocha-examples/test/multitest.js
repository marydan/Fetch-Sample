let funtest=require('../source/funmuti')
let assert=require('assert')
let funcheck=require('../source/funcheck')


describe('Testing muiltiplicatin function',
        function()
        {

    it('Should return multiplication',function()
    {
assert.equal(funtest(12,2),24);
    }
    );


it('Should check credential',function(done)
{
    {
        this.timeout(2000);
    assert.equal(funcheck("pass"),true);
        done();

        //setTimeout(done(),2000)
    }
});

        }
);