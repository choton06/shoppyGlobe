
function Contact(){
   return(
    <>
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          We're here to help! Reach out to us with any questions or feedback.
        </p>
      </header>

      <section style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>Send Us a Message</h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <label>
            <span style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Your Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
              required
            />
          </label>
          <label>
            <span style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Your Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
              required
            />
          </label>
          <label>
            <span style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Your Message</span>
            <textarea
              placeholder="Write your message here"
              rows="5"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            style={{
              padding: '0.8rem',
              backgroundColor: '#007BFF',
              color: '#fff',
              fontSize: '1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      <section style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>Other Ways to Reach Us</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@soppygloble.com" style={{ color: '#007BFF' }}>
            support@soppygloble.com
          </a>
        </p>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          <strong>Address:</strong> 123 SoppyGloble Lane, Ecommerce City, Country
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#777' }}>
        <p>&copy; {new Date().getFullYear()} SoppyGloble. All rights reserved.</p>
      </footer>
    </div>
  




    </>
   )
}

export default Contact;