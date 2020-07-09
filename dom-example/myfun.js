function changeColor()
{
    document.getElementById("myh1").style.color="red";
    document.bgColor="pink"
    document.getElementsByTagName("button")[0].style.background="yellow";
    document.getElementsByClassName("clsdetails")[0].innerText="Office located Near Chennai ";
}


function findDetails(evt)
{
    evt.preventDefault();
let search=frmone.txtcourse.value;
tab=document.getElementsByTagName("table")[0];
tbdy=tab.getElementsByTagName("tbody")[0];
trows=tbdy.getElementsByTagName("tr");
console.log(trows);
for(i=1;i<trows.length;i++)
{
    tdata=trows[i].getElementsByTagName("td");

    

      if ((tdata[0].innerText)==search)
      {
     ans="Fees is "  + tdata[2].innerText + "And Duration" + tdata[1].innerText ;
     document.getElementsByClassName("clsdetails")[0].innerText=ans;
      }
  

   //Alternate 
//    var dataarr=[...tdata];

//    var ans=dataarr.filter( tds=>tds.innerText==search);
// //console.log(ans);
// if(ans.length>0)
// console.log(trows[i].getElementsByTagName("td")[1].innerText);

//document.getElementsByClassName("clsdetails")[0].innerText=trows;

}
}