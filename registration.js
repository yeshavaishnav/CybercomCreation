function addData()
{
var cityList = document.getElementById('city');
var stateList = document.getElementById('state');
var admin = {
    name: document.getElementById('name').value,
    email: document.getElementById('r_email').value,
    password: document.getElementById('r_password').value,
    city: cityList.options[cityList.selectedIndex].value,
    state: stateList.options[stateList.selectedIndex].value    
}
var adminDetails = JSON.stringify(admin);
window.localStorage.setItem('admin',adminDetails);
console.log("admin details added");
window.open("login.html",self);
}


        
      