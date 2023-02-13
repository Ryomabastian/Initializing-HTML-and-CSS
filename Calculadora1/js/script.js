// PRIMEIRO:> Conectar o arquivo Javascipt com o HTML

const LocalOperadorAnterior = document.querySelector('#operacoes-atentiores')
const LocalOperadorAtual = document.querySelector('#operacoes-atual')
const buttons = document.querySelectorAll("#botoes button")



class Calculator {
    constructor (LocalOperadorAnterior, LocalOperadorAtual) {

        this.LocalOperadorAnterior = LocalOperadorAnterior;
        this.LocalOperadorAtual = LocalOperadorAtual;
        this.OperadorAtual = ""; //Este vai ser 

    }

    // addDigit adiciona digito na tela
    addDigit(digit){

        // Checar se ja tem "ponto" na operaçao
        if (digit === '.' && this.LocalOperadorAtual.innerText.includes('.')) {
            return;
        }
        this.OperadorAtual = digit
        this.updateScreen()
        }

    // Processaor as operações da calculadora
    processOperation(operation){

        if (this.LocalOperadorAtual.innerText === "" && operation !== 'C') { 
            if (this.LocalOperadorAnterior.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }


        let ValorOperacao;
        let Anterior = +this.LocalOperadorAnterior.innerText.split(" ")[0];
        let Atual = +this.LocalOperadorAtual.innerText;

        switch (operation) {
            case '*':
                ValorOperacao = Anterior * Atual;
                this.updateScreen(ValorOperacao, operation, Atual, Anterior)
                break;
            case '/':
                ValorOperacao = Anterior / Atual;
                this.updateScreen(ValorOperacao, operation, Atual, Anterior)
                    break;
            case '+':
                ValorOperacao = Anterior + Atual;
                this.updateScreen(ValorOperacao, operation, Atual, Anterior)
                break;
            case '-':
                ValorOperacao = Anterior - Atual;
                this.updateScreen(ValorOperacao, operation, Atual, Anterior)
                break;
            case 'DEL':
                this.OperacaoDel()
                break; 
            case 'CE':
                this.OperacaoCe()
                break;    
            case 'C':
                this.OperacaoC()
                break; 
            case '=':
                this.OperacaoIgual()
                break;                                    
            default:
                return;
        }

    }

    // Atualziar a tela
    updateScreen(ValorOperacao = null, operation = null, Atual = null, Anterior = null){
        // console.log(ValorOperacao, operation, Atual, Anterior)
        if (ValorOperacao === null) {
            this.LocalOperadorAtual.innerText += this.OperadorAtual
        }
        else { // checar se o valor é zero, se for adicionar o valor atual 
            if(Anterior === 0 ){
                ValorOperacao = Atual
            } 
            this.LocalOperadorAnterior.innerText = `${ValorOperacao} ${operation}`;//ValorOperacao + ' ' + operation;
            this.LocalOperadorAtual.innerText = "";   
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];

        if (!mathOperations.includes(operation)) {
          return;
        }
    
        // for (let i = 0; i < mathOperations.length; i++) {
        //     if (mathOperations[i] != operation) {
        //         return;
        //     }
        // }
        this.LocalOperadorAnterior.innerText = this.LocalOperadorAnterior.innerText.slice(0, -1) + operation
    }   

        // Deletar ultimo digito na tela
    OperacaoDel(){
        this.LocalOperadorAtual.innerText = this.LocalOperadorAtual.innerText.slice(0, -1);
    }
    // Deletar Principal da tela
    OperacaoCe(){
        this.LocalOperadorAtual.innerText = "";
    }
    // Deletar Tudo na tela
    OperacaoC(){
        this.LocalOperadorAtual.innerText = "";
        this.LocalOperadorAnterior.innerText = "";
    }
    //  Operação de igual
    OperacaoIgual() {
        
        const operation = this.LocalOperadorAnterior.innerText.split(' ')[1]

        this.processOperation(operation);
    }
}


// Criou o operador New > Sempre que chamar o New esta informando o javascript que a função chamada (Calculator), é uma função construtora.
const calc = new Calculator(LocalOperadorAnterior, LocalOperadorAtual);


// Primeiro> Ativar os eventos dos botões

// Fazendo pegar o valor de Texto que tem no botão!!

buttons.forEach ((btn) => {

    btn.addEventListener("click", (e) => {
        const valor = e.target.innerText; //A variavel VALOR está recebendo o valor que está escrito no HTML (innerText)

        if(+valor >= 0  || valor === '.'){
            calc.addDigit(valor)
        }
        else {
            calc.processOperation(valor)
        }
    })
});

