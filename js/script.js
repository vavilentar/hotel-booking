const dateLabel = document.querySelector('.datesLabel');

$(function () {
	$('i[name="daterange"]').daterangepicker({
		opens: 'center'
	}, function (start, end) {
		dateLabel.innerHTML = `<i class="fa fa-calendar" name="daterange" aria-hidden="true"></i> ${start.format('MM-DD')} - ${end.format('DD')}`;
	});
});

function imageSwap1() {
var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");
        var rel = image1.src;
        image1.src = image2.src;
        image2.src = rel;
}

function imageSwap2() {
	var image1 = document.getElementById("image1");
		   var image3 = document.getElementById("image3");
		   var rel = image1.src;
		   image1.src = image3.src;
		   image3.src = rel;
}
	

const activeBtn = document.querySelectorAll('.stars-btn')

activeBtn.forEach((button) => {
	button.addEventListener('click', () => {
		button.classList.toggle('active')
	})
})