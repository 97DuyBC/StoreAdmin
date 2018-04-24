$(document).ready(function () {
    $("#btnSeach").click(function () {
        $('#tableSeach').show();
        $('#seachName').focus();
        $('#btnSeach').hide();
        $('#btnCreate').hide();
    });

    var customerName;
    function check() {
        customerName = $('#seachName').val().trim();
        if (customerName == '' || customerName.leagh == 0) {
            return alert("Bạn chưa nhập dữ liệu tìm kiếm!!!!");
        }
    }

    $('#seach').click(function () {
        pageIndex = 1;
        check();
        seachCustomer();
        $('.table-responsive').show();
        $('#seachName').focus();
    });

    $('#aNext').click(function () {
        pageIndex++;
        seachCustomer();
    });

    $('#aPrevious').click(function () {
        if (pageIndex > 1)
        {
            pageIndex--;
            seachCustomer();
        }
        else
            $('#aPrevious').hide();
    })


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
                $("#TableContent").empty();
                $("#Template").tmpl(rs.Data).appendTo("#TableContent");
                //alert(rs.Messag + " KET_QUA: " + rs.Total);
                $("#spanPageInfo").html(pageIndex + "/" + Math.ceil((rs.Total / pageSize)));

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
                }

                if(rs.Total > 0)
                {
                    $(".table-responsive").show();
                    $("#no-data").hide();
                }
                else
                {
                    $(".table-responsive").hide();
                    $("#no-data").show();
                }

            })
    }

    $('tbody#tableContent button.btn').click(function () {
        alert("okk")
    })
})

function addCustumerOrder(id, fullName) {
    alert(id, fullname);
}

var pageIndex = 1;
var pageSize = 6;