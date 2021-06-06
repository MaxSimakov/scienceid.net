

function eventHandler() {
	

	$('.tooltip').tooltipster();

	document.documentElement.addEventListener("click", function(event){
		let target = event.target.closest(".accordion__head");
		if (!target) return;
		target.parentElement.classList.toggle("active");
	})
	document.documentElement.addEventListener("click", function(event){
		let target = event.target.closest(".accordion-item__head");
		if (!target) return;
		target.parentElement.classList.toggle("active");
	})


	const tabs = document.querySelector('.sModel');
	 if (tabs) {


			tabs.addEventListener('click', function (element) {
				const btn = element.target.closest(`.diagram-block-item--js:not(.active)`);
				if (!btn) return;
				const data = btn.dataset.tab; 
				const content = this.querySelectorAll(`.toggle-content`);
				const tabsAllBtn = document.querySelectorAll(".diagram-block-item--js");
				tabsAllBtn.forEach(element => {
					element.dataset.tab == data
						? element.classList.add('active')
						: element.classList.remove('active')
				});
				content.forEach(element => { 
					// console.log(element.id);
					element.id == data
						? (element.classList.add('active'))
						: element.classList.remove('active')
				});
			})
	}
	const tab = 'tabs';
	//  if (tabs2) {


	// 		tabs2.addEventListener('click', function (element) {
	// 			const btn = element.target.closest(`.tabs__btn:not(.active)`);
	// 			if (!btn) return;
	// 			const data = btn.dataset.tab; 
	// 			const content = this.querySelectorAll(`.tabs__content`);
	// 			const tabsAllBtn = document.querySelectorAll(".tabs__btn");
	// 			tabsAllBtn.forEach(element => {
	// 				element.dataset.tab == data
	// 					? element.classList.add('active')
	// 					: element.classList.remove('active')
	// 			});
	// 			content.forEach(element => { 
	// 				// console.log(element.id);
	// 				element.id == data
	// 					? (element.classList.add('active'))
	// 					: element.classList.remove('active')
	// 			});
	// 		})
	// }
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});


	$(document).on('click', "   .scroll-link-js", function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination  - 100}, 1100);

		return false;
	});
	$(".open-accordion-js").click(function(){
		let ac = $(this).attr("href");
		$(ac).addClass("active");
	})
};
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}

