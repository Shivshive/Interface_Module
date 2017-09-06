$(document).ready(function () {

    $('#opendialog').click(function () {

        $('input[type="checkbox"]').each(function () {

            $(this).prop('checked', false);

            if ($(this).attr('id') == 'chrome') {
                $('#chrome_img').attr("src", "css/chrome_bl.png");
            }
            if ($(this).attr('id') == 'firefox') {
                $('#firefox_img').attr("src", "css/firefox.png");
            }
            if ($(this).attr('id') == 'ie') {
                $('#ie_img').attr("src", "css/ie.png");
            }

        });

        $('#header_selectbox').text('First Menu ');

        if (!($('#notification_r').css("display", "none"))) {

            $('#notification_r').css("display", "block");
        }

        var dropdown = document.querySelectorAll('.dropdown');
        var dropdownArray = Array.prototype.slice.call(dropdown,0);
        dropdownArray.forEach(function (el) {
            var button = el.querySelector('a[data-toggle="dropdown"]'),
            menu = el.querySelector('.dropdown-menu'),
            arrow = button.querySelector('i.icon-arrow');


            // menu.classList.remove('show');
            // menu.classList.add('hide');
            // arrow.classList.remove('open');
            // arrow.classList.add('close');
            // event.preventDefault();


        })

    });





});