function Home() {
    return (
      <div className="home">
  
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Bilimingizni oshiring, kelajakni yarating</h1>
            <p>
              Zamonaviy kurslar va interaktiv testlar orqali o‘zingizni yangi
              bosqichga ko‘taring
            </p>
            <button className="hero-btn">Kurslarni ko‘rish</button>
          </div>
          <div className="img">
            <img className="hero_img" src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/763px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
          </div>
        </section>
  
        {/* Testlar */}
        <section className="tests">
          <h2>Testlar</h2>
          <div className="test-cards">
            <div className="card">
              <h3>HTML Asoslari</h3>
              <p>10 ta savol</p>
              <button>Testni boshlash</button>
            </div>
            <div className="card">
              <h3>CSS Asoslari</h3>
              <p>10 ta savol</p>
              <button>Testni boshlash</button>
            </div>
            <div className="card">
              <h3>JavaScript Asoslari</h3>
              <p>10 ta savol</p>
              <button>Testni boshlash</button>
            </div>
          </div>
        </section>
  
        {/* Statistika */}
        <section className="stats">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Foydalanuvchilar</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Kurslar</p>
          </div>
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Testlar</p>
          </div>
        </section>
  
      </div>
    );
  }
  
  export default Home;
  