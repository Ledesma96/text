import Link from "next/link";


export default function Home() {
  return (
    <div className="container-page">
      <div className="container-navbar">
        <div className="logo-and-navbar">
          <div className="div-img">
            <img src="/images/Captura desde 2024-09-27 20-02-12.png"/>
          </div>
          <nav>
            <div>
              <Link href=''>Home</Link>
            </div>
            <div>
              <Link href=''>About</Link>
            </div>
            <div>
              <Link href=''>pages</Link>
              <svg color='#022b41' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
              </svg>
            </div>
            <div>
              <Link href=''>Packages</Link>
            </div>
            <div>
              <Link href=''>Contact</Link>
            </div>
            <div>
              <Link href=''>Cart[0]</Link>
            </div>
          </nav>
        </div>
        <button className="consultation-button">
          <p>Free Consultation</p>
          <svg color="#022b41" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </button>
      </div>
      <main className="container-content">
        <aside>
          <div className="div-uno">
            <div className="ovalo">
              <p>Welcome to businezz X</p>
            </div>
            <div className="div-h1">
              <h1>Join us in growing your <span>business</span>.</h1>
            </div>
          </div>
          <div className="div-dos">
            <p>Elevate your business with Businezz X, a professional Webfloe template</p>
            <button>
              <p>Contact us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
          </div>
        </aside>

        <section>
          <div className="contain">
            <div className="header">
              <div>
                <p>Book your free consultation</p>
              </div>
              <h3>Get a free consultation</h3>
            </div>
            <form className="form">
              <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Contact@email.com" />
              </div>
              <textarea placeholder="Please type your message here..."></textarea>
              <button type="submit">Get in touch</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
