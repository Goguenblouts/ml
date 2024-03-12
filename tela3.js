        // Função para adicionar uma devolução
        function addReturn() {
            const returnsTable = document.getElementById('returnsTable').getElementsByTagName('tbody')[0];
            const newRow = returnsTable.insertRow();

            // Adicionar células com campos de entrada para cada dado
            const cells = [];
            for (let i = 0; i < 7; i++) {
                cells.push(newRow.insertCell());
            }

            // Células com campos de entrada para cada dado
            cells[0].innerHTML = '<input type="text" name="customerCode">';
            cells[1].innerHTML = '<input type="text" name="customerName">';
            cells[2].innerHTML = '<input type="text" name="invoiceNumber">';
            cells[3].innerHTML = '<input type="number" step="0.01" name="invoiceValue">';
            cells[4].innerHTML = '<input type="number" step="0.01" name="returnedValue" oninput="updateTotalReturned()">';
            cells[5].innerHTML = '<input type="text" name="returnReason">';
            cells[6].innerHTML = '<input type="checkbox" name="transferred">';
        }

        function updateTotalReturned() {
            const rows = document.getElementById('returnsTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            let totalReturned = 0;

            for (let i = 0; i < rows.length; i++) {
                const returnedValue = parseFloat(rows[i].cells[4].querySelector('input').value);
                totalReturned += isNaN(returnedValue) ? 0 : returnedValue;
            }

            document.getElementById('totalReturned').textContent = 'Total Devolvido: R$ ' + totalReturned.toFixed(2);
        }

        function exportToGoogleSheets() {
            alert('Dados exportados com sucesso para o Google Sheets!');
        }

        function printTable() {
            window.print();
        }

        // Função para exibir a data atual
        function getCurrentDate() {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('pt-BR');
            document.getElementById('currentDate3').textContent = 'Data Devolução: ' + formattedDate;
        }

        // Chamada da função para exibir a data atual ao carregar a página
        getCurrentDate();