$(document).ready(function () {
    var a = 0;
    getAllCustomer();

    function getAllCustomer() {
        var reqData = {};
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
             $("#Content").tmpl(rs.Data).appendTo("#TableTitle");
         });
    }
});