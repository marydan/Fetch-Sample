var promfun=require('../source/objectChk')
const expect=require('chai').expect;
const assert=require('assert');
const should=require('chai').should()

describe.only("check object",()=>{

    it("should have method",()=>{
 expect(promfun).to.be.an('Object');
 expect(typeof promfun.funTest).to.equal('function');

    })

const nullobj=()=>{};

  it("Shoud check for null",()=>{

    return  promfun.funTest().then(nullobj, (msg)=>
       {
       expect('Parameter Missing').to.deep.equal(msg);
       });
  });

  it('Should validate login',()=>{

  return promfun.funTest('mary').then(
  (res)=> {
  expect("Valid User").to.deep.equal(res);
  } );


  });

})
