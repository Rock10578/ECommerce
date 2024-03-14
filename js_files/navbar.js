const navbarHTML = `
<section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30-day return or refund gurantee.</p>
          </div>
          <div class="sign_in_up">
            <a href="#" style="padding: 0px 10px;">SIGN IN</a>
            <a href="#">SIGN UP</a>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">
          <a href="index.html">
            <img
                src="./images/Rock.png"
                alt="Rock ECommerce Logo"
                class="logo"
                width="80%"
                height="auto"
            />
          </a>
        </div>
        <div class="navbar">
          <ul>
            <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="/about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="/products.html" class="nav-link">Products</a></li>
            <li class="nav-item"><a href="/contact.html" class="nav-link">Contact</a></li>
            <li class="nav-item"><a href="/addToCart.html" class="nav-link add-to-cart-button" id="cartValue"><i class="fa-solid fa-cart-arrow-down">0</i></a></li>
          </ul>
        </div>
      </div>`;

const navbarElem = document.querySelector(".section-navbar");
navbarElem.insertAdjacentHTML("afterbegin", navbarHTML);