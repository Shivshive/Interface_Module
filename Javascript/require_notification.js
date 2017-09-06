$(document).ready(function () {

    function verifyDetails() {

        if ($('#header_selectbox').text() == 'First Menu ') {
            debugger;
            return false;
        }
        if (!($('input[type="checkbox"]').is(":checked"))) {

            return false;
        }

        return true;

    }

    $('#Addbtn').click(function () {
        
        if ($('#notification_r').css("display", "block")) {
            
            $('#notification_r').css("display", "none");
        }
        var value = verifyDetails();
        if(value == false)
        {
           
            $('#notification_r').css("display", "block");
        }
        else {
            var popupobj = {};
            popupobj['testcase'] = $('#header_selectbox').text();
            var browser = [];
            var checked_checkboxes = $('input[type="checkbox"]');

            checked_checkboxes.each(function () {
                
                var browserName = $(this).attr('id');
                var browserActive = false;

                if ($(this).is(':checked')) {
                    browserActive = true;
                }
                browser.push({name: browserName, isActive: browserActive });

            });
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');
           
            popupobj['browserarry'] = browser;
            console.log(popupobj);

            $('table').fadeIn(300);

            //var testCases = //localStorage.testCases ? localStorage.testCases: [];
            storeTestcases.push(popupobj);
            displayTestCases();
        }

    });

    function displayTestCases(){
        var table_body = $('#testCases');
        table_body.empty();
       
        
        storeTestcases.forEach(function(test) {
            var added_row = $('<div>').addClass('row').appendTo(table_body);
            for(var i=0;i<3;i++){
                
                     if(i==0){             
                           addOptions(table_body,added_row);  
                     }
           
                     if(i==1){
                        var td = $('<div />').addClass('col-sm-4').appendTo(added_row);
                         $('<span />').appendTo(td).text(test.testcase);
                     }
                     
                     if(i==2){
                          addBrowsers(table_body,added_row);
                     }             
                   }
        }, this);

        
    }


    function addOptions(tbody, row){

        var td = $('<div />').addClass('col-sm-4').appendTo(row);

        //Edit button
        var edit_btn = $('<a />').appendTo(td).addClass('edit');
        $('<i />').appendTo(edit_btn).addClass('fa fa-pencil').attr('aria-hidden','true');

        //Delete button
        var del_btn = $('<a />').appendTo(td).addClass('delete');
        $('<i />').appendTo(del_btn).addClass('fa fa-trash-o').attr('aria-hidden','true');

        //Run button
        var run_btn = $('<a />').appendTo(td).addClass('delete');
        $('<i />').appendTo(del_btn).addClass('fa fa-play').attr('aria-hidden','true');

    }

    function addBrowsers(tbody, row){

        var td = $('<div />').addClass('col-sm-4').appendTo(row);

        var chrome = $('<td />').appendTo(td);
        var firefox = $('<td />').appendTo(td);
        var ie = $('<td />').appendTo(td);

        $('<img />').appendTo(chrome).addClass('browser').addClass('inactive').attr('title','Chrome').attr('src','css/chrome_clr.png');
        $('<img />').appendTo(firefox).addClass('browser').addClass('inactive').attr('title','Firefox').attr('src','css/firefox_cl.png');
        $('<img />').appendTo(ie).addClass('browser').addClass('inactive').attr('title','Internet Explorer').attr('src','css/ie_cl.png');

    }


});