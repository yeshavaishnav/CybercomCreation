var admin = JSON.parse(window.localStorage.getItem('admin'));
var name = admin.name;
document.getElementById('hello').innerHTML = 'Hello , '+name;
var users = JSON.parse(window.localStorage.getItem('user'));
var count18=0,count50=0,countMax=0;
var ages = JSON.parse(window.localStorage.getItem('ages'));
for(let age in ages)
{
    if(age<18)
    {
        count18++;
    }
    else if(age>18 && age<50)
    {
        count50++;
    }
    else if(age>50)
    {
        countMax++;
    }
}
document.getElementById('le18').innerHTML = count18;
document.getElementById('le50').innerHTML = count50;
document.getElementById('ge50').innerHTML = countMax;
