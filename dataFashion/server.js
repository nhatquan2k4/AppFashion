const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Cấu hình CORS
app.use(cors({
    origin: '*',               // Cho phép tất cả các nguồn (có thể thay '*' bằng IP cụ thể để tăng bảo mật)
    methods: ['GET', 'POST'],  // Cho phép các phương thức cụ thể
    allowedHeaders: ['Content-Type', 'Authorization'] // Các header được phép
}));

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',       // Để trống nếu không đặt mật khẩu
    database: 'FashionApp'  
});

// Kết nối MySQL
db.connect((err) => {
    if (err) {
        console.error('❌ Lỗi kết nối MySQL:', err);
    } else {
        console.log('✅ Kết nối MySQL thành công!');
    }
});

// API lấy dữ liệu sản phẩm
app.get('/products', (req, res) => {
    db.query('SELECT * FROM Products', (err, results) => {
        if (err) {
            res.status(500).send('Lỗi lấy dữ liệu');
        } else {
            res.json(results);
        }
    });
});

// Chạy server
app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});
