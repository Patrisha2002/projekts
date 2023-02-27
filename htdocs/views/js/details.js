document.getElementById("button-go-back").onclick = function () {
    location.href = "/";
};

class Details{

    render(catalog){
        let htmlCatalog = '';
        let index = 0;
        catalog.forEach((product) => {
            htmlCatalog += `
                <li class="product-container">
                  <span class="product-element-label">SKU: ${product['SKU']}</span>
                  <span class="product-element-label"/>Name: ${product['Name']}</span>
                  <span class="product-element-label"/>Price: ${product['Price']}$</span>
                  <span class="product-element-label"/>Production year: ${product['Production_year']}</span>
                  <span class="product-element-label"/>Engine volume: ${product['Engine_volume']}</span>
                  <span class="product-element-label"/>Horse power: ${product['Horse_power']}</span>
                  <span class="product-element-label"/>Color: ${product['Color']}</span>
                  <span class="product-element-label"/>Engine type: ${product['Engine_type']}</span>
                  <span class="product-element-label"/>Transmission: ${product['Transmission']}</span>
                  <span class="product-element-label"/>Body: ${product['Body']}</span>
                </li>
                <fieldset id="checkboxes">
                    <legend>Car's features:</legend>
                    <div>
                        <input type="checkbox" id="heatedSeats" name="heatedSeats" disabled="disabled" ${product['Heated_seats']}>
                        <label for="heatedSeats">Heated seats</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="heatedSteeringWheel" name="heatedSteeringWheel" disabled="disabled" ${product['Heated_steering_wheel']}>
                        <label for="heatedSteeringWheel">Heated steering wheel</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="navigationSystem" name="navigationSystem" disabled="disabled" ${product['Navigation_system']}>
                        <label for="navigationSystem">Navigation system</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="powerLiftage" name="powerLiftage" disabled="disabled" ${product['Power_liftage']}>
                        <label for="powerLiftage">Power liftage</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="leatherInterior" name="leatherInterior" disabled="disabled" ${product['Brake_assist']}>
                        <label for="leatherInterior">Leather interior</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="bluetooth" name="bluetooth" disabled="disabled" ${product['Stability_control']}>
                        <label for="bluetooth">Bluetooth</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="cruiseControl" name="cruiseControl" disabled="disabled" ${product['Leather_interior']}>
                        <label for="cruiseControl">Cruise control</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="toning" name="toning" disabled="disabled" ${product['Bluetooth']}>
                        <label for="toning">Toning</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="stabilityControl" name="stabilityControl" disabled="disabled" ${product['Cruise_control']}>
                        <label for="stabilityControl">Stability control</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="handsFree" name="handsFree" disabled="disabled" ${product['Toning']}>
                        <label for="handsFree">Hands free</label>
                    </div>
        
                    <div>
                        <input type="checkbox" id="brakeAssist" name="brakeAssist" disabled="disabled" ${product['Hands_free']}>
                        <label for="brakeAssist">Brake assist</label>
                    </div>
                </fieldset>
            `;
            index++;
        });

        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_DETAILS.innerHTML = html;
    }

}
url = document.URL;
qSku = url.split('=');
qSku = qSku[1];
fetch('http://localhost/getProduct?sku='+qSku, {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        const detailsList = new Details();
        detailsList.render(data);
    });
