

function About(){
    return(<> 
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>About SoppyGloble</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Your one-stop shop for everything you love.
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Who We Are</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          At <strong>SoppyGloble</strong>, we are passionate about bringing you
          a diverse range of high-quality products from around the globe. 
          Whether you’re looking for the latest fashion trends, must-have gadgets, 
          or unique home essentials, we’ve got you covered. Founded on the principles 
          of customer satisfaction and innovation, we strive to make online shopping 
          enjoyable, seamless, and accessible to everyone.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Our mission is to deliver an exceptional shopping experience to our customers 
          by offering top-notch products, competitive pricing, and unparalleled customer 
          support. We believe in creating connections with our customers and aim to build 
          a community of shoppers who trust and value us.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Why Shop With Us?</h2>
        <ul style={{ lineHeight: '1.6', color: '#555' }}>
          <li>Extensive range of high-quality products</li>
          <li>Secure and hassle-free shopping experience</li>
          <li>Fast and reliable shipping</li>
          <li>24/7 customer support</li>
          <li>Exclusive offers and discounts</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Get in Touch</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          We’d love to hear from you! Whether you have questions, feedback, or suggestions, 
          feel free to reach out to us at{' '}
          <a href="mailto:contact@soppygloble.com" style={{ color: '#007BFF' }}>
            contact@soppygloble.com
          </a>.
        </p>
      </section>

    </div>
    
    </>)
}

export default About;