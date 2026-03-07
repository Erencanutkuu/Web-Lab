function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1 className="site-title">Web Tasarimi ve Programlama</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img
                src="/foto.jpg"
                alt="Eren Can Utku'nun vesikalik fotografi"
              />
              <figcaption>Eren Can Utku</figcaption>
            </figure>
            <div>
              <p>
                Ben Eren Can Utku. Yazilim Muhendisligi 3. sinif ogrencisiyim.
                Firat Universitesinde okuyorum (Elazig). Su an Istanbul'da
                yasiyorum.
              </p>
              <h3>Kullandigim Teknolojiler</h3>
              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li>Java</li>
                <li>Java Spring Boot</li>
                <li>C++</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="/proje-1.png"
                alt="E-Ticaret sitesi anasayfa ekran goruntusu"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>
                React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret
                uygulamasi.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="/proje-2.png"
                alt="Blog uygulamasi yazi listesi gorunumu"
              />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu. Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="/proje-2.png"
                alt="Hava durumu uygulamasi arayuzu"
              />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form>
            <div className="form-group">
              <label htmlFor="ad-soyad">Ad Soyad</label>
              <input
                id="ad-soyad"
                name="ad-soyad"
                type="text"
                autoComplete="name"
                required
                minLength={3}
                aria-describedby="ad-soyad-hata"
              />
              <small id="ad-soyad-hata" className="error-msg" role="alert">
                Lütfen en az 3 karakter girin.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-describedby="email-hata"
              />
              <small id="email-hata" className="error-msg" role="alert">
                Gecerli bir e-posta girin.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="konu">Konu</label>
              <select
                id="konu"
                name="konu"
                required
                aria-describedby="konu-hata"
              >
                <option value="">Seciniz</option>
                <option value="staj">Staj</option>
                <option value="proje">Proje</option>
                <option value="diger">Diger</option>
              </select>
              <small id="konu-hata" className="error-msg" role="alert">
                Lutfen bir konu secin.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="mesaj">Mesaj</label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                required
                minLength={10}
                aria-describedby="mesaj-hata"
              />
              <small id="mesaj-hata" className="error-msg" role="alert">
                Lutfen en az 10 karakter yazin.
              </small>
            </div>

            <button type="submit">Gonder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ad Soyad. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
