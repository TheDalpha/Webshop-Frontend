var id = document.URL.split('=')[1];

listProducts();

function listProducts() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'https://omatableseasv2.azurewebsites.net/api/products/'+id,
        type: 'GET',
        dataType: 'json',
        success: function (products) {
            onGetProductSuccess(products);
        }
    });
}

function onGetProductSuccess(products) {
    console.log(products);
    $("#detailes").empty().append(buildProductsRow(products));
}

function buildProductsRow(products) {
    var ret = "<div id=\"block1\">\n" +
        "            <div id=\"productpicture1\"></div>\n" +
        "        </div>\n" +
        "        \n" +
        "        \n" +
        "        <div id=\"descriptionbox\">\n" +
        "            <div id=\"titledescription1\">\n" +
        "                " + products.name + "\n" +
        "                <br>\n" +
        "                ★★★★★\n" +
        "               \n" +
        "            </div> \n" +
        "            <hr>\n" +
        "            <div id=\"textdescribing1\">\n" +
        "                    <p>"+ products.description + "</p>\n" +
        "            </div>\n" +
        "        <div id=\"pricedes1\">\n" +
        "           Price " + products.price + "€\n" +
        "        </div>\n" +
        "        <div id=\"purchasebut1\">\n" +
        "                <a id=\"button1\" href=\"#\">Add to Cart</a>\n" +
        "        </div>\n" +
        "\n" +
        "        </div>"
    return ret;
}
