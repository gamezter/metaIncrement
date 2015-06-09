"use strict"
/***************************Variables**************************/
var money = 0;
var totalMoney = 0;

var bMoney = 0;
var bMoneyRate = 0;

var skill = 0;
var totalSkill = 0;
var skillIncrement = 1;
var skillRate = 0;

var upgradeIndex = 0;
var programmerPrice = 10;
var programmerSkill = 1/30;
var nProgrammers = 0;
	
	/*******************************MetaGameParameters*****************************/
	var gCounter = 0;
	var gCounterRate = 0;

	var gWorker1Number = 0;
	var gWorker1Price = 15;
	var gWorker1Rate= 0.1/30;

	var gWorker2Number = 0;
	var gWorker2Price = 100;
	var gWorker2Rate= 0.5/30;

	var gWorker3Number = 0;
	var gWorker3Price = 500;
	var gWorker3Rate= 4/30;

	var gWorker4Number = 0;
	var gWorker4Price = 3000;
	var gWorker4Rate= 10/30;

	var gWorker5Number = 0;
	var gWorker5Price = 10000;
	var gWorker5Rate= 40/30;

	var gWorker6Number = 0;
	var gWorker6Price = 40000;
	var gWorker6Rate= 100/30;

	var gWorker7Number = 0;
	var gWorker7Price = 200000;
	var gWorker7Rate= 400/30;

	var gWorker8Number = 0;
	var gWorker8Price = 1666666;
	var gWorker8Rate= 6666/30;

	var gWorker9Number = 0;
	var gWorker9Price = 123456789;
	var gWorker9Rate= 98765/30;


/***************************Game logic*************************/
$(document).ready(function(){
	animate();

	setInterval(checks, 2000); //every 2s

	$('#codeButton').click(function(){
		skill += skillIncrement;
		totalSkill += skillIncrement;
	});

	$('#upgradeButton').click(function(){
		var skillReq = mUpgrades[upgradeIndex].price;
		skill -= skillReq;
		eval(mUpgrades[upgradeIndex].action);
		upgradeIndex++;
		l('upgradeDesc').innerHTML = mUpgrades[upgradeIndex].description;
		if(skill < mUpgrades[upgradeIndex + 1].price){
			l('upgradeButton').disabled = true;
		}
	});

	$('#collectMoneyButton').click(function(){
		show('money');
		money += bMoney;
		totalMoney += money;
		bMoney = 0;
	});

	$('#hireProgrammerButton').click(function(){
		show('programmer');
		money -= programmerPrice;
		programmerPrice = programmerPrice + programmerPrice * 0.2;
		skillRate += programmerSkill;
		if(money < programmerPrice){
			l('hireProgrammerButton').disabled = true;
		}
		nProgrammers++;
		show('nProgrammers');
		l('nProgrammers').innerHTML = nProgrammers + " Programmers";
		l('programmerPrice').innerHTML = programmerPrice.toFixed(2);
	});

	$('#gameClicker').click(function(){
		gCounter +=1;
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
	$("#buyWorker1").click(function(){
		gCounter -= gWorker1Price;
		gWorker1Price += Math.floor(gWorker1Price * 0.15);
		gWorker1Number++;
		gCounterRate += gWorker1Rate;
		if(gCounter < gWorker1Price){
			l('buyWorker1').disabled = true;
		}
		l('nWorker1').innerHTML = gWorker1Number;
		l('worker1Price').innerHTML = gWorker1Price + " things";
	});
	$("#buyWorker2").click(function(){
		gCounter -= gWorker2Price;
		gWorker2Price += Math.floor(gWorker2Price * 0.15);
		gWorker2Number++;
		gCounterRate += gWorker2Rate;
		if(gCounter < gWorker2Price){
			l('buyWorker2').disabled = true;
		}
		l('nWorker2').innerHTML = gWorker2Number;
		l('worker2Price').innerHTML = gWorker2Price + " things";
	});
	$("#buyWorker3").click(function(){
		gCounter -= gWorker3Price;
		gWorker3Price += Math.floor(gWorker3Price * 0.15);
		gWorker3Number++;
		gCounterRate += gWorker3Rate;
		if(gCounter < gWorker3Price){
			l('buyWorker3').disabled = true;
		}
		l('nWorker3').innerHTML = gWorker3Number;
		l('worker3Price').innerHTML = gWorker3Price + " things";
	});
	$("#buyWorker4").click(function(){
		gCounter -= gWorker4Price;
		gWorker4Price += Math.floor(gWorker4Price * 0.15);
		gWorker4Number++;
		gCounterRate += gWorker4Rate;
		if(gCounter < gWorker4Price){
			l('buyWorker4').disabled = true;
		}
		l('nWorker4').innerHTML = gWorker4Number;
		l('worker4Price').innerHTML = gWorker4Price + " things";
	});
	$("#buyWorker5").click(function(){
		gCounter -= gWorker5Price;
		gWorker5Price += Math.floor(gWorker5Price * 0.15);
		gWorker5Number++;
		gCounterRate += gWorker5Rate;
		if(gCounter < gWorker5Price){
			l('buyWorker5').disabled = true;
		}
		l('nWorker5').innerHTML = gWorker5Number;
		l('worker5Price').innerHTML = gWorker5Price + " things";
	});
	$("#buyWorker6").click(function(){
		gCounter -= gWorker6Price;
		gWorker6Price += Math.floor(gWorker6Price * 0.15);
		gWorker6Number++;
		gCounterRate += gWorker6Rate;
		if(gCounter < gWorker6Price){
			l('buyWorker6').disabled = true;
		}
		l('nWorker6').innerHTML = gWorker6Number;
		l('worker6Price').innerHTML = gWorker6Price + " things";
	});
	$("#buyWorker7").click(function(){
		gCounter -= gWorker7Price;
		gWorker7Price += Math.floor(gWorker7Price * 0.15);
		gWorker7Number++;
		gCounterRate += gWorker7Rate;
		if(gCounter < gWorker7Price){
			l('buyWorker7').disabled = true;
		}
		l('nWorker7').innerHTML = gWorker7Number;
		l('worker7Price').innerHTML = gWorker7Price + " things";
	});
	$("#buyWorker8").click(function(){
		gCounter -= gWorker8Price;
		gWorker8Price += Math.floor(gWorker8Price * 0.15);
		gWorker8Number++;
		gCounterRate += gWorker8Rate;
		if(gCounter < gWorker8Price){
			l('buyWorker8').disabled = true;
		}
		l('nWorker8').innerHTML = gWorker8Number;
		l('worker8Price').innerHTML = gWorker8Price + " things";
	});
	$("#buyWorker9").click(function(){
		gCounter -= gWorker9Price;
		gWorker9Price += Math.floor(gWorker9Price * 0.15);
		gWorker9Number++;
		gCounterRate += gWorker9Rate;
		if(gCounter < gWorker9Price){
			l('buyWorker9').disabled = true;
		}
		l('nWorker9').innerHTML = gWorker9Number;
		l('worker9Price').innerHTML = gWorker9Price + " things";
	});
});
/****************************Update*****************************/
function update(){
	bMoney += bMoneyRate;
	skill += skillRate;
	gCounter += gCounterRate;
	l('skillValue').innerHTML = skill.toFixed(0);
	l('moneyValue').innerHTML = money.toFixed(2);
	l('gameCounterValue').innerHTML = gCounter.toFixed(0);
	l('bMoney').innerHTML = bMoney.toFixed(2);
	
	if(money >= programmerPrice){l('hireProgrammerButton').disabled = false;
		}else{l('hireProgrammerButton').disabled = true;}
	if(skill >= mUpgrades[upgradeIndex].price){l('upgradeButton').disabled = false;
		}else{l('upgradeButton').disabled = true;}
		
	if(gCounter >= gWorker1Price){l('buyWorker1').disabled = false;
		}else{l('buyWorker1').disabled = true;}
	if(gCounter >= gWorker2Price){l('buyWorker2').disabled = false;
		}else{l('buyWorker2').disabled = true;}
	if(gCounter >= gWorker3Price){l('buyWorker3').disabled = false;
		}else{l('buyWorker3').disabled = true;}
	if(gCounter >= gWorker4Price){l('buyWorker4').disabled = false;
		}else{l('buyWorker4').disabled = true;}
	if(gCounter >= gWorker5Price){l('buyWorker5').disabled = false;
		}else{l('buyWorker5').disabled = true;}
	if(gCounter >= gWorker6Price){l('buyWorker6').disabled = false;
		}else{l('buyWorker6').disabled = true;}
	if(gCounter >= gWorker7Price){l('buyWorker7').disabled = false;
		}else{l('buyWorker7').disabled = true;}
	if(gCounter >= gWorker8Price){l('buyWorker8').disabled = false;
		}else{l('buyWorker8').disabled = true;}
	if(gCounter >= gWorker9Price){l('buyWorker9').disabled = false;
		}else{l('buyWorker9').disabled = true;}
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
	l('bMoneyRate').innerHTML = (bMoneyRate * 30).toFixed(2);
	l('gameRateValue').innerHTML = (gCounterRate * 30).toFixed(1);
	if(skill > 5){show('skill');}
	if(skill >= 10){show('upgradeButton');}
	if(money >= 5){show('hireProgrammerButton');}
}

/*var upgradeEffects = [	25, "l('codeButton').className = 'v1'; \
							l('upgradeButton').className = 'v1'; \
							l('skill').className = 'v1'; \
							l('money').className = 'v1'; \
							l('hireProgrammerButton').className = 'v1'; \
							l('sideBar').className = 'v1';",

						"Create a webpage (25 skill)",
						25, "l('tabNav').className = 'v1'; \
							l('gamePage').className = 'v1';",

						"Give your page a Title (25 skill)",
						25, "l('gameTopBarH1').className = 'v1';",

						"Add a counter (50 skill)",
						50, "l('gameCounter').className = 'v1'",

						"Add a clicker (50 skill)",
						50, "l('gameClicker').className = 'v1'",

						"Add a Worker side bar (50 skill)",
						50, "l('gameRightBar').className = 'v1';",

						"Place an ad on your website +0.01$/s (50 skill)",
						50, "show('gameAd'); show('boobleAdcentsTab'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (100 skill)",
						100, "show('worker1'); bMoneyRate += 0.01/30;",

						"Show thing rate +0.01$/s (100 skill)",
						100, "show('gameRate'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (150 skill)",
						150, "show('worker2'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (200 skill)",
						200, "show('worker3'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (300 skill)",
						300, "show('worker4'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (400 skill)",
						400, "show('worker5'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (500 skill)",
						500, "show('worker6'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (750 skill)",
						750, "show('worker7'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (1000 skill)",
						1000, "show('worker8'); bMoneyRate += 0.01/30;",

						"Add a Worker +0.01$/s (1500 skill)",
						1500, "show('worker9'); bMoneyRate += 0.01/30;"
					]*/