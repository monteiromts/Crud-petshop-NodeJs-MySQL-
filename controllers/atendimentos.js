const Atendimento = require('../models/atendimentos');

module.exports = app => {
    // Rota GET para listar todos os atendimentos
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    // Rota GET para buscar atendimento por ID
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    });

    // Rota POST para adicionar um novo atendimento
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
    });


    app.patch('/atendimentos/:id', (req,res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id,valores,res)
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.delete(id, res)
    })

};
