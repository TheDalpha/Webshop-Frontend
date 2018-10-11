function listProducts() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://omatableseasv2.azurewebsites.net',
        type: 'GET',
        dataType: 'json',
        success: function (products) {
            onGetCustomersSuccess(products);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function onGetProductSuccess(products) {
    if ($("#productsTable tbody").length == 0) {
        $("#productsTable").append("<tbody></tbody>");
    }
    $("#productsTable tbody").empty();
    // Iterate over the collection of data
    $.each(products, function (index, products) {
        // Add a row to the post table
        addProductRow(products);
    });
}

function addProductsRow(products) {
    // Check if <tbody> tag exists, add one if not
    // Append row to <table>
    $("#productsTable tbody").append(
        buildProductRow(products));
}

function buildProductsRow(products) {
    var ret =
        "<tr>" +
        "<td>" + products.id + "</td>" +
        "<td>" + products.firstName + "</td>" +
        "<td>" + products.lastName + "</td>" +
        "<td>" + products.address + "</td>" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-info' " +
        "data-id='" + products.id + "'>" +
        "<i class='fas fa-info-circle'></i>" +
        "</button>" +
        "</td >" +
        "<td>" +
        "<button type='button' " +
        "class='btn btn-danger' " +
        "data-id='" + products.id + "'>" +
        "<i class='fas fa-minus-circle'></i>" +
        "</button>" +
        "</td >" +
        "</tr>";
    return ret;
}

$('#productsTable').on('click', 'button', event => {
    getKarts(event.currentTarget);
});


$('#myForm').on('submit',function(e){
    e.preventDefault();
    var name = $( "#productName" ).val();
    var price = $( "#productPrice" ).val();
    var imageLink = $( "#productImageLink" ).val();
    var description = $( "#productDescription" ).val();
    var quantity = $( "#productQuantity" ).val();
    var height = $( "#productHeight" ).val();
    var width = $( "#productWidth" ).val();
    var length = $( "#productLength" ).val();



$.ajax({
    url: "https://omatableseasv2.azurewebsites.net",
    type: 'POST',
    data: JSON.stringify({
        "Name": name,
        "Price": price,
        "ImageLink": imageLink,
        "Desciption": description,
        "Quantity": quantity,
        "Height": height,
        "Width": width,
        "Length": length
    }),
    processData: false,
    contentType: 'application/json',
    success: function (comments) {
        console.log("Yiiiaaaahhhhaaaaaa");
    },
    error: function (request, message, error) {
        handleException(request, message, error);
    }
});