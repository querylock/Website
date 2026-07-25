import { useState, type FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes('@')) setDone(true);
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <div className="newsletter-banner">
          <div className="newsletter-inner">
            <div>
              <span className="eyebrow newsletter-eyebrow">QueryLock Insider</span>
              <h2>Join the QueryLock Insider Newsletter</h2>
              <p>Get alerted when new guides or offerings become available.</p>
            </div>
            {done
              ? (
                <div className="newsletter-success">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                  You&rsquo;re on the list.
                </div>
              )
              : (
                <form className="newsletter-form" onSubmit={onSubmit}>
                  <label htmlFor="newsletter-email">Email</label>
                  <div className="newsletter-row">
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email here"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-on-dark">Join the Newsletter</button>
                  </div>
                </form>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}
