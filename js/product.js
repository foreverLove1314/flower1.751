var iz;
$(function(){
	//放大镜效果
	zoomImg();

	//鼠标滑动图片
	var box=document.getElementById("Tview");
	box.addEventListener('touchend',handLeave);
	box.addEventListener('touchstart',handSelect);
	
});
var NewLoc,OldLoc;
function handSelect(e){
	OldLoc=e.changedTouches[0].pageX;
}
function handLeave(e){
	NewLoc=e.changedTouches[0].pageX;
	var s=NewLoc-OldLoc;
	console.log()
}
function zoomImg(){
	 iz= new ImageZoom( "glassImg", "glassBox", {
		mode: "handle", handle: "idHandle", scale: 2, delay: 0
	});
	
	$("#samll_banner ul li").click(function(){
		var i=$(this).children("img").attr("src");
		$("#glassImg").attr("src",i);
		iz= new ImageZoom( "glassImg", "glassBox", {
			mode: "handle", handle: "idHandle", scale: 2, delay: 0
		});
	});
}
