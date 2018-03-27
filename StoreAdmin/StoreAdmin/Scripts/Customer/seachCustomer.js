function seachCustomer() {
    var customerName = $('#seach').val().trim();
    if (customerName == '' || customerName.leagh == 0) {

        return alert("Bạn chưa nhập dữ liệu tìm kiếm!!!!");
    }
    var req = { seachName: customerName };

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
            var a = 1;
            $("#Content").tmpl(rs.Data).appendTo("#TableTitle");
            alert(rs.Message);
        });
};