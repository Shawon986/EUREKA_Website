// Modal elements
const modal = document.getElementById('jobModal');
const openBtn = document.getElementById('applyBtn');
const closeBtn = document.getElementById('closeModal');

// Open modal
openBtn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

// Close modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close when clicking outside
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}


      // Scrolling effect for all .scroll-animate elements
      document.addEventListener("DOMContentLoaded", () => {
        const scrollEls = document.querySelectorAll(".scroll-animate");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("scroll-in");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );

        scrollEls.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.12}s`;
          observer.observe(el);
        });
      });
    
    
      // Paneflow text effect
      const texts = document.querySelectorAll(".paneflow-text");
      let index = 0;
      function showNextText() {
        texts.forEach((text, i) => {
          text.classList.remove("active");
          if (i === index) text.classList.add("active");
        });
        index = (index + 1) % texts.length;
      }
      showNextText();
      setInterval(showNextText, 3000);
    
    
      // Product cards with scroll effect
      const products = [
        {
          name: "Eureka Premium Coffee",
          description: "Rich aroma, bold taste — perfect start to your day.",
          price: "$12.99",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Eureka Organic Honey",
          description: "Pure, golden, and naturally sweet from our farms.",
          price: "$8.99",
          image:
            "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.webp?a=1&b=1&s=612x612&w=0&k=20&c=BLpDU1478KYyFQWs8wcHq44K84A1KtrZ9XgiyFeRqbM=",
        },
        {
          name: "Eureka Herbal Tea",
          description: "Relaxing blend of herbs for a calm evening.",
          price: "$9.99",
          image:
            "https://media.istockphoto.com/id/2050813190/photo/a-cup-of-tea-with-dry-fruit-flowers-and-herbs.webp?a=1&b=1&s=612x612&w=0&k=20&c=MEWppr6G06a5BHTXcAm21yp7LjshuOwXUo8zRHpAyGg=",
        },
      ];
      const productList = document.getElementById("productList");
      products.forEach((p) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product", "scroll-animate");
        productCard.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="price">${p.price}</div>
        </div>
      `;
        productList.appendChild(productCard);
      });
      // Observe product cards for scroll-in effect
      document.addEventListener("DOMContentLoaded", () => {
        const productCards = document.querySelectorAll(
          ".product.scroll-animate"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("scroll-in");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        productCards.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.12 + 0.5}s`;
          observer.observe(el);
        });
      });
    
