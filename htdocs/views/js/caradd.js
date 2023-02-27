let productForm = document.getElementById("product_form");
productForm.addEventListener('submit', () => {
    if(document.getElementById("heatedSteeringWheel").checked) {
        document.getElementById('heatedSteeringWheelHidden').disabled = true;
    }
    if(document.getElementById("navigationSystem").checked) {
        document.getElementById('navigationSystemHidden').disabled = true;
    }
    if(document.getElementById("heatedSteeringWheel").checked) {
        document.getElementById('heatedSteeringWheelHidden').disabled = true;
    }
    if(document.getElementById("powerLiftage").checked) {
        document.getElementById('powerLiftageHidden').disabled = true;
    }
    if(document.getElementById("leatherInterior").checked) {
        document.getElementById('leatherInteriorHidden').disabled = true;
    }
    if(document.getElementById("bluetooth").checked) {
        document.getElementById('bluetoothHidden').disabled = true;
    }
    if(document.getElementById("cruiseControl").checked) {
        document.getElementById('cruiseControlHidden').disabled = true;
    }
    if(document.getElementById("toning").checked) {
        document.getElementById('toningHidden').disabled = true;
    }
    if(document.getElementById("handsFree").checked) {
        document.getElementById('handsFreeHidden').disabled = true;
    }
    if(document.getElementById("brakeAssist").checked) {
        document.getElementById('brakeAssistHidden').disabled = true;
    }
})

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

    return true;
}

function validateForEmptyFields(productForm){
    if ( (productForm["sku"].value != "") && (productForm["name"].value != "") && (productForm["price"].value != "") &&
            (productForm["prodYear"].value != "") && (productForm["engineVolume"].value != "") && (productForm["horsePower"].value != "") &&
            (productForm["color"].value != "") && (productForm["engineType"].value != "") && (productForm["transmission"].value != "") && (productForm["body"].value != "")) {
        return true;
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

