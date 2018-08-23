var speed = document.getElementById('speed');
var score = document.getElementById('score');
var background = document.getElementById('background');
var start = document.getElementById('bttStart');
var playGame = false;
var playAnimation = requestAnimationFrame(play);
var obsMove, car, speed;
var numScore = 0;
var car = document.getElementById('player-car');
var collide = document.getElementById('collide');
var crowd = document.getElementById('crowd');
var carspeed = document.getElementById('carspeed');
var point = document.getElementById('point');
var keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false
}
var move = [];
var num = [];

	start.style.visibility = 'hidden';
var levelbtt = document.getElementsByClassName('levelbtn');
levelbtt[0].addEventListener('click', function(){
	speed = 1;
	document.getElementById('levelsp').innerHTML = 'Easy';
	document.getElementById('level').style.display= 'none';
	start.style.visibility = 'visible';
});

levelbtt[1].addEventListener('click', function(){
	speed = 3;
	document.getElementById('levelsp').innerHTML = 'Medium';
	document.getElementById('level').style.display= 'none';
	start.style.visibility = 'visible';
});

levelbtt[2].addEventListener('click', function(){
	speed = 5;
	document.getElementById('levelsp').innerHTML = 'Difficult';
	document.getElementById('level').style.display= 'none';
	start.style.visibility = 'visible';
});

start.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);


function startGame(){
	start.style.visibility = "hidden";
	playGame = true;
	
	for(var o = 0; o <4; o++){
		var obs = document.createElement('div');
		obs.setAttribute('class', 'obstacles');
		obs.style.left = 150 + Math.floor(Math.random() *100*o) + 'px';
		obs.style.top = 0 - o*200 + 'px';
		background.appendChild(obs);
	 }
	requestAnimationFrame(play);
}

function play(){
	if (playGame){
		treeMoving();
		obsMoving();
		carspeed.play();
		var numtop = car.offsetTop;
		var numleft = car.offsetLeft;
		if(keys.ArrowUp && numtop >0){
			numtop -= 2;
		}
		if(keys.ArrowDown && numtop < 420){
			numtop += 2;
		}
		if(keys.ArrowRight && numleft < 330){
			numleft += 2;			
		}
		if(keys.ArrowLeft && numleft > 151){
			numleft -= 2;
		}

		car.style.top = numtop + 'px';
		car.style.left = numleft + 'px';
	}
	playAnimation = requestAnimationFrame(play);
}

function obsMoving(){
	obsMove = document.getElementsByClassName('obstacles');
	var nnum0 = obsMove[0].offsetTop;
	var nnum1 = obsMove[1].offsetTop;
	var nnum2 = obsMove[2].offsetTop;
	var nnum3 = obsMove[3].offsetTop;

	if(nnum0 <  480){
		nnum0 = nnum0 + speed;
	}else{
		point.play();
		numScore++;
		score.innerHTML = '' + numScore;
		checkWin();
		nnum0 = -5;
		obsMove[0].style.left = 150 + Math.floor(Math.random() *150) + 'px';
	}

	if(nnum2 <  480){
		nnum2 = nnum2 + speed;
	}else{
		point.play();
		nnum2 = -5;
		numScore++;
		score.innerHTML = '' +numScore;
		checkWin();
		obsMove[2].style.left = 150 + Math.floor(Math.random() *150) + 'px';
	}

	if(nnum3 <  480){
		nnum3 = nnum3 + speed;
	}else{
		point.play();
		nnum3 = -5;
		numScore++;
		score.innerHTML = '' + numScore;
		checkWin();
		obsMove[3].style.left = 150 + Math.floor(Math.random() *0) + 'px';
	}
	
	if(nnum1 <  480){
		nnum1 = nnum1 + speed;
	}else{
		point.play();
		nnum1 = -5;
		numScore++;
		score.innerHTML = '' + numScore;
		checkWin();
		obsMove[1].style.left = 150 + Math.floor(Math.random() *200) + 'px';
	}

	obsMove[0].style.top = nnum0 + 'px';
	obsMove[1].style.top = nnum1 + 'px';
	obsMove[2].style.top = nnum2 + 'px';
	obsMove[3].style.top = nnum3 + 'px';
	for (var cc = 0; cc < 4; cc++){
		if (checkCollide(obsMove[cc],car)){
			collide.play();
			stopGame();
		}
	}
}


function treeMoving(){

	for(let i=0; i<6; i++){
		move[i] = document.getElementById('tree'+(i+1));
		num[i] = move[i].offsetTop;
		if(num[i] < 520){
	 		num[i] = num[i] +3;
	 	} else{
	 		num[i] = -10;
	 	}
		move[i].style.top = num[i] + 'px';
	}
}


function checkCollide(obs,car){
	return ( ((obs.offsetTop < car.offsetTop +40) && 
		     (obs.offsetTop > car.offsetTop - 40)) &&
		( (obs.offsetLeft < car.offsetLeft+20) && (car.offsetLeft < obs.offsetLeft + 20)))
}


function stopGame(){
	playGame = false;
	cancelAnimationFrame(play);
	document.getElementById('headline').innerHTML = 'You Lose';
}

function checkWin(){
	if(numScore === 30){
	crowd.play();
	playGame = false;
	cancelAnimationFrame(play);
		document.getElementById('headline').innerHTML = 'You Win!';
	}
}


function pressKeyOn(event){
	event.preventDefault();
	keys[event.key] = true;
}

function pressKeyOff(event){
	event.preventDefault();
	keys[event.key] = false;
}