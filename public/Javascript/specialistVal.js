const name1 = document.specialistRegForm.fname;
const name2= document.specialistRegForm.lname;
const  gender1= document.specialistRegForm.gender;
const spec1 = document.specialistRegForm.specialisation;
const location1= document.specialistRegForm.location;
const telephone = document.specialistRegForm.telephoneNo;
 const email1 = document.specialistRegForm.email;


const fname2 = document
  .querySelector('.fname_info');
const lname2 = document
    .querySelector('.lname_info');
const gender2 = document
    .querySelector('.gender_info');

 const spec = document
  .querySelector('.spec1_info');
const location2 = document
 .querySelector('.location_info');
 const phone2 = document
 .querySelector('.telephoneNo_info');
 const email2 = document
   .querySelector('.email_info');






const nameFunction = () => {

const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/

if (name1.value === '') {
fname2.textContent = ' First name can not be empty!';
name1.style.border = '2px solid red';
name1.focus();
event.preventDefault();
} else {
if (name1.value.length < min) {
name1.focus();
name1.style.border = '2px solid red';
fname2.textContent =  "First name can not be less than 2 characters!";
event.preventDefault();
}else{
if(name1.value.length>max){
name1.focus();
fname2.textContent = ' First name can not be more than 25 characters!';
name1.style.border = '2px solid red'
event.preventDefault();
} else {
if (!name1.value.match(letters)) {
name1.focus();
name1.style.border = '2px solid red';
fname2.textContent = ' First name must start with capital letter!';
e.preventDefault();
return false;
} 
return true;
} 
return true;
} 
return true;
};
}



const nameFunction1 = () => {

const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/

if (name2.value === '') {
lname2.textContent = ' Last name can not be empty!';
name2.style.border = '2px solid red';
name2.focus();
event.preventDefault();
}else {
if (name2.value.length < min) {
name2.focus();
name2.style.border = '2px solid red';
lname2.textContent = ' Last name can not be less than 2 characters!';
event.preventDefault();
}else{
if(name2.value.length>max){
lname2.textContent = ' Last name can not be longer than 25 characters!';
name2.focus();
name2.style.border = '2px solid red'
event.preventDefault();
}else{
if (!name2.value.match(letters)) {
name2.focus();
name2.style.border = '2px solid red';
lname2.textContent = ' Last name can only start with capital letter!';
return false;
} 
return true;
} 
return true;
} 
return true;
}
}




const telephoneFunction = () => {

  const reg6 = /[+256][0-9]{9}/

  if (telephone.value === ''){
    telephone.style.border = '2px solid red';
    phone2.textContent = ' Phone can not be empty!';
    telephone.focus();
    event.preventDefault();
  }else{
  if(!telephone.value.match(reg6)){
    telephone.style.border = '2px solid red';
    phone2.textContent = ' Follow the format +256000000000!';
    telephone.focus();
    event.preventDefault();
  }
  }
};



const emailFunction = () => {
  if(email1.value === ''){
    email2.style.border = '2px solid red';
    email1.focus();
    event.preventDefault();
  }else{
    return true;
  }
  return true;
  };



const genderFunction = ()=>{
if(gender1.value === ''){
gender1.style.border= '2px solid red';
gender2.textContent = ' Gender can not be empty!';
gender1.focus();
event.preventDefault();
}else{
return true;
}
return true
};

const locationFunction = ()=>{
  if(location1.value === ''){
  location1.style.border= '2px solid red';
  location2.textContent = ' location can not be empty!';
  location1.focus();
  event.preventDefault();
  }else{
  return true;
  }
  return true
  };
  
const specFunction = ()=>{
  if(spec1.value === ''){
  spec1.style.border= '2px solid red';
  spec.textContent = ' specialisation can not be empty!';
  spec1.focus();
  event.preventDefault();
  }else{
  return true;
  }
  return true
  };




  

  const validation = () => {
  nameFunction();
  nameFunction1();
  
  locationFunction();
  genderFunction();
  telephoneFunction();
  
  specFunction();
  emailFunction();



};
document.specialistRegForm.addEventListener('submit', validation); // Watches the validity of data filled in.