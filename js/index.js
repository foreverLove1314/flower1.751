$(function() {
	$(".carousel-indicators li").css("background", "#CCCCCC");
	poker();
})

$(".section3 .smbnr li").click(function() {
	var a = $(this).index();
	$(".section3 .smbnr li").each(function() {
		var sol = $(this).index();
		var z=sol-a+2;
		if(z>4){
			z=z-5;
		}else if(z<0){
			z=z+5;
		}
		$(this).attr("class", "a" + z )
	})

})

//扑克牌翻转

function poker(){
	$(".RollPoker").one("mouseenter",function(){
		var arr=["33朵玫瑰是表示三生三世，由来于缘定三生这句成语，代表着爱一辈子还不够的意思。","还记得我们的约定吗？“执子之手，与子偕老”！我们一直所希翼的天长地久，是两个人永远在一起恋爱、结婚、生子、老去。","相守是一种承诺，人世轮回中，怎样才能拥有一份温柔的情意！","有一种爱叫做静静的陪伴。13朵玫瑰花语是友谊长存，代表的是一种外面风平浪静，内心波涛汹涌的状态。"];
		var i=$(this).index();
		if($(this).parent("div").attr("class")=="Div"){
			$(this).children("p").css("transform","rotateY(-180deg)").text(arr[i]).css({"font-size":"16px","line-height":"20px","text-indent":"2em"});
		}else{
			$(this).children("p").css("transform","rotateY(-180deg)").text(arr[i+2]).css({"font-size":"16px","line-height":"20px","text-indent":"2em"});
		}
		$(this).css("transform","rotateY(180deg)").css("transition","1s");
		$(this).children(".Zi").css("display","none");
	});
}

$(".RollPoker").mouseleave(function(){
	var arrA=["33枝玫瑰","99枝花束","27枝花束","13枝花束"];
	var i=$(this).index();
	if($(this).parent("div").attr("class")=="Div"){
			$(this).children("p").css("transform","rotateY(0deg)").text(arrA[i]).css({"font-size":"24px","line-height":"60px","text-indent":"0"});
		}else{
			$(this).children("p").css("transform","rotateY(0deg)").text(arrA[i+2]).css({"font-size":"24px","line-height":"60px","text-indent":"0"});
		}
	$(this).css("transform","rotateY(0deg)");
	$(this).children(".Zi").css("display","block");
	poker();
});

