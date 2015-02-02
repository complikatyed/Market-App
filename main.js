
var baseUrl = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=',
    $symbol,
    newUrl;

$('#buy').on('click', function() {
  $symbol = $('#symbol').val();
  newUrl = baseUrl + $symbol;
  $quantity = $('#quantity').val();

  runQuoteAndPrint();
});

function runQuoteAndPrint() {
  $.get(newUrl, function(res) {
    createTableData();
    console.log(price, symbol, change, percentChange);
  });
}

function createTableData(){
  var symbol = res.Symbol;
  var price = res.LastPrice;
  var change = res.Change;
  var percentChange = res.ChangePercent;
  
  var $tr = $('<tr></tr>')
  var $tdName = $('<td>' + name + '</td>');
  $tr.append($tdName);
  var $tdPrice = $('<td>' + price + '</td>');
  $tr.append($tdPrice);
  var $tdChange = $('<td>' + change + '</td>');
  $tr.append($tdChange);
  var $tdChangePercent = $('<td>' + changePercent + '</td>');
  $tr.append($ChangePercent);
  $('#table').append($tr);
}




















// grab the symbol

// append to URL

// on buy click, run AJAX call (to get data)

// append table elements

// include remove button

// add functionality to remove button

// total value = sum of price * quantity
