let data=""
const wrapper = document.getElementById("wrapper")

//modifies database
async function addEvent(){
    method: "POST",
    body: JSON.stringify({
        name: InputDeviceInfo;
    })

    async function removeEvent(){
        method: "DELETE",
    }
}


//grabs initial promise
async function getAllEvents(results){

    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
    return await response.json();
   
    

}



 //allows use of the results of promise

 getAllEvents().then((response)=>{

    response.results.forEach((itm)=>{
         createCard(itm)
    })
 })
  

    

//creates elements for party cards

function createCard(info){
    const ele = document.createElement("div");
    const nameEle= document.createElement("h1");
    nameEle.innerHTML=info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);
    

}







