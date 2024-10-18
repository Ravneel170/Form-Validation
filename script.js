const form = document.querySelector ('form');

const username = document.querySelector('#username');

const email = document.querySelector('#email')

const password = document.querySelector('#password');

const cpassword = document.querySelector('#cpassword');

const btn = document.querySelector('#btn');

const input = document.querySelector('input');



form.addEventListener('submit', (event) => {

   event.preventDefault();

   validate();
})


function validate () {

    const usernamevalue = username.value.trim();

    const emailvalue = email.value.trim();

    const passwordvalue = password.value.trim();

    const cpasswordvalue = cpassword.value.trim();
   
    
    if (usernamevalue === '') {

       setError (username, 'valid username required')
    
      }  else {

         setsuccess (username)
      
        }
        
        if (passwordvalue === '') {

            
            setError (password, 'please put-in a password')
        
          } else if (passwordvalue.length < 8) {

              setError (password, 'please put-in at least 8 characters')
          
            } else {

               setsuccess (password);
           
              } 

              if (cpasswordvalue !== passwordvalue) {

                 setError (cpassword, 'did not match, please confirm the password')
              
                } else if (cpasswordvalue === '') {

                  setError (cpassword, 'cannot leave this empty')
                
                }
                
                else {

                   setsuccess (cpassword);
                
                  } if (emailvalue === '') {

                     setError (email, 'Email Required')
                  
                    } else if (!isValid(emailvalue)) {

                      setError (email, 'Please enter a valid email');
                    
                    } else {

                      setsuccess (email);
                    }
  }  


 function  setError (element, message) {

       const upper = element.parentElement;

       error = upper.querySelector('.error');

       error.innerText = message;

       element.classList.add ('error-border');
       element.classList.remove ('success-border');    
  }



  function setsuccess (element) {

      const upper = element.parentElement;

      error = upper.querySelector('.error');

      error.innerText = '';

       element.classList.add('success-border');

       element.classList.remove('erro-border');
  }



  function isValid (email) {

     const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return reg.test(email);
  }