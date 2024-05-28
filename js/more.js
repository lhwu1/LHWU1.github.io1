$(function() {
	jQuery(".focusBox").hover(function() {
		jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.8)
	}, function() {
		jQuery(this).find(".prev,.next").fadeOut()
	});
	jQuery(".focusBox").slide({
		mainCell: ".pic",
		effect: "fold",
		autoPlay: true,
		delayTime: 600,
		trigger: "click"
	});	
	
	$('.navbar li').hover(function(){
		$(this).find('dl').stop().slideToggle()
	})
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');			
		} else {
			$(".top").addClass('on');			
		};		
	})
		
	//input		
		$('input[type=text]').bind({
			focus:function(){
			if (this.value == this.defaultValue){
				this.value="";
			}
			},blur:function(){
			if (this.value == ""){
				this.value = this.defaultValue;
			}
			}
		});
	
	jQuery(".course-cont").slide({ titCell:".tab-hd li", mainCell:".tab-bd",delayTime:0 });
	jQuery(".qua-cont1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3});
    jQuery(".qua-cont2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3});
    
    //大图切换
    jQuery(".student-cont").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200,prevCell:".sPrev",nextCell:".sNext" });
    //小图左滚动切换
    jQuery(".student-cont .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:4,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext" });
    jQuery(".part1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4});
    
    
    $('.partner-tit li').hover(function(){			
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.part').eq(index).addClass('on').siblings().removeClass('on');
	})
})