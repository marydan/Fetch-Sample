var itemarr=[];
function addData(event)
{
   event.preventDefault();
   let vid=frmitem.txtid.value;
   let vname=frmitem.txtname.value;
   let record={
                "id":vid,
                "itemname":vname

             }

 fetch("http://localhost:3000/items",
 {
     "method":"POST",
     body:JSON.stringify(record),
     "headers":{"content-type":"application/json"}
 }
 ).then ( res=> {
      itemarr.push(res);
      console.log("Record added");
      frmitem.txtid.value="";
      frmitem.txtname.value="";
      getAllRecords();
      return Promise.resolve(res);
       }
   )
 .catch( e=>
        {
            console.log("Not added . some error" + e);
           return Promise.reject(e);
        }
            )

}

function getAllRecords(event)
{
//event.preventDefault();
    fetch("http://localhost:3000/items")
    .then(
       (records)=>
         {
             let ans=records.json();
             console.log(ans);
             return ans;
         }
       )
       .then(
           (result)=>
           {
               let output="<table border=3><tr><td>Id</td><td>ItemName</td></tr>"
               result.forEach(
                   (obj)=>
          
output+="<tr><td>" + obj.id + "</td><td>" + obj.itemname + "</td>"+
                "<td>"+"<button onclick=delRecord('"+ obj.id+ "')>Delete</button></td>"+
                "<td>"+"<button onclick=viewRecord('"+ obj.id+ "')>Modify</button></td></tr>"

               )


               output+="</table>";
    document.getElementById("clsdisplay").innerHTML=output;           
           }
       )
       .catch(
           e=>console.log(e)
       )
}

function viewRecord(vid)
{
    event.preventDefault();
    alert(vid);
fetch(`http://localhost:3000/items/${vid}`)
.then
(
    res=> { return res.json();}
)
.then
(
    (record)=>
    {
        console.log(record);
        frmmodify.txtid.value=record.id;
        frmmodify.txtname.value=record.itemname;
    }

)
.catch
(
    e=>console.log(e)
)




}


function delRecord(vid)
{
    fetch(`http://localhost:3000/items/${vid}`,
    {
        "method":"DELETE"
    }
    
    )
    .then(
        res=>
        {
            if(res.status==200)
            console.log("record deleted");
            getAllRecords();
        }
    )
    .catch(
        e=> console.log(e)
    )

}

function saveData(event)
{
    event.preventDefault();
var id=frmmodify.txtid.value;
var name=frmmodify.txtname.value;

var rec={
        "id":id,
        "itemname":name
}

fetch(`http://localhost:3000/items/${id}`,
 {
     "method":"PUT",
     body:JSON.stringify(rec),
     "headers":{"content-type":"application/json"}
 })
 .then
 (
    
    rec=>
     {
         console.log("modified");
     getAllRecords();
     }
 )
 .catch(
     e=>console.log(e)
 )

//alert(id);    
}

getAllRecords()
