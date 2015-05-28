$(document).ready(function() {
	$("#typeofroom").load(function() {
		$("#typeofroom").change()
	});
	$("#typeofroom").change(function() {
		$.getJSON("/placeType/"+ $("#typeofroom").val(), function(result) {
			var select = $("#selectroom")
			select.empty();
			$.each(result.rooms, function(index, value) {
				select.append($("<option />").val(value.id).text(value.name));
			});
			select.val('');
		});
	});

	$("#find").click(function() {
		window.location = "/place/" + $("#selectroom").val();
	});
});