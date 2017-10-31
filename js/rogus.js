var total = document.getElementById('total');


function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}
   
function writeTotal(value) {
	var text = floatToMoneyText(value);
	$("#total").text(text);
}

function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText (value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length -2) + "," + text.substr(-2);
}


function calculateTotalProducts() {

	//algumas pessoas indicam usar o $ nafrente da variável que for do jQuery
	var produtos = $(".produto");
	var total = 0;

	for( pos = 0; pos < produtos.length; pos++) {

		var $produto = $(produtos[pos]);
		var quantity = moneyTextToFloat($produto.find(".quantity").val());
		var price = moneyTextToFloat($produto.find(".price").text());
	  
	  total += quantity * price;
	}
  return total
}

function onDocumentLoad(){
	var textEdits = document.getElementsByClassName('quantity');

	for(var i = 0; i < textEdits.length; i++){
		textEdits[i].onchange = function() {
    	writeTotal(calculateTotalProducts());
		};
	}
}

window.onload = onDocumentLoad;


if (document.getElementsByClassName == undefined) {
	alert('getElementbyClassName not found');

	document.getElementsByClassName = function(ClassName) {
		alert("regozijai-vos, usuários de internt Explore");
	}
}

function quantidadeMudou() {
	writeTotal(calculateTotalProducts());	
}

function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");

	for(var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = quantidadeMudou;
	}
}

/*

var todosElementos = document.getElementbyClassName("*");
var resultados = [];

var elemento;

for (var i = 0; (elemento = todosElementos[i]) != null; i++) {
	var elementoClass = elemento.className;
	if (elementoClass && elementoClass.indexOf(className) != -1) {
		resultados.push(elemento);
	}
}

return resultados;

*/


//pag = 30