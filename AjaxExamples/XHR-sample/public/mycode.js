function callData()
{
   var request=new XMLHttpRequest();
   request.open("GET","http://localhost:3000/items");
   request.send();
   request.onreadystatechange=function()
                {
                     if(this.readyState==4)
                      {
                         let res=JSON.parse(this.response);
                         console.log(res);
                let output="<li>Itemnames</li>";

               res.forEach(
                   itemobj=>
                   output+="<li>" + itemobj.itemname +"</li>"
                         )
        document.getElementById("mydata").innerHTML=output;
                     }
                     //if 
                
              }; // call back

  }
