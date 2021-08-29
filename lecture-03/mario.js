class Hero {   

   constructor(){
       
   }

}


class Mario extends Hero {  }

class Luigi extends Hero {  }


class Enemy {   
    constructor(){
        this.alive = true;
    }
}

class Coin {   
    constructor(value=10){
        this.collected = false;
        this.value = value;
    }
}

class Game {
    constructor(herotype){
        this.game_over = false;
        if(herotype === "luigi"){
            this.hero = new Luigi();
        } else {
            this.hero = new Mario();
        }
        this.lives = 3;

        this.coins = [];

        for (let index = 0; index < 10; index++) {
            this.coins.push(new Coin(10)); 
        }
        
    }
}