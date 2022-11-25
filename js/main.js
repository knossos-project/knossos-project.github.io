---
---

"use strict";

(function() {
	const $body = document.querySelector("body"),
		$banner = document.querySelector(".banner"),
		$nav = document.querySelector(".header-nav");

	// Disable animations/transitions until everything"s loaded.
	$body.classList.add("is-loading");

	window.addEventListener("load", function() {
		$body.classList.remove("is-loading");
	});

	let locked = false;

	window.addEventListener("scroll", function () {
		if (locked) {
			return;
		}

		locked = true;

		const height = $banner.getBoundingClientRect().height;
		const top = $banner.getBoundingClientRect().top;

		if (Math.abs(top) < height) {
			$nav.classList.remove("-visible");
		}
		if (Math.abs(top) > height) {
			$nav.classList.add("-visible");
		}

		locked = false;
	});

	// Change Download button depending on operating system.
	const $button_icon = document.querySelector("[data-button='download'] > i");
	const $button = document.querySelector("[data-button='download']")

	if (navigator.userAgent.indexOf("Macintosh") > -1) {
		$button_icon.classList.remove("fa-windows");
		$button_icon.classList.add("fa-apple");
		$button.setAttribute("href", "{{ site.data.knossos.mac-url }}");
	}

	if (navigator.userAgent.indexOf("Linux") > -1) {
		$button_icon.classList.remove("fa-windows");
		$button_icon.classList.add("fa-linux");
		$button.setAttribute("href", "{{ site.data.knossos.linux-url }}");
	}
})();
