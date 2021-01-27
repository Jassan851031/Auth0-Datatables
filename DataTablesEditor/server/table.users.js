/*
* Controller for DB table users
*/

let db = require('./db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");

router.all('/api/users', async function(req, res) {
	// The following statement can be removed after the first run (i.e. the database
	// table has been created). It is a good idea to do this to help improve
	// performance.
	await db.raw( "CREATE TABLE IF NOT EXISTS `usuarios` (\
	`id` int(10) NOT NULL auto_increment,\
	`nombre` varchar(255),\
	`correo` varchar(255),\
	`telefono` numeric(9),\
	`sexo` varchar(255),\
	PRIMARY KEY( `id` )\
);" );

	let editor = new Editor(db, 'usuarios').fields(
		new Field("nombre")
		    .validator( Validate.notEmpty() ),
		new Field("correo")
		    .validator( Validate.notEmpty() )
		    .validator( Validate.email() ),
		new Field("telefono")
		    .validator( Validate.numeric() ),
		new Field("sexo"),
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
