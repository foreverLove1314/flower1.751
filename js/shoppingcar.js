$(function(){
	$("#tishi").click(function(){
		$(this).parent(".top").remove();
	});
	$(".Num").blur(function(){//	焦点事件,失去焦点触发
		xiaoji($(this));//小计
		jifen($(this));//积分
		allNum();//商品件数
		allJf();//总共积分
		allMoney();//商品金额
	})
	delRow();//删除整行
	delAll();//清空购物车
})
//		赠送积分
function jifen(e){
	var jianshu=Number(e.val());//获取输入框的数值,转化为数字	
	var danjia=parseFloat(e.parents(".tdNum").siblings(".danjia").find("em").text());//获取单价的数值,转化为数字
	var zsjifen=e.parents(".tdNum").siblings(".tdJf").children("span");//获取积分元素
	var jf=Number(zsjifen.text());//获取积分数值,转化为数字
	zsjifen.text(Math.ceil(danjia*0.1*jianshu));
	
}
//	小计
function xiaoji(e){	
	var jianshu=Number(e.val());//获取输入框的数值,转化为数字
	var xiaoji=e.parents(".tdNum").siblings(".tdXiaoji").children("span");//获取小计元素
	var danjia=parseFloat(e.parents(".tdNum").siblings(".danjia").find("em").text());//获取单价的数值,转化为数字
	xiaoji.text((jianshu*danjia));
}
//删除整行
function delRow(){
	$(".del span").click(function(){
		$(this).parents("tr").remove();
		xiaoji($(this));//小计
		jifen($(this));//积分
		allNum();//商品件数
		allJf();//总共积分
		allMoney();//商品金额
		
	})
}
//清空购物车
function delAll(){
	$(".delAll").click(function(){
		$(".Table").children("tr").remove();
		xiaoji($(this));//小计
		jifen($(this));//积分
		allNum();//商品件数
		allJf();//总共积分
		allMoney();//商品金额
	})
}
//商品总件数
function allNum(){
	var a=0;
	$(".Num").each(function(){//用each方法遍历元素
		a=a+Number($(this).val());//取出元素的内容，并转化为数字
	});
	$("#allNum").text(a);
		
}
//总共积分
function allJf(){
	var b=0;
	$(".tdJf span").each(function(){//用each方法遍历元素
		b=b+Number($(this).text());//取出元素的内容，并转化为数字
	});
	$(".allJf em").text(b);
}
//商品总额
function allMoney(){
	var c=0;
	$(".tdXiaoji span").each(function(){//用each方法遍历元素
		c=c+Number($(this).text());//取出元素的内容，并转化为数字
	});
	$(".allMoney").text(c);
}
