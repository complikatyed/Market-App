var baseUrl = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=',
  $symbol,
  newUrl,
  $quantity;

$('#buy').on('click', function() {
  $symbol = $('#symbol').val();
  $symbol += '&callback=?';
  newUrl = baseUrl + $symbol;
  $quantity = $('#quantity').val();
  grabQuoteData();
});

function grabQuoteData() {
  $.getJSON(newUrl, function(res) {
  getData(res);
});
}

var idCounter = 1;

function getData(res) {
  var name = res.Name;
  var price = res.LastPrice;
  var dayChange = '$ ' + (res.Change).toFixed(2);
  var percentChange = Math.round((res.ChangePercent) * 100) + ' %';

  var stock;
  this.stocks = [];
  stock = new Stock();
  this.stocks.push(stock);
  createTableData(stock);

  function Stock() {
    this.companyName = name;
    this.purchPrice = price;
    this.quantity = $quantity;
    this.dayChange = dayChange;
    this.percentChange = percentChange;
    this.id = idCounter++;
  }

  function createTableData(){
    var $tr = $('<tr>"stock.id"</tr>');
    var $tdName = $('<td>' + stock.companyName + '</td>');
    $tr.append($tdName);
    var $tdPrice = $('<td class="price">' + stock.purchPrice + '</td>');
    $tr.append($tdPrice);
    var $tdQuantity = $('<td>' + stock.quantity + '</td>');
    $tr.append($tdQuantity);
    var $tdChange = $('<td>' + stock.dayChange + '</td>');
    $tr.append($tdChange);
    var $tdChangePercent = $('<td>' + stock.percentChange + '</td>');
    $tr.append($tdChangePercent);
    var $tdButton = $('<button class="remove">Remove</button>');
    $tr.append($tdButton);
    $('#table').on('click', '.remove', function() {
      $(this).closest("tr").remove();
    })
    $('#table').append($tr);

    var total = 0;
    $(".price").each(function() {
      var value = $(this).text();
      if(!isNaN(value) && value.length != 0) {
      total += parseFloat(value);
      }
    $("p").text("Total: $" + total.toFixed(2));
    });

// Need event listener here to recalcuate the total if rows are removed...
  }
}
