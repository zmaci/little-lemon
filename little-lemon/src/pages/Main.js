import React from "react";
import "./styles.css";
import salad from "./salad.jpg";
import bruschetta from "./bruschetta.jpg";
import cake from "./cake.jpg";
import john from "./john.jpg";
import jaida from "./jaida.jpg";
import bob from "./bob.jpg";
import owners from "./owners.jpg";
import owners2 from "./owners2.jpg";


const Main = () => {
  return (
    <main>
      {/* Highlights Section */}
      <section className="highlights">
        {/* Specials and Online Menu Row */}
        <div className="highlights-row">
          <div className="highlight-item">
            <h3>Specials</h3>
            {/* Specials content */}
          </div>
          <div className="highlight-item">
            <h3>Online Menu</h3>
            {/* Online Menu content */}
          </div>
        </div>

        {/* Three Identical Elements Row */}
        <div className="highlights-row">
          <div className="highlight-item">
            <img src={salad} alt="greek salad" />
            <div className="highlight-info">
              <h3>Greek Salad</h3>
              <p>$14.99</p>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt odio eget ex vestibulum, id tristique risus hendrerit. Maecenas vitae orci
              ac justo sollicitudin fermentum. Nulla facilisi. Fusce convallis turpis nec mauris tincidunt, at consectetur elit fringilla.</p>
          </div>
          <div className="highlight-item">
            <img src={bruschetta} alt="bruschetta" />
            <div className="highlight-info">
              <h3>Bruschetta</h3>
              <p>$14.99</p>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt odio eget ex vestibulum, id tristique risus hendrerit. Maecenas vitae orci
              ac justo sollicitudin fermentum. Nulla facilisi. Fusce convallis turpis nec mauris tincidunt, at consectetur elit fringilla.</p>
          </div>
          <div className="highlight-item">
            <img src={cake} alt="lemon cake" />
            <div className="highlight-info">
              <h3>Lemon Dessert</h3>
              <p>$14.99</p>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt odio eget ex vestibulum, id tristique risus hendrerit. Maecenas vitae orci
              ac justo sollicitudin fermentum. Nulla facilisi. Fusce convallis turpis nec mauris tincidunt, at consectetur elit fringilla.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>

        <div className="testimonials-wrapper">
          <div className="testimonial-container">
            <div className="testimonial-content">
              <p className="rating">Rating = 5</p>
              <img src={john} alt="User 1" className="user-image" />
              <p className="review">"Little Lemon is a culinary gem! Their authentic Italian dishes transport you straight to Italy, and the cozy ambiance makes every
              dining experience delightful."</p>
              <p className="name">John Doe</p>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial-content">
              <p className="rating">Rating = 5</p>
              <img src={jaida} alt="User 2" className="user-image" />
              <p className="review">"At Little Lemon, each bite is a flavor explosion! From the savory pasta to the mouthwatering desserts, it's a true celebration of Italian cuisine."</p>
              <p className="name">Jaida Smith</p>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial-content">
              <p className="rating">Rating = 5</p>
              <img src={bob} alt="User 3" className="user-image" />
              <p className="review">"Dining at Little Lemon is like being in Italy without leaving town. The exquisite flavors and charming atmosphere make it the go-to 
              spot for a taste of Italy in every dish."</p>
              <p className="name">Bob Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>

        {/* Two Columns in One Row */}
        <div className="about-row">
          {/* First Column */}
          <div className="about-column">
            <h3>Little Lemon</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt odio eget ex vestibulum, id tristique risus hendrerit. Maecenas vitae orci ac justo
               sollicitudin fermentum. Nulla facilisi. Fusce convallis turpis nec mauris tincidunt, at consectetur elit fringilla. Nunc eget metus et lectus tristique
                venenatis a eu ligula. Suspendisse potenti.</p>
          </div>

          {/* Second Column */}
          <div className="about-column">
            <img src={owners} alt="Owners" className="about-image" />
            <img src={owners2} alt="Owners" className="about-image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
