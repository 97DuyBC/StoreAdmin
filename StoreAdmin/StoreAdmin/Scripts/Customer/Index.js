$(document).ready(function () {

    getAllCustomer();
    
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
             $("#spanPageInfo").html(pageIndex + "/" + Math.ceil(rs.Total / pageSize));

             if (rs.Total > pageIndex * pageSize) {
                 hasNext = true;
                 $('#aNext').show();
             }
             else {
                 hasNext = false;
                 $('#aNext').hide();
             }
             if (pageIndex == 1) {
                 $('#aPrevious').hide();
             }
             else {
                 $('#aPrevious').show();
             };
            
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