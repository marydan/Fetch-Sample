var numfuns=require('../source/funnumber')
var assert=require('assert')
var expect=require('chai').expect;
var should=require('chai').should();

describe('Check functions',function()
{

 it('Check for Even number',function(){
       let ans=numfuns.chkEven(30);
   expect(ans).equal(true);
 });

 it('Check lenght of String',function(){
var myvalue=numfuns.chkString("Mary");
myvalue.should.equal(4);

 })


 describe("validate objects",function()
 {
   it('Check for Valid object data',()=>
   {
   let studentData={"id":"i001","studentname":"Dan"};

   let output=numfuns.chkData(studentData);

  // output.should.have.property("name").equals("Stackroute");
   output.expect().to.have.property("name").equal("Stackroute");


   })


 })

})