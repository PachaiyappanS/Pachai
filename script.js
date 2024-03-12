function validateForm(event) {
  event.preventDefault(); 
 
  
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var regName= /^[a-zA-Z]+[a-zA-z]+$/;
 

  
 

 
 
  if (name.trim() === ""| !regName.test(name)) {
    alert('Please enter your name');

    return false;
  }


 
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  
  else{
    alert('form submitted successfully')
  }

 
  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return false;
  }

}


 
  

  


