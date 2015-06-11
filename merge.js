/**
Este ejercicio lo he resuelto con streams porque me parecía más adecuado que andar cargando
el fichero a concatenar en memoria antes de escribirlo.
De esta forma, se pueden concatenar cualquier tipo de ficheros a nivel binario (texto, audio,
video, etc...) y solo se carga en memoria el tamaño del buffer con cada ciclo de lectura.
**/



//Tratamiento inicial del número de argumentos pasado.
if (process.argv.length <= 4) {
	console.log('	syntax: "nodejs merge.js <origin> <destiny1> <destiny2> ... <destinyN>');
	process.exit();
}

var fs = require("fs");		//Carga del módulo file system.
var writer = fs.createWriteStream(process.argv[2]);	//Variable global para el StreamWriter
var reader;		//Variable global para el StreamReader

console.log( (process.argv.length - 3) + " files will be merged into " + process.argv[2]);

var inputArg = 3;	//Índice del argumento a tratar

/**
** Función recursiva para escribir ficheros en el writer
**/
function concatFile() {
	
	//Caso básico, no quedan ficheros por concatenar.
	if (inputArg === process.argv.length ) {
		writer.end("");
		return;
	}
	
	//Caso general, concatenar el siguiente fichero.	
	currentFile = process.argv[inputArg ++];
	
	reader = fs.createReadStream(currentFile);
	reader.pipe(writer, {end: false});
	
	//Llamada recursiva al finalizar la escritura.
	reader.on("end", function () {
		console.log(currentFile + " appended");
		concatFile();	
	} )
}

concatFile();