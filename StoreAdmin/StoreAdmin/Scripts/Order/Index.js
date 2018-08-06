$(document).ready(function () {
    getOrder();

    function getOrder() {
        var req = {};
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
            $("#Content").tmpl(rs.Data).appendTo("#TableTitle");
        });
    }   
});

function FormatDate(jsonDate)
{
    var value = new Date(parseInt(jsonDate.substr(6)));
    return value.getDate() + 1 + "/" + value.getMonth() + "/" + value.getFullYear();
}


