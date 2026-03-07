function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Web Tasarimi ve Programlama</h1>
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
          <figure>
            <img
              className="profil-foto"
              src="/foto.jpg"
              alt="Eren Can Utku'nun vesikalik fotografi"
            />
            <figcaption>Eren Can Utku</figcaption>
          </figure>
          <p>
            Ben Eren Can Utku. Yazilim Muhendisligi 3. sinif ogrencisiyim. Firat
            Universitesinde okuyorum (Elazig). Su an Istanbul'da yasiyorum.
          </p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>Java</li>
            <li>Java Spring Boot</li>
            <li>C++</li>
            <li>PostgreSQL</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Proje 1</h3>
            <p>Kisisel portfoy sitesi.</p>
            <p>Kullanilan teknolojiler: HTML, CSS.</p>
            <figure>
              <img src="/proje-1.png" alt="Proje 1 ana sayfa ekran goruntusu" />
              <figcaption>Proje 1</figcaption>
            </figure>
          </article>
          <article>
            <h3>Proje 2</h3>
            <p>Basit not takip uygulamasi.</p>
            <p>Kullanilan teknolojiler: JavaScript.</p>
            <figure>
              <img
                src="/proje-2.png"
                alt="Proje 2 giris sayfasi ekran goruntusu"
              />
              <figcaption>Proje 2</figcaption>
            </figure>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* form buraya */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ad Soyad. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
