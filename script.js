const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNo');
const password = document.getElementById('password');
const cpassword = document.getElementById('cPassword');

// add event

form.addEventListener('submit', (event)=> {
  event.preventDefault();

  validate();
})

// define the validate function

const validate = () => {
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phoneNo.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cPassword.value.trim();

// more email validate

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if(atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if(dot <= atSymbol + 3) return false;
  if(dot == email.length - 1) return false;
  return true;
}

// validate username

if(usernameVal == ""){
  setErrorMsg(username, 'Username can not be blank');
}else if(usernameVal.length <= 2){
  setErrorMsg(username, 'Username minimum 3 characters');
} else {
  setSuccessMsg(username);
}

// validate email

if(emailVal == ""){
  setErrorMsg(email, 'Email can not be blank');
}else if(!isEmail(emailVal)){
  setErrorMsg(email, 'Not a valid email');
} else {
  setSuccessMsg(email);
}

// validate phone number

if(phoneVal == ""){
  setErrorMsg(phone, 'Phone number can not be blank');
}else if(phoneVal.length != 11){
  setErrorMsg(phone, 'Please enter 11 digits phone number');
} else {
  setSuccessMsg(phone);
}

// validate Password

if(passwordVal == ""){
  setErrorMsg(password, 'Password can not be blank');
}else if(passwordVal.length <= 7){
  setErrorMsg(password, 'Please enter minimum 8 digits password');
} else {
  setSuccessMsg(password);
}


// validate confirm password

if(cpasswordVal == ""){
  setErrorMsg(cpassword, 'Confirm password can not be blank');
}else if(passwordVal != cpasswordVal){
  setErrorMsg(cpassword, 'Your password did not match');
} else {
  setSuccessMsg(cpassword);
}


function setErrorMsg(input, errormsgs){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "form-control error"; 
  small.innerText = errormsgs;
}

function setSuccessMsg(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success"; 
}

}



