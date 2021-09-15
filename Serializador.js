const { search } = require('./api/rotas/fornecedores');
const Fornecedor = require('./api/rotas/fornecedores/Fornecedor');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');


class Serializador{

    json(dados) {

        return JSON.stringify(dados);
    }

    serializar(dados) {
        if(this.contentType === 'application/JSON'){
            return this.json(dados);
        }

        throw new ValorNaoSuportado(this.contentType);

    }
}

class SerializadorFornecedor extends Fornecedor{
    constructor(contentType){
        super()
        this.contentType = contentType;

    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}

