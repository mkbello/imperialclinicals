const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let subject = document.getElementById('subject');

contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
let formData = {
name: name.value,
email: email.value,
message: message.value,
subject: subject.value
}


let xhr = new XMLHttpRequest();
 xhr.open('POST', '/contact');
 xhr.setRequestHeader('content-type', 'application/json');
 xhr.onload = function(){
   console.log(xhr.responseText);
   if(xhr.responseText == 'success'){
     alert('Message Successfully Sent!');
     name.value = '';
     email.value = '';
     message.value = '';
     subject.value = '';
   }else{
     alert('Something went wrong')
   }
 }
xhr.send(JSON.stringify(formData));
})
