$(document).bind('scroll',function(e){
   let currentScrollPosition = Math.floor((window.pageYOffset + 100) / $(window).height())
   $(".wrapper-section-active .bullet").removeClass("active");
   $(".wrapper-section-active .bullet:eq("+currentScrollPosition+")").addClass("active");
});

$(".wrapper-section-active .bullet").click((event)=>{
	$(".wrapper-section-active .bullet").removeClass("active");
	$(event.target).addClass("active");
	let selectedSection = $(event.target).data("section-target");
	$('html, body').animate({
        scrollTop: $("#"+selectedSection).offset().top
    }, 1000);
})

$(".navbar button, .aside-navbar .close-icon").click(()=>{
	$(".aside-navbar").toggleClass("hidden-navbar");
})