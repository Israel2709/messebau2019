/*$(document).bind('scroll',function(e){
   console.log(window.pageYOffset);
   console.log($("#section-1").offset().top);
   $(".spy-section").each(()=>{
   	console.log($(this).offset().top);
   })
});*/

$(".wrapper-section-active .bullet").click((event)=>{

	$(".wrapper-section-active .bullet").removeClass("active");
	$(event.target).addClass("active");
	let selectedSection = $(event.target).data("section-target");
	console.log(selectedSection);

	$('html, body').animate({
        scrollTop: $("#"+selectedSection).offset().top
    }, 1000);

})