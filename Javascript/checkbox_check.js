$(document).ready(function () {
   

        $('#chrome').change(function () {
            
            if ($('#chrome').is(":checked")) {
                $('#chrome_img').attr("src", "css/chrome_clr.png");
            }
            else {
                $('#chrome_img').attr("src", "css/chrome_bl.png");
            }

        });

        $('#firefox').change(function () {
            
            if ($('#firefox').is(":checked")) {
                $('#firefox_img').attr("src", "css/firefox_cl.png");
            }
            else {
                $('#firefox_img').attr("src", "css/firefox.png");
            }

        });


        $('#ie').change(function () {
           
            if ($('#ie').is(":checked")) {
                $('#ie_img').attr("src", "css/ie_cl.png");
            }
            else {
                $('#ie_img').attr("src", "css/ie.png");
            }

        });
 

});

