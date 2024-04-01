// Function to fetch all products
function getAllProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => console.error('Error:', error));
  }

// Function to fetch product JSON schema
function getProductSchema() {
  fetch('/products/schema')
      .then(response => response.json())
      .then(data => {
          console.log('Product Schema:', data); // Log the schema data
          // Display the schema data in the response container
          document.getElementById('response').innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => console.error('Error:', error));
}


  // Function to create a new product
  function createProduct(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      price: parseFloat(document.getElementById('price').value),
      image: document.getElementById('image').value
    };
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(`${data} created successfully`); // Display a success message and product data in the console
      document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
  }

  // Function to update a product by ID
  function updateProduct(event) {
    event.preventDefault();
    const productId = document.getElementById('updateId').value;
    const formData = {
      name: document.getElementById('updateName').value,
      price: parseFloat(document.getElementById('updatePrice').value),
      image: document.getElementById('updateImage').value 
    };
    fetch(`/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(`The product: ${data} updated successfully`); // Display a success message and updated product data in the console
      document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
  }

  // Function to delete a product by ID
  function deleteProduct(event) {
    event.preventDefault();
    const productId = document.getElementById('deleteId').value;
    fetch(`/products/${productId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Product deleted successfully:', data); // Display success message and deleted product data in the console
      document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
  }