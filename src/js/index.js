// Selecting these divs by .getElementById to ensure that they are unique and not clasases that may be used on multiple elements 
const form = document.getElementById('form');
const fName = document.getElementById('fname').children;
const lName = document.getElementById('lname').children;
const email = document.getElementById('email').children;
const password = document.getElementById('password').children;



function validateInput(item){

    /* item[1] is the child of item at index position [1]. The input tag */
    /* item[2] is the child of item at index position [2]. The paragraph element with the class error-message */

    if(item[1].value.length === 0){
        item[1].classList.add('incorrect'); 
        item[1].placeholder="";
        item[1].value="";
        item[2].classList.remove('none'); 
    } else {
        item[1].classList.remove('incorrect');
        item[1].placeholder="";
        item[2].classList.add('none');
    }
}

function validateEmail(item){

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = regexEmail.test(item[1].value);

    if(item[1].value.length === 0 || !emailValid){
        item[1].classList.add('incorrect');
        item[1].placeholder="email@example.com";
        item[1].value="";
        item[2].classList.remove('none');
    } else {
        item[1].classList.remove('incorrect');
        item[2].classList.add('none');
    }
}

function validatePassword(item){  
    
    // Currently this function is the same as validateInput() 
    // In the future though further validation conditions that are specific to the password field may be implemented
    // When further validation conditions are added consider - edit innerHTML text in function for specific error message

    if(item[1].value.length === 0){
        item[1].classList.add('incorrect');
        item[1].placeholder="";
        item[1].value="";
        item[2].classList.remove('none'); 
    } else {
        item[1].classList.remove('incorrect');
        item[1].placeholder="";
        item[2].classList.add('none');
    }
}


function validate(){
    validateInput(fName);
    validateInput(lName);
    validateEmail(email);
    validatePassword(password);
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
});