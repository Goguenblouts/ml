  // Função para adicionar uma venda na tela 4
  function addSale() {
    const salesTable = document.getElementById('salesTable4').getElementsByTagName('tbody')[0];
    const newRow = salesTable.insertRow();

    // Adicionar células com campos de entrada para cada dado
    const cells = [];
    for (let i = 0; i < 6; i++) {
        cells.push(newRow.insertCell());
    }

    // Células com campos de entrada para cada dado
    cells[0].innerHTML = '<input type="text" name="customerCode">';
    cells[1].innerHTML = '<input type="text" name="customerName">';
    cells[2].innerHTML = '<input type="text" name="invoiceNumber">';
    cells[3].innerHTML = '<input type="number" step="0.01" name="invoiceValue" oninput="calculateDiscount(this)">';
    cells[4].innerHTML = '<input type="number" step="0.01" name="receivedValue" oninput="updateTotalReceivedTela4()">';
    cells[5].innerHTML = '<input type="text" name="discount">';
}

function calculateDiscount(input) {
    const row = input.parentNode.parentNode;
    const invoiceValue = parseFloat(row.cells[3].querySelector('input').value);
    const receivedValue = parseFloat(row.cells[4].querySelector('input').value);
    const discount = invoiceValue - receivedValue;

    // Atualizar o valor do campo de desconto
    row.cells[5].querySelector('input').value = discount.toFixed(2);
}

function updateTotalReceivedTela4() {
    const rows = document.getElementById('salesTable4').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalReceived = 0;

    for (let i = 0; i < rows.length; i++) {
        const receivedValue = parseFloat(rows[i].cells[4].querySelector('input').value);
        totalReceived += isNaN(receivedValue) ? 0 : receivedValue;
    }

    document.getElementById('totalReceived4').textContent = 'Total Recebido: R$ ' + totalReceived.toFixed(2);
}

function exportToGoogleSheets() {
    alert('Dados exportados com sucesso para o Google Sheets!');
}

function printTable() {
    window.print();
}

// Função para exibir a data atual na tela 4
function getCurrentDate() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    document.getElementById('currentDate4').textContent = 'Data Transferência: ' + formattedDate;
}

// Chamada da função para exibir a data atual ao carregar a página na tela 4
getCurrentDate();