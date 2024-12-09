import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";
import useFetch from "../Utils/useFetch";

function ProductDetails() {
  // Hooks must always be called at the top level of the component
  const [item, setItem] = useState([]);
  const param = useParams(); // Hook for getting route params
  const dispatch = useDispatch();

  // Fetch data using custom hook
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  // Synchronize fetched data to component state
  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data]);

  // Loading and error states
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
    <span className="ml-4 text-gray-700">Loading...</span>
  </div>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const items = item?.products || []; // Ensure safe access

  const handleAddCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      {items
        .filter((product) => product.id === Number(param.id))
        .map((product) => (
          <div className="flex flex-wrap justify-center my-12 px-4" key={product.id}>
            {/* Left Section: Product Image Gallery */}
            <div className="w-full lg:w-2/5 bg-white rounded-md shadow-lg p-6">
              <div className="flex flex-wrap gap-4 mb-4 justify-center">
                {product.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Product Image ${idx + 1}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-md border border-gray-200 hover:shadow-md cursor-pointer"
                  />
                ))}
              </div>
              <img
                src={product.thumbnail}
                alt="Product Thumbnail"
                className="w-full max-w-lg mx-auto rounded-md border border-gray-200 shadow-md"
              />
              <button
                onClick={() => handleAddCart(product)}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md font-medium transition"
              >
                Add To Cart
              </button>
            </div>

            {/* Right Section: Product Details */}
            <div className="w-full lg:w-3/5 bg-white rounded-md shadow-lg p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h1>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{Math.round((product.price * 100) / (100 - product.discountPercentage))}
                </span>
                <span className="text-sm text-red-500">-{product.discountPercentage}%</span>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-md">
                  {product.rating} ★
                </span>
                <span className="text-sm text-gray-500">2030 Ratings | 450 Reviews</span>
              </div>
              <div className="w-full h-1 bg-gray-200 my-4"></div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p>
                  <span className="font-semibold">Category:</span> {product.category}
                </p>
                <p>
                  <span className="font-semibold">Stock:</span>{" "}
                  {product.stock > 0 ? "Available" : "Out of Stock"} ({product.stock})
                </p>
              </div>
              <div className="mt-4 bg-yellow-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Return Policy</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Eligible for return within 7 days of delivery.
                </p>
              </div>
              <div className="mt-4 bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Delivery</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Delivered within 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductDetails;


