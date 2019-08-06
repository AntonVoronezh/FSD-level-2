const input2 = document.querySelector('.js-in-2');

if (input2) {
	input2.addEventListener('click', () => {
		const main = document.querySelector('.datepicker2__main');

		main.classList.toggle('close');

		datePicker2();
	});

	const okDatepicker2 = document.querySelector('.js-ok-datepicker-2');
	const resetDatepicker2 = document.querySelector('.js-reset-datepicker-2');

	okDatepicker2.addEventListener('click', () => {
		const main = document.querySelector('.datepicker2__main');

		main.classList.add('close');
	});

	resetDatepicker2.addEventListener('click', () => {
		const checkinDate = document.querySelector('#checkinDate');
		const checkoutDate = document.querySelector('#checkoutDate');

		checkinDate.innerHTML = '';
		checkoutDate.innerHTML = '';
	});

	function datePicker2() {
		$(document).ready(function() {
			$('#Datepicker2').datepicker({
				inline: true,
				dateFormat: 'd M',
				// todayHighlight: true,
				minDate: 0,
				maxDate: '+3M +0D',
				beforeShowDay: dateRange2,
				onSelect: DRonSelect2,
				monthNames: [
					'Январь',
					'Февраль',
					'Март',
					'Апрель',
					'Май',
					'Июнь',
					'Июль',
					'Август',
					'Сентябрь',
					'Октябрь',
					'Ноябрь',
					'Декабрь',
				],
				dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				firstDay: 1,
			});
		});
	}

	function dateRange2(date) {
		var date1 = $.datepicker.parseDate('d M', $('#checkinDate2').text());
		var date2 = $.datepicker.parseDate('d M', $('#checkoutDate2').text());
		var isHighlight = date1 && (date.getTime() == date1.getTime() || (date2 && date >= date1 && date <= date2));
		$(document).ready(function() {
			// $("td.dp-highlight").text("Y");
		});
		return [true, isHighlight ? 'dp-highlight' : ''];
	}

	function DRonSelect2(dateText, inst) {
		var date1 = $.datepicker.parseDate('d M', $('#checkinDate2').text());
		var date2 = $.datepicker.parseDate('d M', $('#checkoutDate2').text());

		if (!date1 || date2) {
			$('#checkinDate2').text(dateText);
			$('#checkoutDate2').text('');
			$('#Datepicker2').datepicker();
			$('.date-from').remove();
		} else {
			if (
				$.datepicker.parseDate('d M', $('#checkinDate2').text()) >=
				$.datepicker.parseDate('d M', dateText)
			) {
				$('#checkinDate2').text(dateText);
				$('#checkoutDate2').text('');
				$('#Datepicker2').datepicker();
				$('.date-from').remove();
			} else {
				$('#checkoutDate2').text(dateText);
				$('#Datepicker2').datepicker();
				$('.date-from').remove();
			}

			// $('#Datepicker').datepicker('hide');
			// $('#Datepicker').text('');
		}
	}
}
