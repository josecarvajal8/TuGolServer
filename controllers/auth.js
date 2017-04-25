var Usuario = require('../models/users');

function signIn(req,res){
    Usuario.findOne({usuario:req.body.usuario, contrasena:req.body.contrasena}, function(err,user){
        if(err) return res.status(500).json({message:'Error al realizar al consulta'});
        if (user) return res.status(200).json({message:'Autentificación correcta', codigo:user.tipo });
        else return res.status(500).json({message:'Autentificación errónea'});
    });
}

function signUp(req,res){
    const new_user = new Usuario({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        telefono: req.body.telefono,
        correo: req.body.correo,    
    });
    console.log(req.body);
    new_user.save(function(err){
        if (err) return res.status(500).json({message:'Error al registrar usuario', error:err});
        else return res.status(200).json({message:'Usuario registrado correctamente'})
    });
}

module.exports = {
    signIn,
    signUp
}