var baseUrl = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
    $symbol,
    newUrl,
    total = 0;

$('#buy').on('click', function() {
  event.preventDefault();
  $symbol = $('#symbol').val();
  $symbol += '&callback=?';
  newUrl = baseUrl + $symbol;
  grabQuoteData();
});

$('#table').on('click', '.remove', function() {
  var $tr = $(this).closest("tr");
  var qty = $tr.children('.quantity').text() * 1;
  var price = $tr.children('.price').text() * 1;

  total -= price * qty;
  total = ((total * 100) / 100).toFixed(2);
  $("p").text("Total: $" + total);

  $tr.remove();
});

function grabQuoteData() {
  $.getJSON(newUrl, getData);
}

function getData(res) {
  res.quantity = parseInt($('#quantity').val());
  var stock = new Stock(res);
  createTableData(stock);

  function createTableData(stock){
    var $tr = $('<tr>"stock.id"</tr>');
    var $tdName = $('<td>' + stock.companyName + '</td>');
    $tr.append($tdName);
    var $tdPrice = $('<td class="price">' + ((stock.purchPrice * 100) / 100).toFixed(2) + '</td>');
    $tr.append($tdPrice);
    var $tdQuantity = $('<td class="quantity">' + stock.quantity + '</td>');
    $tr.append($tdQuantity);
    var $tdChange = $('<td>' + ((stock.dayChange * 100) / 100).toFixed(2) + '</td>');
    $tr.append($tdChange);
    var $tdChangePercent = $('<td>' + stock.percentChange.toFixed(2) + '%' + '</td>');
    $tr.append($tdChangePercent);
    var $tdButton = $('<button class="remove">Remove</button>');
    $tr.append($tdButton);
    $('#table').append($tr);

    total += parseFloat(stock.quantity) * parseFloat(stock.purchPrice);
    $("p").text("Total: $" + total.toFixed(2));
  }
}

function Stock(obj) {
  this.companyName = obj.Name;
  this.purchPrice = obj.LastPrice;
  this.quantity = obj.quantity;
  this.dayChange = obj.Change;
  this.percentChange = obj.ChangePercent;
}
