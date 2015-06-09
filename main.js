"use strict"

var game = {};
/***************************Variables**************************/
game.money = 0;
game.totalMoney = 0;

game.bMoney = 0;
game.bMoneyRate = 0;

game.skill = 0;
game.totalSkill = 0;
game.skillIncrement = 1;
game.skillRate = 0;

game.upgradeIndex = 0;
game.programmerPrice = 10;
game.programmerSkill = 1/30;
game.nProgrammers = 0;

	/*******************************MetaGameParameters*****************************/
	game.gCounter = 0;
	game.gCounterRate = 0;

/***************************Game logic*************************/
$(document).ready(function(){
	animate();

	setInterval(checks, 2000); //every 2s

	$('#codeButton').click(function(){
		game.skill += game.skillIncrement;
		game.totalSkill += game.skillIncrement;
	});

	$('#upgradeButton').click(function(){
		var skillReq = mUpgrades[game.upgradeIndex].price;
		game.skill -= skillReq;
		eval(mUpgrades[game.upgradeIndex].action);
		game.upgradeIndex++;
		l('upgradeDesc').innerHTML = mUpgrades[game.upgradeIndex].description + " (" + mUpgrades[game.upgradeIndex].price + " skill)";
		if(skill < mUpgrades[game.upgradeIndex + 1].price){
			l('upgradeButton').disabled = true;
		}
	});

	$('#collectMoneyButton').click(function(){
		show('money');
		game.money += game.bMoney;
		game.totalMoney += game.money;
		game.bMoney = 0;
	});

	$('#hireProgrammerButton').click(function(){
		show('programmer');
		game.money -= game.programmerPrice;
		game.programmerPrice += game.programmerPrice * 0.2;
		game.skillRate += game.programmerSkill;
		if(game.money < game.programmerPrice){
			l('hireProgrammerButton').disabled = true;
		}
		game.nProgrammers++;
		show('nProgrammers');
		l('nProgrammers').innerHTML = game.nProgrammers + " Programmers";
		l('programmerPrice').innerHTML = game.programmerPrice.toFixed(2);
	});

	$('#gameClicker').click(function(){
		game.gCounter +=1;
	});
	$("input").click(function(){
		var value = $("input:checked").val();
		switch(value){
			case "0":
				l('gamePage').style.display = 'block';
				l('boobleAdcentsPage').style.display = 'none';
				break;
			case "1":
				l('gamePage').style.display = 'none';
				l('boobleAdcentsPage').style.display = 'block';
				break;
		}
	})

	$(".worker :button").click(function(){
		var worker = workers[parseInt($(this).parent().attr('id'))];
		game.gCounter -= worker.price;
		worker.price += Math.floor(worker.price * 0.15);
		worker.number++;
		game.gCounterRate += worker.rate;
		if(game.gCounter < worker.price){
			$(this).disabled = true;
		}
		$(this).parent().find('.n').html(worker.number);
		$(this).parent().find('.price').html(worker.price + " things");
	});
});
/****************************Update*****************************/
function update(){
	game.bMoney += game.bMoneyRate;
	game.skill += game.skillRate;
	game.gCounter += game.gCounterRate;
	l('skillValue').innerHTML = game.skill.toFixed(0);
	l('moneyValue').innerHTML = game.money.toFixed(2);
	l('gameCounterValue').innerHTML = game.gCounter.toFixed(0);
	l('bMoney').innerHTML = game.bMoney.toFixed(2);

	if(game.money >= programmerPrice){l('hireProgrammerButton').disabled = false;
		}else{l('hireProgrammerButton').disabled = true;}
	if(game.skill >= mUpgrades[game.upgradeIndex].price){l('upgradeButton').disabled = false;
		}else{l('upgradeButton').disabled = true;}

	if(game.gCounter >= workers[0].price){l('b0').disabled = false;
		}else{l('b0').disabled = true;}
	if(game.gCounter >= workers[1].price){l('b1').disabled = false;
		}else{l('b1').disabled = true;}
	if(game.gCounter >= workers[2].price){l('b2').disabled = false;
		}else{l('b2').disabled = true;}
	if(game.gCounter >= workers[3].price){l('b3').disabled = false;
		}else{l('b3').disabled = true;}
	if(game.gCounter >= workers[4].price){l('b4').disabled = false;
		}else{l('b4').disabled = true;}
	if(game.gCounter >= workers[5].price){l('b5').disabled = false;
		}else{l('b5').disabled = true;}
	if(game.gCounter >= workers[6].price){l('b6').disabled = false;
		}else{l('b6').disabled = true;}
	if(game.gCounter >= workers[7].price){l('b7').disabled = false;
		}else{l('b7').disabled = true;}
	if(game.gCounter >= workers[8].price){l('b8').disabled = false;
		}else{l('b8').disabled = true;}
}
/************************Helper Functions***********************/
if (!window.requestAnimationFrame){
    window.requestAnimationFrame = (function(){
        return 	window.webkitRequestAnimationFrame 	||
            	window.mozRequestAnimationFrame 	||
        		window.oRequestAnimationFrame 		||
            	window.msRequestAnimationFrame 		||
            	function(callback, element) {
                	window.setTimeout(callback, 1000 / 30);
       			};
    })();
}

function animate(){
	setTimeout(function(){
		requestAnimationFrame(animate);
	}, 1000 / 30);
	update();
}

function show(id){
	if(l(id).style.display === 'none'){
		$("#" + id).fadeIn('slow');
	}
}

function checks(){
	l('bMoneyRate').innerHTML = (game.bMoneyRate * 30).toFixed(2);
	l('gameRateValue').innerHTML = (game.gCounterRate * 30).toFixed(1);
	if(game.skill > 5){show('skill');}
	if(game.skill >= 10){show('upgradeButton');}
	if(game.money >= 5){show('hireProgrammerButton');}
}