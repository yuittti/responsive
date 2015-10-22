# Fully responsive mockup with a feedback form

This main page's mockup was converted in HTML5 from PSD layout with support of 3 display modes  (mobile, tablet, desktop). The transitions between display modes work properly as well - it is fully responsive for all display modes (320px+).

The feedback form (in the footer of the page) has 3 level validation (on client side - HTML5 and jQuery, on server side - PHP). User interaction with the form was implemented in the object. Server validation of the form was implemented in the class.

The feedback data left by user is sent to the server by AJAX technology (jQuery ajax method).

When form is filled correctly, the feedback data is saved in database (MySQL) and the message with data is sent to administrator email.

*Tested on Chrome 39, Mozilla 40, Opera 32, IE8*

[**Live Demo**](http://yuittti.github.io/responsive/)
*In this live demo server part doesn't work as it needs a PHP server to be installed.
Clone this repository and view it on OpenServer (or others) to check server functionality.*
