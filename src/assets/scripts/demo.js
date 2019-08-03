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

const input = document.querySelector('.js-in');

input.addEventListener('click', () => {
	const main = document.querySelector('.datepicker__main');

	main.classList.remove('close');

	datePicker();
});

const okDatepicker = document.querySelector('.js-ok-datepicker');
const resetDatepicker = document.querySelector('.js-reset-datepicker');

okDatepicker.addEventListener('click', () => {
	const main = document.querySelector('.datepicker__main');

	main.classList.add('close');
});

resetDatepicker.addEventListener('click', () => {
	const checkinDate = document.querySelector('#checkinDate');
	const checkoutDate = document.querySelector('#checkoutDate');

	checkinDate.innerHTML = '';
	checkoutDate.innerHTML = '';
});


 

function datePicker() {
	$(document).ready(function() {
		$('#Datepicker').datepicker({
            inline: true,
			dateFormat: 'dd.mm.yy',
			// todayHighlight: true,
			minDate: 0,
			maxDate: '+3M +0D',
			beforeShowDay: dateRange,
            onSelect: DRonSelect,
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],
 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
 firstDay: 1,
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


