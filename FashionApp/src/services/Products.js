export const fetchProducts = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const json = await response.json();

        // Chuẩn hóa dữ liệu ảnh
        let fixedImages = [];
        if (Array.isArray(json.images)) {
            fixedImages = json.images.map(img => img.replace(/[\[\]"]/g, ''));
        } else if (typeof json.images === 'string') {
            fixedImages = json.images.replace(/[\[\]"]/g, '').split(',');
        }

        return { ...json, images: fixedImages }; // Trả về dữ liệu đã chuẩn hóa
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
        return null; // Trả về null nếu có lỗi
    }
};