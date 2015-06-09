function mUpgrade(name, price, description, action){
	this.name = name;
	this.price = price;
	this.description = description;
	this.action = action;
}

function worker(number, price, rate){
	this.number = number;
	this.price = price;
	this.rate = rate;
}

function l(what){
	return document.getElementById(what);
}

var mUpgrades = [
	new mUpgrade(	
		"Upgrade your Software",
		25,
		"Upgrade your Software",
		"l('codeButton').style.cssText +='top: 25px;left: 25px;',\
		l('upgradeButton').style.cssText +='top: 25px;left: 25px;',\
		l('skill').style.cssText +='top: 25px;left: 25px;',\
		l('money').style.cssText +='top: 25px;left: 25px;',\
		l('hireProgrammerButton').style.cssText +='top: 25px;left: 25px;',\
		l('sideBar').style.cssText +='border-right: 1px solid black;'"
	),

	new mUpgrade(	
		"Create a Webpage",
		25,
		"Create a Webpage",
		"l('tabNav').style.cssText +='visibility: visible; top: 0px; border-bottom: 1px solid black;',\
		l('gamePage').style.cssText +='top: 0px;'"
	),

	new mUpgrade(	
		"Give your page a Title",
		25,
		"Give your page a Title",
		"l('gameTopBarH1').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		"Add a Counter",
		50,
		"Add a Counter",
		"l('gameCounter').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		"Add a Clicker",
		50,
		"Add a Clicker",
		"l('gameClicker').style.cssText +='visibility: visible; background-color: orange; cursor: pointer;'"
	),

	new mUpgrade(	
		"Add a Worker Side bar",
		50,
		"Add a Worker Side bar",
		"l('gameRightBar').style.cssText +='left: 0px; border-left: 1px solid black;'"
	),

	new mUpgrade(	
		"Place an Ad on your Website +0.01$/s",
		50,
		"Place an Ad on your Website +0.01$/s",
		"show('gameAd'); show('boobleAdcentsTab'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		100,
		"Add a Worker +0.01$/s",
		"show('0'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Show thing rate +0.01$/s",
		100,
		"Show thing rate +0.01$/s",
		"show('gameRate'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		150,
		"Add a Worker +0.01$/s",
		"show('1'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		200,
		"Add a Worker +0.01$/s",
		"show('2'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		300,
		"Add a Worker +0.01$/s",
		"show('3'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		400,
		"Add a Worker +0.01$/s",
		"show('4'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		500,
		"Add a Worker +0.01$/s",
		"show('5'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		750,
		"Add a Worker +0.01$/s",
		"show('6'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1000,
		"Add a Worker +0.01$/s",
		"show('7'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1500,
		"Add a Worker +0.01$/s",
		"show('8'); game.bMoneyRate += 0.01/30;"
	),
];

var workers = [
	new worker(0, 15, 0.1/30),
	new worker(0, 100, 0.5/30),
	new worker(0, 500, 4/30),
	new worker(0, 3000, 10/30),
	new worker(0, 10000, 40/30),
	new worker(0, 40000, 100/30),
	new worker(0, 200000, 400/30),
	new worker(0, 1666666, 6666/30),
	new worker(0, 123456789, 98765/30)
];