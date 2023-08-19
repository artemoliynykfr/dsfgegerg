jQuery(document).ready(function(){
	jQuery(".select-js .select-js--item").on("click",function(){
		if( jQuery(this).hasClass("active") != true )
		{
			var oldLink = jQuery(this).parent().parent().find(".active").eq(0);
			var oldBl = jQuery(oldLink).data("href");
			jQuery(oldLink).removeClass("active");
			jQuery(oldBl).removeClass("open");

			var newLink = jQuery(this);
			var newBl = jQuery(this).data("href");
			jQuery(newLink).toggleClass("active");
			jQuery(newBl).addClass("open");
		}
		return false;
	});
});