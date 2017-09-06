function change_Browserimg() {
    $('input[type="checkbox"]').each(function () {

        if (this.checked) {
            var imageName = 'css_2/images/' + $(this).attr('id') + '_cl.png';
            var label = $(this).attr('id') + '_img';
            $('#' + label).attr('src', imageName);
        }
        else {
            var imageName = 'css_2/images/' + $(this).attr('id') + '_bl.png';
            var label = $(this).attr('id') + '_img';
            $('#' + label).attr('src', imageName);
        }

    });

}

function getTestList(){
    return tests_List;
}

function setTestList(testList){
    tests_List = testList;
}

function select_TestScript(script) {

    var select_header = $('#select_header');
    var script_name = script.text();
    select_header.text(script_name);
}


function verify_content() {

    var header_text = $('#select_header').text();
    var checkbox_checked = $('input:checked').length;

    if ($('#warning p').css('display', 'block')) {
        $('#warning p').css('display', 'none');
    }

    if (header_text == 'Test Scripts' || checkbox_checked == 0) {
        debugger;
        return true;
    }
    return false;
}

function create_ModalObject() {

    var popupobj = {};
    var browser = [];

    var checkboxes = $('input[type="checkbox"]');

    checkboxes.each(function () {

        var browserName = $(this).attr('id');
        var browserActive = false;

        if ($(this).is(':checked')) {
            browserActive = true;
        }
        browser.push({ name: browserName, isActive: browserActive });

    });

    popupobj['browsers'] = browser;
    popupobj['testcase'] = $('#select_header').text();

    popupobj['tid'] = guid();

    tests_List.push(popupobj);

    console.log(getTestList());

}

function display_Tests() {
    var testList = getTestList();
    if (testList) {

        var test_container = $('.test_container .test-row');

        $('.test-row').empty();
        for (var i = 0; i < getTestList().length; i++) {
            //gives main object.

            var card = $('<div />').appendTo(test_container).addClass('card test').data('data_test',testList[i]);
            var cardHeader = $('<div />').appendTo(card).addClass('card-header');
            var cardBody = $('<div />').appendTo(card).addClass('card-body');
            var browsersList = $('<div />').appendTo(cardBody);
            var cardFooter = $('<div />').appendTo(card).addClass('card-footer');

            //Setting Test Case Name
            $('<H5 />').appendTo(cardHeader).text('Test-Script : ' + testList[i].testcase);
            $('<i />').appendTo(cardHeader).text(testList[i].tid).addClass('tid');

            var btn_run = $('<button />').appendTo(cardFooter).attr('type', 'button').addClass('btn btn-outline-secondary run_btn').data('data_test', testList[i]);
            var icon_delete = $('<i />').appendTo(btn_run).addClass('fa fa-play').attr('aria-hidden', 'true');

            var btn_delete = $('<button />').appendTo(cardFooter).attr('type', 'button').addClass('btn btn-outline-secondary delete_btn').data('data_test', testList[i]);
            var icon_delete = $('<i />').appendTo(btn_delete).addClass('fa fa-trash').attr('aria-hidden', 'true');

            for (var j = 0; j < testList[i].browsers.length; j++) {
                var browser_Img_path;
                var browser_img = $('<img />').appendTo(browsersList).addClass('test_img').data('data_test', testList[i]).attr('alt',testList[i].browsers[j].name);             

                if (testList[i].browsers[j].isActive == true) {
                    browser_Img_path = 'css_2/images/' + testList[i].browsers[j].name + '_cl.png';
                }
                else {
                    browser_Img_path = 'css_2/images/' + testList[i].browsers[j].name + '_bl.png';
                }

                browser_img.attr('src', browser_Img_path);

            }

        }

    }
   

}

function delete_Test(tid) {
var testList = getTestList();
    for (var i = 0; i < testList.length; i++) {

        if (testList[i].tid == tid) {
            break;
        }
    }

    testList.splice(i, 1);
    setTestList(testList);
    display_Tests();
}

function showTests(data) {

    var header = $('.list-group', '#collapseOne');

    if (header.children()) {
        header.empty();
    }

    for (var i = 0; i < data.fileNames.length; i++) {
        var link = $('<a />').appendTo(header).addClass('list-group-item list-group-item-action script_name').attr('data-toggle', 'collapse').attr('href', '#collapseOne');
        link.text(data.fileNames[i]);
    }


}

// function editTest(browser) {
//     debugger;   
//     var test_card = browser.closest('.card');
//     var tid = $('.tid', test_card);
//     var test_no = tid.text();

//     for (var i = 0; i < tests_List.length; i++) {
//         debugger;
//         if (tests_List[i].tid == test_no) {
//             debugger;
//             for(var j=0;j<tests_List[i].browsers.length;j++){
//                 debugger;
//                 if(tests_List[i].browsers[j].name == browser.attr('alt')){

//                     tests_List[i].browsers[j].isActive = true;
//                 }
//             }
//         }
//     }

//     display_Tests();


// }

function toggleBrowser(tid, browser) {
    var testList = getTestList();
    for (var i = 0; i < testList.length; i++) {    
        if (testList[i].tid == tid) {
            for(var j=0;j<testList[i].browsers.length;j++){            
                if(testList[i].browsers[j].name == browser){
                    testList[i].browsers[j].isActive = !testList[i].browsers[j].isActive;
                }
            }
        }
    }
    setTestList(testList);
    display_Tests();
}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  function searchCard(element){
    
   var data_test = element.closest('.card').data('data_test');

return data_test;

  }