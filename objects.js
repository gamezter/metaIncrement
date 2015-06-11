

function object(id, name, number, price, type, description, action, effect){
	this.id = id;
	this.name = name;
	this.number = number;
	this.price = price;
	this.type = type;
	this.description = description;
	this.action = action;
	this.effect = effect;
}

function l(what){
	return document.getElementById(what);
}

var mUpgrades = [
	new object(	
		"mU0",
		"Upgrade your Software",
		null,
		25,
		"skill",
		"Upgrade your Software",
		"show('mU1');l('mUpgrades').style.cssText +='border: 1px solid black; overflow-y: scroll';l('sideBar').style.cssText +='border-right: 1px solid black;'",
		null
	),

	new object(	
		"mU1",
		"Create a Webpage",
		null,
		25,
		"skill",
		"Create a Webpage",
		"show('mU2');show('mU3');show('mU4');show('mU5');l('tabNav').style.cssText +='visibility: visible; top: 0px; border-bottom: 1px solid black;';l('gamePage').style.cssText +='top: 0px;'",
		null
	),

	new object(	
		"mU2",
		"Give your page a Title",
		null,
		25,
		"skill",
		"Give your page a Title",
		"l('gameTopBarH1').style.cssText +='left: 0px;'",
		null
	),

	new object(	
		"mU3",
		"Add a Counter",
		null,
		50,
		"skill",
		"Add a Counter",
		"l('gameCounter').style.cssText +='left: 0px;'",
		null
	),

	new object(	
		"mU4",
		"Add a Clicker",
		null,
		50,
		"skill",
		"Add a Clicker",
		"l('gameClicker').style.cssText +='visibility: visible; background-color: orange; cursor: pointer;'",
		null
	),

	new object(	
		"mU5",
		"Add a Worker Side bar",
		null,
		50,
		"skill",
		"Add a Worker Side bar",
		"show('mU6');\
		l('gameRightBar').style.cssText +='left: 0px; border-left: 1px solid black;'",
		null
	),

	new object(	
		"mU6",
		"Place an Ad on your Website",
		null,
		50,
		"skill",
		"Place an Ad on your Website",
		"show('gameAd');show('mU7');show('mU8');show('mU9');show('mU10');show('boobleAdcentsTab');l('boobleAdcentsTab').className = 'alert'; game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU7",
		"Add a Worker",
		null,
		100,
		"skill",
		"Add a Worker",
		"show('gW0');show('mU11'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU8",
		"Add achievements",
		null,
		100,
		"skill",
		"Add achievements",
		"show('achievementsTab'); game.bMoneyRate += 0.01/30; l('achievementsTab').className = 'alert';",
		"+0.01$/s"
	),

	new object(	
		"mU9",
		"Add upgrades",
		null,
		100,
		"skill",
		"Add upgrades",
		"show('upgradesTab'); game.bMoneyRate += 0.01/30; l('upgradesTab').className = 'alert';",
		"+0.01$/s"
	),

	new object(	
		"mU10",
		"Add thing rate",
		null,
		100,
		"skill",
		"Add thing rate",
		"show('gameRate'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU11",
		"Add a Worker",
		null,
		150,
		"skill",
		"Add a Worker",
		"show('gW1');show('mU12'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU12",
		"Add a Worker",
		null,
		200,
		"skill",
		"Add a Worker",
		"show('gW2');show('mU13'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU13",
		"Add a Worker",
		null,
		300,
		"skill",
		"Add a Worker",
		"show('gW3');show('mU14'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU14",
		"Add a Worker",
		null,
		400,
		"skill",
		"Add a Worker",
		"show('gW4');show('mU15'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU15",
		"Add a Worker",
		null,
		500,
		"skill",
		"Add a Worker",
		"show('gW5');show('mU16'); game.bMoneyRate += 0.01/30;",
		"+0.01$/s"
	),

	new object(	
		"mU16",
		"Add a Worker",
		null,
		750,
		"skill",
		"Add a Worker",
		"show('gW6');show('mU17'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),

	new object(	
		"mU17",
		"Add a Worker",
		null,
		1000,
		"skill",
		"Add a Worker",
		"show('gW7');show('mU18'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),

	new object(	
		"mU18",
		"Add a Worker",
		null,
		1500,
		"skill",
		"Add a Worker",
		"show('gW8'); game.bMoneyRate += 0.01/30;",
		"0.01$/s"
	),
];

var gWorkers = [
	new object("gW0", 'worker1', 0, 15, "worker", "worker1", null, 0.1/30),
	new object("gW1", 'worker2', 0, 100, "worker", "worker2", null, 0.5/30),
	new object("gW2", 'worker3', 0, 500, "worker", "worker3", null, 4/30),
	new object("gW3", 'worker4', 0, 3000, "worker", "worker4", null, 10/30),
	new object("gW4", 'worker5', 0, 10000, "worker", "worker5", null, 40/30),
	new object("gW5", 'worker6', 0, 40000, "worker", "worker6", null, 100/30),
	new object("gW6", 'worker7', 0, 200000, "worker", "worker7", null, 400/30),
	new object("gW7", 'worker8', 0, 1666666, "worker", "worker8", null, 6666/30),
	new object("gW8", 'worker9', 0, 123456789, "worker", "worker9", null, 98765/30)
];