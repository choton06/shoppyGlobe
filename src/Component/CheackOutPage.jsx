import React from 'react';

function CheackOutPage (){
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Checkout</h1>
      <p>This feature is under construction. Thank you for your patience!</p>
      <p>
        <strong>Total Price:</strong> (Calculate Total Price Here)
      </p>
      <button onClick={() => alert('Checkout functionality coming soon!')}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheackOutPage;
