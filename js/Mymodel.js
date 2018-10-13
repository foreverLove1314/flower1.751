$("#zhezhao").css("height", $("html").height());

$(window).load(function() {
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
				weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
				qq: u.match(/\sQQ/i) == " qq" //是否QQ
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	if(browser.versions.trident == false) {		
		lahuan();
	}
	addshoppingNum();
	windowScrollThings();
	$("#zhezhao").fadeOut(600);
})
var time
$(window).resize(function(){
	windowScrollThings();
})




function windowScrollThings(){
	if($(window).width()>768){
		$(window).scroll(function() {
			var sc = $(window).scrollTop();
			time = sc / 100;
			if(sc > 90) {
				$("#returntop").css({ "opacity": "1", "top": "92%","display":"block"});
				$(".naver").css({"position":"fixed","top":0});
			} else {
				$("#returntop").css({ "opacity": "0", "top": "92%","display":"none"});
				$(".naver").css({"position":"relative","top":"0"});
			}
		});
		$("#returntop").click(function() {
			$('body,html').animate({ scrollTop: 0 }, time + "s");
		});
	}
}

function addshoppingNum(){
	qibao();
	var num=window.sessionStorage.getItem("shopNum");
	if(num==null){
		$("#readshop").text(0);
	}else{
		$("#readshop").text(num);
	}
	
	$("#writeshop").click(function(){
		var i=$("#readshop").text();
		i++;
		window.sessionStorage.setItem("shopNum",i);
		$("#readshop").text(i);
	});
	$("#clearshop").click(function(){
		window.sessionStorage.setItem("shopNum",0);
		$("#readshop").text(0);
	})
}



var isslide = false;
var isdrag = false;
var ty, y, n;
function lahuan() {
	if($(window).width()<768){
		$(".mbl_nav ul").css("margin-top","-229px").css("transition","0.6s");
		$("#mbl_round").click(function(){return false});
	};
	document.getElementById("mbl_round").addEventListener('touchend',mouseLeave);
	document.getElementById("mbl_round").addEventListener('touchstart',selectmouse);
	document.getElementById("mbl_round").addEventListener('touchmove',movemouse);
}
function selectmouse(e) {
	isdrag = true;
	$(".mbl_btn").css("opacity", 1);
	ty = parseInt(document.getElementById("mbl_round").style.top + 34);
	y = e.touches[0].pageY;
}
function movemouse(e) {
	$("body").css("overflow","hidden");
	if(isdrag) {
		n = ty + e.touches[0].pageY - y;
		if(isslide==false){
			if(n<229){
				$(".mbl_nav ul").css("margin-top",(n-227)+"px").css("transition","0s");
			}else{
				$("#mbl_round").css("top", n-229).css("transition","0s");
				$(".mbl_btn").css("height", n-229).css("transition","0s");
			}
		}else{
			$("#mbl_round").css("top", n).css("transition","0s");
			$(".mbl_btn").css("height", n).css("transition","0s");
		}
	}
}
function mouseLeave (){
	$("body").css("overflow","visible");
	isdrag = false;
	var time=n/200;
	$(".mbl_btn").css({ "opacity": "0.9", "height": "35px","transition":time+"s"});
	$("#mbl_round").css({"top":34,"transition":time+"s"});
	if(isslide==false){
		$(".mbl_nav ul").css("margin-top","0");
		isslide=true;
	}else{
		$(".mbl_nav ul").css("margin-top","-229px").css("transition",time+"s");
		isslide=false;
	}
}
$(window).resize(function(){
	if($(window).width()<768){
		$(".mbl_nav ul").css("margin-top","-229px");
	}else{
		$(".mbl_nav ul").css("margin-top","0");
	}
});

//气泡功能

function qibao(){
	$("#writeshop").one("click",function(){
		$(".qipao").animate({
			width:"20px",
			height:"20px"
		});
		
	})
}

