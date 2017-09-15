var msophie = $(' #msophie');
var sophie = $('#sophie');
var mclement = $('#mclement');
var clement = $('#clement');
var mtodo = $('#mtodo');
var todo = $('#todo');
var mludo = $('#mludo');	
var ludo = $('#ludo');

// OVER

msophie.on('mouseover', function() {
	sophie.attr('src','images/temoins/un&un.jpg');
	clement.attr('src','images/temoins/deux&un.jpg');
	todo.attr('src','images/temoins/trois&un.jpg');
	ludo.attr('src','images/temoins/quatre&un.jpg');
});

mclement.on('mouseover', function(){
	sophie.attr('src','images/temoins/un&deux.jpg');
	clement.attr('src','images/temoins/deux&deux.jpg');
	todo.attr('src','images/temoins/trois&deux.jpg');
	ludo.attr('src','images/temoins/quatre&deux.jpg');
});

mtodo.on('mouseover', function(){
	sophie.attr('src','images/temoins/un&trois.jpg');
	clement.attr('src','images/temoins/deux&trois.jpg');
	todo.attr('src','images/temoins/trois&trois.jpg');
	ludo.attr('src','images/temoins/quatre&trois.jpg');
});

mludo.on('mouseover', function(){
	sophie.attr('src','images/temoins/sophie5.jpg');
	clement.attr('src','images/temoins/deux&quatre.jpg');
	todo.attr('src','images/temoins/trois&quatre.jpg');
	ludo.attr('src','images/temoins/quatre&quatre.jpg');
});

// OUT

msophie.on('mouseout', function(){
	refresh();
});

mclement.on('mouseout', function(){
	refresh();
});

mtodo.on('mouseout', function(){
	refresh();
});

mludo.on('mouseout', function(){
	refresh();
});

function refresh(){
	sophie.attr('src','images/temoins/un&zero.jpg');
	clement.attr('src','images/temoins/deux&zero.jpg');
	todo.attr('src','images/temoins/trois&zero.jpg');
	ludo.attr('src','images/temoins/quatre&zero.jpg');
}