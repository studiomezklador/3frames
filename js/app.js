(function($){
	var browserW, value, index, imgUrl;
	browserW = $(window).width();

	$('.frame').data('img', value).each(function(index){
		imgUrl = $(this).attr('data-img');
		// console.log(index + " = " + imgUrl + " | browser width = " + browserW);

		$(this).css({
			background: 'url(' + imgUrl + ')',
			});

	});

	$('#accordion > li').hover(
        function () {
            var $this = $(this);
            // $('.frame').not($this).css('display','none');
            $('.frame').not($this).stop().animate({width: '0%'}, 400);

            $this.stop().animate({width:'100%'},400);
            $('.heading',$this).stop(true,true).fadeOut();
            $('.bgDescription',$this).stop(true,true).slideDown(800);
            $('.description',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
            $('.frame').not($this).stop().animate({width:'33.33%'}, 800);
            $this.stop().animate({'width':'33.33%'},800);
            $('.heading',$this).stop(true,true).fadeIn();
            $('.description',$this).stop(true,true).fadeOut(450);
            $('.bgDescription',$this).stop(true,true).slideUp(250);
        }
    );

})(jQuery);