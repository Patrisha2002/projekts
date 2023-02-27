document.getElementById("button-add-product").onclick = function () {
    location.href = "/productadd";
};
document.getElementById("button-login-user").onclick = function () {
    location.href = "/login";
};
document.getElementById("button-logout-user").onclick = function () {
    location.href = "/logoutUser";
};
document.getElementById("button-show-questions").onclick = function () {
    location.href = "/questions";
};
document.getElementById("button-goto-gallery").onclick = function () {
    location.href = "/gallery";
};
document.getElementById("searchButton").onclick = function () {
    searchInput = document.getElementById("searchInput").value;
    //console.log(searchInput);
    window.location = "/details?sku=" + searchInput;
};

async function getSkuArray(){

    var skuArray = [];
    await fetch("http://localhost/getProducts", {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }    
    })
    .then((response) => response.json())
    .then((data) => {
        data.forEach((product) => {
            skuArray.push(product['SKU']);
        });
        
    });
    return skuArray;
}

document.getElementById("button-delete-product").onclick = async function () {

    skuArray = [];
    await getSkuArray().then((result) => {skuArray = result}); 

    /*using string, because request have type DELETE. It means that in deleteProducts.php you can't get 
     data from $_POST, so I'm using file_get_content("php://input") 
     which anyway returns data as one string with object properties (which I don't need) and data.
    */

    var checkedProdSkuString = "";    

    skuArray.forEach((sku) => {

         checkboxId = "checkbox-".concat(sku);     //checkboxes have id like checkbox-JFDC43 (if product have SKU "JFDC43")
         if (document.getElementById(checkboxId).checked) {
             checkedProdSkuString = checkedProdSkuString.concat(sku.concat(";"));
         }

     });
    
    $.ajax({  
        type: 'DELETE',  
        url: '/deleteProducts', 
        data: checkedProdSkuString,
        success: function(response) {
            document.location.reload(true);
        }
    });
};

window.onload = function() {
    showAccessibleButtons();
    showPoll();
}

function showAccessibleButtons() {
    var cookie = getCookie("userRole");
    if (cookie == null){
        document.getElementById("myForm").style.display = "none";
        document.getElementById("button-logout-user").style.display = "none";
        document.getElementById("button-show-questions").style.display = "none";
        document.getElementById("button-login-user").style.display = "block";
        document.getElementById("button-delete-product").style.display = "none";
        document.getElementById("button-add-product").style.display = "none";
        document.getElementById("open-chat-button").style.display = "none";
        document.getElementById("searchButton").style.display = "none";
        document.getElementById("searchInput").style.display = "none";
        document.getElementById("button-goto-gallery").style.display = "none";
    }
    if (cookie == 1){
        document.getElementById("button-logout-user").style.display = "block";
        document.getElementById("button-show-questions").style.display = "none";
        document.getElementById("button-login-user").style.display = "none";
        document.getElementById("button-delete-product").style.display = "none";
        document.getElementById("button-add-product").style.display = "none";
    }
    if (cookie == 2){
        document.getElementById("button-logout-user").style.display = "block";
        document.getElementById("button-show-questions").style.display = "block";
        document.getElementById("button-login-user").style.display = "none";
    }
}

function showPoll(){
    var cookie = getCookie("userRole");
    if (cookie == 1){
        setTimeout(() => {  document.getElementById("myPoll").style.display = "block"; }, 5000);
    }
}



function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

fetch("http://localhost/getProducts", {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }    
    })
    .then((response) => response.json())
    .then((data) => {
        const productList = new Products();
        productList.render(data);
    });
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function closePoll() {
    document.getElementById("myPoll").style.display = "none";
}