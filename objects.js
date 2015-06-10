function mUpgrade(id, name, price, type, description, action){
	this.id = id;
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
		0, "Upgrade your Software",
		25,
		"skill",
		"Upgrade your Software",
		"show('1');show('2');show('3');show('4');show('5');\
		l('mUpgrades').style.cssText +='border: 1px solid black; overflow-y: scroll';\
		l('sideBar').style.cssText +='border-right: 1px solid black;'"
	),

	new mUpgrade(	
		1, "Create a Webpage",
		25,
		"skill",
		"Create a Webpage",
		"l('tabNav').style.cssText +='visibility: visible; top: 0px; border-bottom: 1px solid black;',\
		l('gamePage').style.cssText +='top: 0px;'"
	),

	new mUpgrade(	
		2, "Give your page a Title",
		25,
		"skill",
		"Give your page a Title",
		"l('gameTopBarH1').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		3, "Add a Counter",
		50,
		"skill",
		"Add a Counter",
		"l('gameCounter').style.cssText +='left: 0px;'"
	),

	new mUpgrade(	
		4, "Add a Clicker",
		50,
		"skill",
		"Add a Clicker",
		"l('gameClicker').style.cssText +='visibility: visible; background-color: orange; cursor: pointer;'"
	),

	new mUpgrade(	
		5, "Add a Worker Side bar",
		50,
		"skill",
		"Add a Worker Side bar",
		"show('6');\
		l('gameRightBar').style.cssText +='left: 0px; border-left: 1px solid black;'"
	),

	new mUpgrade(	
		6, "Place an Ad on your Website +0.01$/s",
		50,
		"skill",
		"Place an Ad on your Website +0.01$/s",
		"show('gameAd');show('7');show('8');show('9');show('10');show('boobleAdcentsTab');\
		l('boobleAdcentsTab').className = 'alert'; game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		7, "Add a Worker +0.01$/s",
		100,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w0');show('11'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		8, "Add achievements +0.01$/s",
		100,
		"skill",
		"Add achievements +0.01$/s",
		"show('achievementsTab'); game.bMoneyRate += 0.01/30; l('achievementsTab').className = 'alert';"
	),

	new mUpgrade(	
		9, "Add upgrades +0.01$/s",
		100,
		"skill",
		"Add upgrades +0.01$/s",
		"show('upgradesTab'); game.bMoneyRate += 0.01/30; l('upgradesTab').className = 'alert';"
	),

	new mUpgrade(	
		10, "Add thing rate +0.01$/s",
		100,
		"skill",
		"Add thing rate +0.01$/s",
		"show('gameRate'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		11, "Add a Worker +0.01$/s",
		150,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w1');show('12'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		12, "Add a Worker +0.01$/s",
		200,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w2');show('13'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		13, "Add a Worker +0.01$/s",
		300,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w3');show('14'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		14, "Add a Worker +0.01$/s",
		400,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w4');show('15'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		15, "Add a Worker +0.01$/s",
		500,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w5');show('16'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		16, "Add a Worker +0.01$/s",
		750,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w6');show('17'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		17, "Add a Worker +0.01$/s",
		1000,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w7');show('18'); game.bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		18, "Add a Worker +0.01$/s",
		1500,
		"skill",
		"Add a Worker +0.01$/s",
		"show('w8'); game.bMoneyRate += 0.01/30;"
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