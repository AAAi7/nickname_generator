//<label id="description">Enter your first and last name below.</label>
var nicknames = ["Nugget","Teacup","Shortie","Smarty","the Boomer","crusher","the nerd","Amigo"];
function generate(firstname,lastname)
{
    let divv=document.getElementById("resultslist");
    divv.innerHTML+="";
    let random=Math.round(Math.random()*7);
    let nn;
    nn=nicknames[random];
    
    divv.innerHTML="<label class='item'>"+firstname+" "+nn+" "+lastname+"</label>";

}
function generateall(firstname,lastname)
{
    let divv=document.getElementById("resultslist");
    divv.innerHTML="";
    let i=nicknames.length;

    for(let k=0;k<i;k++)
    {
        //window.alert("s");

        let nn=nicknames[k];
        
        divv.innerHTML+="<label class='item'>"+firstname+" "+nn+" "+lastname+"</label>";

    }

}