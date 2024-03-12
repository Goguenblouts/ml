        // Referências aos elementos HTML
        const tela1 = document.getElementById('tela1');
        const tela2 = document.getElementById('tela2');
        const tela3 = document.getElementById('tela3');
        const tela4 = document.getElementById('tela4');

        const botaoOpcao1 = document.getElementById('botaoOpcao1');
        const botaoOpcao2 = document.getElementById('botaoOpcao2');
        const botaoOpcao3 = document.getElementById('botaoOpcao3');

        // Adicionando eventos aos botões
        botaoOpcao1.addEventListener('click', function() {
            tela1.classList.add('oculto');
            tela2.classList.remove('oculto');
        });

        botaoOpcao2.addEventListener('click', function() {
            tela1.classList.add('oculto');
            tela3.classList.remove('oculto');
        });

        botaoOpcao3.addEventListener('click', function() {
            tela1.classList.add('oculto');
            tela4.classList.remove('oculto');
        });

        // Função para voltar à tela anterior
        function backpage() {
            const telas = [tela1, tela2, tela3, tela4];
            for (let i = 0; i < telas.length; i++) {
                if (!telas[i].classList.contains('oculto')) {
                    telas[i].classList.add('oculto');
                    if (i > 0) {
                        if (i === 1 || i === 2 || i === 3) {
                            tela1.classList.remove('oculto');
                        } else {
                            telas[i - 1].classList.remove('oculto');
                        }
                    } else {
                        telas[telas.length - 1].classList.remove('oculto');
                    }
                    break;
                }
            }
        }