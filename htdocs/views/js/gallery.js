document.getElementById("button-go-back").onclick = function () {
    location.href = "/";
};

class Gallery{

    render(catalog){
        let htmlCatalog = '';
        let index = 0;
        catalog.forEach((product) => {
            htmlCatalog += `
                <li class="gallery-container">
                    <img class="product-element-label" src="${product['Photo']}">
                </li>
            `;
            index++;
        });

        const html = `
            <ul class="gallery-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_GALLERY.innerHTML = html;
    }

}

fetch('http://localhost/getGallery', {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        const gallery = new Gallery();
        gallery.render(data);
    });
