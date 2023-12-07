const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1> UNVEIL FASHION'S FINEST SELECTIONS</h1>
        <p>
        Unveil Your Style: Discover Exquisite Fashion Pieces for Every Wardrobe Desire!
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>STAY UPDATED</p>

          <div className="brand-icons">
            <img src="/images/footer.png" alt="amazon-logo" width={160} height={120}/>
        
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero 2.jpg" alt="hero-image" width={550} height={550}/>
      </div>
    </main>
  );
};

export default HeroSection;
