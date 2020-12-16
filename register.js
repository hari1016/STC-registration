function validate(){
    var uname=document.getElementById("uname");
    var password=document.getElementById("password");
    var cpassword=document.getElementById("cpassword");
    var test1= /[a-z]/;
    var test2=/[A-Z]/;
    var test3=/[0-9]/; 
    if(uname.value.length<8)
    {
        uname.style.border="solid 2px red";
        document.getElementById("eruname").style.visibility="visible";
        return false;
    }
    else if (!test1.test(password.value) || !test2.test(password.value) || !test3.test(password.value) || password.value.length<8)
    {
        password.style.border="solid 2px red";
        document.getElementById("erpassword").style.visibility="visible";
        return false;
    }
    else if (password.value != cpassword.value)
    {
        cpassword.style.border="solid 2px red";
        document.getElementById("nomatch").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }
}