// productDetails.js

// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Load the products from the JSON file
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        // Find the product by ID
        const product = products.find(p => p.id == productId);

        if (product) {
            // Update the page with the product details
            document.getElementById("product-name").textContent = product.name;
            document.getElementById("product-price").textContent = "Price: " + product.price;
            document.getElementById("product-description").textContent = product.description;

            // Load and display the product images
            const gallery = document.getElementById("product-gallery");
            product.other_photos.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = `${image}`;
                imgElement.alt = product.name;
                imgElement.classList.add("product-image"); // Add any necessary styling class
                gallery.appendChild(imgElement);
            });
        } else {
            // If product not found, display a message
            document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
        }
    })
    .catch(error => {
        console.error("Error loading product data:", error);
        document.getElementById("product-details").innerHTML = "<p>Error loading product details.</p>";
    });
