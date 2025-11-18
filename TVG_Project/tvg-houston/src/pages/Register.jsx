import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: call backend /auth/register here
    navigate('/cart');
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="section-heading">
          <h2>Create your TVG Houston account</h2>
          <p>Save quotes, carts and destinations for faster reorders.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Register with your business email and choose a strong password to
              manage your bottle orders and deliveries.
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              Already have an account?{' '}
              <Link to="/signin" style={{ color: 'var(--color-primary)' }}>
                Sign in
              </Link>
              .
            </p>
          </div>

          <div className="contact-card">
            <form onSubmit={handleRegister}>
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
                  placeholder="Create a strong password"
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
                Register
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

// export default function Register() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Here you could call an API to register
//     navigate('/cart');
//   };

//   return (
//     <section className="contact section">
//       <div className="container">
//         <div className="section-heading">
//           <h2>Create your TVG Houston account</h2>
//           <p>Register to save your cart, quotes and repeat orders.</p>
//         </div>

//         <div className="contact-grid">
//           <div className="contact-info">
//             <p>
//               Create an account to quickly reorder bottles, save destinations,
//               and track delivery plans.
//             </p>
//             <p style={{ marginTop: '0.8rem' }}>
//               Already have an account?{' '}
//               <Link to="/signin" style={{ color: 'var(--color-primary)' }}>
//                 Sign in instead
//               </Link>
//               .
//             </p>
//           </div>

//           <div className="contact-card">
//             <form onSubmit={handleRegister}>
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
//                   placeholder="Create a strong password"
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
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }