/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a className="logo" href="#top">Asiat</a>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">My work</a></li>
              <li><a href="#process">How it works</a></li>
              <li><a href="#about">About</a></li>
              <li><a className="btn sm" href="#contact">Get a free mockup</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap hero">
          <span className="tag">Web developer for small businesses</span>
          <h1>A website that turns visitors into customers.</h1>
          <p>
            I build fast, mobile-friendly websites that help small businesses get found on Google
            and get more enquiries, bookings and sales, with content that's always easy to read and easy to update.
          </p>
          <div className="cta">
            <a
              className="btn"
              href="https://wa.me/2348022132612?text=Hi%20Asiat%2C%20I%27d%20like%20a%20free%20website%20mockup%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on WhatsApp
            </a>
            <a className="btn ghost" href="#work">
              See my work
            </a>
          </div>
        </div>

        <section className="alt" id="problem">
          <div className="wrap">
            <div className="eyebrow">Why it matters</div>
            <h2>Most people check your website before they buy.</h2>
            <p className="lead">
              If your website is missing, slow or hard to use on a phone, customers go to the next business on the list.
            </p>
            <div className="grid">
              <div className="card">
                <div className="icon">🔍</div>
                <h3>Get found</h3>
                <p>A real website gives Google something to show when people search for your business.</p>
              </div>
              <div className="card">
                <div className="icon">📱</div>
                <h3>Works on every phone</h3>
                <p>Most customers browse on their phone. Your site loads fast and reads clearly on small screens.</p>
              </div>
              <div className="card">
                <div className="icon">📩</div>
                <h3>More direct enquiries</h3>
                <p>Contact, booking and order buttons that send customers straight to you.</p>
              </div>
              <div className="card">
                <div className="icon">🛠️</div>
                <h3>Easy to keep current</h3>
                <p>No more outdated pages or PDFs. Changes are quick and simple to make.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="eyebrow">What I do</div>
            <h2>Services for small businesses</h2>
            <p className="lead">Whether you have no website or one that looks out of date, I can build what you need.</p>
            <div className="grid">
              <div className="card">
                <h3>New website</h3>
                <p>A clean, professional site for restaurants, shops, studios, agencies and service businesses.</p>
              </div>
              <div className="card">
                <h3>Website rebuild</h3>
                <p>Turn an old, slow or outdated site into a modern one that reflects your brand.</p>
              </div>
              <div className="card">
                <h3>Product & service pages</h3>
                <p>Your offerings, menu or portfolio, laid out clearly and easy to update.</p>
              </div>
              <div className="card">
                <h3>Booking & enquiry forms</h3>
                <p>Links and forms that connect customers straight to you, however you take business.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="alt" id="work">
          <div className="wrap">
            <div className="eyebrow">My work</div>
            <h2>Live websites I've built</h2>
            <p className="lead">Every project below is live, so you can open it on your phone and try it.</p>

            <article className="proj">
              <div className="thumb t3">Lumina Studio</div>
              <div className="pbody">
                <div className="kind">Creative agency & studio website</div>
                <h3>Lumina Studio</h3>
                <p>
                  A modern studio website with a minimalist look, clear typography and quick contact buttons.
                  Fast to load and easy to read on any device.
                </p>
                <div className="chips">
                  <span>Minimalist design</span>
                  <span>Fast loading</span>
                  <span>Contact buttons</span>
                </div>
                <a
                  className="link"
                  href="https://lumina-studio-pi-bay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site →
                </a>
              </div>
            </article>

            <article className="proj">
              <div className="thumb t2">Auracule Production</div>
              <div className="pbody">
                <div className="kind">Media & production company website</div>
                <h3>Auracule Production</h3>
                <p>
                  A professional site for a production company, showcasing its brand and services with clear
                  calls to action so visitors know exactly how to get in touch.
                </p>
                <div className="chips">
                  <span>Brand storytelling</span>
                  <span>Clear enquiry path</span>
                  <span>Responsive</span>
                </div>
                <a
                  className="link"
                  href="https://auracule-production.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site →
                </a>
              </div>
            </article>

            <article className="proj">
              <div className="thumb t1">Timmy's Cuisine</div>
              <div className="pbody">
                <div className="kind">Restaurant website</div>
                <h3>Timmy's Cuisine</h3>
                <p>
                  A restaurant website that presents the brand, menu, services and customer information in one
                  welcoming, easy-to-use page, with mobile-friendly navigation and a layout that adapts to any screen.
                </p>
                <div className="chips">
                  <span>Menu presentation</span>
                  <span>Mobile-first</span>
                  <span>Fast hosting</span>
                </div>
                <a
                  className="link"
                  href="https://timmys-crusine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site →
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <div className="eyebrow">How it works</div>
            <h2>Simple, and no risk to start</h2>
            <p className="lead">You see the result before you commit to anything.</p>
            <div className="steps">
              <div className="step">
                <h3>Free mockup</h3>
                <p>Tell me about your business and I'll design a free homepage preview.</p>
              </div>
              <div className="step">
                <h3>You approve</h3>
                <p>Share your feedback and we adjust until you love it.</p>
              </div>
              <div className="step">
                <h3>I build & launch</h3>
                <p>I build the full site, test it on phones and put it online.</p>
              </div>
              <div className="step">
                <h3>You stay in touch</h3>
                <p>Need a menu change or a new page? Just message me.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="alt" id="about">
          <div className="wrap about">
            <div>
              <div className="eyebrow">About me</div>
              <h2>Hi, I'm Asiat.</h2>
              <p>
                I'm a web developer who builds clean, responsive websites with HTML, CSS and JavaScript, and I host
                every project live on Vercel. I work with all kinds of businesses — restaurants, studios, production
                companies and more — and I care about the details that make a site actually work for customers:
                content that's easy to read, buttons that are easy to tap and pages that load quickly.
              </p>
              <p>
                My background in Health Information Management taught me to organise information carefully, and that
                shows in how I structure a website. I work remotely, so I'm happy to work with businesses anywhere.
              </p>
            </div>
            <ul className="list">
              <li>Mobile-first, responsive design</li>
              <li>Clean, fast-loading code</li>
              <li>Live, deployed projects you can visit</li>
              <li>Clear communication, reply within 24 hours</li>
              <li>Free homepage mockup before you commit</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact">
              <h2>Let's get your business in front of more people.</h2>
              <p>Tell me about your business and I'll send you a free homepage mockup. No pressure, no obligation.</p>
              <div className="cta">
                <a
                  className="btn"
                  href="https://wa.me/2348022132612?text=Hi%20Asiat%2C%20I%27d%20like%20a%20free%20website%20mockup%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp me
                </a>
                <a
                  className="btn ghost"
                  href="mailto:abdulrafiuasiat2006@gmail.com?subject=Website%20for%20my%20restaurant"
                >
                  Email me
                </a>
              </div>
              <p className="meta">
                abdulrafiuasiat2006@gmail.com · 08022132612 (call or WhatsApp)
                <br />
                I aim to reply within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>© Asiat · Web developer for small businesses</footer>
    </>
  );
}
