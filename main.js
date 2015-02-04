
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
  var price = $tr.children('.oldPrice').text() * 1;

  total -= price * qty;
  total = ((total * 100) / 100).toFixed(2);
  $("p").text("Total: $" + total);

  $tr.remove();
});

// Steps for Refreshing the data
//   A.  forEach stock in the table
//     1.  grab the symbol from the ".purchId" field
//     2.  grab the quantity from the ".quantity" field
//     3.  new getJSON call using the symbol
//     4.  clear those blocks in the table
//     5.  update the stock (currentPrice, dayChange, percentChange)
//     6.  append the new values into the old blocks
//     7.  recalculate the total

$('#refresh').click  {
  
  
  $symbol = $('#symbol').val();
  $symbol += '&callback=?';
  newUrl = baseUrl + $symbol;
  grabQuoteData();
});


function updateData (res) {


}




function grabQuoteData() {
  $.getJSON(newUrl, getData);
}

function getData(res) {
  res.quantity = parseInt($('#quantity').val());
  var stock = new Stock(res);
  createTableData(stock);

  function createTableData(stock){
    var $tr = $('<tr class="purchaseId"></tr>');
    var $tdName = $('<td>' + stock.companyName + '</td>');
    $tr.append($tdName);
    var $tdOldPrice = $('<td class="oldPrice">' + ((stock.purchPrice * 100) / 100).toFixed(2) + '</td>');
    $tr.append($tdPrice);
    var $tdQuantity = $('<td class="quantity">' + stock.quantity + '</td>');
    $tr.append($tdQuantity);
     var $tdNewPrice = $('<td class="newPrice">' + ((stock.currentPrice * 100) / 100).toFixed(2) + '</td>');
    $tr.append($tdPrice);
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
  
  this.purchaseId = 
  this.companySymbol = obj.Symbol;
  this.companyName = obj.Name;
  this.purchPrice = obj.LastPrice;
  this.quantity = obj.quantity;
  this.currentPrice = obj.LastPrice;
  this.dayChange = obj.Change;
  this.percentChange = obj.ChangePercent;
}



