class ValorNaoSuportado extends Error{
    constructor(contentType){
        super(`O tipo ${contentType} não é suportado`);
        this.name = 'ValorNaoSuportado';
        this.id = 3;
    }
}
module.exports = ValorNaoSuportado;