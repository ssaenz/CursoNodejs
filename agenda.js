
//Definición del cierre Agenda
var Agenda = function (titulo, inic) {
	//Variables privadas
  	var _titulo = titulo;
  	var _contenido = inic;
  	//Retorno del objeto interfaz de acceso al cierre.
  	return {
		titulo: function()				{ return _titulo; },							//Devuelve el título de la agenda
    	meter:  function(nombre, tf)	{ _contenido[nombre]=tf; },				//Añade un nuevo par nombre:número a la agenda
    	tf:     function(nombre)		{ return _contenido[nombre]; },			//Devuelve el teléfono de un nombre dado.
    	borrar: function(nombre)		{ delete _contenido[nombre]; },			//Elimina un nombre y su número por nombre
    	toJSON: function()				{ return JSON.stringify(_contenido);},	//Devuelve la representación en formato JSON de la agenda.
    	//Lista los números de la agenda.
    	listar: function() {
    		var out = "";
    		for (var item in _contenido) {
	    		out += item + ", " + _contenido[item] + "\n";
    		}
    		console.log(out);
    	}
	};
}

//Instanciación de una agenda
var amigos = new Agenda ("Amigos", { Pepe: 113278561, José: 157845123, Jesús: 178512355 });

//Ejecución del método listar
amigos.listar();
