(function($){
	var browserW, value, index, imgUrl;
	browserW = $(window).width();

	$('.frame').data('img', value).each(function(index){
		imgUrl = $(this).attr('data-img');
		console.log(index + " = " + imgUrl + " | browser width = " + browserW);


		$(this).css({
					background: 'url(' + imgUrl + ')',
					});

	});

	$('#accordion > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'68%'},500);
            $('.heading',$this).stop(true,true).fadeOut();
            $('.bgDescription',$this).stop(true,true).slideDown(500);
            $('.description',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'15%'},1000);
            $('.heading',$this).stop(true,true).fadeIn();
            $('.description',$this).stop(true,true).fadeOut(500);
            $('.bgDescription',$this).stop(true,true).slideUp(700);
        }
    );

})(jQuery);