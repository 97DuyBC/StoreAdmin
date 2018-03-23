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
            var b = 0;
            $("#Content").tmpl(rs.Data).appendTo("#TableTitle");
        });
    }

    //function formatdate //todo
});


