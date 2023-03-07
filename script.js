const hamburger = document.querySelector('.hamburger i');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=>{
      hamburger.classList.toggle('fa-xmark');
      navbar.classList.toggle('slide');
});

const form = document.getElementById("form");
var lname = document.getElementById("l-name");
var lerror = document.getElementById("namerror");
var table = document.getElementById("l-table");
var terror = document.getElementById("tablerror");
var guest = document.getElementById("l-guest");
var gerror = document.getElementById("guesterror");

function namevalidate(){
    if(lname.value === ""){
        lerror.innerHTML = "name caanot be empty"; 
        lname.style.borderColor = "red";
        return false;
    }

    else if(lname.value.length < 5 || lname.value.length > 15){
        lerror.innerHTML = "min 5 and max 15 characters"; 
        lname.style.borderColor= "red";
        return false;
    }

    else{
        lerror.innerHTML = ""; 
        lname.style.borderColor= "green";
        return true;
    }
}

function tablevalidate(){
    if(table.value === ""){
        terror.innerHTML = "please enter your number";
        table.style.borderColor = "red";
        return false;
    }

    else if((isNaN(table.value) || table.value.length < 3 || table.value.length > 3 )){
        terror.innerHTML = "enter your number correctly and only 3 digits";
        table.style.borderColor = "red";
        return false;
    }

    else{
        terror.innerHTML = "";
        table.style.borderColor = "green";
        return true;
    }
}

function guestvalidate(){
    if(guest.value === ""){
        gerror.innerHTML = "please enter how guests";
        guest.style.borderColor = "red"
        return false;
    }

    else{
      gerror.innerHTML = "";
      guest.style.borderColor = "green";
      return true;
   }
}


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
});

function checkinput(){
    const name = lname.value.trim();
    const ltable = table.value.trim();
    const lguest = guest.value.trim();

    document.write("Name:"+ lguest+ "<br>");
    document.write("table no:" + ltable +"<br>");
    document.write("guests:"+ lguest + "<br>");
}