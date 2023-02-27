class Questions{

    render(catalog){
        let htmlCatalog = '';
        let index = 0;
        catalog.forEach((question) => {
            htmlCatalog += `
                <li class="product-element">
                    <input type="checkbox" class="delete-checkbox" id="checkbox-${question['Question_id']}">
                    <span class="product-element-label">${question['Question_id']}</span>
                    <span class="product-element-label">${question['Question']}</span>
                    <a class="product-element-label" href="/updateQuestion?qId=${question['Question_id']}">Edit</a>
                </li>
            `;
            index++;
        });

        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_QUESTIONS.innerHTML = html;
    }

    sort(catalog){
        let htmlCatalog = '';
        let index = 0;
        catalog.sort()
        catalog.reverse();
        catalog.forEach((question) => {
            htmlCatalog += `
                <li class="product-element">
                    <input type="checkbox" class="delete-checkbox" id="checkbox-${question['Question_id']}">
                    <span class="product-element-label">${question['Question_id']}</span>
                    <span class="product-element-label">${question['Question']}</span>
                    <a class="product-element-label" href="/updateQuestion?qId=${question['Question_id']}">Edit</a>
                </li>
            `;
            index++;
        });

        const html = `
            <ul class="product-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_QUESTIONS.innerHTML = html;
    }
}