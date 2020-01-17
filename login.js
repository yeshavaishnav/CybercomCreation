var admin = JSON.parse(window.localStorage.getItem('admin'));
var user = JSON.parse(window.localStorage.getItem('user'));
if(admin!=null)
{
    document.getElementById('register').style.visibility = "hidden";
    document.getElementById('reg').style.visibility = "hidden";
    
    
    
}
function login()
{
    var a_email,a_password,u_email,u_password;
    a_email = admin.email;
    a_password = admin.password;
    var match = 0;
    u_email = document.getElementById('email').value;
    u_password = document.getElementById('password').value;
    if(a_email == document.getElementById('email').value && a_password == document.getElementById('password').value)
    {
        window.open("dashboard.html",self);
    }
    else
    {
       user.forEach(users => {
            if(users.email==u_email && users.password==u_password)
            {
                match = 1;
            }
           
       });
       if(match!=0)
       {
           window.open("sub-user.html",self);
       }

    }
}
