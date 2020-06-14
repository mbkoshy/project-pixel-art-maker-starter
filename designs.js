document.addEventListener('DOMContentLoaded', function() {
  // trigger functions when submit button is clicked
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', makeGrid);

  function makeGrid(event) {
    // stop the page from refreshing when clicked submit
    event.preventDefault();

    // Select color input (save it here so user can't change it later)
    const colorPicker = document.querySelector('#colorPicker');
    const color = colorPicker.value;

    // Select size input
    const height = parseInt(document.querySelector('#inputHeight').value);
    const width = parseInt(document.querySelector('#inputWidth').value);

    const canvas = document.querySelector('#pixelCanvas');
    const grid = makeTable(height, width);
    canvas.innerHTML = (grid);

    // Add click listeners to change cell colors
    const cells = document.querySelectorAll('#pixelCanvas td');
    cells.forEach(function(cell) {
      cell.addEventListener('click', function(event) {
        const cell = event.target;

        if (cell.className === '') {
          cell.className = 'filled';
          cell.bgColor = color;
        }
        else {
          cell.className = '';
          cell.bgColor = '#FFFFFF';
        }
      })
    });

    function makeTable(height, width) {
      let columns = '';
      for (let i = 0; i < width; i++) {
        columns += '<td></td>'
      }

      let rows = '';
      for (let i = 0; i < height; i++) {
        rows += '<tr>' + columns + '</tr>'
      }

      return rows;
    }
  }
});
