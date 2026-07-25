$(document).ready(function(){		
	// 화면이동 스크롤효과
	window.onload = function(){		
		var elm = ".full_size_page";
            $(elm).each(function(index){
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function(e){
                    e.preventDefault();
                    var delta = 0;
                    if(!event) event = window.event;
                    if(event.wheelDelta){
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if(event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if(delta < 0) {
                        if($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    }else{
                        if($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 1초(800)
                    $("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
				});
			});
	}	
	
	// 페이지에 따른 애니메이션	
	var pagename_trigger = false,
	p3_trigger = false,
	p3_count1,
	p3_count2,
	p3_count3,
	p3_count4,
	p3_count5,
	p3_num;
	
	$(window).on('scroll',function() {
		if(checkVisible($('#page_1'))&&!pagename_trigger) {
			$(".menu_wrap").removeClass("menu_wrap_min");
			$(".menu_more_close").removeClass("menu_more_close_min");
			$(".menu_call_wrap").removeClass("menu_call_wrap_on");
			var page_btn_num = $("#page_1").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
		}else{
			$(".menu_wrap").addClass("menu_wrap_min");
			$(".menu_more_close").addClass("menu_more_close_min");
			$(".menu_call_wrap").addClass("menu_call_wrap_on");
		}if(checkVisible($('#page_2'))&&!pagename_trigger) {
			page_btn_num = $("#page_2").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p2_why, .p2_title > h3, .p2_subwrap").addClass("active");
		}if(checkVisible($('#page_3'))&&!pagename_trigger) {
			page_btn_num = $("#page_3").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p3_wrap > h3, .p3_title, .p3_subwrap").addClass("active");
			if(!p3_trigger){
				// 페이지3 카운팅1
				p3_count1= 17337800;		
				$({ val : 0 }).delay(400).animate({ val : p3_count1 }, {
					duration: 1400,
					step: function() {
						p3_num = p3_numberWithCommas(Math.floor(this.val));
						$(".p3_count1").text(p3_num);
					}
				});
				// 페이지3 카운팅2
				p3_count2= 12497800;		
				$({ val : 0 }).delay(400).animate({ val : p3_count2 }, {
					duration: 1400,
					step: function() {
						p3_num = p3_numberWithCommas(Math.floor(this.val));
						$(".p3_count2").text(p3_num);
					}
				});	
				// 페이지3 카운팅3
				p3_count3= 10867300;		
				$({ val : 0 }).delay(400).animate({ val : p3_count3 }, {
					duration: 1400,
					step: function() {
						p3_num = p3_numberWithCommas(Math.floor(this.val));
						$(".p3_count3").text(p3_num);
					}
				});	
				// 페이지3 카운팅4
				p3_count4= 7402200;		
				$({ val : 0 }).delay(400).animate({ val : p3_count4 }, {
					duration: 1400,
					step: function() {
						p3_num = p3_numberWithCommas(Math.floor(this.val));
						$(".p3_count4").text(p3_num);
					}
				});	
				// 페이지3 카운팅5
				p3_count5= 7370200;		
				$({ val : 0 }).delay(400).animate({ val : p3_count5 }, {
					duration: 1400,
					step: function(){
						p3_num = p3_numberWithCommas(Math.floor(this.val));
						$(".p3_count5").text(p3_num);
					},
					complete: function(){
						p3_trigger = true;
					}
				});	
				function p3_numberWithCommas(x) { // 3자리마다 콤마 찍기
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			}
		}if(checkVisible($('#page_4'))&&!pagename_trigger) {
			page_btn_num = $("#page_4").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");			
			
			$(".p4_wrap h3, .p4_iconbox, .p4_subwrap").addClass("active");
		}if(checkVisible($('#page_5'))&&!pagename_trigger) {
			page_btn_num = $("#page_5").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p5_title_m, .p5_wrap2, .p5_title").addClass("active");
		}if(checkVisible($('#page_6'))&&!pagename_trigger) {
			page_btn_num = $("#page_6").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p6_title, .p6_box1 > ul li, .p6_box2 > li").addClass("active");
		}if(checkVisible($('#page_7'))&&!pagename_trigger) {
			page_btn_num = $("#page_7").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p7_wrap > h3, .p7_title, .p7_subwrap").addClass("active");
		}if(checkVisible($('#page_8'))&&!pagename_trigger) {
			page_btn_num = $("#page_8").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p8_wrap > h3, .p8_title, .p8_subwrap").addClass("active");
		}if(checkVisible($('#page_9'))&&!pagename_trigger) {
			page_btn_num = $("#page_9").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p9_wrap > h3, .p9_title, .p9_subwrap2, .p9_subwrap3").addClass("active");
		}if(checkVisible($('#page_10'))&&!pagename_trigger) {
			page_btn_num = $("#page_10").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p10_wrap > h3, .p10_title, .p10_subwrap2, .p10_subwrap3").addClass("active");	
		}if(checkVisible($('#page_11'))&&!pagename_trigger) {
			page_btn_num = $("#page_11").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
			
			$(".p11_slidebox, .p11_infobox").addClass("active");	
		}if(checkVisible($('#page_12'))&&!pagename_trigger) {
			page_btn_num = $("#page_12").attr("data-pagebtn");
			$(".page_name_wrap ul > li").removeClass("page_name_wrap_plus");
			$("#" + page_btn_num).addClass("page_name_wrap_plus");
		}
	});
	
	// 메뉴 전체영역
		// 메뉴 더보기 클릭효과
	$(".menu_more_info > li").animate({paddingLeft: "5%", opacity: "0"},"fast");
	$(".menu_more_box").click(function(){
		$(".menu_more_wrap_out:not(:animated)").fadeIn("fast");
		$(".menu_more_box").toggleClass("menu_more_ani");
		$(".menu_more_close").delay(700).fadeIn("slow");
		$(".menu_more_info > li:nth-of-type(1)").stop().delay(200).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(2)").stop().delay(300).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(3)").stop().delay(400).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(4)").stop().delay(500).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(5)").stop().delay(600).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(6)").stop().delay(700).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(7)").stop().delay(800).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(8)").stop().delay(900).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(9)").stop().delay(1000).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(10)").stop().delay(1100).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(11)").stop().delay(1200).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_info > li:nth-of-type(12)").stop().delay(1300).animate({paddingLeft: "0", opacity: "1"},"slow");
		$(".menu_more_wrap").addClass("menu_more_wrap_on");
	});
		// 메뉴 더보기 닫기
	function menuClose(){
		$(".menu_more_wrap_out:not(:animated)").fadeOut("fast");
		$(".menu_more_box").toggleClass("menu_more_ani");
		$(".menu_more_close").fadeOut("fast");
		$(".menu_more_info > li").stop().animate({paddingLeft: "5%", opacity: "0"},"fast");
		$(".menu_more_wrap").removeClass("menu_more_wrap_on");
	}
	$(".menu_more_close").click(function(){
		menuClose(0);
	});
	$(".menu_more_wrap_out").click(function(){
		menuClose(0);
	});
	
		// 메뉴 링크 클릭효과, 우측 슬라이드 이름 클릭효과
	$(".menu_link_wrap > li, .menu_more_info > li, .page_name, .page_btn, .p1_sub3_link").click(function(){
		var clicklink = $(this).attr("data-link");
		movelink = $("#" + clicklink).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({
			scrollTop: movelink + 'px'
		}, {
			duration: 800, complete: function () {
			}
		});
	});	
	
		// 24시간전화 전체영역
	$(".menu_call_wrap > div > span").hide(5);	
	$(".menu_call_wrap > div").click(function(){ // 24시간 전화 연결
		$(".menu_call_wrap").removeClass("menu_call_wrap_off");
		$(".menu_call_wrap > p").animate({marginRight: "0"},"slow").fadeIn("slow");
		$(".menu_call_wrap > div > a").attr("href", "tel:1644-5471");
		$(".menu_call_wrap > div > span").hide(5);
	});
	$(".menu_call_wrap > p").click(function(){ // 24시간 전화 닫기
		$(".menu_call_wrap").addClass("menu_call_wrap_off");
		$(".menu_call_wrap > p").animate({marginRight: "20px"},"slow").fadeOut("slow");
		$(".menu_call_wrap > div > a").attr("href", "#none");
		$(".menu_call_wrap > div > span").show(5);	
	});
	
	// 퀵메뉴 등장효과
	$(".quick_menu_wrap").addClass("quick_menu_open");
	$(".quick_open").click(function(){
		$(".quick_menu_wrap").toggleClass("quick_menu_open");
	});
	$(".quick_menu_close").click(function(){
		$(".quick_menu_wrap").removeClass("quick_menu_open");
	});
	
	// 화면 터치효과
		// 데스크탑 터치
	var mstartX = 0, mendX = 0,mstartY = 0, mendY = 0;
	$(".full_size_page").on('mousedown',function(event){
		mstartX = event.pageX;
		mstartY = event.pageY;
	});
	
	// 페이지1
		// 페이지1 자동슬라이드 옵션
	var main_page_slide_count = 0;
	var main_page_slide = setInterval(function(){
		main_page_slide_count++;
		if(main_page_slide_count==15){
			$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))-100+"%"},"slow",function(){
				$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
				$("#page_1 > .sub_slide_box > .sub_slide:first-child").stop().appendTo("#page_1 > .sub_slide_box");
				$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
			});		
			main_page_slide_count=0;
		}
	},1000);
		// 페이지1 슬라이드 터치
	var startX,startY, endX,endY;
	$("#page_1").on('touchstart',function(event){
		startX = event.originalEvent.changedTouches[0].screenX;
		startY = event.originalEvent.changedTouches[0].screenY;
	});
	$("#page_1").on('touchend',function(event){
		endX=event.originalEvent.changedTouches[0].screenX;
		endY=event.originalEvent.changedTouches[0].screenY;
		if(startY-endY<20&&startX-endX>45){
			$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))-100+"%"},"slow",function(){
				$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
				$("#page_1 > .sub_slide_box > .sub_slide:first-child").stop().appendTo("#page_1 > .sub_slide_box");
				$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
			});	
			main_page_slide_count = 0;
			return false;				
		}else if(endY-startY<20&&endX-startX>45){
			$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))+100+"%"},"slow",function(){
				$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
				$("#page_1 > .sub_slide_box > .sub_slide:last-child").stop().prependTo("#page_1 > .sub_slide_box");
				$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
			});
			main_page_slide_count = 0;
			return false;    
		}
	});	
		// 페이지1 슬라이드 터치(데스크탑)
	$("#page_1").on('mouseup',function(event){
		mendX=event.pageX;
		mendY=event.pageY;
		if(mstartX-mendX>45&&mstartY-mendY<40){
			$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))-100+"%"},"slow",function(){
				$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
				$("#page_1 > .sub_slide_box > .sub_slide:first-child").stop().appendTo("#page_1 > .sub_slide_box");
				$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
			});	
			main_page_slide_count = 0;
			return false;   
		}else if(mendX-mstartX>45&&mendY-mstartY<40){
			$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))+100+"%"},"slow",function(){
				$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
				$("#page_1 > .sub_slide_box > .sub_slide:last-child").stop().prependTo("#page_1 > .sub_slide_box");
				$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
			});
			main_page_slide_count = 0;
			return false;       
		}
	});		
		// 페이지1 재생
	$("#page_1 .slide_btn_start").fadeOut("fast");
	$("#page_1 .slide_btn_start").click(function(){
		clearInterval(main_page_slide);
		$("#page_1 .slidebtn_box > div > div").css("border", "none");
		$("#page_1 .slide_btn_pause").css("border", "1px solid #777777");
		$("#page_1 .slide_btn_start").css("border", "1px solid #777777");
		main_page_slide_count = 0;
		main_page_slide = setInterval(function(){
			main_page_slide_count++;
			if(main_page_slide_count==15){
				$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))-100+"%"},"slow",function(){
					$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
					$("#page_1 > .sub_slide_box > .sub_slide:first-child").stop().appendTo("#page_1 > .sub_slide_box");
					$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
				});	
				main_page_slide_count=0;	
			}
		},1000);	
		$("#page_1 .slide_btn_start").fadeOut("fast");
		$("#page_1 .slide_btn_pause").slideDown("fast");
		return false;
	});
		// 페이지1 일시정지
	$("#page_1 .slide_btn_pause").click(function(){
		clearInterval(main_page_slide);
		$("#page_1 .slidebtn_box > div > div").css("border", "none");
		$("#page_1 .slide_btn_pause").css("border", "1px solid #777777");
		$("#page_1 .slide_btn_start").css("border", "1px solid #777777");
		$("#page_1 .slide_btn_pause").fadeOut("fast");
		$("#page_1 .slide_btn_start").slideDown("fast");
		main_page_slide_count = 0;
		return false;
	}); 
		// 페이지1 다음
	$("#page_1 .slide_btn_next").click(function(){
		$("#page_1 .slidebtn_box > div > div").css("border", "none");
		$("#page_1 .slide_btn_next").css("border", "1px solid #777777");
		$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))-100+"%"},"slow",function(){
			$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
			$("#page_1 > .sub_slide_box > .sub_slide:first-child").stop().appendTo("#page_1 > .sub_slide_box");
			$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
		});	
		main_page_slide_count = 0;
		return false;
	});
		// 페이지1 이전
	$("#page_1 .slide_btn_prev").click(function(){
		$("#page_1 .slidebtn_box > div > div").css("border", "none");
		$("#page_1 .slide_btn_prev").css("border", "1px solid #777777");
		$("#page_1 > .sub_slide_box").stop().animate({opacity: "0", marginLeft: parseInt($("#page_1 > .sub_slide_box").css("margin-left"))+100+"%"},"slow",function(){
			$("#page_1 > .sub_slide_box").animate({opacity: "1"},"slow");
			$("#page_1 > .sub_slide_box > .sub_slide:last-child").stop().prependTo("#page_1 > .sub_slide_box");
			$("#page_1 > .sub_slide_box").stop().css("margin-left", "0");
		});
		main_page_slide_count = 0;
		return false;
	});			
	
	// 페이지1_1	
	var bill_timer = setInterval(function(){
		// 서울 연간매출
		var bill_count_1= 562946842;		
		$({ val : 0 }).animate({ val : bill_count_1 }, {
			duration: 1400,
			step: function() {
				var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count1").text(num);
		  },
			complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count1").text(num);
			}
		});			
		
		// 화성 연간매출
		var bill_count_2= 719625300;		
		$({ val : 0 }).animate({ val : bill_count_2 }, {
			duration: 1400,
			step: function() {
				var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count2").text(num);
		  },
			complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count2").text(num);
			}
		});			
		
		// 부산 연간매출
		var bill_count_3= 506695600;		
		$({ val : 0 }).animate({ val : bill_count_3 }, {
			duration: 1400,
			step: function() {
				var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count3").text(num);
		  },
			complete: function() {
			var num = numberWithCommas(Math.floor(this.val));
				// 총 매출액 해당 클래스
				$(".bill_count3").text(num);
			}
		});	
		
		function numberWithCommas(x) { // 3자리마다 콤마 찍기
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},12000);
		// 페이지1_1 모바일
	$(".bill_info_m div").hide(10);		
	$(".bill_info_m div:first-child").fadeIn("fast");	
	var main_slide2_m = setInterval(function(){
		$(".bill_info_m div:first-child").stop().appendTo(".bill_info_m");
		$(".bill_info_m div").hide(10);		
		$(".bill_info_m div:first-child").fadeIn("fast");		
	},14000);	
		// 페이지1_1 배경자동변경
	var p1_sub1_bkd_count = 0;	
	var p1_sub1_bkd_timer = setInterval(function(){
		p1_sub1_bkd_count++;
		if(p1_sub1_bkd_count==5){
			$("#page_1 .sub_slide1 .slide_bkd").attr("style", "background-image: url(img/page1/main_img1_2.jpg);");
		}
		if(p1_sub1_bkd_count==10){
			$("#page_1 .sub_slide1 .slide_bkd").attr("style", "background-image: url(img/page1/main_img1_3.jpg);");
		}
		if(p1_sub1_bkd_count==15){
			$("#page_1 .sub_slide1 .slide_bkd").attr("style", "background-image: url(img/page1/main_img1_4.jpg);");
		}
		if(p1_sub1_bkd_count==20){
			$("#page_1 .sub_slide1 .slide_bkd").attr("style", "background-image: url(img/page1/main_img1_1.jpg);");
			p1_sub1_bkd_count = 0;
		}
	},1000);	
	
	// 페이지2	
	var p2_slider = $('#p2_subwrap2').lightSlider({
		autoWidth:true,
		loop:true,
		controls:true
	});	
		// 페이지2 점주후기 영상 등장
	var video_embed = $(".p2_video_wrap > iframe");	
	var play_num
	$(".p2_black_layout").click(function(){		
		$(".p2_video_wrap").fadeOut();
		$(".p2_video_wrap > iframe").remove();		
	});
	$(".p2_playbtn").click(function(){
		$(".quick_menu_wrap").removeClass("quick_menu_open");
		$(".p2_video_wrap").fadeIn();
		play_num = $(this).attr("data-video");
		$(".p2_video_wrap").append(video_embed);
		$(".p2_video_wrap > iframe").fadeOut(5);
		$("#play_0")[0].src = "https://www.youtube.com/embed/n1y0fIhqPFQ?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_1")[0].src = "https://www.youtube.com/embed/CQOH-Bc3JIQ?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_2")[0].src = "https://www.youtube.com/embed/FeWZ_l1gi9k?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_3")[0].src = "https://www.youtube.com/embed/awYVKyyt-vA?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_4")[0].src = "https://www.youtube.com/embed/-wNSH5KP6D4?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_5")[0].src = "https://www.youtube.com/embed/Wa3Z7rsDkqU?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#play_6")[0].src = "https://www.youtube.com/embed/UgJ63MWxiRU?list=PLagcdmJItAhZ810nSRMgRDzOCyl8-E1Go";
		$("#" + play_num).fadeIn("fast");
		$("#" + play_num)[0].src += "&autoplay=1";
		ev.preventDefault();
	});	
	
	// 페이지4
	var p4_slider = $('#p4_subwrap2').lightSlider({
		autoWidth:true,
		loop:true,
		keyPress:true,
		controls:false,
		auto:true,
		speed:1500,
		pause:3000
	});	
	$('.p4_next').click(function() {
		p4_slider.goToNextSlide();
	});
	$('.p4_prev').click(function() {
		p4_slider.goToPrevSlide();
	});
	
	// 페이지11
	var	p11_slidebox = document.querySelector('.p11_slidebox > div'),
	p11_slidebox2 = document.querySelector('#p11_slidebox2'),
	p11_slide = document.querySelectorAll('.p11_slide'),
	p11_Count = p11_slide.length,
	p11_Index = 0,
	p11_timer,
	p11_Next = document.querySelector('.p11_next'),
	p11_Prev = document.querySelector('.p11_prev');
	
		// 페이지11 슬라이드가 있으면 가로로 배열하기
	for(var a = 0; a < p11_Count; a++){
		p11_slide[a].style.left = a * 100 + '%';
	}
		// 페이지11 슬라이드 이동 함수
	function goToSlide(idx){
		p11_slidebox2.classList.add('animated');
		p11_slidebox2.style.left = -100 * idx + '%';
		p11_Index = idx;
	}
	goToSlide(0);	
		// 페이지11 다음버튼 클릭
	p11_Next.addEventListener('click', function(){
		if(p11_Index == p11_Count -1){
			goToSlide(0);
		}else{
			goToSlide(p11_Index + 1);
		}
	});
		// 페이지11 이전버튼 클릭
	p11_Prev.addEventListener('click', function(){	
		if(p11_Index == 0){
			goToSlide(p11_Count - 1);
		}else{
			goToSlide(p11_Index - 1);
		}
	});	
	
		// 페이지11 슬라이드 터치
	$(".p11_slidebox").on('touchstart',function(event){
		startX = event.originalEvent.changedTouches[0].screenX;
		startY = event.originalEvent.changedTouches[0].screenY;
	});
	$(".p11_slidebox").on('touchend',function(event){
		endX=event.originalEvent.changedTouches[0].screenX;
		endY=event.originalEvent.changedTouches[0].screenY;
		// 페이지11 다음 터치
		if(startY-endY<20&&startX-endX>45){
			if(p11_Index == p11_Count -1){
				goToSlide(0);
			}else{
				goToSlide(p11_Index + 1);
			}	
		}else if(endY-startY<20&&endX-startX>45){ // 페이지11 이전 터치
			if(p11_Index == 0){
				goToSlide(p11_Count - 1);
			}else{
				goToSlide(p11_Index - 1);
			}
		}
	});	
	
	// 페이지11 자동 슬라이드
	function startAutoSlide(){		
		p11_timer = setInterval(function(){
			var nextIdx = (p11_Index + 1)%p11_Count;
			
			goToSlide(nextIdx);
			
		}, 9000);
	}	
	startAutoSlide();
	function stopAutoSlide(){
		clearInterval(p11_timer);
	}
	// 페이지11 자동 슬라이드 정지
	p11_slidebox.addEventListener('mouseenter', function(){
		stopAutoSlide();
	});
	p11_slidebox.addEventListener('mouseleave', function(){
		startAutoSlide();
	});	
	
	
	// 오브젝트 발견 감지
	function checkVisible( elm, eval ) {
		eval = eval || "object visible";
		var viewportHeight = $(window).height(), // Viewport Height
			scrolltop = $(window).scrollTop(), // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();   
		
		if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		if (eval == "above") return ((y < (viewportHeight + scrolltop)));
	}
});

// 개인정보 수집 보기
function layer_open(el){

	var temp = $('#' + el);
	var bg = temp.prev().hasClass('pop_black_layout');    // dimmed 레이어를 감지하기 위한 boolean 변수

	if(bg){
		$('.layer').fadeIn();   // 'pop_black_layout' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다. 
	}else{
		temp.fadeIn();
	}

	temp.find('a.cbtn').click(function(e){
		if(bg){
			$('.layer').fadeOut(); // 'pop_black_layout' 클래스가 존재하면 레이어를 사라지게 한다. 
		}else{
			temp.fadeOut();
		}
		e.preventDefault();
	});

	$('.layer .pop_black_layout').click(function(e){  // 배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.layer').fadeOut();
		e.preventDefault();
	});

}     
	
// 마우스 벗어났을때 팝업등장
/* $(document).one("mouseleave", function(){
	$(".outer_layer").fadeIn();
}); */
/* 마우스 벗어났을때 팝업등장 반복적용
$(document).bind("mouseleave", function(){
	$(".test_layer").fadeIn();
});
*/
// 팝업 닫기
$(document).ready(function(){
	$(".outer_black, .outer_close").click(function(){
		$(".outer_layer").fadeOut();
	});
});