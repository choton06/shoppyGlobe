import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem} from "../Utils/CartSlice";


function CartItem(){
    const param = useParams();
    const dispatch = useDispatch()
    const Items = useSelector(state => state.cart.items) ;
    function HandleRemoveCart(item) {
      dispatch(removeItem(item));
    }
     if(Items){return(
      <>
        {Items.filter((data) => data.id == param.id).map((product) => (
          <div className="flex flex-wrap justify-center my-12 px-4" key={product.id}>
            {/* Left Section: Product Image Gallery */}
            <div className="w-full lg:w-2/5 bg-white rounded-md shadow-lg p-6">
              {/* Thumbnail Gallery */}
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

              {/* Main Product Image */}
              <img
                src={product.thumbnail}
                alt="Product Thumbnail"
                className="w-full max-w-lg mx-auto rounded-md border border-gray-200 shadow-md"
              />

              {/* Add to Cart Button */}
              <button
                onClick={() => HandleRemoveCart(product)}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md font-medium transition"
              >
                Remove Item
              </button>
            </div>

            {/* Right Section: Product Details */}
            <div className="w-full lg:w-3/5 bg-white rounded-md shadow-lg p-6">
              {/* Product Title and Pricing */}
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹
                    {Math.round(
                      (product.price * 100) / (100 - product.discountPercentage)
                    )}
                  </span>
                  <span className="text-sm text-red-500">
                    -{product.discountPercentage}%
                  </span>
                </div>
              </div>

              {/* Ratings and Tags */}
              <div className="flex items-center mt-4 space-x-2">
                <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-md">
                  {product.rating} ★
                </span>
                <span className="text-sm text-gray-500">
                  2030 Ratings | 450 Reviews
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-1 bg-gray-200 my-4"></div>

              {/* Product Information */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="font-semibold">Stock:</span>{" "}
                  {product.stock > 0 ? "Available" : "Out of Stock"} (
                  {product.stock})
                </p>
                <p>
                  <span className="font-semibold">Warranty:</span>{" "}
                  {product.warrantyInformation || "1 Year"}
                </p>
                <p>
                  <span className="font-semibold">Dimensions:</span>{" "}
                  {product.dimensions?.width || "N/A"} x{" "}
                  {product.dimensions?.height || "N/A"} x{" "}
                  {product.dimensions?.depth || "N/A"} cm
                </p>
                <p>
                  <span className="font-semibold">Weight:</span>{" "}
                  {product.weight || "N/A"} kg
                </p>
              </div>

              {/* Return Policy */}
              <div className="mt-4 bg-yellow-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Return Policy</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.returnPolicy ||
                    "Eligible for return within 7 days of delivery."}
                </p>
              </div>

              {/* Delivery Information */}
              <div className="mt-4 bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Delivery</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.shippingInformation ||
                    "Delivered within 3-5 business days."}
                </p>
              </div>
              <div>
                <p>Total Quentity:{product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}
}

export default CartItem;