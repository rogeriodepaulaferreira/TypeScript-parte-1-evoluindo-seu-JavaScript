import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        this.trataValor();
        const negociacao = new Negociacao(this.data, this.quantidade, this.valor);
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
    }
    trataValor() {
        const exp = /-/g;
        this.data = new Date(this.inputData.value.replace(exp, ','));
        this.quantidade = parseInt(this.inputQuantidade.value);
        this.valor = parseFloat(this.inputValor.value);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
