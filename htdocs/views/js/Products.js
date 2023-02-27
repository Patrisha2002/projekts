class Products{

    render(catalog){
        let htmlCatalog = '';
        let index = 0;
        catalog.forEach((product) => {
            htmlCatalog += `
                <li class="product-element">
                    <input type="checkbox" class="delete-checkbox" id="checkbox-${product['SKU']}">
                    <span class="product-element-label">${product['SKU']}</span>
                    <span class="product-element-label">${product['Name']}</span>
                    <span class="product-element-label">${product['Price']}$</span>
                    <a class="product-element-label" href="/details?sku=${product['SKU']}">Details</a>
                </li>
            `;
            index++;
        });

        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

}
