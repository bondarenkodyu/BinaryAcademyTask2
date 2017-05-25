"use strict";

/*
 1)Створити класс “Fighter”. Клас повиненин приймати значення name, power і health. Також клас повинен мати методи “setDamage” та “hit”.
	Метод “setDamage” приймає значення “damage” і наносить урон змінюючи значення health (health = health - damage), і виводить в консоль строку “ health: ”.
	Метод “hit” приймає значення “enemy”, “point”, і в середині викликає метод переданого обекту “enemy.setDamage(damage)”.
		“damage” вираховується наступним чином - damage = point * power, де point - змінний параметр, прийнятий в функцію "fight",
		 power - це властивість об'єкту який наносить урон.

 2)Створити клас ImprovedFighter, який буде наслідуватися від класу Fighter, з його властивостями і методами.
	Для цього класу створити метод doubleHit, який буде викликати наслідуваний метод “hit”, і передавати туди подвоєне значення “point”.
	Від обох класів породити по екземпляру відповідно fighter, improvedFighter.
	
 3)Створити функцію fight, яка прийматиме параметри - fighter, improvedFighter, і point.
	fight може приймати довільну кількість параметрів. Наприклад, fight(fighter, improvedFighter, 25, 13, 45), де point = [25, 13, 45].
	Ця функція запускатиме процес гри: гравці по черзі наносять удар один одному за допомогою методу hit, що приймає відповідне значення point.
	Якщо один із них помирає (health = 0), то гра закінчується і результат виводиться в консоль.
	
	При виконанні домашнього завдання необхідно використати: 
	+ block scoping (let) 
	+ spread / rest operator 
	+ default parameters 
	+ string interpolation 
	+ arrow functions 
	+ classes + inheritance + super
*/


class Fighter{
	constructor(name, power = 10, health = 1000){
		this.name = name;
		this.power = power;
		this.health = health;
	}
	
	setDamage(damage){
		this.health = this.health - damage;
		if(this.health < 0){
			this.health = 0
		}
		console.log(`${this.name}'s health: ${this.health}\n\n`);
	}
	
	hit(enemy, point){
		console.log(`${this.name} painfully hit ${enemy.name}\n\n`);		
		enemy.setDamage(enemy.power * point);		
	}
	
}


class ImprovedFighter extends Fighter{
	
	hit(enemy, point){
		super.hit(enemy, point * 2);
	}
	
}


let getWinner = function(fighter1, fighter2){
	let compareResult =  fighter1.health - fighter2.health;
	
	if(compareResult > 0){
		return fighter1;
	}
	else if(compareResult < 0){
		return fighter2;
	}
	else{
		return null;
	}	
}

let gameResultMessage = function(fighter1, fighter2){	
	let winner = getWinner(fighter1, fighter2);		
	if(winner == null){
		console.log("Friendship wins!\n\n");
	}
	else{
		console.log(`The fighter ${winner.name} is a new chempion!!!\n\n`);
	}	
}

let fight = function(fighter, improvedFighter, ... points){
	
	if(fighter == null || fighter == undefined || improvedFighter == null || improvedFighter == undefined){
		console.log("InvalidArgumentExcpetion: pass corect fighter")
	}	
	console.log(`-=${fighter.name} vs ${improvedFighter.name}=-\n\n`);
	
	points.forEach((point) =>{
		
			if(fighter.health == 0){
				return;
			}
			fighter.hit(improvedFighter, point);
			
			if(improvedFighter.health == 0){
				return;
			}			
			improvedFighter.hit(fighter, point);	
	});
	
	gameResultMessage(fighter, improvedFighter);
}



let fighter = new Fighter("Bruce Lee");
let improvedFighter = new ImprovedFighter("Chuck Norris", 5, 500);
fight(fighter, improvedFighter, 25, 13, 45);










