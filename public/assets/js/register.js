const user1 = document.registerForm.username;
//const password = document.registerForm.password1;



const user2 = document
    .querySelector('.username_info');
const pass2 = document
  .querySelector('.password_info');


    const userNameFunction = () =>{

        const reg6 = /[CIU][0-9]{4}/
        
          if (user1.value === ''){
            user1.style.border = '2px solid red';
            user2.textContent = 'user name can not empty!';
            user1.focus();
            event.preventDefault();
          }else{
          if(!user1.value.match(reg6)){
            user1.style.border = '2px solid red';
            user2.textContent = ' User name must start with CIU followed by 4 letters!';
            user1.focus();
            event.preventDefault();
          }
          }
        }
        
        
        /**Validating password so that it can not be left empty.
         * It should have a maximum of 15 characters and a minimum of 15 characters.
         * It should have small and capital letters with numbers and atleast a special character.
         */
        const passwordFunction = () => {
        
          const min4 = 8;
          const max4 = 15;
          const reg5 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/
        
        if(password.value === '') {
        pass2.textContent = ' Password can not empty!';
        password.style.border = '2px solid red';
          password.focus();
          event.preventDefault ();
        } else {
        if(password.value < min4){
        pass2.textContent = ' Pass word can not be less than 8 characters!';
        password.style.border = '2px solid red';
          password.focus();
          event.preventDefault ();
          } else {
        if(password.value > max4){
        pass2.textContent = ' password can not be more than 15 characters!';
        password.style.border = '2px solid red';
          password.focus();
          event.preventDefault ();
          } else {
        if(!password.value.match(reg5)){
        pass2.textContent = ' pass word must have capital and small letters with special character and numbers!';
        password.style.border = '2px solid red';
          password.focus();
          event.preventDefault ();
          }
        
          return false;
          } 
        return true;
        } 
        return true;
        }
        return true;
          };
        
        
        const validation = () => {
          
          userNameFunction();
          passwordFunction();  
          };
          document.registerForm.addEventListener('submit', validation); // Watches the validity of data filled in.