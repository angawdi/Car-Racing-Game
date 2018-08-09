
var score, bttStart, playAnimation, start;
var begin = 0;

document.addEventListener('DOMContentLoaded', function(){
	bttStart = document.getElementById('bttStart');
	score = document.getElementById('score');
	bttStart.addEventListener('click', startGame);
	playAnimation = requestAnimationFrame(play);
	console.log(play.textContent);
	
});

function play(){

}

function startGame(){
	console.log('nice');
	bttStart.style.display = 'none';
}


