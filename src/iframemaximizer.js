/*
 Nir Elbaz 2013
 Iframe Maximizer - Finds all iframes on document which have "maximizer" class
 and maximizes them based on their content
 */
var IframeMaximizer = (function(window, document) {
	'use strict';

	var blnFirstLoad = true;

	/*
	 maximizeIframe
	 Finds all iframes on document which have "maximizer" class and maximizes them
	 based on their content.
	 */
	var maximizeIframes = function () {
		// Get all iframes on page
		var arrIframe = document.getElementsByTagName('iframe');
		for (var i = 0, j = arrIframe.length; i < j; i++) {
			// Check if iframe has maximizer class:
			if (/\bmaximizer\b/.test(arrIframe[i].className)) {
				// Resize now and every time iframe reloads:
				try {
					setHeight(arrIframe[i]);
				} catch (e) {

				}
				// Do it only once:
				if (blnFirstLoad) {
					blnFirstLoad = false;
					addEventListener(arrIframe[i], 'load', maximizeIframes);
				}
			}
		}
	};

	/*
	 setHeight
	 Sets iframe's height based on its content
	 elem - Iframe element
	 */
	var setHeight = function(elem) {
		if (elem.contentWindow) {
			elem.height = elem.contentWindow.document.body.scrollHeight;
		} else if (elem.contentDocument) {
			elem.height = elem.contentDocument.body.offsetHeight + 55;
		}
		elem.style.overflowY = 'hidden';
	};

	/*
	 addEvent
	 Attaches events to elements
	 elem - Element to attach event to
	 evt - Event to attach to element
	 fnc - Event's action
	 */
	var addEventListener = function (elem, evt, fnc) {
		if (elem.addEventListener) {    // Modern browsers
			elem.addEventListener(evt, fnc, false);
			return true;
		} else if (elem.attachEvent) {  // IE lte 8
			return elem.attachEvent('on' + evt, fnc);
		} else {                        // Event handler not supported
			throw 'No event handler';
		}
	};

	// Plugin started:
	return {
		maximize: maximizeIframes
	}

})(window, document);