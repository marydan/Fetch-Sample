function funTest(name)
{
  if(name.length==0)
  return Promise.reject("Parameter Missing");

  let promobj=new Promise( (resolve,reject)=>
  {
    setTimeout(()=>{
      if(name=="root")
      resolve("Valid User");
      else
      reject("Invalid User");
    },2000);
  });

  return promobj;

}

module.exports={funTest,}