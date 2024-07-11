const form =document.getElementById("loginform");

const nome=document.getElementById("nome");
const ms1=document.getElementById("messaggio1");

const email=document.getElementById("email");
const ms2=document.getElementById("messaggio2");

const password=document.getElementById("password");
const ms3=document.getElementById("messaggio3");

const button=document.getElementById("button");

form.onsubmit = function(e){
    e.preventDefault();
    let error=false
    console.log("click")
    if(nome.value==""){
        error=true
        ms1.innerHTML = "<br>Inserisci Nome e cognome"
        ms1.classList.add("errore")
    }else {
        error=false
        ms1.innerHTML =""
        ms1.classList.add("errore")

    }
    if(email.value==""){
        error=true
        ms2.innerHTML = "<br>Inserisci Email/Username "
        ms2.classList.add("errore")
    }else {
        error=false
        ms2.innerHTML =""
        ms2.classList.add("errore")

    }
    if(password.value==""){
        error=true
        ms3.innerHTML = "<br>Inserisci password "
        ms3.classList.add("errore")
    }else {
        error=false
        ms3.innerHTML =""
        ms3.classList.add("errore")

    }
    nome.onblur=function(){
        if(nome.value==""){
            error=true
            ms1.innerHTML = "<br>Inserisci Nome e cognome"
            ms1.classList.add("errore")
        }else {
            error=false
            ms1.innerHTML =""
            ms1.classList.add("errore")
    
        }

    }
    email.onblur=function(){
        if(email.value==""){
            error=true
            ms2.innerHTML = "<br>Inserisci Email/Username "
            ms2.classList.add("errore")
        }else {
            error=false
            ms2.innerHTML =""
            ms2.classList.add("errore")
    
        }

    }
    password.onblur=function(){
        if(password.value==""){
            error=true
            ms3.innerHTML = "<br>Inserisci password "
            ms3.classList.add("errore")
        }else {
            error=false
            ms3.innerHTML =""
            ms3.classList.add("errore")
    
        }

}
if(error==false){
    setTimeout (
        function (){
            alert("Registrazione avvenuta")
            console.log("Registrazione avvenuta")
            form.submit()
        },2000
    )
    

}else {
    alert("Errore inserisci i dati")
    console.log("Errore inserisci i dati")

}
}