
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from '../slices/cartSlice';
import { toast } from "sonner";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`أضفت المنتج "${product.title}" إلى السلة`, {
      duration: 3000,
      position: "bottom-right",
    });
      };

  if (loading) return <div className="text-center mt-10">جاري التحميل...</div>;

  return (
    <div className="max-w-[1200px] mx-auto p-4 flex flex-col items-center justify-center sm:block">
      <div dir="rtl" className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-right">منتجات مميزة</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          description={product.description}
          price={product.price}
          isNew={true}
          onAddToCart={() => handleAddToCart(product)}  // هنا ربطت بالفعلي
          onToggleFavorite={() =>
            alert(`تم التبديل على المفضلة للمنتج "${product.title}"`)
          }
        />        
        ))}
      </div>
    </div>
  );
}
