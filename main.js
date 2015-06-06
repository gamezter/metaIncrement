/***************************Variables**************************/
var money = 0;
var totalMoney = 0;

var bMoney = 0;
var bMoneyIdle = 0;

var skill = 0;
var totalSkill = 0;
var skillIncrement = 1;
var skillIdle = 0;

var gCounter = 0;

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
	$('#collectMoneyButton').click(function(){
		money += bMoney;
		totalMoney += money;
		bMoney = 0;
	});

	$('#gameClicker').click(function(){
		gCounter +=1;
	});
	$("input").click(function(){
		var value = $("input:checked").val();
		switch(value){
			case "0":
				document.getElementById('gamePage').style.display = 'block';
				document.getElementById('boobleAdcentsPage').style.display = 'none';
				break;
			case "1":
				document.getElementById('gamePage').style.display = 'none';
				document.getElementById('boobleAdcentsPage').style.display = 'block';
				break;
		}
	})
});
/****************************Update*****************************/
function update(){
	bMoney += bMoneyIdle;
	document.getElementById('skillValue').innerHTML = skill;
	document.getElementById('moneyValue').innerHTML = money.toFixed(2);
	document.getElementById('gameCounterValue').innerHTML = gCounter;
	document.getElementById('bMoney').innerHTML = bMoney.toFixed(2);

	if(money > 0){
		show('money');
	}
	if(skill > 10){
		show('skill');
	}
	if(skill >= 50){
		show('updateButton');
	}
	if(skill >= updateEffects[updateIndex]){
		document.getElementById('updateButton').disabled = false;
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

var updateEffects = [	100, "document.getElementById('codeButton').className = 'v1'; \
							document.getElementById('updateButton').className = 'v1'; \
							document.getElementById('skill').className = 'v1'; \
							document.getElementById('money').className = 'v1'; \
							document.getElementById('sideBar').className = 'v1';",

						100, "document.getElementById('tabNav').className = 'v1'; \
							document.getElementById('gamePage').className = 'v1';",

						100, "document.getElementById('gameTopBarH1').className = 'v1';",

						100, "document.getElementById('gameCounter').className = 'v1'",

						100, "document.getElementById('gameClicker').className = 'v1'",

						100, "document.getElementById('gameRightBar').className = 'v1';",

						100, "show('gameAd'); show('boobleAdcentsTab'); bMoneyIdle += 0.01/60;"
					]