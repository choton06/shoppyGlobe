import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import useFetch from "../Utils/useFetch";

function ProductList() {
  const [ProductLists, setProductLists] = useState([]);
  const { data, Error, loading } = useFetch("https://dummyjson.com/products");
  const searchText = useSelector((state) => state.search.text); // Get search term from Redux

  useEffect(() => {
    if (data) {
      setProductLists(data);
    }
  }, [data]);

  if (Error) {
    return <p> The Error is : {Error}</p>;
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
      <span className="ml-4 text-gray-700">Loading...</span>
    </div>;
  }

  const productItems = ProductLists.products;

  // Filter products based on the search term
  const filteredProducts = productItems?.filter(
    (product) =>
      searchText === "" || // If search term is empty, show all products
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase())
  );


  if (filteredProducts && filteredProducts.length === 0) {
    // If no products match the search term, display "No items found"
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-lg text-red-600">No items found for your search.</p>
      </div>
    );
  }

  return (
    <div className="m-4 flex flex-col items-center justify-center">
      {/* Map through filtered products and display them */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Item */}
            
              <ProductItem product={product} />
          

      
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

