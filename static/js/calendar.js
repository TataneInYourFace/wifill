(function ($) {
    "use strict"; // Start of use strict

    // Display selected date and bind date field
    $(document).on('click', '.list-group button', function () {
        var $element = $(this);
        var hour = $element.attr("data-src");
        var day = $element.parent().attr("data-src");
        var full_date = day + ' ' + hour;

        $('.list-group button').removeClass('active');
        $element.addClass('active');
        $('#date').text(full_date);
        $('#id_date_refill').val(full_date);
    });

    // Display hours on day selection
    $(document).on('click', '.day', function () {
        var $element = $(this);
        var day = ($element.children().text().length == 1) ? '0' + $element.children().text() : $element.children().text();
        var $old_element = $('.show');
        var $new_element = $('.' + day);

        $('.day').removeClass('active');
        $element.addClass('active');
        $old_element.removeClass("show");
        $old_element.addClass("hide");
        $new_element.removeClass("hide");
        $new_element.addClass("show");
    });

    // Get current date
    var date = new Date();
    // Load actual month calendar on page load
    $("#calendar").load('/calendar/' + date.getFullYear() + '/' + (parseInt(date.getMonth()) + 1));

    // Ajax call to change calendar date on click
    $(document).on('click', '.load', function (event) {
        $('#calendar').load($(this).attr('href'));
        event.preventDefault();
    });

})(jQuery); // End of use strict
