
function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["password"].value;

  if (x == "" && y == "") {
    alert("Email and password must be filled out");
    return false;
  }else if(x==""){
    alert("Email must be filled out");
    return false;
  }else if(y==""){
    alert("Password must be filled out");
    return false;
  }

  if(y.length<8){
    alert("Password must be minimum 8 characters");
    return false;
  }else{
      alert("Successfully logged in")
  }
}
