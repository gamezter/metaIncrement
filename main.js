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


	/***************************Populate upgrades and workers*************************/
	for(var i = 0; i < mUpgrades.length; i++){
		var node = document.createElement('div');
		node.className = "mUpgrade";
		node.id = "mU" + i;
		node.style.display = "none";
		node.addEventListener("mouseenter", function(){
			game.hoverId = this.getAttribute('id');
		});
		node.addEventListener("mouseleave", function(){
			game.hoverId = null;
			l('tooltip').style.display = "none";
		});
		node.addEventListener("click", temp);
		l("mUpgrades").appendChild(node);
	}

	for(var i = 0; i < gWorkers.length; i++){
		var node = document.createElement('div');
		node.className = "gWorker";
		node.innerHTML = "<h1 class='gWorkerH1'>" + gWorkers[i].name + "</h1>";
		node.innerHTML += "<h2 class='gWorkerN'></h2>";
		node.id= "gW" + i;
		node.style.display = "none";
		node.addEventListener("mouseenter", function(){
			game.hoverId = this.getAttribute("id");
		});
		node.addEventListener("mouseleave", function(){
			game.hoverId = null;
			l('tooltip').style.display = "none";
		});
		node.addEventListener("click", temp);
		l('gWorkers').appendChild(node);
	}

	for(var i = 0; i < mWorkers.length; i++){
		var node = document.createElement('div');
		node.className = "mWorker";
		node.innerHTML = "<h1 class='mWorkerH1'>" + mWorkers[i].name + "</h1>";
		node.innerHTML += "<h2 class='mWorkerN'></h2>";
		node.id= "mW" + i;
		node.style.display = "none";
		node.addEventListener("mouseenter", function(){
			game.hoverId = this.getAttribute("id");
		});
		node.addEventListener("mouseleave", function(){
			game.hoverId = null;
			l('tooltip').style.display = "none";
		});
		node.addEventListener("click", temp);
		l('mWorkers').appendChild(node);
	}

	/***************************click event listeners*************************/
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

	l('gameClicker').onclick = function(){
		game.gCounter += 1;
	};

	$("input[name=tab]").click(function(){
		var value = $(this).val();
		switch(value){
			case "0":
				l('gamePage').style.display = 'block';
				l('boobleAdcentsPage').style.display = 'none';
				l('statisticsPage').style.display = 'none';
				break;
			case "1":
				l('gamePage').style.display = 'none';
				l('boobleAdcentsPage').style.display = 'block';
				l('statisticsPage').style.display = 'none';
				l('boobleAdcentsTab').className = "";
				break;
			case "2":
				l('gamePage').style.display = 'none';
				l('boobleAdcentsPage').style.display = 'none';
				l('statisticsPage').style.display = 'block';
				l('statisticsPage').className = "";
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
		var id = game.hoverId.substring(2, game.hoverId.length);

		switch(type){
			case "mU":
				var upgrade = mUpgrades[id];
				l('tooltip').style.display = "block";
				l('tooltip').style.left = game.cursorX + 20 + "px"; 
				l('tooltip').style.top = game.cursorY + 20 + "px"; 
				l('name').innerHTML = upgrade.name;
				l('cost').innerHTML = upgrade.price + " " + mUpgrades[id].type;
				l('description').innerHTML = upgrade.description;
				l('effect').innerHTML = upgrade.effect;
				switch(upgrade.type){
					case "skill":
						if(game.skill < upgrade.price){
							l('cost').style.color = "red";
						}else{
							l('cost').style.color = "green";
						}
					break;
					case "$":
						if(game.money < upgrade.price){
							l('cost').style.color = "red";
						}else{
							l('cost').style.color = "green";
						}
					break;
					case "talent":
						if(game.talent < upgrade.price){
							l('cost').style.color = "red";
						}else{
							l('cost').style.color = "green";
						}
					break;
				}
				break;
			case "gW":
				var worker = gWorkers[id];
				l('tooltip').style.display = "block";
				l('tooltip').style.left = "";
				l('tooltip').style.right = "294px";
				l('tooltip').style.top = game.cursorY + "px";
				l('name').innerHTML = worker.name;
				l('cost').innerHTML = worker.price + " clicks";
				l('description').innerHTML = worker.description;
				l('effect').innerHTML = "+" + (worker.effect * 30).toFixed(1) + " clicks/s";
				if(worker.type === "click" && game.gCounter < worker.price){
					l('cost').style.color = "red";
				}else{
					l('cost').style.color = "green"
				}
				break;
			case "mW":
				var worker = mWorkers[id];
				l('tooltip').style.display = "block";
				l('tooltip').style.left = game.cursorX + 20 + "px"; 
				l('tooltip').style.top = game.cursorY + 20 + "px";
				l('name').innerHTML = worker.name;
				l('cost').innerHTML = worker.price + " $";
				l('description').innerHTML = worker.description;
				if(id === "0"){
					l('effect').innerHTML = "+" + (worker.effect * 30).toFixed(1) + " skill/s";
				}else{
					l('effect').innerHTML = "+" + (worker.effect * 30).toFixed(1) + " talent/s";
				}
				if(worker.type === "money" && game.money < worker.price){
					l('cost').style.color = "red";
				}else{
					l('cost').style.color = "green"
				}
		}
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
	var index = id.substring(2, id.length);
	switch(type){
		case "mU":
			if(mUpgrades[index].type === "skill"){
				var skillReq = mUpgrades[index].price;
				if(game.skill >= skillReq){
					game.skill -= skillReq;
					eval(mUpgrades[index].action);
					node.removeEventListener("click", temp);
					node.parentElement.removeChild(node);
					l('purchasedUpgrades').appendChild(node);
				}
			}else if(mUpgrades[index].type === "talent"){
				var talentReq = mUpgrades[index].price;
				if(game.talent >= talentReq){
					game.talent -= talentReq;
					eval(mUpgrades[index].action);
					node.removeEventListener("click", temp);
					node.parentElement.removeChild(node);
					l('purchasedUpgrades').appendChild(node);
				}
			}else if(mUpgrades[index].type === "$"){
				var moneyReq = mUpgrades[index].price;
				if(game.money >= moneyReq){
					game.money -= moneyReq;
					eval(mUpgrades[index].action);
					node.removeEventListener("click", temp);
					node.parentElement.removeChild(node);
					l('purchasedUpgrades').appendChild(node);
				}
			}
			break;
		case "gW":
			var worker = gWorkers[index];
			var counterReq = worker.price;
			if(game.gCounter >= counterReq){
				game.gCounter -= counterReq;
				worker.price += Math.floor(worker.price * 0.15);
				worker.number++;
				game.gCounterRate += worker.effect;
			}
			var gWorkerN = node.getElementsByClassName('gWorkerN')[0];
			gWorkerN.innerHTML = worker.number;
			break;
		case "mW":
			var worker = mWorkers[index];
			var moneyReq = worker.price;
			if(game.money >= moneyReq){
				game.money -= moneyReq;
				worker.price += Math.floor(worker.price * 0.15);
				worker.number++;
				if(index === "0"){
					game.skillRate += worker.effect;
				}else{
					game.talentRate += worker.effect;
				}
			}
			var mWorkerN = node.getElementsByClassName('mWorkerN')[0];
			mWorkerN.innerHTML = worker.number;
			break;
	}
}

function show(id){
	if(l(id).style.display === 'none'){
		$("#" + id).fadeIn('slow');
	}
}

var temp = function(event){
	buy(this.getAttribute('id'));
}

function checks(){
	l('bMoneyRate').innerHTML = (game.bMoneyRate * 30).toFixed(2);
	l('gameRateValue').innerHTML = (game.gCounterRate * 30).toFixed(1);
	if(game.skill > 5){show('skill');}
	if(game.skill >= 10){show('mU0');}
	if(game.money >= 5){
		show('mU11');
		show('mU12');
	}
}