//For current year
var year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

//Contact US form handling



Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);


