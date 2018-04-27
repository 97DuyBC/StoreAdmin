$(document).ready(function () {
    getOrder();

    $('#aPrevious').click(function () {
        if (pageIndex > 1) {
            pageIndex--;
            getOrder();
        } else {
            $('aPrevious').hide();
        }
    });

    $('#aNext').click(function () {
        pageIndex++;
        getOrder();
    });

    function getOrder() {
        var req = {
            pageIndex: pageIndex,
            pageSize : pageSize
        };
        $.ajax({
            method: "POST",
            type: "POST",
            url: "/Order/getOrder",
            data: JSON.stringify(req),
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

            if (rs.Total == 0) {
                $("#bodypage").hide();
                $("#no-data").show();
            }
            else {
                $("#bodypage").show();
                $("#no-data").hide();
            }
        });
    }   
});

function FormatDate(jsonDate)
{
    var value = new Date(parseInt(jsonDate.substr(6)));
    return value.getDate() + 1 + "/" + value.getMonth() + "/" + value.getFullYear();
}

var pageSize = 10;
var pageIndex = 1;
