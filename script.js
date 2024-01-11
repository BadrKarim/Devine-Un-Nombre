let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secretNumber = Math.floor(Math.random() * 100);
let attemps = 10

button.onclick = function(){
    const input = document.getElementById('input');
    if(input.value != ""){
        if(input.value < secretNumber){
            message.innerText = "le nombre est plus grand que " + input.value + '';
            message.style.color = "#999"
        }else if(input.value > secretNumber){
            message.innerText = "le nombre est plus petit que " + input.value + '';
            message.style.color = "#999"
        }

        if(attemps == 0){
            message.innerText = "Vous avez perdu, il fallait deviné " + secretNumber + '';
            message.style.color = "red";
            form.style.display = "none";
            link.style.display = "flex";
        }
        attemps--;

        if(input.value == secretNumber){
            message.innerText = "Félicitation, vous avez trouvé le nombre mistère : " + secretNumber + " !"
            message.style.color = "green";
            form.style.display = "none";
            link.style.display = "flex";
        }

    }else{
        message.innerText = "le champ est vide !";
        message.style.color = "red";
    }
}