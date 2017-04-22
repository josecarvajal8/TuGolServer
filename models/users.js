var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
    apellido:String,
    usuario: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    telefono: { type: Number, required: true },
    correo:{type: String, required},
    creado_el: { type: Date, default: Date.now() }
});
var Usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = Usuario;