

// Import EmailJS
//import emailjs from 'emailjs-com';

// Get the form element
const form = document.getElementById('payment-form');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
 const email = document.getElementById('email').value;
 const phoneNumber = document.getElementById('phone-number').value;
 const firstName = document.getElementById('First-Name').value;
 const middleName = document.getElementById('Middle-Name').value;
 const lastName = document.getElementById('Last-Name').value;
 const address = document.getElementById('address').value;

  // Check if all fields are filled
  if (!lastName || !firstName || !middleName  || !email || !phoneNumber) {
    alert('Please fill all details');
    return;
  }

  // Send the form data to EmailJSx 
  emailjs.send('service_m1cmgxs', 'template_z9d8ook', {
   
   
    email: email,
    first_Name: firstName,
    middlename: middleName,
    lastname: lastName,
    phone_number: phoneNumber,
    address: address
    
  })
  .then((response) => {
    console.log('Success!', response.status, response.text);
    alert('Details submitted for payment');
    // Reset the form
    form.reset();

    // Add the condition to load another page with file path
  window.location.href = 'sumbit.html';
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});   