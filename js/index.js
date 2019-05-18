$(function() {

	var ch = document.cookie;

	if (ch != "") {
		var name = getCookie("namecookie");
		var type = getCookie("typecookie");
		var imge = getCookie("imgecookie");
		if (type != "" && type !== undefined) {

			setCookie("namecookie", name, 24);
			$("#user-name").text(name);
		}
		if (type != "" && type !== undefined) {
			setCookie("typecookie", type, 24);
			$("#user-type").text(type);
		}
		if (imge != "" && imge != undefined) {
			setCookie("imgecookie", imge, 24);
			$("#user-imge").attr("src", imge);
		}
	}


//提交点击
	$("#submit").click(function() {
		var ls = $("#text").val();
		var le=$("#so a").attr("href");
		window.open(le + ls)
	})
	window.setTimeout(function() {
		$(".img01").css("opacity", 1);
	}, 0);
	var i = 1;
	window.setInterval(toptime, 5000);

	function toptime() {
		$(".img").css("opacity", 0);
		$(".img0" + i).css("opacity", 1);
		i++;
		if (i == 6) {
			i = 1;
		}
	}


	var images = document.getElementsByClassName("img-lun");
	var pos = 0;
	var len = images.length;

	window.setInterval(function() {
		images[pos].style.opacity = '0';
		pos = ++pos == len ? 0 : pos;
		images[pos].style.opacity = '1';

	}, 3000);


	$("#img-ul-01 li").click(function() {
		$("#img-ul-01 li").css("color", "#555");
		$("#img-ul-01 li").css("background-color", "#FFF");
		$(this).css("background-color", "#272822");
		$(this).css("color", "#FFF");
	});

	//       var images = document.getElementById("img-ul-01").getElementsByTagName("li").length;
	$("#in-01").css("display", "block")
	$("#img-ul-01 li").click(function() {
		var ls = $(this).index();
		$("#index-gong div").css("display", "none");
		$("#in-0" + (ls + 1)).css("display", "block");
	});


	//键盘敲击事件
	$("#text").keydown(function(en){
		if (en.keyCode == 13) {
			var ls = $("#text").val();
			var le=$("#so a").attr("href");
			window.open(le+ls);

		};


	});

	//设置cookie
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	//取出cookie
	function getCookie(objName) { //获取指定名称的cookie的值 
		var arrStr = document.cookie.split("; ");
		for (var i = 0; i < arrStr.length; i++) {
			var temp = arrStr[i].split("=");
			if (temp[0] == objName) {
				return decodeURI(temp[1]);
			}
		}
	}


	$("#up").click(function() {

		var name = $("#name").val();
		var type = $("#type").val();
		var imge = $("#imge").val();
		var on = false;
		if (name != '') {
			setCookie("namecookie", name, 24);
			on = true;
		}
		if (type != '') {
			setCookie("typecookie", type, 24);
			on = true;
		}
		if (imge != '') {
			setCookie("imgecookie", imge, 24);
			on = true;
		}
		if (on == true) {
			location.reload();
		} else {
			$("#ti").text("还什么都没有呢！");
		}

	});

	$("#closeup").click(function() {
		$("#flte-zhe").hide();
	});

	$("#title-img-update").click(function() {
		$("#flte-zhe").toggle();
	})



	//设置
	$("#flte-zhe").Tdrag({
		scope: "html",
		handle: "#top"
	});

	//联想
	$("#text").keyup(function() {
		var tex = $(this).val();
		if (tex!='') {

		$.get("https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd=" + tex, function(data) {
			var datas = JSON.stringify(data); //将jsonp函数转换为json字符串
			var da=JSON.parse(datas);//将字符串转化为json对象，对象可以使用‘.’的方式调用
			var htl="<span class='tong top1'>联想结果</span><div class='xian'></div><ul>";
			var mt;
		for(var o in da.g){
			mt=da.g[o].q;
			if(mt.length>13){
				mt=mt.substring(0,13)+"...";
			}
			htl+="<li>&nbsp;&nbsp;"+mt+"<li>";
			
		};
		$(".lain").html(htl+"</ul><span class='tong top2'>查找结束</span><div class='xian'></div>");
		}, "jsonp");
			
		}
	});
	$("html").click(function(){
		
		// $(".lain").css("dsplay","none");
		$(".lain").html(" ");
		
	})
	$("#so").on("click",".lain li",function(){
		var text=$(this).text();
		var huo=trim(text);
		$("#text").val(huo);
		
		window.open("https://www.baidu.com/s?wd=" + huo);
	})
	
	function trim(str){  
  return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');  
}
//查询
$("#so-ul li").click(function(){
	$("#so-li li").css("background-color","#555555");
	var sd=$(this).index();
	sd=sd+1;
	var lis=$("#so-li li").length;
	for(var i=1;i<=lis;i++){
		if(sd==i){
			$("#so-li li").eq(i-1).css("background-color","#141414");
			
		}
	}
	$("#so a").attr("href",$(this).find("ol li").eq(0).text());
	$("#so a img").attr("src",$(this).find("ol li").eq(1).text());
	$("#so #text").attr("placeholder",$(this).find("ol li").eq(2).text());
	
})


});
