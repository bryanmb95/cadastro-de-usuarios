const fs = require("fs");

function exibirUsuarios(bancoDeDados) {

    return fs.readFileSync(bancoDeDados, 'utf8');
}

function salvarUsuario(usuario) {
    const usuarios = exibirUsuarios('./banco_de_dados.json')
    const content = JSON.stringify(usuario);
    usuarios[usuario.nome] = content;
    fs.appendFileSync('./banco_de_dados.json', usuarios);
};



module.exports = {
    salvarUsuario,
    exibirUsuarios
}