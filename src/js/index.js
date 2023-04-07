const form = document.getElementById('form');
const fName = document.getElementById('fname').children;
const lName = document.getElementById('lname').children;
const email = document.getElementById('email').children;
const password = document.getElementById('password').children;



function validateInput(item){

    if(item[1].value.length === 0){
        item[1].classList.add('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) example is for validateInput(fName); */
        item[1].placeholder="";
        item[1].value="";
        item[2].classList.remove('none'); /* item 2 is error message p tag */
    } else {
        item[1].classList.remove('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) example is for validateInput(fName); */
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

function validatePassword(item){  /* Need to add further password validation conditions as well as edit innerHTML text for error message */

    if(item[1].value.length === 0){
        item[1].classList.add('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) example is for validateInput(fName); */
        item[1].placeholder="";
        item[1].value="";
        item[2].classList.remove('none'); /* item 2 is error message p tag */
    } else {
        item[1].classList.remove('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) example is for validateInput(fName); */
        item[1].placeholder="";
        item[2].classList.add('none');
    }
}



function validate(){
    validateInput(fName);
    validateInput(lName);
    validateEmail(email);
    validateInput(password);
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
});