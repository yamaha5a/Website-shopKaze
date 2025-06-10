const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/kaze', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Kết nối MongoDB thành công');
}).catch((err) => {
  console.error('❌ Kết nối MongoDB thất bại:', err);
});

async function seedProducts() {
  try {
    await Product.deleteMany({});

    const newProduct = {
      name: 'Bánh mì kẹp thịt',
      slug: 'banh-mi-kep-thit',
      description: 'Bánh mì thơm ngon, nhiều nhân.',
      brand: 'ShopFood',
      category: new mongoose.Types.ObjectId('cd523551f0144d449897a097'),
      attributes: {
        size: 'Lớn',
        spiceLevel: 'Vừa'
      },
      variants: [
        { name: 'Thịt bò', price: 30000 },
      ],
      images: [
        'https://example.com/image1.jpg'
      ],
      isActive: true
    };

    await Product.create(newProduct);
    console.log(' Seed sản phẩm thành công');
  } catch (err) {
    console.error(' Lỗi khi seed sản phẩm:', err);
  } finally {
    mongoose.disconnect();
  }
}

seedProducts();
