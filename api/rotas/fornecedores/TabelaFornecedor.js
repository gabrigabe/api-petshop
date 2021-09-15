  
const Modelo = require('./ModeloTabelaFornecedor');
const NaoEncontrado = require ('../../../erros/NaoEncontrado');

module.exports = {
    listar () {
    return Modelo.findAll();
    },
    inserir (Fornecedor) {
        return Modelo.create(Fornecedor);
    },
    async pegarId (id){
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        });
        if(!encontrado){
            throw new NaoEncontrado;
        }

        return encontrado;
    }, 
    atualizar(id, dadosAtualizar){
        return Modelo.update(
            dadosAtualizar,
            {
                where:{id: id}
            }
        )
    },
    deletar (id) {
        return Modelo.destroy({
            where: {id: id}
        })

    }

};