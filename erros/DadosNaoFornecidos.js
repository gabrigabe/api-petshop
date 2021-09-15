class DadosNaoFornecidos extends Error {
    constructor(){
        super('Não foram fornecidos dados');
        this.name = 'DadosNaoFornecidos';
        this.IdErro = 2;
    }
}
module.exports = DadosNaoFornecidos;