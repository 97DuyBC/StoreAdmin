$(document).ready(function () {

    getProduct();

    function getProduct()
    {
        req = {};

        $.ajax({

            method: "POST",
            type: "POST",
            url: "/Product/getAllProduct",
            data: JSON.stringify(req),
            dataType: "json",

            contentType: "application/json; charset=utf-8",
            headers: {
                "Content-Type": "application/json",
            }
        }).done(function (rs) {
            $("#Content").tmpl(rs.Data).appendTo("#TableTitle");
        });      
    }
});