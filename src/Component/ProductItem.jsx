import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddCart = (e, product) => {
    // Prevent the Link's navigation action
    e.preventDefault();
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-64 object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>

        {/* Product Price */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">{`₹ ${product.price}`}</p>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-red-600">
              {`-${product.discountPercentage}%`}
            </span>
          )}
        </div>

        {/* Product Rating */}
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500">
            {Array.from({ length: Math.round(product.rating) }).map((_, index) => (
              <span key={index} className="text-xl">★</span>
            ))}
          </span>
          <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
        </div>

        {/* Product Button and Link */}
        <div className="mt-4 flex justify-between items-center">
          {/* Link to Product Details */}
          <Link
            to={`/productDetails/${product.id}`}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            View Details
          </Link>

          {/* Add to Cart Button */}
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={(e) => handleAddCart(e, product)} // Pass event and product to handler
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
