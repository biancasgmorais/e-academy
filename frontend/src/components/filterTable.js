/* eslint-disable no-var */
export default function filterTable() {
  var dropdown;
  var table;
  var rows;
  var cells;
  var disciplina;
  var filter;
  dropdown = document.getElementById('mySelector');
  table = document.getElementById('myTable');
  rows = table.getElementsByTagName('tr');
  filter = dropdown.value;

  for (const row of rows) {
    cells = row.getElementsByTagName('td');
    disciplina = cells[0] || null;

    if (
      filter === 'Escolha a disciplina' ||
      !disciplina ||
      filter === disciplina.textContent
    ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }

  return cells;
}
