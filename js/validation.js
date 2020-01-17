function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (name != "") {
    if (email.match(emailReg)) {
      if (message.length >= 6) {
        return true;
      } else {
        alert("Message Must Atleast Be of 6 Characters!");
        return false;
      }
    } else {
      alert("You must enter a valid Email ID !");
      return false;
    }
  } else {
    alert("Please Enter Your Name!");
    return false;
  }
}
