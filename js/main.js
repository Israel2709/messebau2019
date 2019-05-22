$(document).bind('scroll',function(e){
   let currentScrollPosition = Math.floor((window.pageYOffset + 100) / $(window).height())
   $(".wrapper-section-active .bullet").removeClass("active");
   $(".wrapper-section-active .bullet:eq("+currentScrollPosition+")").addClass("active");
   $(`#section-${currentScrollPosition +1}, #section-${currentScrollPosition +1} *`).removeClass("left-hidden");
});

$(document).ready(()=>{
	$('html, body').animate({
        top: 0
    }, 500,()=>{
    	$("#section-1, #section-1 *").removeClass("left-hidden");
    });
	
})

$(".wrapper-section-active .bullet").click((event)=>{
	//$(".wrapper-section-active .bullet").removeClass("active");
	//$(event.target).addClass("active");
	let selectedSection = $(event.target).data("section-target");
	$('html, body').animate({
        scrollTop: $("#"+selectedSection).offset().top
    }, 500,()=>{
    	$("#"+selectedSection+", #"+selectedSection+" *").removeClass("left-hidden");
    });
})

$(".navbar button, .aside-navbar .close-icon, .nav-link").click(()=>{
	$(".aside-navbar").toggleClass("hidden-navbar");
})