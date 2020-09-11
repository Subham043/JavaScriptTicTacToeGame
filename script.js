$(document).ready(function(){

var spot1 = $('.spot1');
var spot2 = $('.spot2');
var spot3 = $('.spot3');
var spot4 = $('.spot4');
var spot5 = $('.spot5');
var spot6 = $('.spot6');
var spot7 = $('.spot7');
var spot8 = $('.spot8');
var spot9 = $('.spot9');
var o = true;
var turns=0;

//spot clicks
$('section.game li').on('click',function() {
	if($(this).hasClass('disabled')){
		alert('this spot is already filled');
	}else{
		if(o){
			$(this).text('o').addClass('green').addClass('disabled');
			o=false;
			turns++;
		}else{
			$(this).text('x').addClass('red').addClass('disabled');
			o=true;
			turns++;
		}
	}

//gamerule
if ((($(spot1).text() == 'o')&&($(spot2).text() == 'o')&&($(spot3).text() == 'o'))||
	(($(spot4).text() == 'o')&&($(spot5).text() == 'o')&&($(spot6).text() == 'o'))||
	(($(spot7).text() == 'o')&&($(spot8).text() == 'o')&&($(spot9).text() == 'o'))||
	(($(spot1).text() == 'o')&&($(spot4).text() == 'o')&&($(spot7).text() == 'o'))||
	(($(spot2).text() == 'o')&&($(spot5).text() == 'o')&&($(spot8).text() == 'o'))||
	(($(spot3).text() == 'o')&&($(spot6).text() == 'o')&&($(spot9).text() == 'o'))||
	(($(spot1).text() == 'o')&&($(spot5).text() == 'o')&&($(spot9).text() == 'o'))||
	(($(spot3).text() == 'o')&&($(spot5).text() == 'o')&&($(spot7).text() == 'o'))
	) {
	alert('winner:o');
}else if ((($(spot1).text() == 'x')&&($(spot2).text() == 'x')&&($(spot3).text() == 'x'))||
	(($(spot4).text() == 'x')&&($(spot5).text() == 'x')&&($(spot6).text() == 'x'))||
	(($(spot7).text() == 'x')&&($(spot8).text() == 'x')&&($(spot9).text() == 'x'))||
	(($(spot1).text() == 'x')&&($(spot4).text() == 'x')&&($(spot7).text() == 'x'))||
	(($(spot2).text() == 'x')&&($(spot5).text() == 'x')&&($(spot8).text() == 'x'))||
	(($(spot3).text() == 'x')&&($(spot6).text() == 'x')&&($(spot9).text() == 'x'))||
	(($(spot1).text() == 'x')&&($(spot5).text() == 'x')&&($(spot9).text() == 'x'))||
	(($(spot3).text() == 'x')&&($(spot5).text() == 'x')&&($(spot7).text() == 'x'))
	) {
	alert('winner:x');
}else if(turns == 9){
	alert('draw');
}
});

//reset
$('#reset').on('click',function(){
	$('.disabled').text('+').removeClass('disabled');
	$('.red').removeClass('red');
	$('.green').removeClass('green');
	turns=0;
	o = true;
});

});