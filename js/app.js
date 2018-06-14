/* MOBILE COLLAPSE MENU */
// (function($) {
//   $.fn.collapsable = function(options) {
//     // iterate and reformat each matched element
//     return this.each(function() {
//       // cache this:
//       var obj = $(this);
//       var tree = obj.next('.navigation');
//       obj.click(function(){
//         if( obj.is(':visible') ){tree.toggle();}
//       });
//       $(window).resize(function(){
//         if ( $(window).width() <= 1200 ){tree.attr('style','');};
//       });
//     });
//   };
// $(document).ready(function(){
//     $('.slide-trigger').collapsable();
// });
// })(jQuery);

(function($){
	if($(window).width()<1200){
		$('.collapse-trigger').on('click', function(){//quand je clique sur l'élément de class collapse-trigger, je supprime 
			$collapse-trigger = $(this);

			if($collapse-trigger.hasClass('empty')) {//ou je rajoute la class empty à tous les éléments parents de la ligne
				$collapse-trigger.parents('.row').children('div').removeClass('empty');
			} else {
				$collapse-trigger.parents('.row').children('div').addClass('empty');
			}

			/*
			 Au clic sur un élément qui a la classe square
			 si cet élément a la classe empty
			 	-> je supprime la classe empty sur tous les éléments div enfants du parent class row de l'élément
			 sinon
			 	-> j'ajoute la classe empty sur tous les éléments div enfants du parent class row de l'élément
			*/
		})
	}	
})(jQuery);	

// $(function () {
// 	var collapsed = true;

// 	$('#sidebar .inner>h2').click(function() {
// 		collapsed = !collapsed;
// 		formatSidebar();
// 	});

// 	$(window).resize(formatSidebar);

// 	formatSidebar();


// 	function formatSidebar() {
// 		if($(window).width()<1200){
// 			$('#sidebar').removeClass('collapsible');
// 			$('#sidebar .inner div').show();
// 		}else{
// 			$('#sidebar').addClass('collapsible');
// 			if (collapsed){
// 				$('#sidebar .inner div').hide();
// 				$('#sidebar .inner>h2').removeClass('minus');	
// 			}else{
// 				$('#sidebar .inner div').show();
// 				$('#sidebar .inner>h2').addClass('minus');
// 			}
// 		}
// 	}
// });