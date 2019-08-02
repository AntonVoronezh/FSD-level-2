import '../../views/common/footer-small/footer-small';
import '../../views/common/header/header';
import '../../views/common/main/main';
import '../../views/common/aside/aside';
import '../../views/common/maincontent/maincontent';
import '../../views/common/logo/logo';
import '../../views/common/header-nav/header-nav';
import '../../views/common/footer-nav/footer-nav';
import '../../views/common/btn/btn';
import '../../views/common/header-nav-mobile/header-nav-mobile';
import '../../views/common/pagination/pagination';
import '../../views/common/range-slider/range-slider';
import '../../views/common/checkbox/checkbox';
import '../../views/common/exp-list/exp-list';
import '../../views/common/dropdown/dropdown';
import '../../views/common/dropdown-count/dropdown-count';

console.log('demo.js loadedd');

// $( function() {
//     var dateFormat = "mm/dd/yy",
//       from = $( "#from" )
//         .datepicker({
//           defaultDate: "+1w",
//           changeMonth: true,
//           numberOfMonths: 1,
//           range: 'period',
//           inline: true,
//         })
//         .on( "change", function() {
//           to.datepicker( "option", "minDate", getDate( this ) );
//         }),
//       to = $( "#to" ).datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 1
//       })
//       .on( "change", function() {
//         from.datepicker( "option", "maxDate", getDate( this ) );
//       });

//     function getDate( element ) {
//       var date;
//       try {
//         date = $.datepicker.parseDate( dateFormat, element.value );
//       } catch( error ) {
//         date = null;
//       }

//       return date;
//     }

//   } );

// $( function() {
//     $( "#Datepicker" ).datepicker();
//   } );

// $(function() {
//     $('#date_range').datepicker({
//       range: 'period', // режим - выбор периода
//       numberOfMonths: 2,
//       onSelect: function(dateText, inst, extensionRange) {
//           // extensionRange - объект расширения
//         $('[name=startDate]').val(extensionRange.startDateText);
//         $('[name=endDate]').val(extensionRange.endDateText);
//       }
//     });

//     $('#date_range').datepicker('setDate', ['+4d', '+8d']);

//     // объект расширения (хранит состояние календаря)
//     var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
//     if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
//     if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
//   });

// $(function() {
//     $('#date_range').datepicker({
//       range: 'period', // режим - выбор периода
//       numberOfMonths: 1,
//       onSelect: function(dateText, inst, extensionRange) {
//           // extensionRange - объект расширения
//         $('[name=startDate]').val(extensionRange.startDateText);
//         $('[name=endDate]').val(extensionRange.endDateText);
//       }
//     });

//     $('#date_range').datepicker('setDate', ['+4d', '+8d']);

//     //     function getDate( element ) {
//     //   var date;
//     //   try {
//     //     date = $.datepicker.parseDate( dateFormat, element.value );
//     //   } catch( error ) {
//     //     date = null;
//     //   }

//     //   return date;
//     // }

//     // объект расширения (хранит состояние календаря)
//     var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
//     if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
//     if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
//   });

// datePicker();

const input = document.querySelector('.js-in');

input.addEventListener('click', datePicker);

function datePicker() {
	$(document).ready(function() {
		$('#Datepicker').datepicker({
			dateFormat: 'dd.mm.yy',
			minDate: 0,
			maxDate: '+3M +0D',
			beforeShowDay: dateRange,
			onSelect: DRonSelect,
		});
    });
}

function dateRange(date) {
	var date1 = $.datepicker.parseDate('dd.mm.yy', $('#checkinDate').text());
	var date2 = $.datepicker.parseDate('dd.mm.yy', $('#checkoutDate').text());
	var isHighlight = date1 && (date.getTime() == date1.getTime() || (date2 && date >= date1 && date <= date2));
	$(document).ready(function() {
		// $("td.dp-highlight").text("Y");
	});
	return [true, isHighlight ? 'dp-highlight' : ''];
}

function DRonSelect(dateText, inst) {
	var date1 = $.datepicker.parseDate('dd.mm.yy', $('#checkinDate').text());
	var date2 = $.datepicker.parseDate('dd.mm.yy', $('#checkoutDate').text());

	if (!date1 || date2) {
		$('#checkinDate').text(dateText);
		$('#checkoutDate').text('');
		$('#Datepicker').datepicker();
		$('.date-from').remove();
	} else {
		if (
			$.datepicker.parseDate('dd.mm.yy', $('#checkinDate').text()) >= $.datepicker.parseDate('dd.mm.yy', dateText)
		) {
			$('#checkinDate').text(dateText);
			$('#checkoutDate').text('');
			$('#Datepicker').datepicker();
			$('.date-to').remove();
		} else {
			$('#checkoutDate').text(dateText);
			$('#Datepicker').datepicker();
			$('.date-to').remove();
		}

		// $('#Datepicker').datepicker('hide');
		// $('#Datepicker').text('');
	}
}
