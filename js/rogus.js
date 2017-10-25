var total = document.getElementById('total');

var produtos = document.getElementsByClassName("produto");



function readTotal() {
	var total = document;getElementById("total");
	return moneyTextToFloat(total.innerHTML);
}
   
function writeTotal(value) {
	var total = document.getElementById('total');
	total.innerHTML = floatToMoneyText(value);
}

function moneyTextToFloat(text) {
  	var cleanText = text.replace("R$", " ").replace(",", ".");
   	return parseFloat(cleanText);	
}

function floatToMoneyText (value) {
  	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
  	text = "R$ " + text;
   	return text.substr(0, text.length -2) + "," + text.substr(-2);
}

for (var pos = 0; pos < produtos.length; pos++) {
	var priceElements = produtos[pos].getElementsByClassName("price");
	var priceText = priceElements[0].innerHTML;
	var price = moneyTextToFloat(priceText);

	console.log(price);
}

// PAG - 22