var skill = 0;
var increment = 1;

$(document).ready(function(){
	$('#codeButton').click(function(){
		show('skill');
		skill += increment;
	});

	if(skill > 100){
		document.getElementById('textEditor')
	}
});

setInterval(function(){
	document.getElementById('skillValue').innerHTML = skill;
}, 100);

function show(id){
	if(document.getElementById(id).style.display === 'none'){
		$("#" + id).fadeIn('fast');
	}
}