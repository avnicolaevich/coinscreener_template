$(function() {

	$('#gainers').DataTable( {
		data: dataGainers,
		paging: false,
		searching: false,
		"info": false,
	} );
	$('#losers').DataTable( {
		data: dataLosers,
		paging: false,
		searching: false,
		"info": false
	} );

	$('#language, #currency').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

});

let dataGainers = [
	[ "1", "Bitcoin (BTC)", "$9,576.22", "-3.47%", "+43.45%", "$162,973,733,201", "7,482,910,000", "81.10%", "31,138", "14,128" ],
	[ "2", "Etherium (ETH)", "$784.07", "-4.35%", "+110.51", "$77,833,312,755", "3,204,950,000", "67.54%", "17,211", "43,094" ],
	[ "3", "Ripple (XRP)", "$0.87", "-5.21%", "+82.46%", "$34,133,235,818", "$680,203,000", "39.18%", "2,716", "182,066" ],
	[ "4", "Stellar Lumens (XLM)", "$0.42", "-4.21%", "+114.21%", "$7,713,043,278", "$45,895,100", "13.02%", "1,532", "17,272" ],
	[ "5", "Bitcoin Cash (BCH)", "$1,726.91", "+1.74%", "+179.10%", "$29,552,869,867", "$1,973,020,000", "81.56%", "579", "20,845" ],
	[ "6", "EOS (EOS)", "$17.88", "-0.84%", "+198.33", "$14,998,960,627", "$1,480,780,000", "57.45%", "6,589", "1,958,699" ],
	[ "7", "Cardano (ADA)", "$0.35", "-5.96%", "+139.74%", "$9,016,449,904", "$152,416,000", "57.62%", "2,469", "60,827" ],
];
let dataLosers = [
	[ "1", "Litecoin (LTC)", "$170.08", "-5.46%", "+47.90%", "$9,594,576,718", "$676,866,000", "67.25%", "3,009", "26,189" ],
	[ "2", "Dash (DASH)", "$486.52", "-2.59%", "+67.44%", "$3,919,306,730", "$110,649,000", "42.62%", "987", "no data" ],
	[ "3", "Ontology (ONT)", "$8.79", "-8.62%", "+220.19%", "$989,968,496", "$123,511,000", "11.26%", "134", "166,852" ],
	[ "4", "Tron (TRX)", "$0.08", "-2.98%", "+121.93%", "$5,567,313,401", "$404,193,000", "65.75%", "1,287", "79,614" ],
	[ "5", "NEO (NEO)", "$81.77", "-3.94%", "+79.38%", "$5,314,822,500", "$174,036,000", "65.00%", "2,339", "693" ],
	[ "6", "Iota (IOT)", "$2.28", "-2.68%", "+139.92%", "$6,343,277,240", "$117,987,000", "100.00%", "925", "545,233" ],
	[ "7", "ZCash (ZEC)", "$290.80", "-5.72%", "+63.63%", "$1,121,864,525", "$61,184,200", "18.54%", "3,653", "8,460" ],
];
