$(document).ready(function () {
    var req = {};
    function check() {

        if ($('#txtfirstName').val().trim() == "" && $('#txtfirstName').val().trim().leagh == 0)
        {
            alert("First Name");
            $('#txtfirstName').focus();
        }

        if ($('#txtlastName').val().trim() == "" && $('#txtlastName').val().trim().leagh == 0) {
            alert("Last Name");
            $('#txtlastName').focus();
        }
 
        if ($('#txtCity').val().trim() == "" && $('#txtCity').val().trim().leagh == 0) {
            alert("City");
            $('#txtCity').focus();
        }
        
        if ($('#txtCountry').val().trim() == "" && $('#txtCountry').val().trim().leagh == 0) {
            alert("Country");
            $('#txtCountry').focus();
        }

        if ($('#txtPhone').val().trim() == "" && $('#txtPhone').val().trim().leagh == 0) {
            alert("Phone");
            $('#txtPhone').focus();
        }

        var cust = {
            FirstName: $("#txtfirstName").val(), 
            LastName: $("#txtlastName").val(),
            Country: $("#txtCountry").val(),
            City: $("#txtCity").val(),
            Phone: $("#txtPhone").val(),
        };
        req = {
            CustomerSMR: cust
         };
    }
    $("#btSave").click(function () {
        check();
        $.ajax({
                method: "Post",
                type:"Port",
                url: "/Customer/insertCustomer",
                data: JSON.stringify(req),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                headers: {
                    "Content-Type": "application/json",
                }
        }).done(function (rs) {
            // Error seachModel ^^! 
              alert(rs.Message);
            })
    });
});