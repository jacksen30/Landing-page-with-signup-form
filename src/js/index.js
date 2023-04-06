const form = document.getElementById('form');
const fName = document.getElementById('fname').children
const lName = document.getElementById('lname').children
/* 
const lastName = document.getElementById('last-name').children
const email = document.getElementById('email').children
const password = document.getElementById('password').children
*/



function validateInput(item){


    if(item[1].value.length === 0){
        item[1].classList.add('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) */
        item[1].placeholder="";
        item[1].value="";
        item[2].classList.remove('none'); /* item 2 is error message p tag */
    } else {
        item[1].classList.remove('incorrect'); /* item 1 is the input tag (effectively its is fName.children/child[1]) */
        item[1].placeholder="";
        item[2].classList.add('none');
    }
}

function validateEmail(item){

    if(item[0].value.length === 0 || !item[0].value.includes('@')){
        item[0].classList.add('incorrect');
        item[0].placeholder="email@example/com";
        item[0].value="";
        item[1].classList.remove('none');
    } else {
        item[0].classList.remove('incorrect');
        item[1].classList.add('none');
    }
}


function validate(){
    validateInput(fName);
    validateInput(lName);
    /*
    validateInput(lastName);
    validateEmail(email);
    validateInput(password);
    */
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
    

});