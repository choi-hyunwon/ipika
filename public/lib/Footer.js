(function(){
	$.get('/Partials/footer.html', function(data){
		$('#PageFooter').html(data);
	})
})();