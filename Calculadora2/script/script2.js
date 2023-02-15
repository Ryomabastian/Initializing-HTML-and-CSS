        // Chamar os numeros pro visor da tela
        function insert(num) {
            // Adicionar somente um ponto "."
            if (num === '.' && document.getElementById('resultado').innerHTML.includes('.')) {
            return;
            }

            var numero = document.getElementById('resultado').innerHTML
            document.getElementById('resultado').innerHTML = numero + num

        }

        // Limpar tudo
        function limpar() {
            document.getElementById('resultado').innerHTML = ''
        }

        // Deletar ultimo digito na tela
        function deletar() {
            document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0, -1)
        }

        // Fazer o calculo
        function calcular() {
        // Fazer calculo automático só chamada o método EVAL
            var resultado = document.getElementById('resultado').innerHTML

            if (resultado) {
                document.getElementById('resultado').innerHTML = eval(resultado)
            }
        
        }