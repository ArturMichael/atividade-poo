class conta {
    constructor(banco, descrição, despesa, receita) {
        this.banco = banco;
        this.descrição = descrição;
        this.despesa = despesa||null;
        this.receita = receita||null;

    }
}