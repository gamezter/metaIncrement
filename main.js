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

game.talent = 0;
game.totalTalent = 0;
game.talentRate = 0;

game.programmerPrice = 10;
game.programmerSkill = 1/30;
game.nProgrammers = 0;

game.designerPrice = 10;
game.designerTalent = 1/30;
game.nDesigners = 0;

game.hoverId = null;
game.cursorX = 0;
game.cursorY = 0;

	/*******************************GameParameters*****************************/
	game.gCounter = 0;
	game.gCounterRate = 0;

/***************************Game logic*************************/
$(document).ready(function(){
	animate();

	setInterval(checks, 2000); //every 2s

	for(var i = 0; i < mUpgrades.length; i++){
		var node = document.createElement('div');
		node.className = "mUpgrade";
		node.id = "mU" + i;
		node.style.display = "none";
		node.addEventListener("mouseenter", function(){
			game.hoverId = this.getAttribute('id');
			l('tooltip').style.display = "block";
		});
		node.addEventListener("mouseleave", function(){
			game.hoverId = null;
			l('tooltip').style.display = "none";
		});
		node.addEventListener("click", function(){
			buy(this.getAttribute('id'));
		});
		l("mUpgrades").appendChild(node);
	}

	l('codeButton').onclick = function(){
		game.skill += game.skillIncrement;
		game.totalSkill += game.skillIncrement;
	};

	l('collectMoneyButton').onclick = function(){
		show('money');
		game.money += game.bMoney;
		game.totalMoney += game.money;
		game.bMoney = 0;
	};

	l('hireProgrammerButton').onclick = function(){
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
	};

	l('hireDesignerButton').onclick = function(){
		show('designer');
		show('talent');
		game.money -= game.designerPrice;
		game.designerPrice += game.designerPrice * 0.2;
		game.talentRate += game.designerTalent;
		if(game.money < game.designerPrice){
			l('hireDesignerButton').disabled = true;
		}
		game.nDesigners++;
		show('nDesigners');
		l('nDesigners').innerHTML = game.nDesigners + " Designers";
		l('designerPrice').innerHTML = game.designerPrice.toFixed(2);
	};

	l('gameClicker').onclick = function(){
		game.gCounter += 1;
	};


	$("input[name=tab]").click(function(){
		var value = $(this).val();
		switch(value){
			case "0":
				l('gamePage').style.display = 'block';
				l('boobleAdcentsPage').style.display = 'none';
				break;
			case "1":
				l('gamePage').style.display = 'none';
				l('boobleAdcentsPage').style.display = 'block';
				l('boobleAdcentsTab').className = "";
				break;
		}
	})
	$("input[name=sideTab]").click(function(){
		var value = $(this).val();
		switch(value){
			case "0":
				l('achievements').style.display = 'block';
				l('achievements').style.left = 'calc(100% - 300px)';
				l('upgrades').style.display = 'none';
				l('achievementsTab').className = "";
				l('sideTabs').style.right = '299px';
				break;
			case "1":
				l('achievements').style.display = 'none';
				l('upgrades').style.display = 'block';
				l('upgrades').style.left = 'calc(100% - 300px)';
				l('upgradesTab').className = "";
				l('sideTabs').style.right = '299px';
				break;
		}
	})
	$(".hide").click(function(){
		l('achievements').style.left = '100%';
		l('achievements').style.display = 'block';
		l('upgrades').style.left = '100%';
		l('upgrades').style.display = 'block';
		l('sideTabs').style.right = '-1px';
	});

	$(".worker :button").click(function(){
		var id = $(this).parent().attr('id');
		id = id.substring(2,3);
		var worker = gWorkers[parseInt(id)];
		game.gCounter -= worker.price;
		worker.price += Math.floor(worker.price * 0.15);
		worker.number++;
		game.gCounterRate += worker.effect;
		if(game.gCounter < worker.price){
			$(this).disabled = true;
		}
		$(this).parent().find('.n').html(worker.number);
		$(this).parent().find('.price').html(worker.price + " things");
	});

	document.onmousemove = function(e){
		game.cursorX = e.pageX;
		game.cursorY = e.pageY;
	}
});
/****************************Update*****************************/
function update(){
	game.bMoney += game.bMoneyRate;
	game.skill += game.skillRate;
	game.talent += game.talentRate;
	game.gCounter += game.gCounterRate;
	l('skillValue').innerHTML = game.skill.toFixed(0);
	l('talentValue').innerHTML = game.talent.toFixed(0);
	l('moneyValue').innerHTML = game.money.toFixed(2);
	l('gameCounterValue').innerHTML = game.gCounter.toFixed(0);
	l('bMoney').innerHTML = game.bMoney.toFixed(2);

	if(game.hoverId !== null){
		var type = game.hoverId.substring(0,2);
		var id = game.hoverId.substring(2,3);
		switch(type){
			case "mU":
				l('tooltip').style.left ="229px";
				l('tooltip').style.top = game.cursorY + "px"; 
				l('name').innerHTML = mUpgrades[id].name;
				l('cost').innerHTML = mUpgrades[id].price;
				l('description').innerHTML = mUpgrades[id].description;
				if(mUpgrades[id].type === "skill" && game.skill < mUpgrades[id].price){
					l('cost').style.color = "red";
				}else{
					l('cost').style.color = "green"
				}
				break;
		}
	}

	if(game.money >= game.programmerPrice){l('hireProgrammerButton').disabled = false;
		}else{l('hireProgrammerButton').disabled = true;}
	if(game.money >= game.designerPrice){l('hireDesignerButton').disabled = false;
		}else{l('hireDesignerButton').disabled = true;}

	if(game.gCounter >= gWorkers[0].price){l('b0').disabled = false;
		}else{l('b0').disabled = true;}
	if(game.gCounter >= gWorkers[1].price){l('b1').disabled = false;
		}else{l('b1').disabled = true;}
	if(game.gCounter >= gWorkers[2].price){l('b2').disabled = false;
		}else{l('b2').disabled = true;}
	if(game.gCounter >= gWorkers[3].price){l('b3').disabled = false;
		}else{l('b3').disabled = true;}
	if(game.gCounter >= gWorkers[4].price){l('b4').disabled = false;
		}else{l('b4').disabled = true;}
	if(game.gCounter >= gWorkers[5].price){l('b5').disabled = false;
		}else{l('b5').disabled = true;}
	if(game.gCounter >= gWorkers[6].price){l('b6').disabled = false;
		}else{l('b6').disabled = true;}
	if(game.gCounter >= gWorkers[7].price){l('b7').disabled = false;
		}else{l('b7').disabled = true;}
	if(game.gCounter >= gWorkers[8].price){l('b8').disabled = false;
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

function buy(id){
	var node = l(id);
	var type = id.substring(0,2);
	var index = id.substring(2,3);
	switch(type){
		case "mU":
			if(mUpgrades[index].type === "skill"){
				var skillReq = mUpgrades[index].price;
				if(game.skill >= skillReq){
					game.skill -= skillReq;
					eval(mUpgrades[index].action);
					node.removeEventListener("click");
					node.parentElement.removeChild(node);
				}
			}else if(mUpgrades[index].type === "talent"){
				var talentReq = mUpgrades[index].price;
				if(game.talent >= talentReq){
					game.talent -= talentReq;
					eval(mUpgrades[index].action);
					node.removeEventListener("click");
					node.parentElement.removeChild(node);
				}
			}
			break;
	}
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
	if(game.skill >= 10){show('mU0');}
	if(game.money >= 5){show('hireProgrammerButton');}
	if(game.money >= 5){show('hireDesignerButton');}
}