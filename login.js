const form =document.getElementById("loginform");

const username=document.getElementById("username");
const ms1=document.getElementById("messaggio1");

const password=document.getElementById("password");
const ms2=document.getElementById("messaggio2");

const button=document.getElementById("button");

form.onsubmit = function(e){
    e.preventDefault()
    let error=false
    console.log("clik")
    if(username.value == ""){
        ms1.innerHTML=" <br> Inserisci la tua Email/Username"
        error=true
        ms1.classList.add("errore")
    }else {
        ms1.innerHTML=""
        ms1.classList.remove("errore")
        error=false
    }
    if(password.value == ""){
        ms2.innerHTML=" <br> Inserisci la tua password"
        error=true
        ms2.classList.add("errore")
    }else {
        ms2.innerHTML=""
        ms2.classList.remove("errore")
        error=false
    }
    username.onblur = function(){
        if(username.value == ""){
            ms1.innerHTML=" <br> Inserisci la tua Email/Username"
            error=true
            ms1.classList.add("errore")
        }else {
            ms1.innerHTML=""
            ms1.classList.remove("errore")
            error=false
        }
    }
    password.onblur = function(){
        if(password.value == ""){
            ms2.innerHTML=" <br> Inserisci la tua password"
            error=true
            ms2.classList.add("errore")
           
        }else {
            ms2.innerHTML=""
            ms2.classList.remove("errore")
            error=false
        }

    }
    if(error==false){
        setTimeout (
            function (){
                alert("Login effettuato")
                console.log("Login effettuato")
                form.submit()
            },2000
        )
        

    }else {
        alert("Errore inserisci i dati")
        console.log("Errore inserisci i dati")

    }
 
}