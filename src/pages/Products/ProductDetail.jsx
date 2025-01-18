import React from "react";
import { useParams } from "react-router-dom";
import productsList from "../../Lists/index";
import styles from "./styles/productDetail.module.css";

function ProductDetail() {
  const { productId } = useParams();
  const product = productsList.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>ürün bulunamadı</div>;
  }

  return (
    <div>
      <h1>{product.description}</h1>
      <img src={product.image} alt={product.description} />
      <p>Fiyat: {product.price} TL</p>
      <button>Sepete Ekle</button>
    </div>
  );
}

export default ProductDetail;
