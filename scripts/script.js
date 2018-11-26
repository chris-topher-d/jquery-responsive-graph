const dataset = [
  { name: 'Adam', age: 20, salary: 30100 },
  { name: 'Bob', age: 60, salary: 102000 },
  { name: 'Carla', age: 31, salary: 57000 },
  { name: 'Dave', age: 42, salary: 22000 },
  { name: 'Ethel', age: 80, salary: 91000 },
  { name: 'Frank', age: 28, salary: 73000 },
  { name: 'Gina', age: 21, salary: 16000 }
];

$(document).ready(function() {

  // display selected data on click
  $('#age').click(function() {sortArray(dataset, 'age')});
  $('#salary').click(function() {sortArray(dataset, 'salary')});

  // sort array in descending order based on key (age or salary)
  function sortArray(arr, key) {
    let sortedData = arr.sort(function(a, b) {
      return b[key] - a[key];
    });

    // once array is sorted, create chart
    createChart(sortedData, key);
  }

  // create bar chart with sorted data
  function createChart(data, key) {

    // clear current chart data
    clearChart();

    // set maximum width to largest value + 10%
    let maxWidth = Math.floor(data[0][key] * 1.1);

    // populate chart with data
    for (var i = 0; i < data.length; i++) {
      $('.names').append(
        $('<div/>')
          .addClass('name')
          .append(
            $('<h3/>')
              .text(data[i]['name'])
          )
      );

      $('.bars').append(
        $('<div/>')
          .addClass('bar')
          .animate({'width': (data[i][key] / maxWidth) * 100 + '%'}, 600)
          .append(
            $('<h4/>')
              .attr('id', 'value')
              .text(data[i][key])
          )
        );
    }

    $('.selection').prepend('<span id="current">' + key + ' &#9662</span>');
  }

  // clear current chart data
  function clearChart() {
    $('#current').remove();
    $('.names').empty();
    $('.bars').empty();
  }

  // create initial bar chart on page load
  sortArray(dataset, 'age');
});
