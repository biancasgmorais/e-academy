/* eslint-disable no-var */
export default function filterTable() {
  var dropdown;
  var table;
  var rows;
  var cells;
  var upload;
  var filter;
  dropdown = document.getElementById('mySelector');
  table = document.getElementById('myTable');
  rows = table.getElementsByTagName('tr');
  filter = dropdown.value;

  for (const row of rows) {
    cells = row.getElementsByTagName('td');
    upload = cells[0] || null;

    if (
      filter === 'Filtre por disciplina' ||
      !upload ||
      filter === upload.textContent
    ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }

  return cells;
}
