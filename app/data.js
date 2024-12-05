// app/data.js

export const fetchProducts = async () => {
  // Menggunakan Lorem Picsum untuk mendapatkan gambar
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Produk ${index + 1}`,
    price: Math.floor(Math.random() * 1000000), // Harga acak
    image: `https://picsum.photos/200/300?random=${index + 1}`, // Gambar acak
  }));
  return products;
};
