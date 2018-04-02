$(document).ready(function () {

    $('#seach').click(function () {
        check();
        seachCustomer();
    });

    $("#aNext").click(function () {
        pageIndex++;
        seachCustomer();
    });

    $("#aPrevious").click(function () {
        pageIndex++;
        seachCustomer();
    });
    function check() {
        var customerName = $('#seachName').val().trim();
        if (customerName == '' || customerName.leagh == 0) {
            return alert("Bạn chưa nhập dữ liệu tìm kiếm!!!!");}
    }
    function seachCustomer() {
        var customer = { FirstName: customerName }
        var req = {
            customerSMR: customer,
            pageIndex: pageIndex,
            pageSize: pageSize
        };

        $.ajax({
            method: "Post",
            type: "Post",
            url: "/Customer/seachCusomer",
            data: JSON.stringify(req),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .done(function (rs) {
                $("#Content").empty();
                $("#Template").tmpl(rs.Data).appendTo("#Content");
                alert(rs.Messag + " KET_QUA: " + rs.Total);
                $("#spanPageInfo").html(pageIndex + "/" + Math.ceil((rs.Total / pageSize) + 1));

                if (rs.Total > pageIndex * pageSize) {
                    $("aNext").hide();
                }
                else {
                    $("aNext").show();
                }
                if (pageIndex > 1) {
                    $("aPrevious").show();
                }
                else {
                    $("aPrevious").hide();
                }

                //todo
            });
    };
});

var pageIndex = 1;
var pageSize = 10;