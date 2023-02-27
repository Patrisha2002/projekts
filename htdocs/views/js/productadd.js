 document.getElementById("product_form").addEventListener('submit', async (e) => {
    let productForm = document.getElementById("product_form");
    e.preventDefault();   //prevent submit
    response = await validateForm(productForm);   //if false - validation failed
    if (response) productForm.submit();    //force submit

    /*It's impossible to prevent submit after async function, so I'm doing it at the beginning 
    and then forcing it if validation passed*/
});

document.getElementById("button-cancel-product").onclick = function () {
    location.href = "/";
};

async function validateForm(productForm) {

    response = await checkForSkuDuplicate(productForm["sku"].value);
    if (JSON.parse(response).message == "Duplicate SKU"){    //getting Response object from PHP in JSON format 
        alert("Product with same SKU already exist");
        return false;
    };

    if (!validateForEmptyFields(productForm)){
        alert("Please, submit required data");
        return false;
    };

    if (!validateDataTypes(productForm) || !validateDataInput(productForm)){     //true - passes validation => if (!true or !true) => won't go into if; 
        alert("Please, provide the data of indicated type");
        return false;
    };

    return true;
}

function validateForEmptyFields(productForm){
    if ( (productForm["sku"].value != "") && (productForm["name"].value != "") && (productForm["price"].value != "")) {
        switch(productForm["productType"].value){
            case "dvd":
                if (productForm["size"].value != "") return true;
            case "furniture":
                if ((productForm["height"].value != "") && (productForm["length"].value != "") && (productForm["width"].value != "")) return true;
            case "book":
                if (productForm["weight"].value != "") return true;
        }
    };
    return false;
}

function validateDataTypes(productForm){

    prodType = productForm["productType"].value;
    strSku = Number(productForm["sku"].value);     // Number(String) = NaN
    strName = Number(productForm["name"].value);
    switch(prodType){
        case "dvd":
            numSize = productForm["size"].value-1;    // String - Number = Number only if String contains only numbers, else NaN 
        case "furniture":
            numHeight = productForm["height"].value-1;
            numLength = productForm["length"].value-1;
            numWidth = productForm["width"].value-1;
        case "book":
            numWeight = productForm["weight"].value-1;
    }

    if (isNaN(strSku) && isNaN(strName)){
        switch(prodType){
            case "dvd":
                if (!isNaN(numSize)) return true;
            case "furniture":
                if (!isNaN(numHeight) && !isNaN(numLength) && !isNaN(numWidth)) return true;
            case "book":
                if (!isNaN(numWeight)) return true;
        }
    }
    return false;
}

function validateDataInput(productForm){
    if (productForm["price"].value > 0){
        switch(productForm["productType"].value){
            case "dvd":
                if (productForm["size"].value > 0) return true;
            case "furniture":
                if ((productForm["height"].value > 0) && (productForm["length"].value > 0) && ((productForm["width"].value) > 0)) return true;
            case "book":
                if (productForm["weight"].value > 0) return true;
        };
    };
    return false;
}

async function checkForSkuDuplicate(sku){

    let response = 0;
    await $.ajax({  
        type: 'POST',  
        url: '/checkForDuplicateSku', 
        data: sku,
        success: function(resp) {
            response = resp;
        }
    });

    return response;
}

var dropdownList = document.getElementById("productType");
dropdownList.onchange = function() {
    var selectedValue = dropdownList.value;
    switch (selectedValue){
    case ("dvd"):
        setBlockDisplay("block", "none", "none");
        break;
    case("furniture"):
        setBlockDisplay("none", "block", "none");
        break;
    case("book"):
        setBlockDisplay("none", "none", "block");
        break;
    default:
        setBlockDisplay("none", "none", "none");
    }
}

var dvdBlock = document.getElementById("dvd-block");
var furnitureBlock = document.getElementById("furniture-block");
var bookBlock = document.getElementById("book-block");
function setBlockDisplay(dvdDisplay, furnitureDisplay, bookDisplay){
    dvdBlock.style.display = dvdDisplay;
    furnitureBlock.style.display = furnitureDisplay;
    bookBlock.style.display = bookDisplay;
}