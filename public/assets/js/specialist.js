// Initializing variables and assigning them.
const fname1 = document.form.firstname;
const lname1= document.form.lastname;
const  gender1= document.form.gender;
const age1 = document.form.specialisation;


const location1 = document.form.location;
const phone1 = document.form.telephoneNo;
const email = document.form.email;


const fname2 = document
  .querySelector('.firstname_info');
const lname2 = document
    .querySelector('.lname_info');
const gender2 = document
    .querySelector('.gender_info');

const age2 = document
  .querySelector('.age_info');

const location2 = document
  .querySelector('.location2_info');
const phone2 = document
  .querySelector('.telephoneNo_info');
const email2 = document
  .querySelector('.email_info');


   /** Validating first name so that it is not empty,
    it starts with a capital letter,it is not less than two characters and not more than 25.*/
const fnameFunction = () => {

const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/

if (fname1.value === '') {

fname2.textContent = ' First name can not be empty!';
fname1.focus();
event.preventDefault();
} else {
if (fname1.value.length < min) {
fname1.focus();
fname1.style.border = '2px solid red';
fname2.textContent = ' First can not be less than 2 characters!';
event.preventDefault();
}else{
if(fname1.value.length>max){
fname1.focus();
fname1.style.border = '2px solid red'
event.preventDefault();
fname2.textContent = ' First name can not be more than 25 characters!';
} else {
if (!fname1.value.match(letters)) {
fname1.focus();
fname1.style.border = '2px solid red';
fname2.textContent = ' First name must start with capital letters!';
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

/** Validating last name so that it is not empty,
it starts with a capital letter,it is not less than two characters and not more than 25.*/
const lnameFunction = () =>{
const min = 2;
const max = 25;
const letters = /^[A-Z]+[a-zA-Z]*$/ 

if (lname1.value === '') {
lname1.style.border = '2px solid red';
lname1.focus();
lname2.textContent = ' Last name can not be empty!';
event.preventDefault();
} else {
if (lname1.value.length < min) {
lname1.focus();
lname1.style.border = '2px solid red';
lname2.textContent = 'Last name must be atleast two letters.';
event.preventDefault();
}else{
if(lname1.value.length>max){
lname1.focus();
lname1.style.border = '2px solid red'
lname2.textContent = 'Last name must have maximum of 25 characters.';
event.preventDefault();
} else {
if (!lname1.value.match(letters)) {
lname1.focus();
lname1.style.border = '2px solid red';
lname2.textContent = 'Last name must start with capital letter';
event.preventDefault();
return false;
} 
return true;
} 
return true;
} 
return true;
}         
} 

/** Validating gender that it can not be empty.*/

const genderFunction = () => {
    if(gender1.value===''){
    gender1.style.border = '2px solid red'
    
    gender2.textContent = 'Gender can not be none';
    event.preventDefault();
    return false;
    } else {
    return true;
    }
    return true;

};

/** Validating age that it can not be empty.*/
const ageFunction = () => {
    if(age1.value===''){
    age1.style.border = '2px solid red'
    
    age2.textContent = 'Age can not be none';
    event.preventDefault();
    return false;
    } else {
    return true;
    }
    return true;

};

    /** Validating  NIN that it can not be empty and that it must be in the correct format.*/
    
    const nin1Function = () => {
    //const min2 = 14;
    const reg2 = /[A-Z]{2}[0-9]{8}[A-Z]{2}[0-9]{1}[A-Z]{1}/
        
        if(nin1 .value === ''){
        nin1 .style.border= '2px solid red';
        nin2.textContent = 'NIN can not be empty!'
        nin1.focus();
        event.preventDefault();
        
        }else{
        
        if(!nin1.value.match(reg2)){
        nin1.focus();
        nin1.style.border = '2px solid red'
        nin2.textContent ='Please insert the correct NIN format.'
        event.preventDefault();
        return false; 
        }
        
        return true;
        }
        return true;
        }


                       

const dateFunction = () => {
    const dateformat = /^(0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])[- /.] (19|20)\d\d$/
    
    if(!date1.value.match(dateformat)){

    

    if(date1.value===''){
        date1.style.border = '2px solid red'
        date2.textContent = 'DoB can not be empty';
        event.preventDefault();
        return false;
    }
    return true;
    }
}

        
    
/** Validating not to be empty not be empty.*/
const locationFunction = () => {
    if(location1.value===''){
        location1.style.border = '2px solid red'
        //location2.textContent = 'Please fill in location'
        event.preventDefault();
        return false;
    } else {
        return true;
    }
    return true;
    
    };  

    /** Validating phone number not to be empty and to start with +256(format +256770000000)*/
const telephoneFunction = () => {

    const reg6 = /[+256][0-9]{9}/

    if (phone1.value === ''){
    phone1.style.border = '2px solid red';
    //phone2.alert = 'Please fill in phone number.'
    phone1.focus();
    event.preventDefault();
    }else{
    if(!phone1.value.match(reg6)){
    phone1.style.border = '2px solid red';
    alert('use the +256xxxxxxxxx');
    phone1.focus();
    event.preventDefault();
    }
    }
    } 

    /** Validating role not to be empty not be empty.*/
const roleFunction = () => {
    if(role1.value===''){
        role1.style.border = '2px solid red'
        role2.textContent = 'Please fill in the role.'
        event.preventDefault();
        return false;
    } else {
        return true;
    }
    return true;
    
    };  
    
    
    
const validation = () => {
    fnameFunction();
    lnameFunction();
    genderFunction();
    ageFunction();
    nin1Function();
    telephoneFunction();
    roleFunction();
    locationFunction();
    dateFunction();


};

document.form.addEventListener('submit', validation); // Watches the validity of data filled in.