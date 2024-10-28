// Fetch products from JSON file and render them
fetch('/Users/narges/Downloads/glasses main template/assets/images/products.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('productGrid');
        
        products.forEach(product => {
            // Create a card for each product
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            // Product image
            const img = document.createElement('img');
            img.src = `images/${product.image}`;
            img.alt = product.name;
            productCard.appendChild(img);
            
            // Product information
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            
            const name = document.createElement('h2');
            name.textContent = product.name;
            productInfo.appendChild(name);
            
            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `$ ${product.price}`;
            productInfo.appendChild(price);
            
            // Add info to card
            productCard.appendChild(productInfo);
            productGrid.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error loading products:', error));
