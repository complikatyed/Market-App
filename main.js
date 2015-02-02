
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
    var symbol = res.Symbol;
    var price = res.LastPrice;
    var change = res.Change;
    var percentChange = res.ChangePercent;
    console.log(price, symbol, change, percentChange);
  });
}

var $tdSymbol = $('<td>' + symbol + '</td>');
var $tdPrice = $('<td>' + price + '</td>');
var $tdChange = $('<td>' + change + '</td>');
var $tdChangePercent = $('<td>' + changePercent + '</td>');



















// grab the symbol

// append to URL

// on buy click, run AJAX call (to get data)

// append table elements

// include remove button

// add functionality to remove button

// total value = sum of price * quantity
