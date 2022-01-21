class Game {
    constructor() {
        this.obstacleArr = [];
        this.timer = 0;
        this.refreshRate = 1000 / 60;
        this.obstacleRate = 60;
    }
    start(){
        
        this.player = new Player();
        this.player.domElm = this.createDomElm(this.player);
        this.drawDomElm(this.player);
        this.addEventListeners();
                
        setInterval(() => {
            // create obstacle
           this.timer++
           if(this.timer%this.obstacleRate === 0){
            const newObstacle = new Obstacle();
            this.obstacleArr.push(newObstacle)
            newObstacle.domElm = this.createDomElm(newObstacle);
            this.drawDomElm(newObstacle);
           }
            // iterate trough obstacle array
            this.obstacleArr.forEach((obj) => {
            // move obstacle    
                obj.moveDown();
                this.drawDomElm(obj);
            // check collision
            this.detectCollisionWithPlayer(obj);
            });            
        }, this.refreshRate);    
    }

    detectCollisionWithPlayer(element){
      if (this.player.positionX < element.positionX + element.width &&
        this.player.positionX + this.player.width > element.positionX &&
        this.player.positionY < element.positionY + element.height &&
        this.player.height + this.player.positionY > element.positionY) {
        // collision detected!
        alert ("Game Over!");
    }
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
    this.className = "player";
    this.width = 10;
    this.height = 10;
    this.positionX = 50;
    this.positionY = 0;
    this.domElm = null;
  }

  moveLeft() {
    this.positionX -= 10; //precentages
    console.log("moving left" + this.positionX);
  }

  moveRight() {
    this.positionX += 10; //precentages
    console.log("moving right" + this.positionX);
  }
}

class Obstacle {
  constructor() {
    this.className = "obstacle";
    this.width = 10;
    this.height = 10;
    this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    this.positionY = 110;
    this.domElm = null;
  }

  moveDown() {
    this.positionY -= 1;
    console.log("moving down" + this.positionY);
  }
}

const game = new Game();
game.start();


    



