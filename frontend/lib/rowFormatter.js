export default function rowFormatter(rows) {
  // Determine number of rows
  const numRows = rows[0].cells.length;

  // Init an empty tarray to hold formatted rows
  const formattedRows = [];
  for (let i = 0; i < numRows; i++) {
    const rawData = {};
    rows.forEach((row) => {
      const cell = row.cells[i];
      if (cell) {
        rawData[row.key || row.label] = cell.data;
      }
    });
    formattedRows.push({
      id: i + 1,
      ...rawData,
    });
  }

  return formattedRows;
}
