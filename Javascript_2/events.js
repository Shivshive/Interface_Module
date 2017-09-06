$(document).ready(function () {

    $('input[type="checkbox"]').change(function () {
        change_Browserimg();
    });


    $('.script_name').click(function () {
        select_TestScript($(this));
    });

    //fired when modal is closed.
    $('#largeShoes').on('hidden.bs.modal', function (e) {
        // do something...
        $("#largeShoes .modal-body").find('input:checkbox').prop('checked', false);
        $('#select_header').text('Test Scripts');
        $('#collapseOne').removeClass('show');
        if ($('#warning p').css('display', 'block')) {
            $('#warning p').css('display', 'none');
        }
        change_Browserimg();
    })


    $('#Addbtn').click(function () {

       
        if (verify_content()) {
            $('#warning p').css('display', 'block');
        }
        else {
            $('#largeShoes').modal('hide');
            create_ModalObject();
            display_Tests();
        }

    });


    $(document).on('click', '.delete_btn', function (e) {
        debugger;
        var testData = searchCard($(e.target));
        // alert(JSON.stringify(testData));
        delete_Test(testData.tid);
    });


//     $('#addtest').click(function () {
//         debugger;
//         //do something...
//         $.getJSON("http://localhost:8080/ReadDirectory/webapi/myresource", function (data) {
//             var items = [];
//             $.each(data, function (key, val) {
//                 items.push("<li id='" + key + "'>" + val + "</li>");
//         });
//     });
// });

$(document).on('click', '.test_img',function(e){

    var testData = $(e.target).data('data_test');
    toggleBrowser(testData.tid, $(e.target).attr('alt'));    

});

});
