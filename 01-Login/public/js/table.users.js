
/*
 * Editor client script for DB table users
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'http://localhost:8082/api/users',
		table: '#users',
		fields: [
			{
				"label": "nombre:",
				"name": "nombre"
			},
			{
				"label": "correo:",
				"name": "correo"
			},
			{
				"label": "telefono:",
				"name": "telefono"
			},
			{
				"label": "sexo:",
				"name": "sexo"
			}
		]
	} );

	var table = $('#users').DataTable( {
		ajax: 'http://localhost:8082/api/users',
		columns: [
			{
				"data": "nombre"
			},
			{
				"data": "correo"
			},
			{
				"data": "telefono"
			},
			{
				"data": "sexo"
			}
		],
		select: true,
		lengthChange: false
	} );

	new $.fn.dataTable.Buttons( table, [
		{ extend: "create", editor: editor },
		{ extend: "edit",   editor: editor },
		{ extend: "remove", editor: editor }
	] );

	table.buttons().container()
		.appendTo( $('.col-md-6:eq(0)', table.table().container() ) );
} );

}(jQuery));

