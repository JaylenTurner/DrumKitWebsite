for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let audio;
        let buttonInnerHTML = this.innerHTML;
        buttonAnimation(this.innerHTML);
        switch (buttonInnerHTML){
            case "w":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "a":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "j":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "k":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "l":
                audio = new Audio("sounds/tom-4.mp3");
                break;
            default:
                break;
        }
        audio.play();
    })
}

document.addEventListener("keydown", function (event){
    buttonAnimation(event.key);
    switch (event.key){
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    audio.play();
})

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 100);
}