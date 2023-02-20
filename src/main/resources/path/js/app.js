/* here we have code  that starts by adding an event listener to the form.
    The submit event is triggered when a user submits their information into the form.
    Then, it sets up two variables: fnfield and lnfield.
    These are set to "Pearl" and "Gqibitole", respectively.
    Next, it creates a DateOfBirthField variable called dofb with the value of 02/06/20203.

    This function has one parameter: event which is passed in from the submit event that was just created on line 2 of this code snippet (event).
    The function starts by preventing any default behavior for the submit event so that no error messages pop up or anything like that happens when someone submits their information into this form (line 4).
    It then adds an EventListener to the firstNameField field with its addEventListener method (line 5) and assigns it a callback function named handleSubmit(event) where we assign some logic for handling what happens when someone fills out this field (lines 6-7).
    Next, we create another EventListener on LastNameField with its addEventListener method and assign it a callback
    The code prevents the form from submitting when the user clicks on submit.
.*/

function ourformdata(){

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const fnfield = document.querySelector('firstNameField').value = "Pearl";
    const lnfield = document.querySelector('LastNameField').value = "Gqibitole";
    const dofb = document.querySelector('DateOfBirthField').value = "02/06/20203";

    if(fnfield.value == null && lnfield.value == null && dofb.value == null){
        return document.getElementById("submit_button").disabled = true;
    }
    else {
        
        return document.getElementById("submit_button").disabled = false;
    }
}

