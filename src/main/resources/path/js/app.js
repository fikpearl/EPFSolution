
function ourformdata(){

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const fnfield = document.querySelector('firstNameField').value = "Pearl";
    const lnfield = document.querySelector('LastNameField').value = "Gqibitole";
    const dofb = document.querySelector('DateOfBirthField').value = "02/06/20203";
});

    /*fetch("https://github.com/fikpearl/EPFSolution/blob/2eca461608f4947d49f192428566a3d3eae9564b/Data/Financial%20Records.xlsx", {
      method: "POST",
      body: JSON.stringify(fnfield,lnfield,dofb)})
})
    
    .then((data) => data.json())
    .then((data) => {*/
      
function verifyName(){

    if(fnfield.value == null && lnfield.value == null && dofb.value == null){
        document.getElementById("submit_button").disabled = true;
    }
    else {
        
        document.getElementById("submit_button").disabled = false;
}