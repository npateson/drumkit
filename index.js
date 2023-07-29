function makeSound(key) {
    switch (key) {     
        case 'w':
        let tom1 = new Audio('./sounds/tom-1.mp3');   
        tom1.play();
        break;
        
        case 'a':
        let audio1 = new Audio('./sounds/tom-2.mp3');
        audio1.play();
        break;

        case 's':
        let audio2 = new Audio('./sounds/tom-3.mp3');
        audio2.play();
        break;

        case "d":
        let audio3 = new Audio('./sounds/tom-4.mp3');
        audio3.play();
        break;

        case "j":
        let audio4 = new Audio('./sounds/kick-bass.mp3');
        audio4.play();
        break;

        case "k":
        let audio5 = new Audio('./sounds/snare.mp3');
        audio5.play();
        break;
        case "l":
            let audio6 = new Audio('./sounds/crash.mp3');
            audio6.play();
            break;
        
        default: 
        // alert(key);  
     }
}

function animateButton(key) {
    ActiveButton = document.querySelector("." + key)
    ActiveButton.classList.add('pressed');
    setTimeout(function(){
        ActiveButton.classList.remove('pressed');
    }, 100)

}



for (let i=0; i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let keyClicked = this.innerHTML;
    makeSound(keyClicked); 
    animateButton(keyClicked)       
    })
};

document.addEventListener("keydown", function(event){
    let keyPressed = event.key;
    makeSound(keyPressed);
   animateButton(keyPressed)
})



let student1 = {
    name : "Fabrice",
    age : 29,
    languages : ['pidgin', 'English', 'French'],
    canCook : true,
    cookFood : function (){
          let food = 'eru';
          return food;
    }
}

function Student(name, age, languages, canCook){
     
  }

let student2 = new Student('Ayotah', 23, ['Englo', 'French', 'Pidgin'], false)


