class Game {
    start(){
        this.player = new Player();
        this.player.domElm = this.createDomElm(this.player);
        this.drawDomElm(this.player);
        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener("keydown", (e) => { 
            if(e.key === "ArrowLeft"){
                this.player.moveLeft();
            }else if (e.key === "ArrowRight"){
                this.player.moveRight();
            }
            this.drawDomElm(this.player);
        });
    }

    createDomElm(instance){
        const htmlTag = document.createElement("div"); //create element
        htmlTag.className = instance.className; // add class
        htmlTag.style.width = instance.width + "vw";
        htmlTag.style.height = instance.height + "vh";
        
        const board = document.getElementById("board");// get the parent
        board.appendChild(htmlTag); //add element to parent in the DOM

        return htmlTag;
    }

    drawDomElm(instance){
        instance.domElm.style.bottom = instance.positionY + "vh";
        instance.domElm.style.left = instance.positionX + "vw";
    }
}

class Player {
  constructor() {
    this.className = "player"
    this.positionX = 0;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;
    this.domElm = null;
  }

  moveLeft() {
    this.positionX -= 10; //precentages
    console.log("moving left" + this.positionX)
  }

  moveRight() {
    this.positionX += 10; //precentages
    console.log("moving right" + this.positionX)
  }
}

const game = new Game();
game.start();


    



