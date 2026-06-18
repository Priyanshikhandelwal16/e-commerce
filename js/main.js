// Rang Mahal Global UI and Commerce Operations

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initPreloader();
  initMobileNav();
  initSearch();
  initCart();
  highlightActiveLink();
  initInquiryForms();
  initProductGrid();
  initHomepageFilters();
  initAnchorScrolls();
});

/* ════════════════════════════════
   1. CUSTOM INTERACTIVE CURSOR
   ════════════════════════════════ */
function initCursor() {
  const cd = document.getElementById("cdot");
  const cr = document.getElementById("cring");
  if (!cd || !cr) return;

  // Deactivate on mobile / touch screens
  if (window.innerWidth <= 768 || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    cd.style.display = "none";
    cr.style.display = "none";
    return;
  }

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cd.style.left = mx + "px";
    cd.style.top = my + "px";
  }, { passive: true });

  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    cr.style.left = rx + "px";
    cr.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();

  // Attach hover effect classes
  const updateHovers = () => {
    document.querySelectorAll("button, a, .pc, .cat-card, .bg-hero, .bg-item, .prod-thumb, .filter-checkbox").forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";
      el.addEventListener("mouseenter", () => document.body.classList.add("ch"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("ch"));
    });
  };

  updateHovers();
  // Expose as global for dynamically added elements
  window.updateCursorHovers = updateHovers;
}

/* ════════════════════════════════
   2. SITE PRELOADER
   ════════════════════════════════ */
function initPreloader() {
  const pl = document.getElementById("preloader");
  if (!pl) return;

  const fill = document.getElementById("plf");
  const pct = document.getElementById("plp");

  if (window.gsap) {
    gsap.to("#plm", { opacity: 1, duration: 0.2, delay: 0.05 });
    gsap.to("#pll", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      delay: 0.1,
      ease: "power3.out",
    });
    gsap.to("#plt", { opacity: 1, duration: 0.2, delay: 0.15 });
  }

  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 25 + 15;
    if (p > 100) p = 100;
    if (fill) fill.style.width = p + "%";
    if (pct) pct.textContent = Math.floor(p) + "%";

    if (p >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        if (window.gsap) {
          gsap.to(pl, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              pl.style.display = "none";
              // Trigger boot in other scripts if they exist
              if (typeof boot === "function") boot();
            },
          });
        } else {
          pl.style.opacity = 0;
          setTimeout(() => pl.style.display = "none", 300);
        }
      }, 100);
    }
  }, 30);
}

/* ════════════════════════════════
   3. MOBILE NAVIGATION DRAWER
   ════════════════════════════════ */
function initMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("mobile-open");
    const open = links.classList.contains("mobile-open");
    toggle.innerHTML = open ? "✕" : "☰";
  });

  // Close nav on link click
  links.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("mobile-open");
      toggle.innerHTML = "☰";
    });
  });

  // Sticky nav behavior
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    }
  }, { passive: true });
}

/* ════════════════════════════════
   4. CLIENT-SIDE SEARCH ENGINE
   ════════════════════════════════ */
function initSearch() {
  // Create search elements if they don't exist
  if (!document.getElementById("search-overlay")) {
    const overlay = document.createElement("div");
    overlay.id = "search-overlay";
    overlay.innerHTML = `
      <button class="so-close" aria-label="Close search">✕</button>
      <div class="so-wrap">
        <h3 class="so-title">Search our Heritage Archive</h3>
        <div class="so-form">
          <input type="text" class="so-input" placeholder="Type to search e.g. Lehenga, Chikankari..." />
        </div>
        <div class="so-results" id="search-results"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const searchBtn = document.getElementById("search-btn") || document.querySelector(".nav-btn");
  const overlay = document.getElementById("search-overlay");
  const closeBtn = overlay.querySelector(".so-close");
  const input = overlay.querySelector(".so-input");
  const resultsDiv = document.getElementById("search-results");

  if (!searchBtn || !overlay) return;

  // Search trigger
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("on");
    setTimeout(() => input.focus(), 200);
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("on");
    input.value = "";
    resultsDiv.innerHTML = "";
  });

  // Query matching
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsDiv.innerHTML = "";
      return;
    }

    if (typeof PRODUCTS === "undefined") return;

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.craft.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    ).slice(0, 5);

    if (matches.length === 0) {
      resultsDiv.innerHTML = `<p style="color:var(--muted);text-align:center;font-size:0.9rem;">No heirloom pieces match your query</p>`;
      return;
    }

    resultsDiv.innerHTML = matches.map(p => `
      <a href="product.html?id=${p.id}" class="so-result-item">
        <div class="sor-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1610189352649-ebe0c8cb3d39?w=60&h=80&fit=crop'"/>
        </div>
        <div class="sor-info">
          <p class="sor-name">${p.name}</p>
          <span class="sor-cat">${p.categoryLabel}</span>
          <p class="sor-price">\u20B9${p.price.toLocaleString("en-IN")}</p>
        </div>
      </a>
    `).join("");

    if (window.updateCursorHovers) window.updateCursorHovers();
  });
}

/* ════════════════════════════════
   5. LOCALSTORAGE SHOPPING BAG
   ════════════════════════════════ */
let cartData = {};
let cartTotal = 0;

function initCart() {
  // Populate cart from localStorage
  const savedCart = localStorage.getItem("rang_mahal_cart");
  if (savedCart) {
    try {
      cartData = JSON.parse(savedCart);
    } catch(e) {
      cartData = {};
    }
  }

  // Draw setup
  const openBtn = document.getElementById("open-cart-btn");
  const backdrop = document.getElementById("cart-backdrop");
  if (openBtn) openBtn.addEventListener("click", openCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);

  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cart-count");
  const totalSpan = document.getElementById("cdft");
  const container = document.getElementById("cd-items");

  if (!container) return;

  // Calculate totals
  const keys = Object.keys(cartData);
  const count = keys.length;
  cartTotal = 0;

  if (badge) badge.textContent = count;

  if (count === 0) {
    container.innerHTML = `<p style="font-size:0.8rem;color:var(--muted);padding:3rem 0;text-align:center">Your bag is empty</p>`;
    if (totalSpan) totalSpan.textContent = "\u20B90";
    localStorage.setItem("rang_mahal_cart", JSON.stringify(cartData));
    return;
  }

  container.innerHTML = "";
  keys.forEach(id => {
    const item = cartData[id];
    cartTotal += item.price;

    const div = document.createElement("div");
    div.className = "cd-item";
    div.id = "cdi-" + id;
    div.innerHTML = `
      <div class="cdi-img"><img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'"/></div>
      <div class="cdi-info">
        <p class="cdi-name">${item.name}</p>
        <p class="cdi-meta">Bespoke Fit · Silk</p>
        <p class="cdi-price">\u20B9${item.price.toLocaleString("en-IN")}</p>
        <button class="cdi-rm" onclick="removeCartItem('${id}')">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  if (totalSpan) totalSpan.textContent = "\u20B9" + cartTotal.toLocaleString("en-IN");
  localStorage.setItem("rang_mahal_cart", JSON.stringify(cartData));
  
  if (window.updateCursorHovers) window.updateCursorHovers();
}

function addToCart(id, name, price, img) {
  if (cartData[id]) {
    toast("Piece already in bag ✦");
    openCart();
    return;
  }

  cartData[id] = { name, price, img };
  updateCartUI();
  
  // Animate items slide in
  const newItem = document.getElementById("cdi-" + id);
  if (newItem && window.gsap) {
    gsap.from(newItem, { x: 30, opacity: 0, duration: 0.4, ease: "power2.out" });
  }

  openCart();
  toast(name.split(" ").slice(0, 2).join(" ") + " added ✦");
}

function removeCartItem(id) {
  const el = document.getElementById("cdi-" + id);
  if (el) {
    if (window.gsap) {
      gsap.to(el, {
        x: 30,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          delete cartData[id];
          updateCartUI();
        }
      });
    } else {
      delete cartData[id];
      updateCartUI();
    }
  } else {
    delete cartData[id];
    updateCartUI();
  }
}

function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer) drawer.classList.add("on");
  if (backdrop) backdrop.classList.add("on");
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer) drawer.classList.remove("on");
  if (backdrop) backdrop.classList.remove("on");
}

function triggerCheckout() {
  if (Object.keys(cartData).length === 0) {
    toast("Your bag is empty ✦");
    return;
  }
  toast("Redirecting to private fitting scheduler…");
  setTimeout(() => {
    // Redirect to contact page with checkout flag
    window.location.href = "contact.html?type=checkout";
  }, 1200);
}

// Expose commerce functions globally
window.addToCart = addToCart;
window.removeCartItem = removeCartItem;
window.openCart = openCart;
window.closeCart = closeCart;
window.triggerCheckout = triggerCheckout;

/* ════════════════════════════════
   6. GLOBAL TOAST ALERTS
   ════════════════════════════════ */
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("on"), 2400);
}
window.toast = toast;

/* ════════════════════════════════
   7. NAVIGATION LINK HIGHLIGHTING
   ════════════════════════════════ */
function highlightActiveLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  // For anchor-based single page navigation, use IntersectionObserver
  const anchorSections = ["hero", "why-rangmahal", "categories", "collection", "about", "contact"];
  const isHomepage = page === "" || page === "index.html";

  if (isHomepage) {
    const anchorLinkMap = {};
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const id = href.replace("#", "");
        anchorLinkMap[id] = link;
      }
    });

    const setActive = (id) => {
      navLinks.forEach(l => l.classList.remove("active"));
      if (anchorLinkMap[id]) anchorLinkMap[id].classList.add("active");
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

    anchorSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    // Default to home on load
    setActive("hero");
  } else {
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === page || (page === "" && href === "index.html")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

/* ════════════════════════════════
   8. COMPREHENSIVE INQUIRY FLOWS
   ════════════════════════════════ */
function initInquiryForms() {
  // Capture product forms, contact bookings, consultation requests
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.classList.contains("inquiry-form") || form.id === "contact-form" || form.id === "booking-form") {
      e.preventDefault();
      
      // Extract data
      const formData = new FormData(form);
      const data = {};
      for (let [key, val] of formData.entries()) {
        data[key] = val;
      }
      
      // Save order/inquiry to localStorage to simulate actual backend delivery
      const inquiries = JSON.parse(localStorage.getItem("rang_mahal_inquiries") || "[]");
      data.timestamp = new Date().toISOString();
      data.id = "INQ-" + Math.floor(100000 + Math.random() * 900000);
      inquiries.push(data);
      localStorage.setItem("rang_mahal_inquiries", JSON.stringify(inquiries));

      // If checkout order
      if (form.id === "checkout-booking-form") {
        localStorage.removeItem("rang_mahal_cart"); // clear bag
      }

      toast("Transmission Secure · Authenticated ✦");
      
      // Redirect to Thank you page
      setTimeout(() => {
        window.location.href = `thank-you.html?id=${data.id}&name=${encodeURIComponent(data.name || 'Valued Client')}`;
      }, 1000);
    }
  });
}

/* ════════════════════════════════
   9. HOMEPAGE DYNAMIC FILTERS
   ════════════════════════════════ */
function initHomepageFilters() {
  const tabs = document.querySelectorAll(".filter-tab-btn");
  const grid = document.getElementById("product-grid");
  if (!tabs.length || !grid) return;

  const filterItems = (filterVal) => {
    tabs.forEach(btn => {
      if (btn.dataset.filter === filterVal) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const products = grid.querySelectorAll(".pc");
    products.forEach(p => {
      const innerLink = p.querySelector("a");
      if (!innerLink) return;
      const href = innerLink.getAttribute("href");
      const id = href.split("=").pop();
      if (typeof PRODUCTS === "undefined") return;
      const dbProd = PRODUCTS.find(item => item.id === id);
      if (!dbProd) return;

      let show = false;
      if (filterVal === "all") {
        show = true;
      } else if (filterVal === "women") {
        show = ["lehengas", "sarees", "anarkalis"].includes(dbProd.category);
      } else if (filterVal === "men") {
        show = ["sherwanis", "kurtas"].includes(dbProd.category);
      } else {
        show = dbProd.category === filterVal;
      }

      if (window.gsap) {
        if (show) {
          p.style.display = "block";
          gsap.to(p, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        } else {
          gsap.to(p, {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.in",
            overwrite: "auto",
            onComplete: () => {
              p.style.display = "none";
            }
          });
        }
      } else {
        p.style.display = show ? "block" : "none";
        p.style.opacity = show ? "1" : "0";
      }
    });
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const f = tab.dataset.filter;
      filterItems(f);
    });
  });

  // Split Category Cards Event Listeners
  document.querySelectorAll(".cgb-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      filterItems(cat);
      const target = document.getElementById("collection");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Footer Collections filter links
  document.querySelectorAll(".footer-filter-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const filterVal = link.dataset.filter;
      if (filterVal) {
        filterItems(filterVal);
      }
    });
  });

  // Query parameters mapping on load
  const params = new URLSearchParams(window.location.search);
  const filterParam = params.get("filter");
  if (filterParam) {
    filterItems(filterParam);
    setTimeout(() => {
      const target = document.getElementById("collection");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 600);
  }
}

/* ════════════════════════════════
   10. SMOOTH ANCHOR SCROLLING
   ════════════════════════════════ */
function initAnchorScrolls() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const links = document.querySelector(".nav-links");
        const toggle = document.querySelector(".mobile-nav-toggle");
        if (links && links.classList.contains("mobile-open")) {
          links.classList.remove("mobile-open");
          if (toggle) toggle.innerHTML = "☰";
        }

        target.scrollIntoView({
          behavior: "smooth"
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, href);
      }
    });
  });

  // Smooth scroll to hash on load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 700);
    }
  }
}

/* ════════════════════════════════
   11. DYNAMIC PRODUCT GRID IN index.html
   ════════════════════════════════ */
function initProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid || typeof PRODUCTS === "undefined") return;

  grid.innerHTML = PRODUCTS.map(p => {
    // Badge mapping
    let badgeHtml = "";
    if (p.tag) {
      let badgeClass = "";
      let tagLower = p.tag.toLowerCase();
      if (tagLower.includes("new")) {
        badgeClass = "new";
      } else if (tagLower.includes("bestseller") || tagLower.includes("exclusive") || tagLower.includes("trending") || tagLower.includes("royal") || tagLower.includes("classic") || tagLower.includes("heritage")) {
        badgeClass = "bestseller";
      } else if (tagLower.includes("sale")) {
        badgeClass = "sale";
      }
      badgeHtml = `<span class="pc-badge ${badgeClass}">${p.tag}</span>`;
    }

    // Price mapping
    const priceFormatted = "\u20B9" + p.price.toLocaleString("en-IN");
    const priceHtml = p.oldPrice 
      ? `<span class="pc-price"><del>\u20B9${p.oldPrice.toLocaleString("en-IN")}</del>${priceFormatted}</span>`
      : `<span class="pc-price">${priceFormatted}</span>`;

    return `
      <div class="pc">
        <div class="pc-inner">
          <div class="pc-img">
            <a href="product.html?id=${p.id}">
              <img src="${p.image}" alt="${p.name}" loading="lazy" />
            </a>
            ${badgeHtml}
            <button class="pc-wishlist" aria-label="Wishlist">♡</button>
            <div class="pc-quick" onclick="addToCart('${p.id}', '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')">Add to Bag →</div>
          </div>
          <div class="pc-info">
            <p class="pc-cat">${p.categoryLabel}</p>
            <h3 class="pc-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <p class="pc-craft">${p.craft}</p>
            <div class="pc-foot">
              ${priceHtml}
              <button class="pc-cart" onclick="addToCart('${p.id}', '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.initTilt) window.initTilt();
  if (window.updateCursorHovers) window.updateCursorHovers();
}
