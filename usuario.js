class Usuario {
    constructor(nome, email, investimento, orçamento, meta, conta) {
      this.nome = nome;
      this.email = email;
      this.investimento =investimento||null;
      this.orçamento = orçamento||null;
      this.meta = meta;
      this.conta = conta||null;

      
    }
  }