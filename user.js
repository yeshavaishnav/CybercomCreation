var userarray = [];
var ages = [];
userarray = JSON.parse(window.localStorage.getItem('user'));
ages = JSON.parse(window.localStorage.getItem('ages'));
userarray.forEach(user =>{
    var newRow = myTable.insertRow();
    newRow.insertCell(0).innerHTML = user.name;
    newRow.insertCell(1).innerHTML = user.email;
    newRow.insertCell(2).innerHTML = user.password;
    newRow.insertCell(3).innerHTML = user.birthdate;
    newRow.insertCell(4).innerHTML = user.age;
   
  
  
  });   

function display()
{
    
    var today = new Date();
    var date = new Date(document.getElementById('dateOfBirth').value);
   userarray = JSON.parse(window.localStorage.getItem('user'));
   ages = JSON.parse(window.localStorage.getItem('ages'));
var todayDate = today.getDate();
var user = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    password : document.getElementById('password').value,
    birthdate: date,
    age: (today.getFullYear() - date.getFullYear()),
    loginTime : today 
}

ages.push(user.age);



   userarray.push(user);
   var userDetails = JSON.stringify(userarray);
   window.localStorage.setItem('user',userDetails);
   
   //console.log("data stored");
   
        var newRow = myTable.insertRow();
        newRow.insertCell(0).innerHTML = user.name;
        newRow.insertCell(1).innerHTML = user.email;
        newRow.insertCell(2).innerHTML = user.password;
        newRow.insertCell(3).innerHTML = user.birthdate;
        newRow.insertCell(4).innerHTML = user.age;
        
       
      
      
      window.localStorage.setItem('ages',JSON.stringify(ages));
      window.localStorage.setItem('user',JSON.stringify(userarray));
}