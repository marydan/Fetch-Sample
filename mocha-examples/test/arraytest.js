var assert=require("assert")
var library=require('../source/funarray')

beforeEach('Initialize books', function()
{
library.loadBooks(['JAva','Python','Spring']);

});

describe('books search',function()
{
  
     it('Should return book',function()
     {
   let ans=library.isBookAvailable('ASP');
   assert.equal(ans,false);

     });

     describe('async test',function() 
     {
     it('Should return book - run asynchronous',function(done)
     {

     library.isBookAsync('Python', function(isbookcheck)
      {
          assert.equal(isbookcheck,true);
         // done();
      });
     done();
        
     }); //it
    }); // inner describe

});



