/***************************Variables**************************/
var money = 0;
var totalMoney = 0;
var moneyIncrement = 1;
var moneyIdle = 0;

var skill = 0;
var totalSkill = 0;
var skillIncrement = 1;
var skillIdle = 0;

var updateIndex = 0;
/***************************Game logic*************************/
$(document).ready(function(){
	animate();

	$('#codeButton').click(function(){
		skill += skillIncrement;
		totalSkill += skillIncrement;
	});

	$('#updateButton').click(function(){
		var skillReq = updateEffects[updateIndex];
		skill -= skillReq;
		eval(updateEffects[++updateIndex]);
		document.getElementById('skillReq').innerHTML = updateEffects[updateIndex + 1];
		if(skill < updateEffects[updateIndex + 1]){
			document.getElementById('updateButton').disabled = true;
		}
		updateIndex++;
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
		show('updateButton');
	}
	if(skill > updateEffects[updateIndex]){
		document.getElementById('updateButton').disabled = false;
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

var updateEffects = [	200, "document.getElementById('codeButton').className = 'v1'; \
							document.getElementById('updateButton').className = 'v1'; \
							document.getElementById('skill').className = 'v1'; \
							document.getElementById('money').className = 'v1';",

						300, "document.getElementById('sideBar').className = 'v1';",

						400, "document.getElementById('tabNav').className = 'v1'; \
							document.getElementById('gameArea').className = 'v1';"
					]