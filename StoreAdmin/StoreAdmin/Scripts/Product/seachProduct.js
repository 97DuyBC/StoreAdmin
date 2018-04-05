$(document).ready(function () {

    $('#seach').click(function () {
        pageIndex = 1;
        check();
        seachProduct();
    });

    $('#aNext').click(function () {
        pageIndex++;
        seachProduct();
    });

    $('#aPrevious').click(function () {
        if (pageIndex > 1)
        {
            pageIndex--;
            seachProduct();
        }
        else
            $('#aPrevious').hide();
        
    });
    var productName;
    function check() {
        productName = $('#seachName').val().trim();
        if (productName == '' || productName.leagh == 0)
        {
            return alert("Bạn chưa nhập dữ liệu tìm kiếm!!!!");
        }
    }
    function seachProduct() {
        var prd = { ProductName: productName }
        var req = {
            ProductSMR: prd,
            pageIndex: pageIndex,
            pageSize: pageSize
        };

        $.ajax({
            method: "Post",
            type: "Post",
            url: "/Product/seachProduct",
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
                    $("#TableContent").show();
                    $("#no-data").hide();
                }
                else
                {
                    $("#TableContent").hide();
                    $("#no-data").show();
                }

            });
    };
});

var pageIndex = 1;
var pageSize = 10;