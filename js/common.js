$(document).ready(function() {
	var resut = true;

	$(".btn-contact").click(function() {
		$(".contact").fadeIn();
	});

	$(".btn-close").click(function() {
		$(".contact").fadeOut();
	});

//validation form
var error_shadow = {
	"border": "none",
	"border": "solid 1px red",
	"box-shadow": "inset 0px 0px 6px 0px rgba(255,0,0, 0.5)",
	"color": "rgba(255,0,0, 0.5)",
	"font-size": "1em",
	"font-style": "italic",
	"font-weight": "300",
	"text-align": "left",
	"padding": "0 15px"
};

var error_reset = {
	"border": "1px solid #777777",
	"box-shadow": "none",
	"color": "#777777",

}

var error_message = "Поле обязательно для заполнения";

//validation form for in out
$("form").submit(function() {
	if (($("#name").val() === "") || ($("#name").val() === error_message) || ($("#name").val().length < 2)) {
		$("#name").css(error_shadow).val(placeholder=error_message);
		result = false;
	} 
	if ( !($("#name").val() === error_message) && ($("#name").val().length = 2)) {
		result = true;
	}

	return result;
});
$("form").submit(function() {
	if (($("#phone").val() === "") || ($("#phone").val() === error_message) || ($("#phone").val().length < 2)) {
		$("#phone").css(error_shadow).val(placeholder=error_message);
		result = false;
	} 
	if ( !($("#phone").val() === error_message) && ($("#phone").val().length = 2)) {
		result = true;
	}

	return result;
});
$("form").submit(function() {
	if (($("#email").val() === "") || ($("#email").val() === error_message) || ($("#email").val().length < 2)) {
		$("#email").css(error_shadow).val(placeholder=error_message);
		result = false;
	} 
	if ( !($("#email").val() === error_message) && ($("#email").val().length = 2)) {
		result = true;
	}

	return result;
});


$("#name").focus(function() {
	if($(this).val() === error_message) {
			$(this).css(error_reset).val(placeholder="");
		}
		});
$("#phone").focus(function() {
	if($(this).val() === error_message) {
			$(this).css(error_reset).val(placeholder="");
		}
		});
$("#email").focus(function() {
	if($(this).val() === error_message) {
			$(this).css(error_reset).val(placeholder="");
		}
		});



//slider

var elem = $(".photo_slider").children().length;

var count = 0;

	$(".prev").click(function() {
		if(count < elem - 1) {
			$(".photo_slider").animate({left: "-=100%"}, 500);
			count++;
		} else {
			$(".photo_slider").animate({left: "0%"}, 900);
			count = 0;
		}
	});

	$(".next").click(function() {
		if(count == 0) {
			$(this).hidden
		} else {
			$(".photo_slider").animate({left: "+=100%"}, 500);
		count--; }
	});

	//sidebar
	//delete click link teg a
	$(".side_bar a").click(function(e) {
		e.preventDefault();
	});




	$(".car .toggle").click(function() {
		if($(".car ul").is(":visible")) {
			$(".car ul").fadeOut();
		} else {
			$(".car ul").fadeIn();
		}
	});

	$(".tech .toggle").click(function() {
		if($(".tech ul").is(":visible")) {
			$(".tech ul").fadeOut();
		} else {
			$(".tech ul").fadeIn();
		}
	});
	$(".mob_phone .toggle").click(function() {
		if($(".mob_phone ul").is(":visible")) {
			$(".mob_phone ul").fadeOut();
		} else {
			$(".mob_phone ul").fadeIn();
		}
	});
	$(".cmptr .toggle").click(function() {
		if($(".cmptr ul").is(":visible")) {
			$(".cmptr ul").fadeOut();
		} else {
			$(".cmptr ul").fadeIn();
		}
	});

	$(".clothes .toggle").click(function() {
		if($(".clothes ul").is(":visible")) {
			$(".clothes ul").fadeOut();
		} else {
			$(".clothes ul").fadeIn();
		}
	});

	$(".home .toggle").click(function() {
		if($(".home ul").is(":visible")) {
			$(".home ul").fadeOut();
		} else {
			$(".home ul").fadeIn();
		}
	});


//item tech
	$(".list_tech ol li").each(function(index) {
		var it = index + 1;
		$(".item" + it).click(function() {
			switch (it) {
				case 1: 
				$(".list_1").show("slow");
				$(".list_2").hide("slow");
				$(".list_3").hide("slow");
				$(".list_4").hide("slow");
				$(".list_5").hide("slow");
				$(".list_6").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 2:
				$(".list_2").show("slow");
				$(".list_1").hide("slow");
				$(".list_3").hide("slow");
				$(".list_4").hide("slow");
				$(".list_5").hide("slow");
				$(".list_6").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 3: 
				$(".list_3").show("slow");
				$(".list_1").hide("slow");
				$(".list_2").hide("slow");
				$(".list_4").hide("slow");
				$(".list_5").hide("slow");
				$(".list_6").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 4:
				$(".list_4").show("slow");
				$(".list_1").hide("slow");
				$(".list_2").hide("slow");
				$(".list_3").hide("slow");
				$(".list_5").hide("slow");
				$(".list_6").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 5:
				$(".list_5").show("slow");
				$(".list_2").hide("slow");
				$(".list_3").hide("slow");
				$(".list_4").hide("slow");
				$(".list_1").hide("slow");
				$(".list_6").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 6:
				$(".list_6").show("slow");
				$(".list_2").hide("slow");
				$(".list_3").hide("slow");
				$(".list_4").hide("slow");
				$(".list_5").hide("slow");
				$(".list_1").hide("slow");
				$(".list_7").hide("slow");
				break;
				case 7:
				$(".list_7").show("slow");
				$(".list_2").hide("slow");
				$(".list_3").hide("slow");
				$(".list_4").hide("slow");
				$(".list_5").hide("slow");
				$(".list_6").hide("slow");
				$(".list_1").hide("slow");
				break;
			}
		});
	});
//sidebar toggle header menu
	$(".side_bar .toggle").click(function() {
		$(this).toggleClass("border_not_black");
	});



//sidebar bottom menu
$(".side_bar .toggle_link").each(function(index) {
		$(".side_bar .toggle_link:eq(" + index + ")").click(function() {
			var i = 0;
			switch (index) {
				case 0:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_car").show("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 1:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_cargo").show("slow");
				$(".list_car").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");

				break;
				case 2:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_tech").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 3:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_icebox").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 4:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

					$(".list_dishwasher").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 5:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_teapot").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 6:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

					$(".list_android").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 7:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

					$(".list_iphone").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 8:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");


					$(".list_computer").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 9:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_laptop").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_clothes").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 10:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");
				$(".side_bar .toggle_link:eq(11)").removeClass("border");

				$(".list_clothes").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_home").hide("slow");
				break;
				case 11:
				$(".side_bar .toggle_link:eq(" + index + ")").addClass("border");
				$(".side_bar .toggle_link:eq(1)").removeClass("border");
				$(".side_bar .toggle_link:eq(2)").removeClass("border");
				$(".side_bar .toggle_link:eq(3)").removeClass("border");
				$(".side_bar .toggle_link:eq(4)").removeClass("border");
				$(".side_bar .toggle_link:eq(5)").removeClass("border");
				$(".side_bar .toggle_link:eq(6)").removeClass("border");
				$(".side_bar .toggle_link:eq(7)").removeClass("border");
				$(".side_bar .toggle_link:eq(8)").removeClass("border");
				$(".side_bar .toggle_link:eq(9)").removeClass("border");
				$(".side_bar .toggle_link:eq(10)").removeClass("border");
				$(".side_bar .toggle_link:eq(0)").removeClass("border");


				$(".list_home").show("slow");
				$(".list_car").hide("slow");
				$(".list_cargo").hide("slow");
				$(".list_tech").hide("slow");
				$(".list_icebox").hide("slow");
				$(".list_dishwasher").hide("slow");
				$(".list_teapot").hide("slow");
				$(".list_android").hide("slow");
				$(".list_iphone").hide("slow");
				$(".list_computer").hide("slow");
				$(".list_laptop").hide("slow");
				$(".list_clothes").hide("slow");
				break;
			}
		});
	});


	});
