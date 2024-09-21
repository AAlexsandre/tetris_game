/**
 * Creates a board (grid) with a specified number of rows and columns.
 * Each row contains a specified number of columns, and all cells are represented as div elements.
 * 
 * @param {number} - The number of rows to create.
 * @param {number} - The number of columns per row.
 */
function createBoard(rows = 20, cols = 10) {
  const board = document.getElementById("board");

  // Clear the existing board before creating a new one
  board.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let j = 0; j < cols; j++) {
      const colElement = document.createElement("div");
      colElement.classList.add("col");
      rowElement.appendChild(colElement);
    }

    board.appendChild(rowElement);
  }
}

createBoard();