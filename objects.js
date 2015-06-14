

function object(name, price, type, description, action, effect){
	this.name = name;
	this.price = price;
	this.number = 0;
	this.type = type;
	this.description = description;
	this.action = action;
	this.effect = effect;
}

function l(what){
	return document.getElementById(what);
}

var mUpgrades = [
	new object(	/*0*/
		"Update your Software",
		25,"skill",
		"Version 0.02",
		"show('mU1');l('sideBar').style.cssText +='border-right: 1px solid black;'",
		null
	),

	new object(	/*1*/
		"Create a Website",
		25,"skill",
		"Open a tab and start writing HTML",
		"show('mU2');\
		show('mU3');\
		l('tabNav').style.cssText +='visibility: visible; top: 0px; border-bottom: 1px solid black;';\
		l('gamePage').style.cssText +='top: 0px;';",
		null
	),

	new object(	/*2*/
		"Give your page a Title",
		25,"skill",
		"All websites need a title",
		"l('gameTopBarH1').style.cssText +='left: 0px;'",
		null
	),

	new object(	/*3*/
		"Add a Clicker",
		50,"skill",
		"Something to click on would be nice",
		"show('mU4');\
		l('gameClicker').style.cssText +='visibility: visible; background-color: orange; cursor: pointer;'",
		null
		),

	new object(	/*4*/
		"Add a Counter",
		50,"skill",
		"A way to know how many times you have clicked",
		"show('mU5');\
		l('gameCounter').style.cssText +='left: 0px;'",
		null
	),

	new object(	/*5*/
		"Place an Ad on your Website",
		50,"skill",
		"Hey, how about making money off of this website",
		"show('gameAd');\
		show('mU6');\
		show('mU7');\
		show('mU8');\
		show('mU9');\
		show('boobleAdcentsTab');\
		l('gameRightBar').style.cssText += 'left: 0px; border-left: 1px solid black;';\
		l('boobleAdcentsTab').className = 'alert';\
		l('mUpgrades').style.cssText +='overflow-y: auto; border: 1px solid black;';\
		 game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*6*/
		"Add a Worker",
		100,"skill",
		"Automate the clicks",
		"show('gW0');\
		show('mU10');\
		show('gWorkersH1');\
		 game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*7*/
		"Add achievements",
		100,"skill",
		"Some way to reward the player",
		"show('achievementsTab'); game.bMoneyRate += 0.01/30; l('achievementsTab').className = 'alert';",
		"+0.01$/s"
	),

	new object(	/*8*/
		"Add upgrades",
		100,"skill",
		"A place where you can upgrade your workers",
		"show('upgradesTab'); game.bMoneyRate += 0.01/30; l('upgradesTab').className = 'alert';",
		"+0.01$/s"
	),

	new object(	/*9*/
		"Add click rate",
		100,"skill",
		"A way to know how many clicks per second",
		"show('gameRate'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*10*/
		"Add a Worker",
		150,"skill",
		"Add a second Worker",
		"show('gW1');show('mU13'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*11*/
		"Hire your first programmer",
		10 ,"$",
		"Programmers increase your skill",
		"mWorkers[0].price += Math.floor(mWorkers[0].price * 0.15);\
		game.skillRate += mWorkers[0].effect;\
		mWorkers[0].number++;\
		show('mW0');\
		var mWorkerN = l('mW0').getElementsByClassName('mWorkerN')[0];\
			mWorkerN.innerHTML = mWorkers[0].number;",
		"+1 skill/s"
	),

	new object(	/*12*/
		"Hire your first designer",
		10 ,"$",
		"designers increase your talent",
		"mWorkers[1].price += Math.floor(mWorkers[1].price * 0.15);\
		game.talentRate += mWorkers[1].effect;\
		mWorkers[1].number++;\
		show('mW1');\
		var mWorkerN = l('mW1').getElementsByClassName('mWorkerN')[0];\
			mWorkerN.innerHTML = mWorkers[1].number;",
		"+1 talent/s"
	),

	new object(	/*13*/
		"Add a Worker",
		200,"skill",
		"Add a third Worker",
		"show('gW2');show('mU14'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*14*/
		"Add a Worker",
		300,"skill",
		"Add a fourth Worker",
		"show('gW3');show('mU15'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*15*/
		"Add a Worker",
		400,"skill",
		"Add a fifth Worker",
		"show('gW4');show('mU16'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*16*/
		"Add a Worker",
		500,"skill",
		"Add a sixth Worker",
		"show('gW5');show('mU17'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	/*17*/
		"Add a Worker",
		750,"skill",
		"Add a seventh Worker",
		"show('gW6');show('mU18'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),

	new object(	/*18*/
		"Add a Worker",
		1000,"skill",
		"Add an eighth Worker",
		"show('gW7');show('mU19'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),

	new object(	/*19*/
		"Add a Worker",
		1500,"skill",
		"Add a ninth Worker",
		"show('gW8'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),
];

var gWorkers = [
	new object('worker1', 15, "click", "worker1", null, 0.1/30),
	new object('worker2', 100, "click", "worker2", null, 0.5/30),
	new object('worker3', 500, "click", "worker3", null, 4/30),
	new object('worker4', 3000, "click", "worker4", null, 10/30),
	new object('worker5', 10000, "click", "worker5", null, 40/30),
	new object('worker6', 40000, "click", "worker6", null, 100/30),
	new object('worker7', 200000, "click", "worker7", null, 400/30),
	new object('worker8', 1666666, "click", "worker8", null, 6666/30),
	new object('worker9', 123456789, "click", "worker9", null, 98765/30)
];

var mWorkers = [
	new object('programmer', 10, "money", "programmer", null, 1/30),
	new object('designer', 10, "money", "designer", null, 1/30)
];