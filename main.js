(function () {

  'use strict';
  var baseUrl = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
      $symbol,
      newUrl,
      $quantity;

  $('#buy').on('click', function() {
    event.preventDefault();
    $symbol = $('#symbol').val();
    $symbol += '&callback=?';
    newUrl = baseUrl + $symbol;
    $quantity = $('#quantity').val();
    runQuoteAndPrint();
  });

  function runQuoteAndPrint() {
    $.getJSON(newUrl, function(res) {
      createTableData(res);
    });
  }

  function createTableData(res) {
    var name = res.Name;
    var price = res.LastPrice;
    var change = '$ ' + (res.Change).toFixed(2);
    var percentChange = Math.round((res.ChangePercent) * 100) + ' %';

    var $tr = $('<tr></tr>');
    var $tdName = $('<td>' + name + '</td>');
    $tr.append($tdName);
    var $tdPrice = $('<td>' + price + '</td>');
    $tr.append($tdPrice);
    var $tdQuantity = $('<td>' + $quantity + '</td>');
    $tr.append($tdQuantity);
    var $tdChange = $('<td>' + change + '</td>');
    $tr.append($tdChange);
    var $tdChangePercent = $('<td>' + percentChange + '</td>');
    $tr.append($tdChangePercent);
    var $tdButton = $('<button class="remove">Remove</button>');
    $tr.append($tdButton);
    $('#table').on('click', '.remove', function() {
      $(this).closest("tr").remove();
    })
    $('#table').append($tr);
  }
}());


