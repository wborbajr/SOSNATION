$(document).ready(function() {

	$("#total").formatCurrency({
	  decimalSymbol: ',',
	  digitGroupSymbol: '.',
	  dropDecimals: false,
	  groupDigits: true,
	  symbol: 'R$ '
	});
	
});