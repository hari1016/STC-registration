function calculate()
{
    var total=document.getElementById("total"); 
    let count=0;
    if(document.getElementById("DM").checked)
    {
        count+=4;
    }
    if(document.getElementById("EP").checked)
    {
        count+=3;
    }
    if(document.getElementById("DSA").checked)
    {
        count+=4;
    }
    if(document.getElementById("OS").checked)
    {
        count+=4;
    }
    if(document.getElementById("FD").checked)
    {
        count+=3;
    }
    if(document.getElementById("EC").checked)
    {
        count+=3;
    }
    if(document.getElementById("AI").checked)
    {
        count+=4;
    }
    if(document.getElementById("CC").checked)
    {
        count+=4;
    }
    total.innerHTML=count;
}