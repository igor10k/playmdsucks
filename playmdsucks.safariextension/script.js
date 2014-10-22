// ignore iframes
if (window.top === window) {
	// create the new <video>
	var video = document.createElement('video');
	video.style.width = '100%';
	video.style.height = '100%';
	video.style.cursor = 'default';
	video.autoplay = true;
	video.preload = 'auto';
	video.controls = true;
	video.src = document.querySelector('#video_player source:last-child').src;

	// focus video on click for keypress to work
	video.addEventListener('click', function () {
		video.focus();
	});

	// pause/play on space
	video.addEventListener('keypress', function (event) {
		if (event.which === 32) {
			event.preventDefault();
			video[video.paused ? 'play' : 'pause']();
		}
	});

	// remove the old player, add the new one
	var videoWrap = document.querySelector('#video_player').parentNode;
	while (videoWrap.firstChild) {
	    videoWrap.removeChild(videoWrap.firstChild);
	}
	videoWrap.appendChild(video);

	// little hack to prevent video nudging for a few pixels
	setTimeout(function () {
		// focus video on page load for keypress to work
		video.focus();
	}, 1);

	// go to location for side thumbs instead of loading them right away
	var links = document.querySelectorAll('.item-link');
	for (var i = 0; i < links.length; i += 1) {
		var el = links[i];
		el.addEventListener('click', function () {
			window.location = el.href;
		});
	}
}
