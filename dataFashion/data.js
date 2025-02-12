const sql = require('mssql');

// Thông tin cấu hình kết nối
const config = {
    user: 'NQ',       // Tên đăng nhập SQL Server
    password: '',   // Mật khẩu
    server: '127.0.0.1',         // Hoặc IP của server (ví dụ: '127.0.0.1')
    database: 'FashionApp',   // Tên database bạn muốn kết nối
    options: {
        encrypt: false,          // Bật khi dùng Azure hoặc SSL
        trustServerCertificate: true // Tin tưởng chứng chỉ SSL tự ký
    }
};

// Hàm kết nối database
async function connectDB() {
    try {
        await sql.connect(config);
        console.log('✅ Kết nối SQL Server thành công!');
    } catch (err) {
        console.error('❌ Lỗi kết nối SQL Server:', err);
    }
}

module.exports = { sql, connectDB };
