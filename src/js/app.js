import 'bootstrap';
(function (global) {
    global.$ = $;
    global.jQuery = jQuery;
})(typeof window !== "undefined" ? window : this);

$(document).ready(function () {
    console.log('Webpack loaded!');
});
