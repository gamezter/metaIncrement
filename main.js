var skill = 0;
var increment = 1;

$(document).ready(function(){
	$('#codeButton').click(function(){
		show('skill');
		skill += increment;
	});
});

setInterval(function(){
	document.getElementById('skillValue').innerHTML = skill;
	if(skill > 100){
		show('cssButton');
	}
	if(skill > 200){
		document.getElementById('cssButton').disabled = false;
	}
}, 100);

function show(id){
	if(document.getElementById(id).style.display === 'none'){
		$("#" + id).fadeIn('fast');
	}
}