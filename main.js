/***************************Variables**************************/
var money = 0;
var moneyIncrement = 1;
var skill = 0;
var totalSkill = 0;
var skillIncrement = 1;
var auto = 0;
var cssIndex = 0;
/***************************Game logic*************************/
$(document).ready(function(){
	animate();
	$('#codeButton').click(function(){
		skill += skillIncrement;
		totalSkill += skillIncrement;
	});
	$('#cssButton').click(function(){
		skill -= 200;
		eval(cssEffects[cssIndex]);
		cssIndex++;
		if(skill < 200){
			document.getElementById('cssButton').disabled = true;
		}
	});
	$('#lawnButton').click(function(){
		show('money');
		money += 10;
	});
});
/****************************Update*****************************/
function update(){
	document.getElementById('skillValue').innerHTML = skill;
	document.getElementById('moneyValue').innerHTML = money;
	if(skill > 10){
		show('skill');
	}
	if(skill > 100){
		show('cssButton');
	}
	if(skill > 200){
		document.getElementById('cssButton').disabled = false;
	}
	if(totalSkill > 300){
		show('lawnButton');
	}
}
/************************Helper Functions***********************/
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
	update();
}
function show(id){
	if(document.getElementById(id).style.display === 'none'){
		$("#" + id).fadeIn('slow');
	}
}

var cssEffects = [	"document.getElementById('codeButton').className = 'v1'; \
					document.getElementById('cssButton').className = 'v1'; \
					document.getElementById('skill').className = 'v1'; \
					document.getElementById('lawnButton').className = 'v1'; \
					document.getElementById('money').className = 'v1';",

					"document.getElementById('textEditor').className = 'v1';",
				]