// Rang Mahal WebGL 3D Shader Scenes Loader

// Lazy initialization using IntersectionObserver with visibility tracking
function observeScene(sectionId, canvasId, fn) {
  const el = document.getElementById(sectionId);
  const canvas = document.getElementById(canvasId);
  if (!el || !canvas) return;
  
  canvas.dataset.visible = "false";
  let initialized = false;
  
  const obs = new IntersectionObserver(
    (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      const wasVisible = canvas.dataset.visible === "true";
      canvas.dataset.visible = isIntersecting ? "true" : "false";
      
      if (isIntersecting) {
        if (!initialized) {
          initialized = true;
          fn();
        } else if (!wasVisible && typeof canvas.resumeRender === "function") {
          canvas.resumeRender();
        }
      }
    },
    { threshold: 0.01 }
  );
  obs.observe(el);
}

// Global boot function for the homepage containing the WebGL elements
function boot() {
  if (typeof initGSAP === "function") initGSAP();
  if (typeof initTilt === "function") initTilt();
  observeScene("visit", "visit-canvas", initVisit);
  observeScene("categories", "categories-canvas", initCategoriesBackdrop);
}

/* ════════════════════════════════
   0. GSAP ENTRY AND SCROLL ANIMATIONS
   ════════════════════════════════ */
function initGSAP() {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  // Mark body so CSS knows GSAP is active (enables animation start states)
  document.body.classList.add("gsap-ready");

  // Hero Section Entry Animations
  gsap.to("#he", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.1,
    ease: "power3.out",
  });
  gsap.to("#hh", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.out",
  });
  gsap.to("#hb", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
  });
  gsap.to("#ha", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: 0.6,
    ease: "power2.out",
  });
  gsap.to("#ht", { opacity: 1, duration: 0.6, delay: 0.8 });
  gsap.to("#hs", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.35,
    ease: "power3.out",
  });
  gsap.to("#shi", { opacity: 1, duration: 0.5, delay: 1.2 });

  // Nav Scroll Behavior managed passively in main.js to avoid ScrollTrigger conflicts

  // ── Robust Section Reveals via IntersectionObserver ──
  // Elements below the fold get animated in; elements already in view stay visible
  const animateSelectors = [
    { sel: ".why-card", delay: true },
    { sel: ".cat-gender-block", delay: true },
    { sel: ".cgb-card", delay: true },
    { sel: "#product-grid .pc", delay: true },
    { sel: ".team-card", delay: true },
    { sel: ".stat-item", delay: true },
    { sel: ".about-story-copy", delay: false },
    { sel: ".about-story-img", delay: false },
    { sel: ".prod-gallery", delay: false },
    { sel: ".fabric-copy", delay: false },
    { sel: ".fabric-canvas-wrap", delay: false },
    { sel: ".prod-inquiry-box", delay: false },
    { sel: ".visit-3d", delay: false },
    { sel: ".contact-info-panel", delay: false },
  ];

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });

  animateSelectors.forEach(({ sel, delay }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      // Only animate if below fold
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.classList.add("reveal-hidden");
        if (delay) el.style.transitionDelay = (i * 0.08) + "s";
        revealObserver.observe(el);
      }
      // Elements already in view: leave visible
    });
  });

  // Also animate sec-heads
  document.querySelectorAll(".sec-head").forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      el.classList.add("reveal-hidden");
      revealObserver.observe(el);
    }
  });

  // Add ScrollTrigger refresh after a short delay to catch any late renders
  setTimeout(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 500);
}



/* ════════════════════════════════
   2. 3D SHOWROOM PREVIEW
   ════════════════════════════════ */
function initVisit() {
  const canvas = document.getElementById("visit-canvas");
  if (!canvas || !window.THREE) return;
  
  const wrap = canvas.parentElement;
  const W = wrap.offsetWidth || 580;
  const H = wrap.offsetHeight || 500;
  
  const r = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  r.setSize(W, H);
  r.setClearColor(0x2a0e18, 1);
  r.shadowMap.enabled = false;
  
  const s = new THREE.Scene();
  const c = new THREE.PerspectiveCamera(44, W / H, 0.1, 60);
  c.position.set(0, 1.5, 9);
  c.lookAt(0, 0, 0);
  
  s.add(new THREE.AmbientLight(0xfff8e8, 0.65));
  const dl = new THREE.DirectionalLight(0xfff5e0, 0.9);
  dl.position.set(5, 7, 5);
  s.add(dl);
  
  s.add(new THREE.PointLight(0xc4922a, 0.5, 22)).position.set(0, 3, -3);
  
  const gm = new THREE.MeshStandardMaterial({
    color: 0xc4922a,
    metalness: 0.88,
    roughness: 0.15,
    emissive: 0x8b6510,
    emissiveIntensity: 0.1,
  });
  
  const wm = new THREE.MeshStandardMaterial({
    color: 0xf2e8d5,
    metalness: 0.02,
    roughness: 0.82,
  });
  
  const fm = new THREE.MeshStandardMaterial({
    color: 0xe8d8b8,
    metalness: 0.04,
    roughness: 0.72,
  });
  
  // Floor
  const floorMesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), fm);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.y = -1.5;
  s.add(floorMesh);
  
  // Back wall
  const wallMesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 7), wm);
  wallMesh.position.z = -5;
  s.add(wallMesh);
  
  // Columns
  [-3.5, -1.2, 1.2, 3.5].forEach((x) => {
    const col = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.1, 3.5, 10),
      wm
    );
    col.position.set(x, 0.25, 0);
    s.add(col);
    s.add(
      Object.assign(
        new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.07, 0.26), gm),
        { position: new THREE.Vector3(x, 2.0, 0) }
      )
    );
    s.add(
      Object.assign(
        new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.07, 0.22), gm),
        { position: new THREE.Vector3(x, -1.5, 0) }
      )
    );
  });
  
  // Chandelier
  s.add(
    Object.assign(
      new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.016, 8, 32), gm),
      { position: new THREE.Vector3(0, 2.2, -0.5) }
    )
  );
  s.add(
    Object.assign(
      new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.8, 6), gm),
      { position: new THREE.Vector3(0, 2.65, -0.5) }
    )
  );
  
  for (let i = 0; i < 8; i++) {
    const a = i * ((Math.PI * 2) / 8);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), gm);
    b.position.set(Math.cos(a) * 0.65, 2.2, -0.5 + Math.sin(a) * 0.65);
    s.add(b);
  }
  
  s.add(
    Object.assign(new THREE.PointLight(0xfff0c0, 0.5, 9), {
      position: new THREE.Vector3(0, 2, -0.5),
    })
  );
  
  // Gold strips
  s.add(
    Object.assign(
      new THREE.Mesh(new THREE.BoxGeometry(11, 0.04, 0.04), gm),
      { position: new THREE.Vector3(0, -1.5, -5) }
    )
  );
  s.add(
    Object.assign(
      new THREE.Mesh(new THREE.BoxGeometry(11, 0.04, 0.04), gm),
      { position: new THREE.Vector3(0, 2.85, -5) }
    )
  );
  
  // Display platforms
  const pm = new THREE.MeshStandardMaterial({
    color: 0xead9be,
    metalness: 0.08,
    roughness: 0.75,
  });
  
  [-2.5, 0, 2.5].forEach((x, i) => {
    s.add(
      Object.assign(
        new THREE.Mesh(
          new THREE.CylinderGeometry(0.55, 0.6, 0.15, 16),
          pm
        ),
        { position: new THREE.Vector3(x, -1.43, -1) }
      )
    );
    s.add(
      Object.assign(
        new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.015, 8, 32), gm),
        {
          position: new THREE.Vector3(x, -1.43, -1),
          rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        }
      )
    );
    
    // Simple garment silhouette on platform
    const gc = [
      [0x8b1a1a, 0xc4922a],
      [0xeee8dc, 0xc4922a],
      [0x1a4a30, 0xd4a840],
    ][i];
    
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.3, 1.2, 10),
      new THREE.MeshStandardMaterial({
        color: gc[0],
        metalness: 0.2,
        roughness: 0.65,
      })
    );
    body.position.set(x, -0.45, -1);
    s.add(body);
    
    const sk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.65, 1.1, 10, 1, true),
      new THREE.MeshStandardMaterial({
        color: gc[0],
        metalness: 0.15,
        roughness: 0.7,
        side: THREE.DoubleSide,
      })
    );
    sk.position.set(x, -1.08, -1);
    s.add(sk);
    
    const hem = new THREE.Mesh(
      new THREE.TorusGeometry(0.37, 0.015, 8, 24),
      new THREE.MeshStandardMaterial({
        color: gc[1],
        metalness: 0.9,
        roughness: 0.1,
        emissive: gc[1],
        emissiveIntensity: 0.2,
      })
    );
    hem.position.set(x, -1.62, -1);
    hem.rotation.x = Math.PI / 2;
    s.add(hem);
  });
  
  window.addEventListener("resize", () => {
    const nW = wrap.offsetWidth;
    const nH = wrap.offsetHeight;
    r.setSize(nW, nH);
    c.aspect = nW / nH;
    c.updateProjectionMatrix();
  });
  
  let angle = 0;
  let animId = null;
  function loop() {
    if (canvas.dataset.visible !== "true") {
      animId = null;
      return;
    }
    angle += 0.008;
    c.position.x = Math.sin(angle) * 0.7;
    c.position.z = Math.cos(angle) * 1.2 + 9;
    c.lookAt(0, 0.3, 0);
    r.render(s, c);
    animId = requestAnimationFrame(loop);
  }

  canvas.resumeRender = () => {
    if (!animId) loop();
  };

  loop();
}

/* ════════════════════════════════
   3. PRODUCT 3D CARD TILT EFFECT
   ════════════════════════════════ */
function initTilt() {
  document.querySelectorAll(".pc").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      const inner = card.querySelector(".pc-inner");
      if (inner) {
        inner.style.transform = `perspective(900px) rotateY(${cx * 10}deg) rotateX(${-cy * 8}deg) translateZ(10px)`;
      }
    });
    card.addEventListener("mouseleave", () => {
      const inner = card.querySelector(".pc-inner");
      if (inner) {
        inner.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
      }
    });
  });
}
window.initTilt = initTilt;

/* ════════════════════════════════
   4. 3D CATEGORIES BACKGROUND VEIL
   ════════════════════════════════ */
function initCategoriesBackdrop() {
  const canvas = document.getElementById("categories-canvas");
  if (!canvas || !window.THREE) return;

  const wrap = canvas.parentElement;
  const W = wrap.offsetWidth || window.innerWidth;
  const H = wrap.offsetHeight || 600;

  const r = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  r.setSize(W, H);

  const s = new THREE.Scene();
  const c = new THREE.PerspectiveCamera(45, W / H, 0.1, 50);
  c.position.z = 8;

  // Particle System
  const count = 900;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const angles = new Float32Array(count);
  const speeds = new Float32Array(count);
  const radii = new Float32Array(count);

  const colWomen = new THREE.Color(0xc4922a); // Gold
  const colMen = new THREE.Color(0x1c4a33);   // Emerald

  for (let i = 0; i < count; i++) {
    // Helical Swirl configuration
    const a = Math.random() * Math.PI * 2;
    const rad = Math.random() * 2.8 + 1.2;
    const y = (Math.random() - 0.5) * 6;

    positions[i * 3] = Math.cos(a) * rad;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(a) * rad;

    // Set default color
    colors[i * 3] = colWomen.r;
    colors[i * 3 + 1] = colWomen.g;
    colors[i * 3 + 2] = colWomen.b;

    angles[i] = a;
    radii[i] = rad;
    speeds[i] = Math.random() * 0.015 + 0.005;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Make circular soft particle points texture programmatically
  const pCanvas = document.createElement("canvas");
  pCanvas.width = 16;
  pCanvas.height = 16;
  const ctx = pCanvas.getContext("2d");
  const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 16, 16);
  const tex = new THREE.CanvasTexture(pCanvas);

  const mat = new THREE.PointsMaterial({
    size: 0.16,
    map: tex,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(geometry, mat);
  s.add(points);

  // Monitor hovered state on gender blocks
  let activeGender = "women";
  const blockWomen = document.getElementById("cat-block-women");
  const blockMen = document.getElementById("cat-block-men");

  if (blockWomen) {
    blockWomen.addEventListener("mouseenter", () => { activeGender = "women"; });
  }
  if (blockMen) {
    blockMen.addEventListener("mouseenter", () => { activeGender = "men"; });
  }

  // Handle window resizing
  window.addEventListener("resize", () => {
    const nW = wrap.offsetWidth || window.innerWidth;
    const nH = wrap.offsetHeight || 600;
    r.setSize(nW, nH);
    c.aspect = nW / nH;
    c.updateProjectionMatrix();
  });

  let t = 0;
  const targetColWomen = new THREE.Color(0xc4922a);
  const targetColMen = new THREE.Color(0x1c4a33);
  let activeColor = new THREE.Color().copy(targetColWomen);

  let animId = null;
  function animate() {
    if (canvas.dataset.visible !== "true") {
      animId = null;
      return;
    }
    t += 0.01;

    // Slowly rotate points
    points.rotation.y = t * 0.05;
    points.rotation.x = Math.sin(t * 0.03) * 0.05;

    // Smooth color morphing depending on active block hover
    const target = activeGender === "women" ? targetColWomen : targetColMen;
    activeColor.lerp(target, 0.05);

    const pos = geometry.attributes.position.array;
    const cols = geometry.attributes.color.array;

    for (let i = 0; i < count; i++) {
      // Swirl particles in a wave
      angles[i] += speeds[i];
      const yOffset = Math.sin(angles[i] * 2 + t) * 0.15;
      
      pos[i * 3] = Math.cos(angles[i]) * radii[i];
      pos[i * 3 + 1] += Math.sin(t + i) * 0.001 + yOffset * 0.005;
      pos[i * 3 + 2] = Math.sin(angles[i]) * radii[i];

      // Reset height bound
      if (pos[i * 3 + 1] > 3) pos[i * 3 + 1] = -3;
      if (pos[i * 3 + 1] < -3) pos[i * 3 + 1] = 3;

      // Color lerp based on height fraction for gradient styling
      const hRatio = (pos[i * 3 + 1] + 3) / 6; // 0 to 1
      let mixColor = new THREE.Color().copy(activeColor);
      
      if (activeGender === "women") {
        // Gold to Maroon shift
        mixColor.lerp(new THREE.Color(0x6b1e2e), hRatio);
      } else {
        // Emerald to deep ink green
        mixColor.lerp(new THREE.Color(0x112b1c), hRatio);
      }

      cols[i * 3] = mixColor.r;
      cols[i * 3 + 1] = mixColor.g;
      cols[i * 3 + 2] = mixColor.b;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;

    r.render(s, c);
    animId = requestAnimationFrame(animate);
  }

  canvas.resumeRender = () => {
    if (!animId) animate();
  };

  animate();
}
window.initCategoriesBackdrop = initCategoriesBackdrop;
