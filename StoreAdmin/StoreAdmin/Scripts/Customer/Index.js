$(document).ready(function () {
    var a = 0;
    getAllCustomer();

    if (pageIndex == 1) {
        $('#aPrevious').hide();
    }
    else {
        $('#aPrevious').show();
    }
    $('#aPrevious').click(function () {
        if (pageIndex > 1) {
            pageIndex--;
            getAllCustomer();
        } else {
            $('aPrevious').hide();
        }
    });

    $('#aNext').click(function () {
        pageIndex++;
        getAllCustomer();
    });

    function getAllCustomer() {
        var reqData =
        {
            pageIndex: pageIndex,
            pageSize: pageSize
        };
        $.ajax({
            method: "POST",
            type: "POST",
            url: "/Customer/getCustomer",
            data: JSON.stringify(reqData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "Content-Type": "application/json",
            }
        })
         .done(function (rs) {
             $("#TableContent").empty();
             $("#Template").tmpl(rs.Data).appendTo("#TableContent");

             if (rs.Total > pageIndex * pageSize) {
                 hasNext = true;
                 $('#aNext').show();
             }
             else {
                 hasNext = false;
                 $('#aNext').hide();
             }

             $("#spanPageInfo").html(rs.Data.pageIndex / ((rs.Total%pageSize) + 1))
             if(rs.Total == 0)
             {
                 $("#bodypage").hide();
                 $("#no-data").show();
             }
             else
             {
                 $("#bodypage").show();
                 $("#no-data").hide();
             }
         });
    }
});

var pageIndex = 1;
var pageSize = 10;