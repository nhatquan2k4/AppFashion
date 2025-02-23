// Lấy tất cả sản phẩm
fetch("http://localhost:5000/products")
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Dữ liệu trả về sẽ được in ra console
    })
    .catch(error => console.error("Error fetching data:", error));

// Lấy sản phẩm theo ID
fetch("http://localhost:5000/api/products/12345")
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Dữ liệu sản phẩm với ID 12345
    })
    .catch(error => console.error("Error fetching product:", error));
