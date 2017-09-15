var mgeraldine = $(' #mgeraldine');
var geraldine = $('#geraldine');
var mjoe = $('#mjoe');
var joe = $('#joe');

// OVER

mgeraldine.on('mouseover', function() {
	geraldine.attr('src','images/maries/geraldine&1.jpg');
	joe.attr('src','images/maries/joe&1.jpg');
});

mjoe.on('mouseover', function(){
	geraldine.attr('src','images/maries/geraldine&2.jpg');
	joe.attr('src','images/maries/joe&2.jpg');
});

// OUT

mgeraldine.on('mouseout', function(){
	refresh();
});

mjoe.on('mouseout', function(){
	refresh();
});

function refresh(){
	geraldine.attr('src','images/maries/geraldine&0.jpg');
	joe.attr('src','images/maries/joe&0.jpg');
}