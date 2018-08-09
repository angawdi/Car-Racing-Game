
var score, start, playAnimation, start, speed, background, setup;
var playGame = false;
var keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false
}

document.addEventListener('DOMContentLoaded', function(){
	start = document.getElementById('bttStart');
	document.addEventListener('keydown', pressKeyOn);
	document.addEventListener('keyup', pressKeyOff);

	speed = document.getElementById('speed');
	score = document.getElementById('score');
	playGame = true;
	start.addEventListener('click', startGame);
	background = document.getElementById('background');

	playAnimation = requestAnimationFrame(play);
	console.log(play.textContent);

	
});



function startGame(){
	console.log('lets play');
	start.style.display = 'none';
	var temp = document.createElement('div');
	temp.setAttribute('class', 'playerCar');
	temp.x = 250;
	temp.y = 300;
	background.appendChild(temp);
	playGame = true;

	setup = {
	element: temp,
	speed: 1,
	gameScore: 0,
	winnerScore: 10,
	// roadwidth: 250
}

}

function play(){
	if (playGame){
		console.log('Game is played');
		update();
		///movement
		if(keys.ArrowUp){
			setup.element.y -= 1;
		}
		if(keys.ArrowDown){
			setup.element.y += 1;
		}
		if(keys.ArrowRight){
			setup.element.x += 1;
		}
		if(keys.ArrowLeft){
			setup.element.x -= 1;
		}

		setup.element.style.top = setup.element.y + 'px';
		setup.element.style.left = setup.element.x + 'px';
	 }
	playAnimation = requestAnimationFrame(play);
}


function pressKeyOn(event){
	event.preventDefault();
	console.log(event.key);
	keys[event.key] = true;
}

function pressKeyOff(event){
	event.preventDefault();
	console.log(keys);
	keys[event.key] = false;
}



function update(){
	score.innerHTML = setup.gameScore;
	speed.innerHTML = setup.speed;
}

function pressKeyOn(event){
	event.preventDefault();
	console.log(event.key);
	keys[event.key] = true;
}

function pressKeyOff(event){
	event.preventDefault();
	console.log(keys);
	keys[event.key] = false;
}