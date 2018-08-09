console.log('love');
document.addEventListener('DOMContentLoaded', function(){
	var play = document.getElementById('bttStart');
	console.log(play.textContent);
	play.addEventListener('click', function(){
		console.log(play.textContent);
		if(play.textContent == 'Play'){
			console.log('1');
			play.innerHTML = 'Pause';
		}else{
			play.innerHTML = 'Play';
			console.log('2');
		}
	});
});