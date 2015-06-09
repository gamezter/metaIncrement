function mUpgrade(name, price, type, description, action){
	this.name = name;
	this.price = price;
	this.type = type;
	this.description = description;
	this.action = action;
}

function worker(id, name, number, price, rate){
	this.id = id
	this.name = name;
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
		"skill",
		"Upgrade your Software",
		"l('codeButton').style.cssText +='top: 25px;left: 25px;',\
		l('upgradeButton').style.cssText +='top: 25px;left: 25px;',\
		l('skill').style.cssText +='top: 25px;left: 25px;',\
		l('talent').style.cssText +='top: 25px;left: 25px;',\
		l('money').style.cssText +='top: 25px;left: 25px;',\
		l('hireProgrammerButton').style.cssText +='top: 25px;left: 25px;',\
		l('hireDesignerButton').style.cssText +='top: 25px;left: 25px;',\
		l('sideBar').style.cssText +='border-right: 1px solid black;'"
	),

	new mUpgrade(	
		"Create a Webpage",
		25,
		"skill",
		"Create a Webpage",
		"l('tabNav').style.cssText +='visibility: visible; top: 0px; border-bottom: 1px solid black;',\
		l('gamePage').style.cssText +='top: 0px;'"
	),

	new mUpgrade(	
		"Give your page a Title",
		25,
		"skill",
		"Give your page a Title",
		"l('gameTopBarH1').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		"Add a Counter",
		50,
		"skill",
		"Add a Counter",
		"l('gameCounter').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		"Add a Clicker",
		50,
		"skill",
		"Add a Clicker",
		"l('gameClicker').style.cssText +='visibility: visible; background-color: orange; cursor: pointer;'"
	),

	new mUpgrade(	
		"Add a Worker Side bar",
		50,
		"skill",
		"Add a Worker Side bar",
		"l('gameRightBar').style.cssText +='left: 0px; border-left: 1px solid black;'"
	),

	new mUpgrade(	
		"Place an Ad on your Website +0.01$/s",
		50,
		"skill",
		"Place an Ad on your Website +0.01$/s",
		"show('gameAd'); show('boobleAdcentsTab');l('boobleAdcentsTab').className = 'alert'; game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		100,
		"skill",
		"Add a Worker +0.01$/s",
		"show('0'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Unlock achievements +0.01$/s",
		100,
		"skill",
		"Unlock achievements +0.01$/s",
		"show('achievementsTab'); game.bMoneyRate += 0.01/30; l('achievementsTab').className = 'alert';"
	),

	new mUpgrade(	
		"Unlock upgrades +0.01$/s",
		100,
		"skill",
		"Unlock upgrades +0.01$/s",
		"show('upgradesTab'); game.bMoneyRate += 0.01/30; l('upgradesTab').className = 'alert';"
	),

	new mUpgrade(	
		"Show thing rate +0.01$/s",
		100,
		"skill",
		"Show thing rate +0.01$/s",
		"show('gameRate'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		150,
		"skill",
		"Add a Worker +0.01$/s",
		"show('1'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		200,
		"skill",
		"Add a Worker +0.01$/s",
		"show('2'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		300,
		"skill",
		"Add a Worker +0.01$/s",
		"show('3'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		400,
		"skill",
		"Add a Worker +0.01$/s",
		"show('4'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		500,
		"skill",
		"Add a Worker +0.01$/s",
		"show('5'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		750,
		"skill",
		"Add a Worker +0.01$/s",
		"show('6'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1000,
		"skill",
		"Add a Worker +0.01$/s",
		"show('7'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1500,
		"skill",
		"Add a Worker +0.01$/s",
		"show('8'); game.bMoneyRate += 0.01/30;"
	),
];

var workers = [
	new worker(0, 'worker1', 0, 15, 0.1/30),
	new worker(1 ,'worker2', 0, 100, 0.5/30),
	new worker(2, 'worker3', 0, 500, 4/30),
	new worker(3, 'worker4', 0, 3000, 10/30),
	new worker(4, 'worker5', 0, 10000, 40/30),
	new worker(5, 'worker6', 0, 40000, 100/30),
	new worker(6, 'worker7', 0, 200000, 400/30),
	new worker(7, 'worker8', 0, 1666666, 6666/30),
	new worker(8, 'worker9', 0, 123456789, 98765/30)
];