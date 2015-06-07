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

var upgradeIndex = 0;
var programmerPrice = 10;
var programmerSkill = 0.5/60;
var nProgrammers = 0;
/***************************Game logic*************************/
$(document).ready(function(){
	animate();

	$('#codeButton').click(function(){
		skill += skillIncrement;
		totalSkill += skillIncrement;
	});

	$('#upgradeButton').click(function(){
		var skillReq = upgradeEffects[upgradeIndex];
		skill -= skillReq;
		eval(upgradeEffects[++upgradeIndex]);
		document.getElementById('upgradeDesc').innerHTML = upgradeEffects[++upgradeIndex];
		if(skill < upgradeEffects[upgradeIndex + 1]){
			document.getElementById('upgradeButton').disabled = true;
		}
		upgradeIndex++;
	});

	$('#collectMoneyButton').click(function(){
		money += bMoney;
		totalMoney += money;
		bMoney = 0;
	});

	$('#hireProgrammerButton').click(function(){
		show('programmer');
		money -= programmerPrice;
		programmerPrice = programmerPrice + programmerPrice * 0.2;
		skillIdle += programmerSkill;
		if(money < programmerPrice){
			document.getElementById('hireProgrammerButton').disabled = true;
		}
		nProgrammers++;
		show('nProgrammers');
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
	skill += skillIdle;
	document.getElementById('skillValue').innerHTML = skill.toFixed(1);
	document.getElementById('moneyValue').innerHTML = money.toFixed(2);
	document.getElementById('gameCounterValue').innerHTML = gCounter;
	document.getElementById('bMoney').innerHTML = bMoney.toFixed(2);
	document.getElementById('programmerPrice').innerHTML = programmerPrice.toFixed(2);
	document.getElementById('nProgrammers').innerHTML = nProgrammers + " Programmers";

	if(money > 0){
		show('money');
	}
	if(skill > 10){
		show('skill');
	}
	if(skill >= 50){
		show('upgradeButton');
	}
	if(money >= 5){
		show('hireProgrammerButton');
	}
	if(money >= programmerPrice){
		document.getElementById('hireProgrammerButton').disabled = false;
	}
	if(skill >= upgradeEffects[upgradeIndex]){
		document.getElementById('upgradeButton').disabled = false;
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

var upgradeEffects = [	100, "document.getElementById('codeButton').className = 'v1'; \
							document.getElementById('upgradeButton').className = 'v1'; \
							document.getElementById('skill').className = 'v1'; \
							document.getElementById('money').className = 'v1'; \
							document.getElementById('hireProgrammerButton').className = 'v1'; \
							document.getElementById('sideBar').className = 'v1';",

						"Create a webpage (100 skill)",
						100, "document.getElementById('tabNav').className = 'v1'; \
							document.getElementById('gamePage').className = 'v1';",

						"Give your page a Title (100 skill)",
						100, "document.getElementById('gameTopBarH1').className = 'v1';",

						"Add a counter (100 skill)",
						100, "document.getElementById('gameCounter').className = 'v1'",

						"Add a clicker (100 skill)",
						100, "document.getElementById('gameClicker').className = 'v1'",

						"Add an upgrade bar (100 skill)",
						100, "document.getElementById('gameRightBar').className = 'v1';",

						"Place an ad on your website + 0.01$/s (100 skill)",
						100, "show('gameAd'); show('boobleAdcentsTab'); bMoneyIdle += 0.01/60;"
					]