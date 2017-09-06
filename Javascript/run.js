$(document).ready(function(){

    $('#runtest').click(function(){
        debugger;
        var request_object = [];
        request_object = parseTable($('#suitetable'));
        console.log(request_object);
        $('.wrap_loader').fadeIn(250);
        $('.cssload-thecube').fadeIn(250);
            $.post
            (
                "demo_test_post.asp", 
                request_object, 
                function(data, status)
                {
                    alert("Data: " + data + "\nStatus: " + status);

                }
            );        
            
            $('.wrap_loader').fadeOut(500);
            $('.cssload-thecube').fadeOut(500);
    });

    function parseTable(table){
        debugger;
        var tbody = $('tbody',table);
        var rows = $('tr',tbody);
        var req_obj = [];

        rows.each(function(){
            debugger;
            var row = $(this);
            var count=0;
            var test = {};
            var test_browser = [];
            $('td',row).each(function(){
                debugger;
                var data = $(this);
                if(count==0){
                   
                }
                if(count==1){
                    debugger;
                    test['testcasename'] = data.text();
                }
                if(count==2){
                    debugger;
                    if(data.text() == 'Yes'){
                        test_browser.push('chrome');
                    }
                }
                if(count==3){
                    debugger;
                     if(data.text() == 'Yes'){
                        test_browser.push('firefox');
                    }
                }
                if(count==4){
                    debugger;
                    if(data.text() == 'Yes'){
                        test_browser.push('ie');
                    }
                }
                count++;
            });

            test['browser'] = test_browser;
            console.log(test.browser);
            req_obj.push(test);
            
        });

       
        return req_obj;
    }

});