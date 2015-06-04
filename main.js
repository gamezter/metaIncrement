/****************************Variables*************************/
var skill = 0;
var increment = 1;
/***************************Game logic*************************/
$(document).ready(function(){
	animate();
	$('#codeButton').click(function(){
		if(skill > 20){
			show('skill');
		}
		skill += increment;
	});
	$('#cssButton').click(function(){
		skill -= 200;
		if(skill < 200){
			document.getElementById('cssButton').disabled = true;
		}
	});
});
/*******************************Update**************************/
function draw(){
	document.getElementById('skillValue').innerHTML = skill;
	if(skill > 100){
		show('cssButton');
	}
	if(skill > 200){
		document.getElementById('cssButton').disabled = false;
	}
}
/*********************Helper Functions**************************/
if (!window.requestAnimationFrame){
    window.requestAnimationFrame = (function(){
        return 	window.webkitRequestAnimationFrame 	||
            	window.mozRequestAnimationFrame 	||
        		window.oRequestAnimationFrame 		||
            	window.msRequestAnimationFrame 		||
            	function(callback, element) {
                	window.setTimeout(callback, 1000 / 60);
       			};
    })();
}
function animate(){
	requestAnimationFrame(animate);
	draw();
}
function show(id){
	if(document.getElementById(id).style.display === 'none'){
		$("#" + id).fadeIn('slow');
	}
}