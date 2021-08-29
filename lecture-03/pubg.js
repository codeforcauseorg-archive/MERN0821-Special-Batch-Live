class Human {   

    static listing = []
    
    constructor(name){
        this.name = name;
        this.alive = true;
        Human.listing.push(this);
    }

    dance = function(){
        console.log(this.name, "is dancing.");
    }

    static kill_shooter = function(human1, human2, target){
        if(human1.alive && human2.alive){
            if((target instanceof Shooter) && target.alive){
                target.alive = false;
                console.log(`${human1.name} and ${human2.name} killed ${target.name}`)
            }
        }
    }

}

class Shooter extends Human {

    constructor(name){
        super(name);
        this.kills = 0;
    }

    kill = function(target){

        if(!this.alive){
            console.log(this.name, "is dead, can not kill.");
            return;
        }

        if( this === target ){
            console.log(`Hello ${this.name}, Suicide is never an option.`);
            return;
        }

        if(target.alive){
            target.alive = false;
            console.log(this.name, "killed", target.name);
            this.kills += 1;
        } else {
            console.log(target.name, "is already dead.");
        }
    }


}

// class Zombie extends Human {
//     constructor(name){
//         super(name);
//         this.alive = false;
//         this.kills = 0;
//     }
// }

let anuj = new Human("Anuj Garg");
let ravi = new Human("Ravi");

// let sahil = new Shooter("Sahil Verma");
let rohan = new Shooter("Rohan Tripathi");

Human.kill_shooter(anuj, ravi, rohan);


// sahil.kill(sahil);

// rohan.kill(sahil);
// sahil.kill(anuj);
// sahil.kill(ravi);
console.log(Human.listing);