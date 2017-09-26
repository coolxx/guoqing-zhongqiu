$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.m2-btn-box li').click(function(){
		$('.m2-btn-box li').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.m2-show-box').hide().eq($(this).index()).show()
	})
	//切开月饼
	$('.m3-show li img').each(function(index){
		$(this).click(function(){
			for(var i=0;i<9;i++){
				$('.m3-show li img').eq(i).attr('src','images/m3-'+i+'.png');
			}
			var num=parseInt(Math.random()*6);
			$(this).attr('src','images/m3-'+index+'-2.png');
			$('.zzc').show();
			$('.m3-quan').show();
			$('.m3-quan li').eq(num).show();
		})
	})
	//关闭优惠券
	$('.m3-quan li em').click(function(){
		$('.m3-quan li').hide();
		$('.zzc').hide();
	})
	$('.zixun li:last-child a').click(function(){
		$('body,html').animate({'scrollTop':0},1000)
	})
})