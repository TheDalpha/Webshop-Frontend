var pageNr = 1;

listProducts(pageNr);

function listProducts(pageNr) {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://omatableseasv2.azurewebsites.net/api/products/?CurrentPage=' + pageNr + '&ItemsPerPage=8',
        type: 'GET',
        dataType: 'json',
        success: function (products) {
            $("#page_box").empty().append("<a>page " + pageNr + " of 2</a>")
            onGetProductSuccess(products);
        }
    });
}

function onGetProductSuccess(products) {
    $("#product_area").empty();
    // Iterate over the collection of data
    $.each(products, function (index, products) {
        // Add a row to the post table
        addProductsRow(products, index+1);
    });
}

function addProductsRow(products, itemNr) {
    // Check if <tbody> tag exists, add one if not
    // Append row to <table>
    $("#product_area").append(
        buildProductsRow(products, itemNr));
}

function buildProductsRow(products, itemNr) {
    var ret ="<div id=\"item" + itemNr + "\">\n" +
        "    <div id=\"pic1\"></div>\n" +
        "    <div id=\"boxprice1\">\n" +
        "        <div id=\"pricetxt1\">\n" +
        "            <p id=\"line1prod\">\n" +
        "                    <a href=\"table1.html?id="+ products.id +"\">" + products.name + "</a>\n" +
        "            </p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>"
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
    url: "https://omatableseasv2.azurewebsites.net/api/products",
    type: 'POST',
    data: JSON.stringify({
        "Name": name,
        "Price": price,
        "ImageLink": imageLink,
        "Description": description,
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
});

$("#pageLeft").on("click", function (e) {
    e.preventDefault();
    if (pageNr <= 1) {
        return;
    } else {
        pageNr = pageNr - 1;
        listProducts(pageNr);
    }
});

$("#pageRight").on("click", function (e) {
    e.preventDefault();
    if (pageNr > 9999) {
        return;
    } else {
        pageNr = pageNr + 1;
        listProducts(pageNr);
    }
})