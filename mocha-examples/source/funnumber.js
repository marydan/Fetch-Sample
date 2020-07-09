function chkEven(number)
{
    return (number%2==0);

}

function chkString(name)
{
    return name.length;
}

function chkData(data)
{
   var studentdata=data;
 

  // studentdata={"name":"Stackroute","studentname":"Annu"}

    return studentdata;

    //  if(studentdata("name")=="Stackroute")
    //  return "You can access Vlabs";
    //  else
    //  return "Vlabs accessing is denied";
     

}
module.exports={chkEven,chkString,chkData}