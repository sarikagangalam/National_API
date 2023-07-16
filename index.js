


    

let search_text=document.querySelector("#input_field");
let result_data=document.querySelector("#result");
let search_btn=document.querySelector("#primary");
let reset_btn=document.querySelector("#secondary"); 
 



search_btn.addEventListener("click", async ()=>{
    let value=document.getElementById("input_field").value;
    // document.querySelector('.result').style.display="block";


    if(value.length==0||value.includes(" ")){
        debugger;
        alert("Please enter the valid name without any spaces");

    
}

else {
      
    try{
        let data=await fetch(`https://api.nationalize.io/?name=${value}`);
       let result= await data.json();
       console.log(result);
       result_data.innerHTML="";
       
       for(let i=0;i<2;i++){
      result_data.innerHTML+=

         `
         
         <div class="container">
         
           <div class="card">
             <div class="card-header">
             <div class="card-title">TOP-${i+1}</div>
              
             </div>
             <div class="card-body" style="color:white;">

             Country_id:${result.country[i].country_id}<br>
             Probability :${result.country[i].probability}<br><br>

             </div>
           </div>
         </div>
           `
       }
       
    }
    catch{
        console.log(error);
    }
    
}
});

var container_data = document.querySelector('.card');
reset_btn.addEventListener("click",()=>{
document.querySelector('.result').style.display="none";
search_text.value="";
result_data.innerHTML=" ";

});
