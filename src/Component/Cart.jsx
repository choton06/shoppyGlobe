import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function HandleAddCart(item) {
    dispatch(addItem(item));
  }

  function HandleRemovedCart(item) {
    dispatch(removeItem(item));
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b py-4"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800"><Link to={`/cart-item/${item.id}`}> {item.title}</Link></h3>
                      <p className="text-sm text-gray-500">
                        {item.brand} || {item.description}
                      </p>
                      <p className="font-medium text-gray-800 mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Decrease Quantity Button */}
                    <button
                      onClick={() => HandleRemovedCart(item)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    {/* Increase Quantity Button */}
                    <button
                      onClick={() => HandleAddCart(item)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary Section */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Price Details</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <p>Total MRP</p>
                  <p>
                    ₹
                    {cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p className="text-green-600">- ₹0</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Charges</p>
                  <p className="text-green-600">Free</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-medium">
                <p>Total Amount</p>
                <p>
                  ₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded-md hover:bg-purple-700">
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-lg font-medium text-gray-700">
              Your cart is empty
            </h2>
            <Link
              to="/"
              className="text-purple-600 font-medium hover:underline mt-4 inline-block"
            >
              Shop now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
