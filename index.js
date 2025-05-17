let current = "block"
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
}