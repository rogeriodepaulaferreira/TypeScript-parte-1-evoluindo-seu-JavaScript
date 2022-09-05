import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private data: Date;
    private quantidade: number;
    private valor: number;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");  
    }

    adiciona() : void {
        this.trataValor();
        const negociacao = new Negociacao(this.data,this.quantidade, this.valor); 
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
    }

    trataValor () : void {
        const exp = /-/g;
        this.data = new Date(this.inputData.value.replace(exp,','));
        this.quantidade = parseInt(this.inputQuantidade.value); 
        this.valor = parseFloat(this.inputValor.value); 
    }

    limparFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}