var users = JSON.parse(window.localStorage.getItem('user'));
var table = document.getElementById('myTable');
users.forEach(user =>{
    var newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = user.name;
    newRow.insertCell(1).innerHTML = user.loginTime;
      
  
  });