function mUpgrade(name, price, description, action){
	this.name = name;
	this.price = price;
	this.description = description;
	this.action = action;
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
		"show('gameAd'); show('boobleAdcentsTab'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		100,
		"Add a Worker +0.01$/s",
		"show('worker1'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Show thing rate +0.01$/s",
		100,
		"Show thing rate +0.01$/s",
		"show('gameRate'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		150,
		"Add a Worker +0.01$/s",
		"show('worker2'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		200,
		"Add a Worker +0.01$/s",
		"show('worker3'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		300,
		"Add a Worker +0.01$/s",
		"show('worker4'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		400,
		"Add a Worker +0.01$/s",
		"show('worker5'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		500,
		"Add a Worker +0.01$/s",
		"show('worker6'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		750,
		"Add a Worker +0.01$/s",
		"show('worker7'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1000,
		"Add a Worker +0.01$/s",
		"show('worker8'); bMoneyRate += 0.01/30;"
	),

	new mUpgrade(	
		"Add a Worker +0.01$/s",
		1500,
		"Add a Worker +0.01$/s",
		"show('worker9'); bMoneyRate += 0.01/30;"
	),
];

