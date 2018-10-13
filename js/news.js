$(".morenews div").click(function() {
	var i = $(this).index();
	window.sessionStorage.setItem("newsUrl", i);
});
var list = ["huabian", "tiyu", "meinv", "guonei"];
var i = window.sessionStorage.getItem("newsUrl");
var page = 1;
var text = "";
var maxpage = 15;
(function() {
	ajaxNews(page);
	btnCLkpage();
})();

function ajaxNews(page) {
	$.ajax({
		type: "get",
		url: "https://api.tianapi.com/" + list[i] + "/?key=60b27283ef661d3aaaea072e19dcf649&num=6&page=" + page,
		success: function(data) {
			for(var i = 0; i < 6; i++) {
				text = "<code><img src='" + data.newslist[i].picUrl + "' width='100%' alt=''></code><p class='one'><a href='TrueNew.html'>" + data.newslist[i].title + "</a></p><i>" + data.newslist[i].ctime + "</i><p>更多请访问 <a href='" + data.newslist[i].url + "' target='_blank'>" + data.newslist[i].url + "</a></p>";
				$(".section_first .text ul li").each(function() {
					if($(this).index() == i) {
						$(this).html(text);
					}
				});
			};
		}
	});
}
//分页按钮
function btnCLkpage() {
	$(".pagination li").click(function() {
		//...
		if($(this).index() == 6) {
			if($(".pagination .active").find("a").text() < maxpage - 5) {
				$(".pagination li").each(function() {
					if($(this).index() < 6 && $(this).index() != 0) {
						$(this).find("a").text(parseInt($(this).find("a").text()) + 5);
					};
				});
				ajaxNews($(".pagination .active").find("a").text());
			}
		} else if($(this).index() == 0) {
			//prev
			if($(".pagination .active").find("a").text() > 1) {
				var now = $(".pagination .active").index();
				if(now != 1) {
					$(".pagination li").each(function() {
						if($(this).index() == now - 1) {
							$(this).addClass("active").siblings().removeClass();
						};
					});
				} else {
					$(".pagination li").each(function() {
						if($(this).index() < 6 && $(this).index() != 0) {
							$(this).find("a").text(parseInt($(this).find("a").text()) - 1);
						};
					});
				}
				ajaxNews($(".pagination .active").find("a").text());
			} else {
				return;
			}
		} else if($(this).index() == 7) {
			//next
			if($(".pagination .active").find("a").text() < maxpage) {
				var now = $(".pagination .active").index();
				if(now != 5) {
					$(".pagination li").each(function() {
						if($(this).index() == now + 1) {
							$(this).addClass("active").siblings().removeClass();
						};
					});
				} else {
					$(".pagination li").each(function() {
						if($(this).index() < 6 && $(this).index() != 0) {
							$(this).find("a").text(parseInt($(this).find("a").text()) + 1);
						};
					});
				}
				ajaxNews($(".pagination .active").find("a").text());
			}
		} else if($(this).index() > 0 && $(this).index() < 6) {
			//number
			$(this).addClass("active").siblings().removeClass();
			ajaxNews($(this).find("a").text());
		} else if($(this).index() == 9) {
			//jump
			var DataIn = parseInt($(".pagination input").val());
			if(DataIn <= 5 && DataIn >= 1) {
				ajaxNews(DataIn);
				$(".pagination li").each(function() {
					if($(this).index() > 0 && $(this).index() < 6) {
						$(this).find("a").text($(this).index());
					};
					if($(this).index() == DataIn) {
						$(this).addClass("active").siblings().removeClass();
					}
				})
			} else if(DataIn <= maxpage && DataIn > 5) {
				ajaxNews(DataIn);
				$(".pagination li").each(function() {
					if($(this).index() == 5) {
						$(this).find("a").text(DataIn);
						$(this).addClass("active").siblings().removeClass();
					} else if($(this).index() > 0 && $(this).index() < 6) {
						$(this).find("a").text(DataIn - (5 - $(this).index()));
					}
				});
			} else if(DataIn > maxpage) {
				ajaxNews(maxpage);
				$(".pagination li").each(function() {
					if($(this).index() == 5) {
						$(this).find("a").text(maxpage);
					} else if($(this).index() > 0 && $(this).index() < 6) {
						$(this).find("a").text(maxpage - (5 - $(this).index()));
					};
					if($(this).index() == 5) {
						$(this).addClass("active").siblings().removeClass();
					};
					$(".pagination input").val("最大页数:" + maxpage);
				});
			} else {
				ajaxNews(1);
				$(".pagination li").each(function() {
					if($(this).index() > 0 && $(this).index() < 6) {
						$(this).find("a").text($(this).index());
					};
					if($(this).index() == 1) {
						$(this).addClass("active").siblings().removeClass();
					};
					$(".pagination input").val("最小页数:" + 1);
				});
			}
		}
	})
}