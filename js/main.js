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
	const $windowsIcon = document.querySelector("[data-os='windows']");
	const $linuxIcon = document.querySelector("[data-os='linux']");
	const $macosIcon = document.querySelector("[data-os='macos']");
	const $button = document.querySelector("[data-button='download']")

	if (navigator.userAgent.indexOf("Macintosh") > -1) {
		$windowsIcon.style.display = "none";
		$macosIcon.style.display = "inline";
		$button.setAttribute("href", "{{ site.data.knossos.mac-url }}");
	}

	if (navigator.userAgent.indexOf("Linux") > -1) {
		$windowsIcon.style.display = "none";
		$linuxIcon.style.display = "inline";
		$button.setAttribute("href", "{{ site.data.knossos.linux-url }}");
	}
})();
