$(document).ready(function () {

    var tests_arry = [];

    function addTestIn_tests_arry(test_obj) {

        tests_arry.push(test_obj);
        console.log(tests_arry);

    }

    function fadeInPopUp() {
        $('.popup-wrap').fadeIn(250);
        $('.popup-box').fadeIn(250);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
    
        // e.preventDefault();

    }

    function fadeOutPopup() {
        $('.popup-box').fadeOut(500);
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');
    
        // e.preventDefault();
    }

    function createTestObject(selectbox_header_id) {

        var popupobj = {};
        var browser = [];
        var checked_checkboxes = $('input[type="checkbox"]');

        checked_checkboxes.each(function () {

            var browserName = $(this).attr('id');
            var browserActive = false;

            if ($(this).is(':checked')) {
                browserActive = true;
            }
            browser.push({ name: browserName, isActive: browserActive });

        });

        popupobj['browserarry'] = browser;
        popupobj['testcase'] = $(selectbox_header_id).text();

        addTestIn_tests_arry(popupobj);

        fadeOutPopup();

    }


    function displayTests() {
        debugger;
       if (tests_arry.length == -1) {

           
       } else {
        debugger;
        var test_container = $('.tests-container');
        var cards_no = 0;
        var newrow = $('.test-row',test_container);
        for (var i = 0; i < tests_arry.length; i++) {
            //gives main object.
            
            debugger;
            cards_no++;
            var card = $('<div />').appendTo(newrow).addClass('card');
            var main_grid = $('<div />').appendTo(card).addClass('main').addClass('grid');
            var view = $('<div />').appendTo(main_grid).addClass('view');
            var view_back= $('<div />').appendTo(view).addClass('view-back');

            var span_browser_Name = $('<span />').appendTo(view_back).addClass('browser_name').text('Browser');

            for(var j=0;j<tests_arry[i].browserarry.length;j++){

                var span_browser = $('<span />').appendTo(view_back).addClass('browser_ico');
                var icon = $('<i />').appendTo(span_browser).attr('aria-hidden','true');

                switch(tests_arry[i].browserarry[j].name){
                    case "chrome":
                    icon.addClass('fa fa-chrome');
                    span_browser.css('color','white');
                    break;

                    case "firefox":
                    icon.addClass('fa fa-firefox');
                    span_browser.css('color','white');
                    break;

                    case "ie":
                    icon.addClass('fa fa-internet-explore');
                    span_browser.css('color','white');
                    break;
                }

                if(tests_arry[i].browserarry[j].isActive == 'true'){

                }
                else{

                }
                    

            }

            var card_header = $('<div />').appendTo(card).addClass('card-header');
            var card_block = $('<div />').appendTo(card).addClass('card-block');
            var card_title = $('<h4 />').appendTo(card_block).addClass('card-title').text(tests_arry[i].testcase);
            var card_button = $('<a />').appendTo(card_block).addClass('btn btn-primary').attr('href', "#").text('Edit');

        }
           
       }

    }

    function verifyPopupEntries(notification_id, selectbox_header_id) {

        /*
        *This function verify required fields for popup and create testObject and add that testObject into 
        root Test_array. And Close popup as well.
        */

        if ($(notification_id).css("display", "block")) {

            //notification_id is <p/> contain notification msg.  
            hideNotification(notification_id);

        }

        if (($(selectbox_header_id).text() == 'First Menu ') || (!($('input[type="checkbox"]').is(":checked")))) {

            showNotification(notification_id);

        }
        else {

            createTestObject(selectbox_header_id);

        }

    }

    function showNotification(element_id) {

        $(element_id).css("display", "block");

    }

    function hideNotification(element_id) {

        $(element_id).css("display", "none");

    }

    function displayPopup(notification_id, selectbox_header_id) {

        fadeInPopUp();
   
        //hide notification
        if ($(notification_id).css('display', 'block')) {
            hideNotification('#notification_r');
        }

        //uncheck checkboxes.
        if ($('input[type="checkbox"]').is(":checked")) {
            
            $(":checked").each(function () {
               
                $(this).prop('checked', false); 
            })
        }

        $(selectbox_header_id).text('First Menu ');

    }


    function expand_dropdown(menu, arrow){
        
        menu.classList.add('show');
        menu.classList.remove('hide');
        arrow.classList.add('open');
        arrow.classList.remove('close');
        event.preventDefault();

    }

    function collapse_dropdown(menu, arrow){
       
        menu.classList.remove('show');
        menu.classList.add('hide');
        arrow.classList.remove('open');
        arrow.classList.add('close');
        event.preventDefault();
    }

    function change_Browserimg(){
        $('input[type="checkbox"]').each(function() {
           
            if(this.checked){
              
                var imageName = 'css/'+$(this).attr('id')+'_cl.png';
                var label = $(this).attr('id')+'_img';
                $('#'+label).attr('src',imageName);
            }
            else{
                
                var imageName = 'css/'+$(this).attr('id')+'_bl.png';
                var label = $(this).attr('id')+'_img';
                $('#'+label).attr('src',imageName);
            } 

        });

    }



    function display_Tests(){

    
    }


    // Events .. 

    $('input[type="checkbox"]').change(function(){
       
        change_Browserimg();

    })
     

    $('#Addbtn').click(function () {

        verifyPopupEntries('#notification_r', '#header_selectbox');
        displayTests();

    });

    $('#addtest').click(function(){
        debugger;
        displayPopup('#notification_r','#header_selectbox');
        change_Browserimg();

    });

    $('.popup-close').click(function(e) {
        
        fadeOutPopup();

    });


    // Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
       
		if(!menu.hasClass('show')) {
            
            expand_dropdown(menu,arrow);
		}
		else {
            collapse_dropdown(menu,arrow);
		}

		$('.dropdown-menu li a').click(function(){
			
			 $('#header_selectbox').text($(this).text());

                collapse_dropdown(menu, arrow);
			
		 });
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

});