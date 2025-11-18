import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call real backend /auth/login here
    navigate('/cart');
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="section-heading">
          <h2>Sign in to TVG Houston</h2>
          <p>Access your saved products, cart and delivery plans.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>Use your business email and password to sign in.</p>
            <p style={{ marginTop: '0.8rem' }}>
              Don&apos;t have an account?{' '}
              <Link to="/register" style={{ color: 'var(--color-primary)' }}>
                Create one here
              </Link>
              .
            </p>
          </div>

          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label">Business email</label>
                <input
                  type="email"
                  className="field-input"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field-group">
                <label className="field-label">Password</label>
                <input
                  type="password"
                  className="field-input"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{ width: '100%', marginTop: '0.4rem' }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function SignIn() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you could add real auth logic
//     navigate('/cart');
//   };

//   return (
//     <section className="contact section">
//       <div className="container">
//         <div className="section-heading">
//           <h2>Sign in to TVG Houston</h2>
//           <p>Enter your details to access your account and manage orders.</p>
//         </div>

//         <div className="contact-grid">
//           <div className="contact-info">
//             <p>
//               Use your registered email and password to view your cart,
//               favourites and order history.
//             </p>
//             <p style={{ marginTop: '0.8rem' }}>
//               Don&apos;t have an account?{' '}
//               <Link to="/register" style={{ color: 'var(--color-primary)' }}>
//                 Create one here
//               </Link>
//               .
//             </p>
//           </div>

//           <div className="contact-card">
//             <form onSubmit={handleSubmit}>
//               <div className="field-group">
//                 <label className="field-label">Email</label>
//                 <input
//                   type="email"
//                   className="field-input"
//                   placeholder="you@example.com"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="field-group">
//                 <label className="field-label">Password</label>
//                 <input
//                   type="password"
//                   className="field-input"
//                   placeholder="Enter your password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn"
//                 style={{ width: '100%', marginTop: '0.4rem' }}
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }