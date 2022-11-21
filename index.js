/*fetch("https://www.breakingbadapi.com/api/")
.then( function(respons){
   return  respons.json()
})
.then(function(data){
    console.log(data);
    
})
*/
const api = "https://www.breakingbadapi.com/api/characters"
async function get() {
    
    const respons = await fetch(api)
    const data = await respons.json()
    console.log(data);
    printData(data)



    function printData(data){
        const heade = document.querySelector("#content")
        
        heade.innerHTML += `
        <select onchange="getCh(this.value)">
        ${data.map(actor =>`<option>${actor.name}</option>`)}</select>
        
        `  
   
}
}
 async function getCh(name) {
    const respons = await fetch(`${api}?name=${name}`)
    const data = await respons.json();
    const option = document.querySelector("#optino");
    option.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>  
    <h4>${data[0].portrayed}</h4>
    <img src = "${data[0].img}" width ="250px"> 

    `
}
get()