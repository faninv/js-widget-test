(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main(); 
}


function getSyncScriptParams() {
	var scripts = document.getElementsByTagName('script');
	var lastScript = scripts[scripts.length-1];
	var scriptName = lastScript;
	return {
		className : scriptName.getAttribute('data-class-name')
	};
 }

/******** Our main function ********/
function main() { 
    jQuery(document).ready(function($) { 
        /******* Load CSS *******/
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "http://93.170.169.173/widget-test/css/widget-style.css" 
        });
        css_link.appendTo('head');          

        /******* Load HTML *******/
        var jsonp_url = "http://93.170.169.173/widget-test/widget-data.php?callback=?";
        $.getJSON(jsonp_url, function(data) {
			var container = $('#widget-container');
			var containerClass = 'fw-widget-container';

			if(typeof(getSyncScriptParams()) === "object" && typeof(getSyncScriptParams().className) === "string" && getSyncScriptParams().className !== "")
				containerClass = containerClass + ' ' + getSyncScriptParams().className;
			else 
				containerClass = containerClass + ' fw-widget-default';

			container.addClass(containerClass).html("Widget data: title = " + data.title + ", description = " + data.description);
        });
    });
}

})();
