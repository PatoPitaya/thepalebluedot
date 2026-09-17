
(function(){
  const continents = [
    {
      key:'africa', name:'Landscape', accent:'#E8935B', bgTone:'#1a140f', eyebrow:'Landscape',
      hero:'images/Landscape/PJO05334.jpg',
      cards:[
        {img:'images/Landscape/PJO05334.jpg',    place:'Mountain light',      stars:'★★★★★ 4.9'},
        {img:'images/Landscape/PJO05300.jpg',    place:'Open landscape',      stars:'★★★★☆ 4.7'},
        {img:'images/Landscape/faro-fb33fbb3.jpg', place:'Lighthouse',        stars:'★★★★☆ 4.6'}
      ],
      all:[
        'images/Landscape/PJO05300.jpg',
        'images/Landscape/PJO05322.jpg',
        'images/Landscape/JIMENEZ_Patricio_Landschappen_Foto8_mistsunrise.jpg',
        'images/Landscape/DSC03490-HDR.jpg',
        'images/Landscape/faro-fb33fbb3.jpg',
        'images/Landscape/PJO05321.jpg',
        'images/Landscape/PJO05688.jpg',
        'images/Landscape/DSC03310-HDR.jpg',
        'images/Landscape/Messenger_creation_3C038F6F-0FE4-49BE-BA79-BD0F06198E6E.webp',
        'images/Landscape/PJO06498.jpg',
        'images/Landscape/PJO06132.jpg',
        'images/Landscape/PJO05409.jpg',
        'images/Landscape/PJO05602.jpg',
        'images/Landscape/PJO05056.jpg',
        'images/Landscape/PJO04652.jpg',
        'images/Landscape/PJO04719.jpg',
        'images/Landscape/DSC02503.jpg',
        'images/Landscape/PJO05505.jpg',
        'images/Landscape/PJO04545.jpg',
        'images/Landscape/PJO05251.jpg',
        'images/Landscape/PJO06643.jpg',
        'images/Landscape/DSC06227.jpg',
        'images/Landscape/PJO05301.jpg',
        'images/Landscape/PJO05378.jpg',
        'images/Landscape/PJO05376.jpg',
        'images/Landscape/PJO052632.jpg',
        'images/Landscape/PJO05282.jpg',
        'images/Landscape/PJO05334.jpg',
        'images/Landscape/PJO05810.jpg',
        'images/Landscape/PJO04734.jpg',
        'images/Landscape/PJO05097.jpg',
        'images/Landscape/PJO05066 (1).jpg',
        'images/Landscape/PJO062162.jpg',
        'images/Landscape/PJO05132.jpg',
        'images/Landscape/PJO04671.jpg',
        'images/Landscape/PJO05319.jpg',
        'images/Landscape/PJO05173.jpg',
        'images/Landscape/PJO05180.jpg',
        'images/Landscape/Villarica.jpg'
      ]
    },
    {
      key:'asia', name:'Nature', accent:'#4FA98A', bgTone:'#142522', eyebrow:'Nature',
      hero:'images/Nature/PJO00934.jpg',
      cards:[
        {img:'images/Nature/PJO00934.jpg',       place:'Wildlife light',      stars:'★★★★★ 4.9'},
        {img:'images/Nature/PJO09920.jpg',        place:'Golden meadow',       stars:'★★★★☆ 4.7'},
        {img:'images/Nature/PJO08967.jpg',        place:'Macro life',          stars:'★★★★★ 4.8'}
      ],
      all:[
        'images/Nature/DSC05597.jpg',
        'images/Nature/PJO06305.jpg',
        'images/Nature/PJO02719.jpg',
        'images/Nature/PJO09863.jpg',
        'images/Nature/DSC05535.jpg',
        'images/Nature/PJO05101.jpg',
        'images/Nature/PJO00825.jpg',
        'images/Nature/DSC05627.jpg',
        'images/Nature/DSC03520.jpg',
        'images/Nature/PJO05575-3.jpg',
        'images/Nature/caracol.jpg',
        'images/Nature/PJO03852.jpg',
        'images/Nature/DSC07034.jpg',
        'images/Nature/JIMENEZ_Patricio_Anderedieren_Foto7_Singinginspring.jpg',
        'images/Nature/PJO03799.jpg',
        'images/Nature/DSC05612.jpg',
        'images/Nature/2021-06-1922-15-47(B,Radius8,Smoothing4).jpg',
        'images/Nature/DSC08682.jpg',
        'images/Nature/DSC00345.jpg',
        'images/Nature/DSC06112-2.jpg',
        'images/Nature/definitivosaltamonteenano.jpg',
        'images/Nature/PJO09920.jpg',
        'images/Nature/JIMENEZ_Patricio_Anderedieren_Foto6_Springand.jpg',
        'images/Nature/3.jpg',
        'images/Nature/PJO01954.jpg',
        'images/Nature/PJO06296.jpg',
        'images/Nature/DSC03711.jpg',
        'images/Nature/PJO00934.jpg',
        'images/Nature/PJO00370.jpg',
        'images/Nature/IMAG0019.jpg',
        'images/Nature/JIMENEZ_Patricio_Anderedieren_Foto2_Schorsmarpissa.jpg',
        'images/Nature/PJO05149.jpg',
        'images/Nature/Jimenez_Patricio_DSC_03112.jpg',
        'images/Nature/PJO09283.jpg',
        'images/Nature/DSC01761.jpg',
        'images/Nature/PJO08967.jpg',
        'images/Nature/PJO02818.jpg',
        'images/Nature/DSC08590.jpg',
        'images/Nature/DSC01770.jpg',
        'images/Nature/DSC00088.jpg',
        'images/Nature/DSC07853-17969db0.jpg',
        'images/Nature/DSC03039.jpg',
        'images/Nature/JIMENEZ_Patricio_flora_Foto1_There_is_life_inside_the_flowers-7a16a85c.jpg',
        'images/Nature/DSC01788.jpg',
        'images/Nature/DSC04789.jpg',
        'images/Nature/DSC06045-1b482605.jpg',
        'images/Nature/DSC06998.jpg',
        'images/Nature/JIMENEZ_Patricio_Vogels_Foto3_Ooievaar.jpg',
        'images/Nature/PJO04035.jpg',
        'images/Nature/PJO01504-2.jpg',
        'images/Nature/DSC09699.jpg',
        'images/Nature/DSC03123.jpg',
        'images/Nature/PJO05534.jpg',
        'images/Nature/PJO05843.jpg',
        'images/Nature/PJO01455.jpg',
        'images/Nature/DSC06286-2-2.jpg',
        'images/Nature/PJO069652.jpg',
        'images/Nature/JIMENEZ_Patricio_Vogels_Foto2_Kievitandsunset.jpg',
        'images/Nature/PJO05965.jpg',
        'images/Nature/DSC06215-ca4b56a4-2500.jpg',
        'images/Nature/PJO08386-2.jpg',
        'images/Nature/inbound4878903916891533968.jpg'
      ]
    },
    {
      key:'australia', name:'Sport', accent:'#D9683B', bgTone:'#23140e', eyebrow:'Sport',
      hero:'images/Sport/DSC07377_-_2-f8a343cf.jpg',
      cards:[
        {img:'images/Sport/DSC07377_-_2-f8a343cf.jpg', place:'Action',            stars:'★★★★★ 4.9'},
        {img:'images/Sport/PJO01917.jpg',            place:'Motion',              stars:'★★★★☆ 4.7'},
        {img:'images/Sport/PJO04973-f6a2848a.jpg',   place:'Intensity',           stars:'★★★★☆ 4.7'}
      ],
      all:[
        'images/Sport/DSC07386-f7ad26b2.jpg',
        'images/Sport/DSC07377_-_2-f8a343cf.jpg',
        'images/Sport/PJO04973-f6a2848a.jpg',
        'images/Sport/PJO01917.jpg'
      ]
    },
    {
      key:'street', name:'Street', accent:'#6C7A89', bgTone:'#161a20', eyebrow:'Street',
      hero:'images/Street/PJO02812.jpg',
      cards:[
        {img:'images/Street/PJO02812.jpg',           place:'Street frame',        stars:'★★★★★ 4.9'},
        {img:'images/Street/PJO02840.jpg',           place:'Urban life',          stars:'★★★★☆ 4.7'},
        {img:'images/Street/PJO05819.jpg',           place:'City shadows',        stars:'★★★★★ 4.8'}
      ],
      all:[
        'images/Street/PJO02840.jpg',
        'images/Street/PJO04575-d7bdd0bc.jpg',
        'images/Street/PJO02812.jpg',
        'images/Street/PJO04622-60cc4ccb.jpg',
        'images/Street/PJO04590-176b30ca.jpg',
        'images/Street/DSC01032-250a524f.jpg',
        'images/Street/PJO05819.jpg',
        'images/Street/PJO06140-2.jpg'
      ]
    }
  ];

  // Dynamic Fisher-Yates shuffle to randomize images on each visit
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  continents.forEach(c => {
    shuffleArray(c.all);
  });

  let currentView = 'home'; // 'home', 'gallery', 'contact'
  let idx = 0;
  let timer = null;
  let cardSwapTimer = null;
  let wheelLock = false;
  let renderToken = 0;
  let touchStartX = null;
  let touchStartY = null;
  let touchStartTime = 0;
  let inExploreMode = false;
  let activePhotoIndex = 0;
  let exploreCardsIntroTimer = null;
  let currentBgSlot = 'A';
  let currentBgUrl = '';
  const TRANSITION_MS = 4800;
  const CARD_SWAP_DELAY = 60;
  const GALLERY_DRIFT_MS = 28000;
  let galleryDriftStartedAt = 0;
  const AUTOPLAY_MS = 12000;

  const root = document.documentElement;
  const stage = document.getElementById('stage');
  const startBtn = document.getElementById('startBtn');
  const heroBgVideo = document.getElementById('heroBgVideo');
  const bgLayerA = document.getElementById('bgLayerA');
  const bgLayerB = document.getElementById('bgLayerB');
  const panels = document.querySelectorAll('.panel');
  const panelStack = document.getElementById('panelStack');
  const spineItems = document.querySelectorAll('.spine-item');
  const cardA = document.getElementById('cardA');
  const cardB = document.getElementById('cardB');
  const cardC = document.getElementById('cardC');
  const cardzone = document.getElementById('cardzone');
  const pageNow = document.getElementById('pageNow');
  const trackFill = document.getElementById('trackFill');
  const mobileRail = document.getElementById('mobileRail');
  const railNumTop = document.getElementById('railNumTop');
  const railNumBtm = document.getElementById('railNumBtm');
  const railFill = document.getElementById('railFill');
  const railPip = document.getElementById('railPip');
  const mobileEdgePrev = document.getElementById('mobileEdgePrev');
  const mobileEdgeNext = document.getElementById('mobileEdgeNext');
  const navItems = document.querySelectorAll('.nav-item');

  // Explore Elements (Dual Buffer)
  const exploreCardsTrack = document.getElementById('exploreCardsTrack');
  const exploreCatBadge = document.getElementById('exploreCatBadge');
  const explorePhotoCounter = document.getElementById('explorePhotoCounter');
  const exploreClosePill = document.getElementById('exploreClosePill');
  const exploreViewerContainer = document.getElementById('exploreViewerContainer');
  const exploreViewerImgA = document.getElementById('exploreViewerImgA');
  const exploreViewerImgB = document.getElementById('exploreViewerImgB');
  let currentViewerSlot = 'A';
  const imgMemoryCache = new Map();

  function preloadImage(url) {
    if (!url || imgMemoryCache.has(url)) return;
    const img = new Image();
    img.src = url;
    imgMemoryCache.set(url, img);
  }

  function imageVariantUrl(imageUrl, variant) {
    if (!imageUrl) return '';
    let clean = imageUrl
      .replace(/^\/?images\//, '')
      .replace(/^(?:optimized\/|thumbs\/|display\/)/, '')
      .replace(/\.jpe?g$/i, '.webp');

    const parts = clean.split('/');
    if (parts.length >= 3 && (parts[1] === 'display' || parts[1] === 'thumbs' || parts[1] === 'optimized')) {
      clean = parts[0] + '/' + parts.slice(2).join('/');
    }

    const cleanParts = clean.split('/');
    let targetPath = '';
    if (cleanParts.length >= 2) {
      const section = cleanParts[0];
      const filename = cleanParts.slice(1).join('/');
      targetPath = `images/${section}/${variant}/${filename}`;
    } else {
      targetPath = `images/${variant}/${clean}`;
    }
    return encodeURI(targetPath).replace(/\(/g, '%28').replace(/\)/g, '%29');
  }

  const displayImageUrl = (imageUrl) => imageVariantUrl(imageUrl, 'display');
  const optimizedImageUrl = displayImageUrl; // Backward-compatible alias
  const thumbnailImageUrl = (imageUrl) => imageVariantUrl(imageUrl, 'thumbs');

  function preloadGalleryAssets() {
    const assets = continents.flatMap(category => [
      displayImageUrl(category.hero),
      ...category.cards.map(card => thumbnailImageUrl(card.img))
    ]);
    assets.forEach((src) => preloadImage(src));
  }

  function updateExploreViewerPhoto(imgUrl) {
    const fullUrl = displayImageUrl(imgUrl);
    if (!fullUrl) return;

    const nextSlot = currentViewerSlot === 'A' ? 'B' : 'A';
    const incomingImg = nextSlot === 'A' ? exploreViewerImgA : exploreViewerImgB;
    const outgoingImg = currentViewerSlot === 'A' ? exploreViewerImgA : exploreViewerImgB;

    if (!incomingImg || !outgoingImg) return;

    const applyImage = (loadedImg) => {
      incomingImg.src = loadedImg.src;
      const isLandscape = (loadedImg.naturalWidth || 1) >= (loadedImg.naturalHeight || 1);
      incomingImg.classList.toggle('is-landscape', isLandscape);
      incomingImg.classList.toggle('is-portrait', !isLandscape);

      incomingImg.classList.remove('prev');
      incomingImg.classList.add('active');

      outgoingImg.classList.remove('active');
      outgoingImg.classList.add('prev');

      currentViewerSlot = nextSlot;
    };

    if (imgMemoryCache.has(fullUrl) && imgMemoryCache.get(fullUrl).complete && imgMemoryCache.get(fullUrl).naturalWidth > 0) {
      applyImage(imgMemoryCache.get(fullUrl));
    } else {
      const tempImg = new Image();
      tempImg.onload = function() {
        imgMemoryCache.set(fullUrl, this);
        applyImage(this);
      };
      tempImg.onerror = function() {
        const fallback = fullUrl.replace('/display/', '/thumbs/');
        incomingImg.src = fallback;
        incomingImg.classList.remove('prev');
        incomingImg.classList.add('active');
        outgoingImg.classList.remove('active');
        outgoingImg.classList.add('prev');
        currentViewerSlot = nextSlot;
      };
      tempImg.src = fullUrl;
    }

    // Preload next and previous 2 images for instantaneous 0ms transitions!
    const currentCat = continents[idx];
    if (currentCat && currentCat.all) {
      const total = currentCat.all.length;
      for (let offset = -2; offset <= 2; offset++) {
        if (offset === 0) continue;
        const targetIdx = (activePhotoIndex + offset + total) % total;
        preloadImage(displayImageUrl(currentCat.all[targetIdx]));
      }
    }
  }

  /* =========================================================
     DUAL-BUFFER CINEMATIC PHOTO CROSSFADE
     ========================================================= */
  function setCinematicBackground(imageUrl, categoryKey) {
    imageUrl = displayImageUrl(imageUrl);
    if (!imageUrl || imageUrl === currentBgUrl) return;
    currentBgUrl = imageUrl;

    const nextSlot = currentBgSlot === 'A' ? 'B' : 'A';
    const incomingLayer = nextSlot === 'A' ? bgLayerA : bgLayerB;
    const outgoingLayer = currentBgSlot === 'A' ? bgLayerA : bgLayerB;
    const driftDelay = `-${Math.max(0, performance.now() - galleryDriftStartedAt) % GALLERY_DRIFT_MS}ms`;

    incomingLayer.style.setProperty('--gallery-drift-delay', driftDelay);
    outgoingLayer.style.setProperty('--gallery-drift-delay', driftDelay);

    let catKey = categoryKey;
    if (!catKey) {
      if (/Nature/i.test(imageUrl) || imageUrl.includes('PJO00934')) catKey = 'asia';
      else if (/Sport/i.test(imageUrl) || imageUrl.includes('DSC07377')) catKey = 'australia';
      else if (/Landscape/i.test(imageUrl)) catKey = 'africa';
      else if (/Street/i.test(imageUrl)) catKey = 'street';
      else if (/contact/i.test(imageUrl)) catKey = 'contact';
      else if (typeof idx !== 'undefined' && continents[idx]) catKey = continents[idx].key;
    }
    if (catKey) {
      incomingLayer.dataset.bg = catKey;
    } else {
      delete incomingLayer.dataset.bg;
    }

    incomingLayer.style.backgroundImage = `url('${imageUrl}')`;
    incomingLayer.classList.remove('prev');
    incomingLayer.classList.add('active');

    outgoingLayer.classList.remove('active');
    outgoingLayer.classList.add('prev');

    currentBgSlot = nextSlot;
  }

  /* =========================================================
     SEAMLESS VIEW SWITCHER (HOME, GALLERY, CONTACT)
     ========================================================= */
  function switchView(targetView, opts) {
    opts = opts || {};
    if (targetView === currentView && !opts.force) return;

    const previousView = currentView;

    if (inExploreMode && targetView !== 'gallery') {
      exitExploreMode();
    }

    currentView = targetView;

    // Update navigation active item
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.nav === targetView);
    });

    // Update body classes with smooth morphing
    document.body.className = `view-${targetView}`;

    if (targetView === 'home') {
      isStartingGallery = false;
      stage.classList.remove('is-starting');
      stage.classList.remove('from-home');
      root.style.setProperty('--accent', '#E8935B');
      root.style.setProperty('--bg-tone', '#0e0c0b');
      if (timer) clearInterval(timer);
      try {
        if (heroBgVideo) {
          heroBgVideo.currentTime = 0;
          heroBgVideo.pause();
        }
      } catch(e){}
    }
    else if (targetView === 'gallery') {
      if (previousView !== 'gallery') {
        galleryDriftStartedAt = performance.now();
        bgLayerA.style.setProperty('--gallery-drift-delay', '0ms');
        bgLayerB.style.setProperty('--gallery-drift-delay', '0ms');
      }
      render(idx, { keepPhoto: opts.keepPhoto });
      restartAutoplay();
    }
    else if (targetView === 'contact') {
      if (timer) clearInterval(timer);
      root.style.setProperty('--accent', '#E8935B');
      root.style.setProperty('--bg-tone', '#14110f');
      setCinematicBackground('images/contact/PJO05448.jpg');
      const contactSec = document.getElementById('contactSection');
      if (contactSec) contactSec.scrollTop = 0;
    }

    if (!opts.skipHistory) {
      const hash = targetView === 'home' ? '' : `#${targetView}`;
      if (window.location.hash !== hash) {
        history.pushState(null, '', hash || window.location.pathname);
      }
    }
  }

  // Handle Top Nav Clicks
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(el.dataset.nav);
    });
  });

  // Handle Browser Back/Forward buttons smoothly
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'gallery' || hash === 'contact') {
      switchView(hash, { skipHistory: true });
    } else {
      switchView('home', { skipHistory: true });
    }
  });


  /* =========================================================
     GALLERY RENDERING & CATEGORIES
     ========================================================= */
  function render(newIdx, opts){
    opts = opts || {};
    renderToken += 1;
    const thisRender = renderToken;

    idx = (newIdx + continents.length) % continents.length;
    const c = continents[idx];

    root.style.setProperty('--accent', c.accent);
    root.style.setProperty('--bg-tone', c.bgTone);
    stage.dataset.category = c.key;

    if (!opts.keepPhoto && currentView === 'gallery') {
      setCinematicBackground(c.hero, c.key);
    }

    panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === c.key));
    spineItems.forEach(s => s.classList.toggle('active', s.dataset.target === c.key));
    panelStack.style.transform = 'none';

    if(cardSwapTimer){
      window.clearTimeout(cardSwapTimer);
      cardSwapTimer = null;
    }

    if(!opts.skipCards && !inExploreMode && currentView === 'gallery'){
      cardzone.classList.remove('show');
      cardSwapTimer = window.setTimeout(() => {
        if(thisRender !== renderToken) return;
        cardA.style.backgroundImage = `url('${thumbnailImageUrl(c.cards[0].img)}')`;
        cardA.querySelector('.place').textContent = c.cards[0].place;
        cardA.querySelector('.stars').textContent = c.cards[0].stars;
        cardB.style.backgroundImage = `url('${thumbnailImageUrl(c.cards[1].img)}')`;
        cardB.querySelector('.place').textContent = c.cards[1].place;
        cardB.querySelector('.stars').textContent = c.cards[1].stars;
        cardC.style.backgroundImage = `url('${thumbnailImageUrl(c.cards[2] ? c.cards[2].img : c.cards[0].img)}')`;
        cardC.querySelector('.place').textContent = c.cards[2] ? c.cards[2].place : c.cards[0].place;
        cardC.querySelector('.stars').textContent = c.cards[2] ? c.cards[2].stars : c.cards[0].stars;
        cardzone.classList.add('show');
      }, CARD_SWAP_DELAY);
    }

    pageNow.textContent = String(idx + 1).padStart(2, '0');
    const fillPercent = ((idx + 1) / continents.length * 100) + '%';
    trackFill.style.width = fillPercent;
    trackFill.style.height = fillPercent;

    if (railNumTop && railNumBtm && railFill && railPip) {
      railNumTop.classList.toggle('active', idx === 0);
      railNumBtm.classList.toggle('active', idx === continents.length - 1);
      const pct = (idx / (continents.length - 1));
      railPip.style.top = (pct * 100) + '%';
      const fillHeight = 15 + (pct * 85);
      railFill.style.height = fillHeight + '%';
    }
  }

  function go(newIdx, opts){
    opts = opts || {};
    if(inExploreMode || currentView !== 'gallery') return;
    if(wheelLock && !opts.force) return;

    wheelLock = true;
    render(newIdx);
    restartAutoplay();
    window.setTimeout(() => { wheelLock = false; }, 380);
  }

  function restartAutoplay(){
    if(currentView !== 'gallery' || inExploreMode) return;
    if(timer) clearInterval(timer);
    timer = window.setInterval(() => go(idx + 1), AUTOPLAY_MS);
  }


  /* =========================================================
     EXPLORATION MODE & VIEWER CONTROLS
     ========================================================= */
  let viewerZoomScale = 1;
  let viewerPanX = 0;
  let viewerPanY = 0;
  let initialPinchDistance = null;
  let initialPinchScale = 1;
  let isPinching = false;
  let panStartX = 0;
  let panStartY = 0;
  let initialPanX = 0;
  let initialPanY = 0;
  let isPanning = false;
  let lastTapTime = 0;

  function applyViewerTransform(withTransition) {
    const currentImg = currentViewerSlot === 'A' ? exploreViewerImgA : exploreViewerImgB;
    if (!currentImg) return;
    if (withTransition) {
      currentImg.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out';
    } else {
      currentImg.style.transition = 'none';
    }
    if (viewerZoomScale <= 1.02) {
      viewerZoomScale = 1;
      viewerPanX = 0;
      viewerPanY = 0;
      currentImg.style.transform = 'scale(1)';
      stage.classList.remove('is-zoomed');
    } else {
      currentImg.style.transform = `translate(${viewerPanX}px, ${viewerPanY}px) scale(${viewerZoomScale})`;
      stage.classList.add('is-zoomed');
    }
  }

  function resetViewerZoom(animated) {
    viewerZoomScale = 1;
    viewerPanX = 0;
    viewerPanY = 0;
    isPinching = false;
    isPanning = false;
    applyViewerTransform(animated);
  }

  function triggerExploreIntroTimer() {
    if (!inExploreMode) return;
    if (exploreCardsIntroTimer) clearTimeout(exploreCardsIntroTimer);
    stage.classList.add('explore-cards-intro');
    exploreCardsIntroTimer = window.setTimeout(() => {
      stage.classList.remove('explore-cards-intro');
      exploreCardsIntroTimer = null;
    }, 2800);
  }

  function enterExploreMode(categoryKey, targetPhotoUrl) {
    if (categoryKey) {
      const catIndex = continents.findIndex(c => c.key === categoryKey);
      if (catIndex !== -1 && catIndex !== idx) {
        render(catIndex, { skipCards: true });
      }
    }

    inExploreMode = true;
    resetViewerZoom(false);
    if (timer) clearInterval(timer);

    const currentCat = continents[idx];
    exploreCatBadge.textContent = currentCat.name;

    exploreCardsTrack.innerHTML = '';
    activePhotoIndex = 0;

    const target = targetPhotoUrl || currentCat.hero;
    if (target) {
      const targetIdx = currentCat.all.indexOf(target);
      if (targetIdx !== -1) {
        activePhotoIndex = targetIdx;
      }
    }

    setCinematicBackground(currentCat.all[activePhotoIndex]);
    updateExploreViewerPhoto(currentCat.all[activePhotoIndex]);

    currentCat.all.forEach((imgUrl, i) => {
      const card = document.createElement('div');
      card.className = `explore-card ${i === activePhotoIndex ? 'active' : ''}`;
      card.style.backgroundImage = `url('${thumbnailImageUrl(imgUrl)}')`;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Photo ${i + 1}`);

      card.addEventListener('click', () => {
        selectExplorePhoto(i);
      });

      exploreCardsTrack.appendChild(card);
    });

    updateExploreCount();
    triggerExploreIntroTimer();

    setTimeout(() => {
      scrollActiveCardIntoView();
    }, 150);
  }

  function selectExplorePhoto(photoIdx) {
    const currentCat = continents[idx];
    if (photoIdx < 0 || photoIdx >= currentCat.all.length) return;

    activePhotoIndex = photoIdx;
    resetViewerZoom(false);
    const selectedImg = currentCat.all[photoIdx];

    setCinematicBackground(selectedImg);
    updateExploreViewerPhoto(selectedImg);

    exploreCardsTrack.querySelectorAll('.explore-card').forEach((c, i) => {
      c.classList.toggle('active', i === activePhotoIndex);
    });

    updateExploreCount();
    triggerExploreIntroTimer();
    scrollActiveCardIntoView();
  }

  function scrollActiveCardIntoView() {
    const activeCard = exploreCardsTrack.querySelector('.explore-card.active');
    if (activeCard && exploreCardsTrack.scrollWidth > exploreCardsTrack.clientWidth) {
      const trackCenter = exploreCardsTrack.clientWidth / 2;
      const cardLeft = activeCard.offsetLeft + (activeCard.clientWidth / 2);
      exploreCardsTrack.scrollTo({
        left: cardLeft - trackCenter,
        behavior: 'smooth'
      });
    }
  }

  function updateExploreCount() {
    const currentCat = continents[idx];
    const cur = String(activePhotoIndex + 1).padStart(2, '0');
    const tot = String(currentCat.all.length).padStart(2, '0');
    explorePhotoCounter.textContent = `${cur} / ${tot}`;
  }

  function exitExploreMode() {
    inExploreMode = false;
    resetViewerZoom(false);
    if (exploreCardsIntroTimer) clearTimeout(exploreCardsIntroTimer);
    exploreCardsIntroTimer = null;
    stage.classList.remove('explore-mode', 'explore-cards-intro', 'is-zoomed');
    if (exploreViewerImgA) {
      exploreViewerImgA.classList.remove('active', 'prev');
      exploreViewerImgA.removeAttribute('src');
    }
    if (exploreViewerImgB) {
      exploreViewerImgB.classList.remove('active', 'prev');
      exploreViewerImgB.removeAttribute('src');
    }
    render(idx);
    restartAutoplay();
  }


  document.querySelectorAll('.explore').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      enterExploreMode(btn.dataset.explore);
    });
  });

  [cardA, cardB, cardC].forEach((card, cardIndex) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentCat = continents[idx];
      const targetCard = currentCat.cards[cardIndex];
      enterExploreMode(currentCat.key, targetCard ? targetCard.img : null);
    });
  });

  exploreClosePill.addEventListener('click', (e) => {
    e.stopPropagation();
    exitExploreMode();
  });

  const explorePrevBtn = document.getElementById('explorePrevBtn');
  const exploreNextBtn = document.getElementById('exploreNextBtn');

  function handleExplorePrev(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const currentCat = continents[idx];
    if (currentCat && currentCat.all && currentCat.all.length > 0) {
      selectExplorePhoto((activePhotoIndex - 1 + currentCat.all.length) % currentCat.all.length);
    }
  }

  function handleExploreNext(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const currentCat = continents[idx];
    if (currentCat && currentCat.all && currentCat.all.length > 0) {
      selectExplorePhoto((activePhotoIndex + 1) % currentCat.all.length);
    }
  }

  if (explorePrevBtn) {
    explorePrevBtn.addEventListener('click', handleExplorePrev);
    explorePrevBtn.addEventListener('touchend', handleExplorePrev);
  }

  if (exploreNextBtn) {
    exploreNextBtn.addEventListener('click', handleExploreNext);
    exploreNextBtn.addEventListener('touchend', handleExploreNext);
  }

  exploreViewerContainer.addEventListener('click', (e) => {
    if (e.target.closest('.explore-nav-arrow') || e.target.closest('.explore-top-bar') || e.target.closest('.explore-cards-wrap')) return;
    if (viewerZoomScale > 1.05) return;
    triggerExploreIntroTimer();

    const rect = exploreViewerContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const currentCat = continents[idx];
    if (!currentCat || !currentCat.all) return;

    if (clickX > width * 0.72) {
      selectExplorePhoto((activePhotoIndex + 1) % currentCat.all.length);
    } else if (clickX < width * 0.28) {
      selectExplorePhoto((activePhotoIndex - 1 + currentCat.all.length) % currentCat.all.length);
    }
  });

  // Touch Controller for Pinch-to-Zoom and Panning in Explore Lightbox
  exploreViewerContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      isPinching = true;
      isPanning = false;
      initialPinchDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchScale = viewerZoomScale;
    } else if (e.touches.length === 1 && viewerZoomScale > 1.05) {
      isPanning = true;
      panStartX = e.touches[0].clientX;
      panStartY = e.touches[0].clientY;
      initialPanX = viewerPanX;
      initialPanY = viewerPanY;
    }
  }, { passive: true });

  exploreViewerContainer.addEventListener('touchmove', (e) => {
    if (isPinching && e.touches.length === 2 && initialPinchDistance) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = currentDist / initialPinchDistance;
      viewerZoomScale = Math.min(3.8, Math.max(0.88, initialPinchScale * factor));
      if (viewerZoomScale <= 1.2) {
        const ratio = Math.max(0, (viewerZoomScale - 1) / 0.2);
        viewerPanX *= ratio;
        viewerPanY *= ratio;
      }
      applyViewerTransform(false);
    } else if (isPanning && e.touches.length === 1 && viewerZoomScale > 1.05) {
      const dx = e.touches[0].clientX - panStartX;
      const dy = e.touches[0].clientY - panStartY;
      const maxPanX = (window.innerWidth * (viewerZoomScale - 1)) / 1.8;
      const maxPanY = (window.innerHeight * (viewerZoomScale - 1)) / 1.8;
      viewerPanX = Math.max(-maxPanX, Math.min(maxPanX, initialPanX + dx));
      viewerPanY = Math.max(-maxPanY, Math.min(maxPanY, initialPanY + dy));
      applyViewerTransform(false);
    }
  }, { passive: true });

  exploreViewerContainer.addEventListener('touchend', (e) => {
    if (e.target.closest('.explore-nav-arrow') || e.target.closest('.explore-close-pill')) return;

    if (e.touches.length === 0) {
      if (isPinching) {
        isPinching = false;
        if (viewerZoomScale < 1.08) {
          resetViewerZoom(true);
        } else {
          applyViewerTransform(true);
        }
      } else if (isPanning) {
        isPanning = false;
        applyViewerTransform(true);
      }

      // Double-tap detection
      const now = performance.now();
      if (now - lastTapTime < 320 && !isPinching) {
        if (viewerZoomScale > 1.05) {
          resetViewerZoom(true);
        } else {
          viewerZoomScale = 2.2;
          viewerPanX = 0;
          viewerPanY = 0;
          applyViewerTransform(true);
        }
        lastTapTime = 0;
      } else {
        lastTapTime = now;
        if (viewerZoomScale <= 1.05) {
          triggerExploreIntroTimer();
        }
      }
    } else if (e.touches.length === 1 && isPinching) {
      isPinching = false;
      if (viewerZoomScale < 1.08) {
        resetViewerZoom(true);
      } else {
        applyViewerTransform(true);
      }
    }
  }, { passive: true });

  exploreCardsTrack.addEventListener('wheel', (e) => {
    e.preventDefault();
    exploreCardsTrack.scrollLeft += e.deltaY;
  }, { passive: false });


  /* =========================================================
     CINEMATIC VIDEO ZOOM TRANSITION INTO GALLERY
     ========================================================= */
  let isStartingGallery = false;

  function startCinematicVideoTransition(e) {
    if (e && e.type === 'touchend') {
      try { e.preventDefault(); } catch(err){}
    }
    if (currentView !== 'home' || isStartingGallery) return;
    isStartingGallery = true;
    stage.classList.add('is-starting');
    preloadGalleryAssets();
    setCinematicBackground(continents[0].hero);

    let entered = false;
    const enterGallery = () => {
      if (entered || currentView !== 'home') return;
      entered = true;
      stage.classList.remove('is-starting');
      stage.classList.add('from-home');
      switchView('gallery');

      setTimeout(() => {
        stage.classList.remove('from-home');
      }, 5500);

      // Keep video smoothly playing through the slow 4.2s crossfade before pausing
      setTimeout(() => {
        try {
          if (currentView === 'gallery' && heroBgVideo) {
            heroBgVideo.pause();
          }
        } catch(e){}
      }, 5500);
    };

    if (heroBgVideo) {
      heroBgVideo.currentTime = 0;
      const playPromise = heroBgVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(enterGallery, 800);
        });
      }

      let transitionTriggered = false;
      const triggerTransition = () => {
        if (transitionTriggered) return;
        transitionTriggered = true;
        heroBgVideo.removeEventListener('timeupdate', onTimeUpdate);
        heroBgVideo.removeEventListener('ended', onEnded);
        enterGallery();
      };

      const onTimeUpdate = () => {
        const dur = heroBgVideo.duration;
        // Trigger transition 0.5s earlier, smoothly blending into gallery
        if (dur && Number.isFinite(dur) && dur > 1.2) {
          if (heroBgVideo.currentTime >= dur - 0.5) {
            triggerTransition();
          }
        }
      };

      const onEnded = () => {
        triggerTransition();
      };

      heroBgVideo.addEventListener('timeupdate', onTimeUpdate);
      heroBgVideo.addEventListener('ended', onEnded, { once: true });

      // Dynamic safety fallback based on actual video duration
      const safetyTimeout = (heroBgVideo.duration && Number.isFinite(heroBgVideo.duration))
        ? Math.max(2500, (heroBgVideo.duration * 1000) + 2200)
        : 10500;
      window.setTimeout(enterGallery, safetyTimeout);
    } else {
      setTimeout(enterGallery, 800);
    }
  }

  startBtn.addEventListener('click', startCinematicVideoTransition);
  startBtn.addEventListener('touchend', startCinematicVideoTransition);


  /* =========================================================
     CONTACT FORM SUBMISSION
     ========================================================= */
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      contactFeedback.textContent = 'Sending message...';
      contactSubmitBtn.disabled = true;

      const payload = {
        name: document.getElementById('contactName').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        message: document.getElementById('contactMessage').value.trim()
      };

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (res.ok) {
          contactFeedback.style.color = '#4FA98A';
          contactFeedback.textContent = 'Message sent successfully! I will be in touch soon.';
          contactForm.reset();
        } else {
          contactFeedback.style.color = '#E8935B';
          contactFeedback.textContent = data.message || 'An error occurred while sending.';
        }
      } catch(err) {
        contactFeedback.style.color = '#E8935B';
        contactFeedback.textContent = 'Connection error. Please try again.';
      } finally {
        contactSubmitBtn.disabled = false;
      }
    });
  }


  /* =========================================================
     KEYBOARD & WHEEL NAVIGATION
     ========================================================= */
  document.addEventListener('keydown', (e) => {
    if (currentView === 'home' && (e.code === 'Space' || e.code === 'Enter')) {
      e.preventDefault();
      startCinematicVideoTransition();
    } else if (inExploreMode) {
      const currentCat = continents[idx];
      if (!currentCat || !currentCat.all || currentCat.all.length === 0) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        exitExploreMode();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        selectExplorePhoto((activePhotoIndex + 1) % currentCat.all.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        selectExplorePhoto((activePhotoIndex - 1 + currentCat.all.length) % currentCat.all.length);
      }
    } else if (currentView === 'gallery') {
      if(e.key === 'ArrowRight' || e.key === 'ArrowDown') go(idx + 1, { force: true });
      if(e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(idx - 1, { force: true });
    }
  });

  spineItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (inExploreMode) exitExploreMode();
      const target = continents.findIndex(c => c.key === btn.dataset.target);
      go(target, { force: true });
    });
  });

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function handleNext(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    go(idx + 1, { force: true });
  }

  function handlePrev(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    go(idx - 1, { force: true });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', handleNext);
    nextBtn.addEventListener('touchend', handleNext);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', handlePrev);
    prevBtn.addEventListener('touchend', handlePrev);
  }

  if (mobileRail) {
    function handleRailInteraction(e) {
      if (inExploreMode || currentView !== 'gallery') return;
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const rect = mobileRail.getBoundingClientRect();
      const clientY = (e.touches && e.touches[0]) ? e.touches[0].clientY : ((e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : e.clientY);
      const relativeY = clientY - rect.top;
      const pct = Math.min(0.99, Math.max(0, relativeY / rect.height));
      const targetIdx = Math.floor(pct * continents.length);
      go(targetIdx, { force: true });
    }
    mobileRail.addEventListener('click', handleRailInteraction);
    mobileRail.addEventListener('touchend', handleRailInteraction);
  }

  function navigateViewSequence(direction) {
    if (inExploreMode) return;
    const viewSequence = ['home', 'gallery', 'contact'];
    const curViewIdx = viewSequence.indexOf(currentView);
    if (curViewIdx === -1) return;
    const targetIdx = (curViewIdx + direction + viewSequence.length) % viewSequence.length;
    switchView(viewSequence[targetIdx]);
  }

  if (mobileEdgePrev) {
    function handleEdgePrev(e) {
      if (currentView !== 'home') return;
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      navigateViewSequence(-1);
    }
    mobileEdgePrev.addEventListener('click', handleEdgePrev);
    mobileEdgePrev.addEventListener('touchend', handleEdgePrev);
  }

  if (mobileEdgeNext) {
    function handleEdgeNext(e) {
      if (currentView !== 'home') return;
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      navigateViewSequence(1);
    }
    mobileEdgeNext.addEventListener('click', handleEdgeNext);
    mobileEdgeNext.addEventListener('touchend', handleEdgeNext);
  }

  stage.addEventListener('wheel', (event) => {
    if (currentView !== 'gallery' || inExploreMode) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    go(idx + direction);
  }, { passive:false });

  let isMultiTouchActive = false;
  let multiTouchCooldown = 0;

  stage.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
      isMultiTouchActive = true;
      multiTouchCooldown = performance.now() + 450;
      touchStartX = null;
      touchStartY = null;
      return;
    }
    if (event.target.closest('input, textarea, select, button, a') || 
        event.target.closest('#exploreCardsTrack') || 
        event.target.closest('.explore-nav-arrow') ||
        event.target.closest('.bottombar') ||
        event.target.closest('.mobile-edge-arrow') ||
        event.target.closest('.arrow-btn')) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    touchStartTime = performance.now();
  }, { passive: true });

  stage.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) {
      isMultiTouchActive = true;
      multiTouchCooldown = performance.now() + 450;
      touchStartX = null;
      touchStartY = null;
    }
  }, { passive: true });

  stage.addEventListener('touchcancel', () => {
    touchStartX = null;
    touchStartY = null;
    isMultiTouchActive = false;
  }, { passive: true });

  stage.addEventListener('touchend', (event) => {
    if (isMultiTouchActive || performance.now() < multiTouchCooldown) {
      touchStartX = null;
      touchStartY = null;
      if (event.touches.length === 0) {
        isMultiTouchActive = false;
      }
      return;
    }
    if (touchStartX === null || touchStartY === null) return;
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    const deltaX = touchStartX - endX;
    const deltaY = touchStartY - endY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const elapsed = performance.now() - touchStartTime;

    touchStartX = null;
    touchStartY = null;

    if (Math.max(absX, absY) < 36 || elapsed > 900) return;

    if (inExploreMode) {
      if (viewerZoomScale > 1.05) return;
      if (absX > absY && absX > 36) {
        const currentCat = continents[idx];
        if (!currentCat || !currentCat.all) return;
        if (deltaX > 0) {
          selectExplorePhoto((activePhotoIndex + 1) % currentCat.all.length);
        } else {
          selectExplorePhoto((activePhotoIndex - 1 + currentCat.all.length) % currentCat.all.length);
        }
      }
      return;
    }

    const isMobile = window.matchMedia('(max-width: 980px)').matches;

    if (isMobile) {
      // Mobile swipe navigation: horizontal swipe switches between home, gallery, and contact
      if (absX > absY && absX > 36) {
        const viewSequence = ['home', 'gallery', 'contact'];
        const curViewIdx = viewSequence.indexOf(currentView);
        if (curViewIdx !== -1) {
          if (deltaX > 0) {
            // Swiped left (finger moved right to left) -> next view
            const nextViewIdx = (curViewIdx + 1) % viewSequence.length;
            switchView(viewSequence[nextViewIdx]);
          } else {
            // Swiped right (finger moved left to right) -> previous view
            const prevViewIdx = (curViewIdx - 1 + viewSequence.length) % viewSequence.length;
            switchView(viewSequence[prevViewIdx]);
          }
        }
      } else if (absY > absX && absY > 40) {
        // Vertical swipe on mobile gallery changes continents
        if (currentView === 'gallery') {
          go(idx + (deltaY > 0 ? 1 : -1), { force: true });
        }
      }
    } else {
      // Desktop touch fallback
      if (currentView === 'gallery') {
        if (absX > absY && absX > 36) {
          go(idx + (deltaX > 0 ? 1 : -1), { force: true });
        } else if (absY > absX && absY > 40) {
          go(idx + (deltaY > 0 ? 1 : -1), { force: true });
        }
      }
    }
  }, { passive: true });


  /* =========================================================
     INITIALIZE BASED ON URL HASH OR PATH
     ========================================================= */
  const initialHash = window.location.hash.replace('#', '').toLowerCase();
  const initialPath = window.location.pathname.replace('/', '').toLowerCase();

  if (initialHash === 'gallery' || initialPath === 'gallery' || initialPath === 'gallery.html') {
    switchView('gallery', { skipHistory: true });
  } else if (initialHash === 'contact' || initialPath === 'contact' || initialPath === 'contact.html' || initialPath === 'about' || initialPath === 'about.html') {
    switchView('contact', { skipHistory: true });
  } else {
    currentBgUrl = displayImageUrl(continents[0].hero);
    switchView('home', { skipHistory: true });
  }

})();
