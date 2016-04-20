---
---

"use strict";

// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) {
		return c/2*t*t + b
	}
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
	var tc = (t/=d)*t*t;
	return b+c*(tc);
};

Math.inOutQuintic = function(t, b, c, d) {
	var ts = (t/=d)*t,
	tc = ts*t;
	return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};


function scrollTo(to, callback, duration) {
	// because it's so fucking difficult to detect the scrolling element, just move them all
	function move(amount) {
		document.documentElement.scrollTop = amount;
		document.body.parentNode.scrollTop = amount;
		document.body.scrollTop = amount;
	}
	function position() {
		return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
	}
	var start = position(),
	change = to - start,
	currentTime = 0,
	increment = 20;
	duration = (typeof(duration) === 'undefined') ? 500 : duration;
	var animateScroll = function() {
		// increment the time
		currentTime += increment;
		// find the value with the quadratic in-out easing function
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		// move the document.body
		move(val);
		// do the animation unless its over
		if (currentTime < duration) {
			requestAnimationFrame(animateScroll);
		} else {
			if (callback && typeof(callback) === 'function') {
				// the animation is done so lets callback
				callback();
			}
		}
	};
	animateScroll();
}

(function() {
	var anchors = document.getElementsByTagName("a");
	var local_anchors = [];

	for(var i = 0; i < anchors.length; i++) {
		if(    anchors[i].attributes.href.value.indexOf("#") > -1
				&& anchors[i].attributes.href.value !== "#"
				&& anchors[i].attributes.href.value !== "#nav") {
			local_anchors.push(anchors[i]);
		}
	}

	for(var i = 0; i < local_anchors.length; i++) {
		var hash_position = local_anchors[i].attributes.href.value.indexOf("#");
		var sub_string = local_anchors[i].attributes.href.value.substring(hash_position);
		var target = document.getElementById(sub_string.substring(1));

		local_anchors[i].addEventListener("click", function(target) {
			return function() { scrollTo(target.offsetTop); }
		}(target))
	}
})();



(function() {
	// Vars.
	var	$body = document.querySelector('body'),
	$banner = document.querySelector('#banner'),
	$header = document.querySelector('#header');

	// Disable animations/transitions until everything's loaded.
	$body.classList.add('is-loading');

	window.addEventListener('load', function() {
		$body.classList.remove('is-loading');
	});

	if(!$banner)
		$header.classList.remove("alt");

	var locked = false;

	window.addEventListener("scroll", function () {
		if(locked) return;

		locked = true;

		var height = $banner.getBoundingClientRect().height;
		var top = $banner.getBoundingClientRect().top;

		if(Math.abs(top) > height) { $header.classList.remove("alt"); }
		if(Math.abs(top) < height) { $header.classList.add("alt"); }

		locked = false;
	});


	// Change Download button.
	var mac_release = "{{ site.data.knossos.mac-url }}";
	var linux_release = "{{ site.data.knossos.linux-url }}";
	var $button = document.querySelector("[data-button='download']");

	if(navigator.userAgent.indexOf("Macintosh") > -1) {
		$button.classList.remove("fa-windows");
		$button.classList.add("fa-apple");
		$button.setAttribute("href", mac_release);
	}

	if(navigator.userAgent.indexOf("Linux") > -1) {
		$button.classList.remove("fa-windows");
		$button.classList.add("fa-linux");
		$button.setAttribute("href", linux_release);
	}

	// Nav.
	var	$nav = document.querySelector('#nav');
	var $navToggle = document.querySelector('a[href="#nav"]');

	$nav.addEventListener("click touchend", function (event) {
		//event.stopPropagation();
	});

	$header.addEventListener("click touchend", function(event) {
		$nav.classList.remove("visible");
		console.log("ok");
	});

	$navToggle.addEventListener("click", function(event) {
		event.preventDefault();
		//event.stopPropagation();
		$nav.classList.toggle("visible");
	});

	window.addEventListener("keydown", function(event) {
		if(event.keyCode == 27)
			$nav.classList.remove("visible");
	});
})();

