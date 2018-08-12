var speed = document.getElementById('speed');
var score = document.getElementById('score');
var background = document.getElementById('background');
var start = document.getElementById('bttStart');
var playGame = false;
var playAnimation = requestAnimationFrame(play);
var setup;

var keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false
}

start.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);




function startGame(){
	console.log('lets play');
	start.style.display = 'none';
	var tree1 = document.createElement('div');
	tree1.setAttribute('id', 'tree');
	tree1.x = 180;
	tree1.y = 80;
	background.appendChild(tree1);
	
	var temp = document.createElement('div');
	temp.setAttribute('id', 'playerCar');
	temp.x = 250;
	temp.y = 300;
	background.appendChild(temp);
	playGame = true;

	requestAnimationFrame(play);

	setup = {
	element: temp,
	speed: 9,
	gameScore: 0,
	winnerScore: 10,
	// roadwidth: 250
}

}

function play(){
	if (playGame){
		console.log('Game is played');
		update();
		treeMoving();
		///movement
		if(keys.ArrowUp && setup.element.y >0){
			setup.element.y -= 1;
		}
		if(keys.ArrowDown && setup.element.y < 420){
			setup.element.y += 1;
		}
		if(keys.ArrowRight && setup.element.x < 413){
			setup.element.x += 1;
			console.log(setup.element.x);
		}
		if(keys.ArrowLeft && setup.element.x > 151){
			setup.element.x -= 1;
			console.log(setup.element.y);
		}

		setup.element.style.top = setup.element.y + 'px';
		setup.element.style.left = setup.element.x + 'px';
	 }
	playAnimation = requestAnimationFrame(play);
}

function treeMoving(){
	var move = document.getElementById('tree');
	var num = move.offsetTop + 1;
	move.style.top = num + 'px';
	
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