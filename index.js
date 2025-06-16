let current = "block"
let Login = "false"
let Signup = "false"
let Username = "gfbyt  iuo bYTUHytUIytr ugT67T^R&&^Gf  c&^r8 g7zr697^$ Wz65uhFY  Uihvgextyj hdxftt b  nbugys"
let Password = "CGBED&TKLNY DXT &OJSn ecyo&CR iu yex87 o8yHtxuyzghHGytgveygb u7yDRTJKD4T7SZH"

document.getElementById('SignIn').style.display = 'none';

function disappear()
{
    document.getElementById('ID').style.display = 'none';
    document.getElementById('p').style.display = 'none';
    
}

function appear()
{
    document.getElementById('ID').style.display = 'block';
    document.getElementById('p').style.display = 'block';
}

function toggle()
{
    if(current == "block")
    {
        current = "none"
    }
    else
    {
        current = "block"
    }
    document.getElementById('ID').style.display = current;

}

function signin()
{
    if(Username == prompt("What is your Username?") && Username != "")
    {
        if(prompt("What is your Password?") == Password && Password != "")
        {
            document.getElementById("username").innerText = "Hello, "+ Username
            Login = "true"
            SaveCookie()
        }
    }
    else
    {
        document.getElementById("username").innerText = "Failed To Sign In"
        document.getElementById('button').style.display = "inline"
    }
}
function Info()
{
    if(document.getElementById("Username") == ""){
        return
    }
    Username = document.getElementById('Username').value
    Password = document.getElementById('Password').value
    document.getElementById('SignIn').style.display = "block"
    document.getElementById('Username').value = ""
    document.getElementById('Password').value = ""
    document.getElementById('button').style.display = "none"
    Signup = 'true'
    SaveCookie()
}
function SaveCookie()
{
    document.cookie = "Username=" + Username;
    document.cookie = "Password=" + Password;
    document.cookie = "Login=" + Login;
    document.cookie = "Signup=" + Signup;

}

GetCookie()
if(Login == "true")
{
    document.getElementById('button').style.display = "none";
    document.getElementById("username").innerText = "Hello, "+ Username
}
else if(Login == "false" && Signup == "true")
{
 document.getElementById('button').style.display = "none"
 document.getElementById('SignIn').style.display = 'inline';
}
else{
 document.getElementById('button').style.display = "inline"
 document.getElementById('SignIn').style.display = "none"

}

function GetCookie()
{
let MyCookie = document.cookie.split('; ')
let FindCookie = 'Login'
let UserCookie = 'Username'
let PassCookie = 'Password'
let SignCookie = 'Signup'
for(let i = 0; i<MyCookie.length; i++)
{
    if(MyCookie[i].indexOf(FindCookie) !== -1)
    {
        Login = MyCookie[i].substring(FindCookie.length+1, MyCookie[i].length)
        console.log(Login)
    }
}

for(let i = 0; i<MyCookie.length; i++)
{
    if(MyCookie[i].indexOf(UserCookie) !== -1)
    {
        Username = MyCookie[i].substring(UserCookie.length+1, MyCookie[i].length)
        console.log(Username)
    }
}

for(let i = 0; i<MyCookie.length; i++)
{
    if(MyCookie[i].indexOf(PassCookie) !== -1)
    {
        Password = MyCookie[i].substring(PassCookie.length+1, MyCookie[i].length)
        console.log(Password)
    }
}
for(let i = 0; i<MyCookie.length; i++)
{
    if(MyCookie[i].indexOf(PassCookie) !== -1)
    {
        Password = MyCookie[i].substring(PassCookie.length+1, MyCookie[i].length)
        console.log(Password)
    }
}
for(let i = 0; i<MyCookie.length; i++)
{
    if(MyCookie[i].indexOf(SignCookie) !== -1)
    {
        Signup = MyCookie[i].substring(SignCookie.length+1, MyCookie[i].length)
        console.log(Signup)
    }
}
}