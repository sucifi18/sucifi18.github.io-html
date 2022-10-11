$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".hari").slideToggle("fast");

	$('nav ul li.langit').each(function(index, el) {
		var hariID = el.id.split('_')[1];
		$('.hari#' + hariID).hide();
	});
});

$('nav').delegate('.langit', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.hari:visible').fadeOut('fast', function() {
		$('.hari#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('langit').addClass("bumi");
    $this.siblings().addClass('langit').removeClass('bumi');

    });
});