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
    } else { // Other browsers
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

/******** Our main function ********/
function main() {
    jQuery(document).ready(function($) {
        // We can use jQuery 1.4.2 here
        /******* Load CSS *******/
        var css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "style.css"
        });
        css_link.appendTo('head');

        /******* Load HTML *******/
        /*var jsonp_url = "http://al.smeuh.org/cgi-bin/webwidget_tutorial.py?callback=?";
        $.getJSON(jsonp_url, function(data) {
          $('.navbar').html("This data comes from another server: " + data.html);
        });*/
        $('.navbar').prepend(response('f'));

    });
}

function response() {
    return '<div class="p2pu-panel-wrap">' +
        '<div class="panel-contents">' +
        '<div class="connect">' +
        '<h4>Connect With Us</h4>' +
        '<ul class="unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="http://thepeople.p2pu.org">Discussions</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://www.facebook.com/P2PUniversity" target="_blank"><i' +
        '        class="icon-facebook-sign"></i></a>' +
        '<a href="http://twitter.com/p2pu" target="_blank"><i class="icon-twitter-sign"></i></a>' +
        '<a href="http://info.p2pu.org/contact/" target="_blank"><i class="icon-envelope"></i></a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<div class="connect">' +
        '<h4>Learn</h4>' +
        '<ul class="unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="https://p2pu.org/en/groups/list/community/">Courses</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://badges.p2pu.org">Badges</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="">Schools</a></li>' +
        '</ul>' +
        '</div>' +
        '<div class="connect">' +
        '<h4>About</h4>' +
        '<ul class="unstyled">' +
        '<li>' +
        '<hr>' +
        '<a href="http://info.p2pu.org">Blog</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://reports.p2pu.org">Reports</a></li>' +
        '<li>' +
        '<hr>' +
        '<a href="http://info.p2pu.org/research/">Research</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="p2pu-color-divider-wrap">' +
        '<div class="p2pu-color-divider">' +
        '</div>' +
        '</div>' +
        '</div>';
}

})(); // We call our anonymous function immediately