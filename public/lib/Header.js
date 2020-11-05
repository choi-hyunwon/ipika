(function(){
	$.get('/Partials/header.html', function(data){
		$('#PageHeader').html(data);
		var currentPath = location.pathname;
		$ (".header-nav li a").each (function (index, element) {
			var anchorHref = $ (element).attr ('href');
			if (anchorHref === currentPath) {
				$ (element).toggleClass ('activeLink');
				$('#SelectedDemo').text($(element).text());
			}
		});
		$ (".header-nav li a").click (function () {
			$ ('.header-nav.mobile').hide ({ easing: 'swing' });
		});
		$(window).click(function(e){
			var targetParents = $(e.target).parents().toArray();
			if(e.target === document.getElementsByClassName('more-icon')[0] || targetParents.contains(document.getElementsByClassName('more-icon')[0])){
				$ ('.header-nav.mobile').toggle ({ easing: 'swing', duration: 200 });
			} else {
				$ ('.header-nav.mobile').hide ({ easing: 'swing', duration: 200 });
			}
		});
		$(window).resize(function(e){
			$ ('.header-nav.mobile').hide ({ easing: 'swing' });
		});
	})
})();