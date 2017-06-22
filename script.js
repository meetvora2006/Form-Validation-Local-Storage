var flag = 0;
var localArr;
var tableArr = [];
window.onload = function() {
  var retrievedData = JSON.parse(localStorage.getItem("MyArr"));
  if (retrievedData !== null) {
    localArr = retrievedData;
    var html = "<table><tr><th>Firstname</th><th>Lastname</th><th>Email</th><th>Username</th></tr>";
    retrievedData.forEach(function(element, i) {

      html += "<tr><td>" + element.Firstname + "</td><td>" + element.Lastname + "</td><td>" + element.email + "</td><td>" + element.Username + "</td></tr>";
    });

    html += "</table>";

    document.getElementById("table").innerHTML = html;
  } else {
    localArr = Array();

  }
  
  
  function handleinput() {

  if(document.getElementsByClassName("error").length === 0) {

  if (document.getElementById('firstname').value === "") {

    document.getElementById('firstname').insertAdjacentHTML('afterend', '<span class="error" id="err_firstname">You must enter Firstname</span>');
   flag = 1;
  }
  
 
  if (document.getElementById('lastname').value === "") {
    document.getElementById('lastname').insertAdjacentHTML('afterend', '<span class="error" id="err_lastname">You must enter Lastname</span>');
    flag = 1;
  }

  if (document.getElementById('email').value === "") {
    document.getElementById('email').insertAdjacentHTML('afterend', '<span class="error" id="err_email">You must enter email</span>');
    flag = 1;
  }
  if (document.getElementById('username').value === "") {
    document.getElementById('username').insertAdjacentHTML('afterend', '<span class="error" id="err_username">You must enter username</span>');
    flag = 1;
  }

  if (document.getElementById('password').value === "") {
    document.getElementById('password').insertAdjacentHTML('afterend', '<span class="error" id="err_password">You must enter password</span>');
    flag = 1;
  }
 
  
  if (flag === 1) {
   
  return false;
  } else {
    
 
    var Myobj = {
      "Firstname": document.loginform.firstname.value,
      "Lastname": document.loginform.lastname.value,
      "email": document.loginform.email.value,
      "Username": document.loginform.username.value,
      "Password": document.loginform.password.value,
    };


    localArr.push(Myobj);

    localStorage.setItem("MyArr", JSON.stringify(localArr));
    
    
    retrievedData1 = JSON.parse(localStorage.getItem('MyArr'));
    var html = "<table><tr><th>Firstname</th><th>Lastname</th><th>Email</th><th>Username</th></tr>";
    retrievedData1.forEach(function(element, i) {

      html += "<tr><td>" + element.Firstname + "</td><td>" + element.Lastname + "</td><td>" + element.email + "</td><td>" + element.Username + "</td></tr>";
    });

    html += "</table>";

    document.getElementById("table").innerHTML = html;
    

    return false;
  }
 
  }
 else{
   return false;
 }
 
}

  document.getElementById("loginform").onsubmit = handleinput;

}





function replaceNextChild(element) {
  flag = 0;
  var x = document.getElementById("err_"+element.id);
  if(x !== null){
  x.remove();}

}