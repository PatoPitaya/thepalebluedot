(function(){
  const continents = [
    {
      key:'africa', name:'Landscape', accent:'#D4884A', bgTone:'#181208', eyebrow:'Landscape',
      hero:'images/Landscape/PJO05334.jpg',
      cards:[
        {img:'images/Landscape/PJO05334.jpg',    place:'Torres del Paine — Patagonia'},
        {img:'images/Landscape/PJO05300.jpg',    place:'Valle de la Luna — Atacama'},
        {img:'images/Landscape/faro-fb33fbb3.jpg', place:'Faro Austral — Tierra del Fuego'}
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
        'images/Landscape/PJO05066-1.jpg',
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
      key:'asia', name:'Nature', accent:'#7BA05B', bgTone:'#111a10', eyebrow:'Nature',
      hero:'images/Nature/PJO00934.jpg',
      cards:[
        {img:'images/Nature/PJO00934.jpg',       place:'Silvestre al Alba — Araucanía'},
        {img:'images/Nature/PJO09920.jpg',        place:'Pradera Dorada — Los Lagos'},
        {img:'images/Nature/PJO08967.jpg',        place:'Microcosmos — Selva Valdiviana'}
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
        'images/Nature/2021-06-1922-15-47-B-Radius8-Smoothing4.jpg',
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
        'images/Nature/PJO09701.jpg'
      ]
    },
    {
      key:'australia', name:'Adventure', accent:'#6E9AB0', bgTone:'#0e161e', eyebrow:'Adventure',
      hero:'images/Sport/DSC07377_-_2-f8a343cf.jpg',
      cards:[
        {img:'images/Sport/DSC07377_-_2-f8a343cf.jpg', place:'Descenso Rápido — Río Trancura'},
        {img:'images/Sport/PJO01917.jpg',            place:'Travesía en Cresta — Cordillera de los Andes'},
        {img:'images/Sport/PJO04973-f6a2848a.jpg',   place:'Línea Salvaje — Pucón'}
      ],
      all:[
        'images/Sport/DSC07386-f7ad26b2.jpg',
        'images/Sport/DSC07377_-_2-f8a343cf.jpg',
        'images/Sport/PJO06205-2.jpg',
        'images/Sport/PJO04973-f6a2848a.jpg',
        'images/Sport/PJO01917.jpg'
      ]
    },
    {
      key:'street', name:'Street', accent:'#A0785A', bgTone:'#17120e', eyebrow:'Street',
      hero:'images/Street/PJO02812.jpg',
      cards:[
        {img:'images/Street/PJO02812.jpg',           place:'Contraluz Urbano — Santiago'},
        {img:'images/Street/PJO02840.jpg',           place:'Transeúntes — Valparaíso'},
        {img:'images/Street/PJO05819.jpg',           place:'Geometría Callejera — Barrio Lastarria'}
      ],
      all:[
        'images/Street/PJO02840.jpg',
        'images/Street/PJO04575-d7bdd0bc.jpg',
        'images/Street/PJO02812.jpg',
        'images/Street/PJO04622-60cc4ccb.jpg',
        'images/Street/PJO04590-176b30ca.jpg',
        'images/Street/DSC01032-250a524f.jpg',
        'images/Street/PJO05819.jpg',
        'images/Street/PJO00013.jpg',
        'images/Street/PJO05828.jpg',
        'images/Street/PJO05842.jpg',
        'images/Street/PJO09814.jpg',
        'images/Street/PJO09821.jpg',
        'images/Street/PJO09838.jpg',
        'images/Street/PJO09842.jpg',
        'images/Street/PJO09849.jpg',
        'images/Street/PJO09860.jpg',
        'images/Street/PJO09884.jpg',
        'images/Street/PJO09905.jpg',
        'images/Street/PJO09906.jpg',
        'images/Street/PJO09913.jpg',
        'images/Street/PJO09924.jpg',
        'images/Street/PJO09941.jpg'
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
  const explorePhotoTitle = document.getElementById('explorePhotoTitle');
  const explorePhotoMeta = document.getElementById('explorePhotoMeta');
  const exploreClosePill = document.getElementById('exploreClosePill');
  const exploreFullscreenBtn = document.getElementById('exploreFullscreenBtn');
  const exploreZoomBtn = document.getElementById('exploreZoomBtn');
  const exploreViewerContainer = document.getElementById('exploreViewerContainer');
  const exploreViewerImgA = document.getElementById('exploreViewerImgA');
  const exploreViewerImgB = document.getElementById('exploreViewerImgB');
  let currentViewerSlot = 'A';
  const imgMemoryCache = new Map();

  const ASSET_VERSION = '20260923-4k';

  // Ã¢â€â‚¬Ã¢â€â‚¬ Video first-frame poster Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  // Capture the first visible frame of the hero video into a canvas blob and
  // set it as the poster so there is NO black/empty flash when the page loads.
  (function initVideoPoster() {
    if (!heroBgVideo) return;

    let posterSet = false;
    const setFirstFrame = () => {
      if (posterSet) return;
      if (heroBgVideo.readyState < 2) return; // HAVE_CURRENT_DATA not yet
      try {
        const canvas = document.createElement('canvas');
        canvas.width  = heroBgVideo.videoWidth  || 1920;
        canvas.height = heroBgVideo.videoHeight || 1080;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(heroBgVideo, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (!blob || posterSet) return;
          posterSet = true;
          const url = URL.createObjectURL(blob);
          heroBgVideo.poster = url;
        }, 'image/jpeg', 0.85);
      } catch (e) {
        // Cross-origin or security error fallback
      }
    };

    heroBgVideo.addEventListener('loadeddata', setFirstFrame, { once: true });
    heroBgVideo.addEventListener('seeked', setFirstFrame, { once: true });

    // If the video is already ready (cached), capture immediately
    if (heroBgVideo.readyState >= 2) setFirstFrame();
  })();

  function preloadImage(url) {
    if (!url || imgMemoryCache.has(url)) return;
    const img = new Image();
    img.onload = function() {
      imgMemoryCache.set(url, this);
    };
    img.src = url;
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
    return encodeURI(targetPath).replace(/\(/g, '%28').replace(/\)/g, '%29') + '?v=' + ASSET_VERSION;
  }

  const displayImageUrl = (imageUrl) => imageVariantUrl(imageUrl, 'display');
  const optimizedImageUrl = displayImageUrl; // Backward-compatible alias
  const thumbnailImageUrl = (imageUrl) => imageVariantUrl(imageUrl, 'thumbs');
  currentBgUrl = displayImageUrl('images/Landscape/display/PJO05334.webp');

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

      incomingImg.style.transition = 'none';
      incomingImg.style.transform = '';
      outgoingImg.style.transition = 'none';
      outgoingImg.style.transform = '';

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
        // Fallback chain: 1) Try original JPG, 2) Try thumbs
        const cleanBase = fullUrl.replace(/\?.*$/, '').replace('/display/', '/');
        const jpgFallback = cleanBase.replace(/\.webp$/i, '.jpg');
        const fallbackImg = new Image();
        fallbackImg.onload = function() {
          imgMemoryCache.set(fullUrl, this);
          applyImage(this);
        };
        fallbackImg.onerror = function() {
          const thumbFallback = fullUrl.replace('/display/', '/thumbs/');
          const thumbImg = new Image();
          thumbImg.onload = function() {
            applyImage(this);
          };
          thumbImg.onerror = function() {
            incomingImg.src = thumbFallback;
            currentViewerSlot = nextSlot;
          };
          thumbImg.src = thumbFallback;
        };
        fallbackImg.src = jpgFallback;
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
      else if (/Sport/i.test(imageUrl) || /Adventure/i.test(imageUrl) || imageUrl.includes('DSC07377')) catKey = 'australia';
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
      stage.classList.remove('is-warping');
      stage.classList.remove('from-home');
      if (typeof clearRampTimers === 'function') clearRampTimers();
      if (typeof warpTimer !== 'undefined' && warpTimer) clearTimeout(warpTimer);
      if (typeof warpEndTimer !== 'undefined' && warpEndTimer) clearTimeout(warpEndTimer);
      root.style.setProperty('--accent', '#E8935B');
      root.style.setProperty('--bg-tone', '#0e0c0b');
      if (timer) clearInterval(timer);
      try {
        if (heroBgVideo) {
          heroBgVideo.pause();
          heroBgVideo.currentTime = 0;
          heroBgVideo.playbackRate = 1.0;
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
      if (typeof clearRampTimers === 'function') clearRampTimers();
      if (typeof warpTimer !== 'undefined' && warpTimer) clearTimeout(warpTimer);
      if (typeof warpEndTimer !== 'undefined' && warpEndTimer) clearTimeout(warpEndTimer);
      if (timer) clearInterval(timer);
      root.style.setProperty('--accent', '#E8935B');
      root.style.setProperty('--bg-tone', '#14110f');
      setCinematicBackground('images/contact/PJO05448.jpg');
      const contactSec = document.getElementById('contactSection');
      if (contactSec) contactSec.scrollTop = 0;
    }

    if (!opts.skipHistory) {
      const currentCatKey = continents[idx] ? continents[idx].key : 'africa';
      updateRouteHash(targetView, currentCatKey, { replace: false });
    }

    updateViewNavButtons();
  }

  // Handle Top Nav Clicks
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(el.dataset.nav);
    });
  });


  /* =========================================================
     DEEP LINKING & SHAREABLE URL HASH ROUTER
     ========================================================= */
  const SLUG_TO_KEY = {
    'landscape': 'africa',
    'nature': 'asia',
    'adventure': 'australia',
    'street': 'street',
    'africa': 'africa',
    'asia': 'asia',
    'australia': 'australia'
  };

  const KEY_TO_SLUG = {
    'africa': 'landscape',
    'asia': 'nature',
    'australia': 'adventure',
    'street': 'street'
  };

  let isHandlingHashChange = false;

  function updateRouteHash(view, catKey, opts) {
    if (isHandlingHashChange) return;
    opts = opts || {};
    let targetHash = '';
    const slug = KEY_TO_SLUG[catKey] || 'landscape';

    if (view === 'gallery') {
      targetHash = `#gallery/${slug}`;
    } else if (view === 'explore') {
      targetHash = `#explore/${slug}`;
    } else if (view === 'contact') {
      targetHash = '#contact';
    } else {
      targetHash = '#home';
    }

    const currentHash = window.location.hash || '';
    if (currentHash === targetHash || (currentHash === '' && targetHash === '#home')) {
      return;
    }

    try {
      const url = targetHash === '#home' ? window.location.pathname + window.location.search : targetHash;
      if (opts.replace) {
        history.replaceState(null, '', url);
      } else {
        history.pushState(null, '', url);
      }
    } catch (e) {
      window.location.hash = targetHash;
    }
  }

  function handleHashNavigation() {
    const rawHash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase().trim();
    if (!rawHash || rawHash === 'home') {
      if (inExploreMode) {
        exitExploreMode({ skipHistory: true });
      }
      if (currentView !== 'home') {
        switchView('home', { skipHistory: true });
      }
      return;
    }

    const parts = rawHash.split('/');
    const primary = parts[0];
    const secondary = parts[1] || '';

    if (primary === 'gallery') {
      if (inExploreMode) {
        exitExploreMode({ skipHistory: true });
      }
      const targetKey = SLUG_TO_KEY[secondary] || 'africa';
      const targetIndex = continents.findIndex(c => c.key === targetKey);
      if (targetIndex !== -1) {
        idx = targetIndex;
      }
      if (currentView !== 'gallery') {
        switchView('gallery', { skipHistory: true });
      } else {
        render(idx, { skipHistory: true });
      }
      return;
    }

    if (primary === 'explore') {
      const targetKey = SLUG_TO_KEY[secondary] || 'africa';
      const targetIndex = continents.findIndex(c => c.key === targetKey);
      if (targetIndex !== -1) {
        idx = targetIndex;
      }
      if (currentView !== 'gallery') {
        switchView('gallery', { skipHistory: true });
      }
      if (!inExploreMode || stage.dataset.category !== targetKey) {
        enterExploreMode(targetKey, null, { skipHistory: true });
      }
      return;
    }

    if (primary === 'contact') {
      if (inExploreMode) {
        exitExploreMode({ skipHistory: true });
      }
      if (currentView !== 'contact') {
        switchView('contact', { skipHistory: true });
      }
      return;
    }
  }

  window.addEventListener('popstate', () => {
    isHandlingHashChange = true;
    handleHashNavigation();
    isHandlingHashChange = false;
  });

  window.addEventListener('hashchange', () => {
    isHandlingHashChange = true;
    handleHashNavigation();
    isHandlingHashChange = false;
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

    if (!opts.skipHistory && currentView === 'gallery') {
      updateRouteHash(inExploreMode ? 'explore' : 'gallery', c.key, { replace: true });
    }

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
        cardB.style.backgroundImage = `url('${thumbnailImageUrl(c.cards[1].img)}')`;
        cardB.querySelector('.place').textContent = c.cards[1].place;
        cardC.style.backgroundImage = `url('${thumbnailImageUrl(c.cards[2] ? c.cards[2].img : c.cards[0].img)}')`;
        cardC.querySelector('.place').textContent = c.cards[2] ? c.cards[2].place : c.cards[0].place;
        cardzone.classList.add('show');
      }, CARD_SWAP_DELAY);
    }

    if (pageNow) pageNow.textContent = String(idx + 1).padStart(2, '0');
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
     FINE ART PHOTOGRAPHY METADATA DICTIONARY & RESOLVER
     ========================================================= */
  const PHOTO_METADATA_MAP = {

    // ==========================================
    // LANDSCAPE (38 fotos)
    // ==========================================
    'images/Landscape/display/PJO05300.webp': { title: 'Sector Grey Trekking', meta: 'Torres del Paine, Chile · 80mm f/5.6' },
    'images/Landscape/display/PJO05322.webp': { title: 'Británico lookout', meta: 'Torres del Paine, Chile · 20mm f/8' },
    'images/Landscape/display/JIMENEZ_Patricio_Landschappen_Foto8_mistsunrise.webp': { title: 'Brandtoren', meta: 'Kalmthoutse Heide, Belgium · 600mm f/8' },
    'images/Landscape/display/DSC03490-HDR.webp': { title: 'De Stapper Uitkijktoren', meta: 'kalmthoutse heide, Belgium ·600mm f/8' },
    'images/Landscape/display/faro-fb33fbb3.webp': { title: 'Nieuwpoort Vuurtoren', meta: 'Nieuwpoort, Belgium · 100mm f/8' },
    'images/Landscape/display/PJO05321.webp': { title: 'Británico lookout', meta: 'Torres del Paine, Chile · 85mm f/2.5' },
    'images/Landscape/display/PJO05688.webp': { title: 'Ferry to Chiloé', meta: 'Aysén, Chile · 70mm f/4' },
    'images/Landscape/display/DSC03310-HDR.webp': { title: 'Brandtoren', meta: 'Kalmthoutse Heide, Belgium · 200mm f/5.6' },
    'images/Landscape/display/PJO06498.webp': { title: 'Salar de Uyuni', meta: 'Uyuni, Bolivia · 20mm f/4' },
    'images/Landscape/display/PJO06132.webp': { title: 'Valle de Marte/ Valle de la Muerte', meta: 'Desierto de Atacama, Chile · 20mm f/8 ·' },
    'images/Landscape/display/PJO05409.webp': { title: 'Base Torres Trekking', meta: 'Torres del Paine, Chile · 50mm f/5.6' },
    'images/Landscape/display/PJO05602.webp': { title: 'Ferry to Chiloé', meta: 'Aysén, Chile · 85mm f/4' },
    'images/Landscape/display/PJO05056.webp': { title: 'Villarrica Volcano', meta: 'Villarrica, Chile · 20mm f/1.8' },
    'images/Landscape/display/PJO04652.webp': { title: 'Aussichtspunkt Vorderarni', meta: 'Gurtnellen, Switzerland · 28mm f/4' },
    'images/Landscape/display/PJO04719.webp': { title: 'Franzosen-Platz', meta: 'Andermatt, Switzerland · 35mm f/4' },
    'images/Landscape/display/DSC02503.webp': { title: 'De Nekker', meta: 'Mechelen, Belgium · 100mm f/11' },
    'images/Landscape/display/PJO05505.webp': { title: 'Torres del Paine', meta: 'Torres del Paine, Chile · 20mm f/8' },
    'images/Landscape/display/PJO04545.webp': { title: 'canal de la Serre', meta: 'Vibersviller, France · 135mm f/8' },
    'images/Landscape/display/PJO05251.webp': { title: 'Grey Glacier', meta: 'Torres del Paine, Chile · 85mm f/8z' },
    'images/Landscape/display/PJO06643.webp': { title: 'Salar de Uyuni', meta: 'Uyuni, Bolivia · 85mm f/1.4' },
    'images/Landscape/display/DSC06227.webp': { title: 'Sint Laureinsstrand', meta: 'Middelkerke, Belgium · 100mm f/5.6' },
    'images/Landscape/display/PJO05301.webp': { title: 'Sector Grey Trekking', meta: 'Torres del Paine, Chile · 85mm f/5.6' },
    'images/Landscape/display/PJO05378.webp': { title: 'Británico lookout', meta: 'Torres del Paine, Chile · 20mm f/8' },
    'images/Landscape/display/PJO05376.webp': { title: 'Británico lookout', meta: 'Patagonia, Chile · 20mm f/8' },
    'images/Landscape/display/PJO052632.webp': { title: 'Grey Glacier', meta: 'Torres del Paine, Chile · 85mm f/5.6' },
    'images/Landscape/display/PJO05282.webp': { title: 'Sector Grey Trekking', meta: 'Torres del Paine, Chile · 20mm f/16' },
    'images/Landscape/display/PJO05334.webp': { title: 'Británico lookout', meta: 'Torres del Paine, Chile · 20mm f/8' },
    'images/Landscape/display/PJO05810.webp': { title: 'Puerto Raúl Marín Balmaceda', meta: 'Cisnes, Chile · 50mm f/4' },
    'images/Landscape/display/PJO04734.webp': { title: 'Tauchplatz Rütenen', meta: 'Beckenried, Switzerland · 35mm f/4' },
    'images/Landscape/display/PJO05097.webp': { title: 'Dickson Trekking', meta: 'Torres del Paine, Chile · 85mm f/4' },
    'images/Landscape/display/PJO05066-1.webp': { title: 'Villarrica Volcano', meta: 'Villarrica, Chile · 20mm f/16' },
    'images/Landscape/display/PJO062162.webp': { title: 'Licancabur Volcano', meta: 'San Pedro de Atacama, Chile · 85mm f/4' },
    'images/Landscape/display/PJO05132.webp': { title: 'Dickson Sector', meta: 'Torres del Paine, Chile · 85mm f/16' },
    'images/Landscape/display/PJO04671.webp': { title: 'Santa Margherita', meta: 'Lugano, Switzerland · 135mm f/4' },
    'images/Landscape/display/PJO05319.webp': { title: 'Paine Grande Trekking', meta: 'Torres del Paine, Chile · 85mm f/5.6' },
    'images/Landscape/display/PJO05173.webp': { title: 'Autumn in Patagonia', meta: 'Torres del Paine, Chile · 20mm f/16' },
    'images/Landscape/display/PJO05180.webp': { title: 'Patagonia and her colours', meta: 'Torres del Paine, Chile · 20mm f/16' },
    'images/Landscape/display/Villarica.webp': { title: 'Villarrica Volcano', meta: 'Villarrica, Chile · 50mm f/4' },

    // ==========================================
    // NATURE (62 fotos)
    // ==========================================
    'images/Nature/display/DSC05597.webp': { title: 'A free duck', meta: 'De Nekker, Belgium · 135mm f/4' },
    'images/Nature/display/PJO06305.webp': { title: 'A beautiful LLamas', meta: 'Bolivia · 85mm f/4' },
    'images/Nature/display/PJO02719.webp': { title: 'Sunset with a seagull', meta: 'Sint Laureinsstrand, Belgium · 600mm f/7' },
    'images/Nature/display/PJO09863.webp': { title: 'Beautiful cow', meta: 'Robbroeck, Belgium · 600mm f/7' },
    'images/Nature/display/DSC05535.webp': { title: 'Roses of joy for Piper', meta: 'Vrijbroekpark, Belgium · 100mm f/2' },
    'images/Nature/display/PJO05101.webp': { title: 'A condor in the heights', meta: 'Torres del Paine, Chile · 85mm f/5.6' },
    'images/Nature/display/PJO00825.webp': { title: 'Small fox', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC05627.webp': { title: 'Curious little cows', meta: 'De Nekker, Belgium · 135mm f/1.8' },
    'images/Nature/display/DSC03520.webp': { title: 'Mystical Buizer', meta: 'De Nekker, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO05575-3.webp': { title: 'Puma in Torres del Paine', meta: 'Torres del Paine, Chile · 85mm f/2.8' },
    'images/Nature/display/caracol.webp': { title: 'Snail in its little house', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/PJO03852.webp': { title: 'Seagull in the blue hour', meta: 'Sint Laureinsstrand, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC07034.webp': { title: 'Goldenrod Crab Spider', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/JIMENEZ_Patricio_Anderedieren_Foto7_Singinginspring.webp': { title: 'A frog in its habitat', meta: 'Vrijbroekpark, Belgium · 135mm f/1.8' },
    'images/Nature/display/PJO03799.webp': { title: 'Oystercatcher at sunset', meta: 'Sint Laureinsstrand, Belgium · 600mm f/8' },
    'images/Nature/display/DSC05612.webp': { title: 'A scene of cows', meta: 'De Nekker, Belgium · 135mm f/2.8' },
    'images/Nature/display/2021-06-1922-15-47-B-Radius8-Smoothing4.webp': { title: 'Hidden bug', meta: 'De Nekker, Belgium · 100mm f/5.6' },
    'images/Nature/display/DSC08682.webp': { title: 'Simple beautiful bird', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC00345.webp': { title: 'Cormorant', meta: 'Hofstade, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC06112-2.webp': { title: 'A little beetle', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/definitivosaltamonteenano.webp': { title: 'Delphacidae', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/PJO09920.webp': { title: 'Bunny watching the sunset', meta: 'Robbroeck, Belgium · 200mm f/5.6' },
    'images/Nature/display/JIMENEZ_Patricio_Anderedieren_Foto6_Springand.webp': { title: 'A pair of deer', meta: 'Biezenweiden, Belgium · 600mm f/6.3' },
    'images/Nature/display/3.webp': { title: 'Red-breasted Flycatcher', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO01954.webp': { title: 'Happy dog', meta: 'France · 85mm f/2.8' },
    'images/Nature/display/PJO06296.webp': { title: 'Llamas in their natural habitat', meta: 'Bolivia · 85mm f/4' },
    'images/Nature/display/DSC03711.webp': { title: 'A couple of Tufted ducks', meta: 'De Nekker, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO00934.webp': { title: 'A little European stonechat', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO00370.webp': { title: 'Morning horses', meta: 'Vrijbroekpark, Belgium · 135mm f/1.8' },
    'images/Nature/display/IMAG0019.webp': { title: 'Greylag goose', meta: 'De Nekker, Belgium · 600mm f/8' },
    'images/Nature/display/JIMENEZ_Patricio_Anderedieren_Foto2_Schorsmarpissa.webp': { title: 'Fencepost jumping spider', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/PJO05149.webp': { title: 'Horse company', meta: 'Torres del Paine, Chile · 85mm f/5.6' },
    'images/Nature/display/Jimenez_Patricio_DSC_03112.webp': { title: 'Cute jumping spider', meta: 'Vrijbroekpark, Belgium · 100mm f/4' },
    'images/Nature/display/PJO09283.webp': { title: 'Red-backed shrike', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC01761.webp': { title: 'Small food for a small life', meta: 'Vrijbroekpark, Belgium · 100mm f/4' },
    'images/Nature/display/PJO08967.webp': { title: 'The white bird', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO02818.webp': { title: 'Oystercatcher reunion', meta: 'Sint Laureinsstrand, Belgium · 600mm f/7' },
    'images/Nature/display/DSC08590.webp': { title: 'A couple of parakeets', meta: 'Robbroeck, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC01770.webp': { title: 'Macro spider', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/DSC00088.webp': { title: 'Greylag goose in a blue sky', meta: 'De Nekker, Belgium · 600mm f/8' },
    'images/Nature/display/DSC07853-17969db0.webp': { title: 'Piper and her new rain jacket', meta: 'Vrijbroekpark, Belgium · 20mm f/1.8' },
    'images/Nature/display/DSC03039.webp': { title: 'Red bug', meta: 'Vrijbroekpark, Belgium · 100mm f/5.6' },
    'images/Nature/display/JIMENEZ_Patricio_flora_Foto1_There_is_life_inside_the_flowers-7a16a85c.webp': { title: 'There is life inside the flowers', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/DSC01788.webp': { title: 'Little bee', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/DSC04789.webp': { title: 'Mosquito', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/DSC06045-1b482605.webp': { title: 'Woella', meta: 'Mechelen, Belgium · 85mm f/1.4' },
    'images/Nature/display/DSC06998.webp': { title: 'Beautiful house', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/JIMENEZ_Patricio_Vogels_Foto3_Ooievaar.webp': { title: 'The stork and the spring', meta: 'De Nekker, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO04035.webp': { title: 'Beach colors', meta: 'Sint Laureinsstrand, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO01504-2.webp': { title: 'Parakeet', meta: 'Vrijbroekpark, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC09699.webp': { title: 'Nature · Foto 51', meta: 'Biezenweiden, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC03123.webp': { title: 'Flower love spiders', meta: 'Vrijbroekpark, Belgium · 100mm f/4' },
    'images/Nature/display/PJO05534.webp': { title: 'Woodpecker', meta: 'Torres del Paine, Chile · 85mm f/1.4' },
    'images/Nature/display/PJO05843.webp': { title: 'A beautiful hummingbird', meta: 'Chiloé, Chile · 85mm f/1.4' },
    'images/Nature/display/PJO01455.webp': { title: 'Baby cows', meta: 'Robbroeck, Belgium · 200mm f/5.6' },
    'images/Nature/display/DSC06286-2-2.webp': { title: 'Little woodlouse', meta: 'Vrijbroekpark, Belgium · 100mm f/2.8' },
    'images/Nature/display/PJO069652.webp': { title: 'Freezing sky', meta: 'Mechelen, Belgium · 600mm f/6.3' },
    'images/Nature/display/JIMENEZ_Patricio_Vogels_Foto2_Kievitandsunset.webp': { title: 'A Lapwing', meta: 'De Nekker, Belgium · 600mm f/6.3' },
    'images/Nature/display/PJO05965.webp': { title: 'Beautiful black buzzard', meta: 'De Nekker, Belgium · 600mm f/6.3' },
    'images/Nature/display/DSC06215-ca4b56a4-2500.webp': { title: 'Beach and dog', meta: 'Sint Laureinsstrand, Belgium · 100mm f/2.8' },
    'images/Nature/display/PJO08386-2.webp': { title: 'Jupiter', meta: 'Vrijbroekpark, Belgium · 135mm f/1.8' },
    'images/Nature/display/PJO09701.webp': { title: 'Snow days', meta: 'Robbroeck , Belgium · 600mm f/6.3' },

    // ==========================================
    // ADVENTURE (5 fotos)
    // ==========================================
    'images/Sport/display/DSC07386-f7ad26b2.webp': { title: 'Julian Alaphilippe', meta: 'Leuven, Belgium · 20mm f/5.6' },
    'images/Sport/display/DSC07377_-_2-f8a343cf.webp': { title: 'Centenary of the UCI Road World Championships', meta: 'Mechelen, Belgium · 20mm f/8' },
    'images/Sport/display/PJO06205-2.webp': { title: 'Mars Valley', meta: 'San Pedro de Atacama, Chile · 85mm f/5.6' },
    'images/Sport/display/PJO04973-f6a2848a.webp': { title: 'Final kayak', meta: 'Mechelen, Belgium · 85mm f/5.6' },
    'images/Sport/display/PJO01917.webp': { title: 'Bickepacking', meta: 'Laon, France · 85mm f/4' },

    // ==========================================
    // STREET (22 fotos)
    // ==========================================
    'images/Street/display/PJO02840.webp': { title: 'A day in Brussels', meta: 'Brussels, Belgium · 35mm f/2.8' },
    'images/Street/display/PJO04575-d7bdd0bc.webp': { title: 'Château du Haut-Barr', meta: 'Saverne, France · 20mm f/5.6' },
    'images/Street/display/PJO02812.webp': { title: 'Unseen movements', meta: 'Brussels, Belgium · 35mm f/1.4' },
    'images/Street/display/PJO04622-60cc4ccb.webp': { title: 'Kapellbrücke', meta: 'Lucerne, Switzerland · 135mm f/1.8' },
    'images/Street/display/PJO04590-176b30ca.webp': { title: 'Lucerne Jesuit Church', meta: 'Lucerne, Switzerland · 35mm f/1.4' },
    'images/Street/display/DSC01032-250a524f.webp': { title: 'De Pelikaan', meta: 'Mechelen, Belgium · 20mm f/5.6' },
    'images/Street/display/PJO05819.webp': { title: 'Watchdog', meta: 'Castro, Chiloé · 20mm f/8' },
    'images/Street/display/PJO00013.webp': { title: 'Sunsret', meta: 'Rotterdam, Netherlands · 35mm f/2.8' },
    'images/Street/display/PJO05828.webp': { title: 'Stilt houses', meta: 'Castro, Chiloé · 85mm f/2.8' },
    'images/Street/display/PJO05842.webp': { title: 'Stilt houses', meta: 'Castro, Chiloé · 35mm f/2.8' },
    'images/Street/display/PJO09814.webp': { title: 'Cube houses', meta: 'Rotterdam, Netherlands · 35mm f/5.6' },
    'images/Street/display/PJO09821.webp': { title: 'The white house', meta: 'Rotterdam, Netherlands · 35mm f/5.6' },
    'images/Street/display/PJO09838.webp': { title: 'Cube houses', meta: 'Rotterdam, Netherlands · 35mm f/5.6' },
    'images/Street/display/PJO09849.webp': { title: 'Market Hall', meta: 'Rotterdam, Netherlands · 35mm f/1.4' },
    'images/Street/display/PJO09860.webp': { title: 'A floating restaurant', meta: 'Rotterdam, Netherlands · 35mm f/1.4' },
    'images/Street/display/PJO09884.webp': { title: 'Fair o Carnival', meta: 'Rotterdam, Netherlands · 35mm f/2' },
    'images/Street/display/PJO09905.webp': { title: 'Skyview', meta: 'Rotterdam, Netherlands · 35mm f/2' },
    'images/Street/display/PJO09906.webp': { title: 'Skyview', meta: 'Rotterdam, Netherlands · 35mm f/2' },
    'images/Street/display/PJO09913.webp': { title: 'Depot Museum Boijmans Van Beuningen', meta: 'Rotterdam, Netherlands · 35mm f/2' },
    'images/Street/display/PJO09924.webp': { title: 'Water taxi', meta: 'Rotterdam, Netherlands · 35mm f/2' },
    'images/Street/display/PJO09941.webp': { title: 'Hotel New York', meta: 'Rotterdam, Netherlands · 35mm f/2' },
  };

  function getPhotoMetadata(url, categoryKey, photoIndex) {
    if (!url) return { title: 'Fine Art Portfolio', meta: 'Patricio Jiménez · Fotografía' };
    const cleanUrl = url.split('?')[0];
    const filename = cleanUrl.split('/').pop();
    const stem = filename.replace(/\.[^.]+$/, '');

    if (PHOTO_METADATA_MAP[cleanUrl]) return PHOTO_METADATA_MAP[cleanUrl];
    if (PHOTO_METADATA_MAP[filename]) return PHOTO_METADATA_MAP[filename];

    for (const key in PHOTO_METADATA_MAP) {
      const keyFilename = key.split('/').pop();
      const keyStem = keyFilename.replace(/\.[^.]+$/, '');
      if (keyFilename === filename || keyStem === stem) {
        return PHOTO_METADATA_MAP[key];
      }
    }

    const safeIdx = String((photoIndex || 0) + 1).padStart(2, '0');
    switch (categoryKey) {
      case 'africa':
        return {
          title: `Luz Austral · Cuadro ${safeIdx}`,
          meta: 'Chile & Patagonia · Sony α7R IV · Archival Fine Art'
        };
      case 'asia':
        return {
          title: `Forma y Vida · Cuadro ${safeIdx}`,
          meta: 'Naturaleza Austral · Sony α7R IV · Óptica G Master'
        };
      case 'australia':
        return {
          title: `Momento Decisivo · Cuadro ${safeIdx}`,
          meta: 'Acción y Cordillera · 1/2000s · Chile'
        };
      case 'street':
        return {
          title: `Crónica de Ciudad · Cuadro ${safeIdx}`,
          meta: 'Escena Urbana · 35mm · Luz Disponible'
        };
      default:
        return {
          title: `Fotografía Fine Art · Cuadro ${safeIdx}`,
          meta: 'Patricio Jiménez · Fine Art Print'
        };
    }
  }

    function updateExplorePhotoInfo(imgUrl) {
    const currentCat = continents[idx];
    if (!currentCat) return;
    const meta = getPhotoMetadata(imgUrl, currentCat.key, activePhotoIndex);
    if (explorePhotoTitle) explorePhotoTitle.textContent = meta.title;
    if (explorePhotoMeta) explorePhotoMeta.textContent = meta.meta;
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

  function updateZoomButtonState() {
    if (!exploreZoomBtn) return;
    const isZoomed = viewerZoomScale > 1.05;
    exploreZoomBtn.classList.toggle('is-active', isZoomed);
    if (isZoomed) {
      exploreZoomBtn.setAttribute('aria-label', 'Reset zoom');
      exploreZoomBtn.setAttribute('title', 'Reset zoom');
    } else {
      exploreZoomBtn.setAttribute('aria-label', 'Zoom image');
      exploreZoomBtn.setAttribute('title', 'Zoom photo');
    }
  }

  function applyViewerTransform(withTransition) {
    const currentImg = currentViewerSlot === 'A' ? exploreViewerImgA : exploreViewerImgB;
    if (!currentImg) return;
    if (viewerZoomScale <= 1.02) {
      viewerZoomScale = 1;
      viewerPanX = 0;
      viewerPanY = 0;
      if (withTransition) {
        currentImg.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out';
        currentImg.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        currentImg.style.transition = 'none';
        currentImg.style.transform = '';
      }
      stage.classList.remove('is-zoomed');
    } else {
      if (withTransition) {
        currentImg.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out';
      } else {
        currentImg.style.transition = 'none';
      }
      currentImg.style.transform = `translate(calc(-50% + ${viewerPanX}px), calc(-50% + ${viewerPanY}px)) scale(${viewerZoomScale})`;
      stage.classList.add('is-zoomed');
    }
    updateZoomButtonState();
  }

  function resetViewerZoom(animated) {
    viewerZoomScale = 1;
    viewerPanX = 0;
    viewerPanY = 0;
    isPinching = false;
    isPanning = false;
    [exploreViewerImgA, exploreViewerImgB].forEach(img => {
      if (!img) return;
      if (animated) {
        img.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out';
        img.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        img.style.transition = 'none';
        img.style.transform = '';
      }
    });
    stage.classList.remove('is-zoomed');
    updateZoomButtonState();
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

  function enterExploreMode(categoryKey, targetPhotoUrl, opts) {
    opts = opts || {};
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
    updateExplorePhotoInfo(currentCat.all[activePhotoIndex]);
    if (!opts.skipHistory) {
      updateRouteHash('explore', currentCat.key, { replace: false });
    }

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
    stage.classList.add('explore-mode');
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
    updateExplorePhotoInfo(selectedImg);

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

  function exitExploreMode(opts) {
    opts = opts || {};
    inExploreMode = false;
    resetViewerZoom(false);
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      try {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
      } catch (err) {}
    }
    if (exploreCardsIntroTimer) clearTimeout(exploreCardsIntroTimer);
    exploreCardsIntroTimer = null;
    stage.classList.remove('explore-mode', 'explore-cards-intro', 'is-zoomed');
    if (exploreViewerImgA) {
      exploreViewerImgA.classList.remove('active', 'prev');
      exploreViewerImgA.removeAttribute('src');
      exploreViewerImgA.style.transform = '';
      exploreViewerImgA.style.transition = '';
    }
    if (exploreViewerImgB) {
      exploreViewerImgB.classList.remove('active', 'prev');
      exploreViewerImgB.removeAttribute('src');
      exploreViewerImgB.style.transform = '';
      exploreViewerImgB.style.transition = '';
    }
    render(idx);
    restartAutoplay();
    if (!opts.skipHistory) {
      updateRouteHash('gallery', continents[idx].key, { replace: false });
    }
  }


  document.querySelectorAll('.explore').forEach(btn => {
    function onExploreClick(e) {
      if (e) {
        if (e.type === 'touchend') e.preventDefault();
        e.stopPropagation();
      }
      enterExploreMode(btn.dataset.explore);
    }
    btn.addEventListener('click', onExploreClick);
    btn.addEventListener('touchend', onExploreClick);
  });

  [cardA, cardB, cardC].forEach((card, cardIndex) => {
    function onCardClick(e) {
      if (e) {
        if (e.type === 'touchend') e.preventDefault();
        e.stopPropagation();
      }
      const currentCat = continents[idx];
      const targetCard = currentCat.cards[cardIndex];
      enterExploreMode(currentCat.key, targetCard ? targetCard.img : null);
    }
    card.addEventListener('click', onCardClick);
    card.addEventListener('touchend', onCardClick);
  });

  function onClosePillClick(e) {
    if (e) {
      if (e.type === 'touchend') e.preventDefault();
      e.stopPropagation();
    }
    exitExploreMode();
  }
  exploreClosePill.addEventListener('click', onClosePillClick);
  exploreClosePill.addEventListener('touchend', onClosePillClick);

  function handleZoomToggle(e) {
    if (e) {
      if (e.type === 'touchend') e.preventDefault();
      e.stopPropagation();
    }
    if (viewerZoomScale > 1.05) {
      resetViewerZoom(true);
    } else {
      viewerZoomScale = 2.2;
      viewerPanX = 0;
      viewerPanY = 0;
      applyViewerTransform(true);
    }
  }

  if (exploreZoomBtn) {
    exploreZoomBtn.addEventListener('click', handleZoomToggle);
    exploreZoomBtn.addEventListener('touchend', handleZoomToggle);
  }

  function toggleFullscreen(e) {
    if (e) {
      if (e.type === 'touchend') e.preventDefault();
      e.stopPropagation();
    }
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    if (!isFs) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  function updateFullscreenBtnState() {
    if (!exploreFullscreenBtn) return;
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    exploreFullscreenBtn.classList.toggle('is-active', isFs);
    const label = isFs ? 'Exit fullscreen' : 'Fullscreen';
    exploreFullscreenBtn.setAttribute('title', label);
    exploreFullscreenBtn.setAttribute('aria-label', label);
  }

  if (exploreFullscreenBtn) {
    exploreFullscreenBtn.addEventListener('click', toggleFullscreen);
    exploreFullscreenBtn.addEventListener('touchend', toggleFullscreen);
  }

  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(evt => {
    document.addEventListener(evt, updateFullscreenBtnState);
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

  let isMouseDragging = false;
  let mouseDragStartX = 0;
  let mouseDragStartY = 0;
  let initialMousePanX = 0;
  let initialMousePanY = 0;

  exploreViewerContainer.addEventListener('mousedown', (e) => {
    if (viewerZoomScale <= 1.05) return;
    if (e.target.closest('.explore-nav-arrow') || e.target.closest('.explore-top-bar') || e.target.closest('.explore-cards-wrap')) return;
    isMouseDragging = true;
    mouseDragStartX = e.clientX;
    mouseDragStartY = e.clientY;
    initialMousePanX = viewerPanX;
    initialMousePanY = viewerPanY;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDragging || viewerZoomScale <= 1.05) return;
    const dx = e.clientX - mouseDragStartX;
    const dy = e.clientY - mouseDragStartY;
    const maxPanX = (window.innerWidth * (viewerZoomScale - 1)) / 1.8;
    const maxPanY = (window.innerHeight * (viewerZoomScale - 1)) / 1.8;
    viewerPanX = Math.max(-maxPanX, Math.min(maxPanX, initialMousePanX + dx));
    viewerPanY = Math.max(-maxPanY, Math.min(maxPanY, initialMousePanY + dy));
    applyViewerTransform(false);
  });

  window.addEventListener('mouseup', () => {
    if (isMouseDragging) {
      isMouseDragging = false;
      applyViewerTransform(true);
    }
  });


  /* =========================================================
     CINEMATIC SPATIAL TRANSITION INTO GALLERY ("NO HUBO CAMBIO DE PÁGINA")
     ========================================================= */
  let isStartingGallery = false;
  let activeEnterGallery = null;
  let transitionStartTime = 0;
  let warpTimer = null;
  let warpEndTimer = null;
  let rampTimeoutIds = [];

  function clearRampTimers() {
    rampTimeoutIds.forEach(id => clearTimeout(id));
    rampTimeoutIds = [];
  }

  function startCinematicVideoTransition(e) {
    if (e && e.type === 'touchend') {
      try { e.preventDefault(); } catch(err){}
    }
    // Fast-forward if user clicks/taps again after 600ms
    if (stage.classList.contains('is-starting')) {
      if (activeEnterGallery && (performance.now() - transitionStartTime > 600)) {
        activeEnterGallery();
      }
      return;
    }
    if (currentView !== 'home' || isStartingGallery) return;
    isStartingGallery = true;
    transitionStartTime = performance.now();
    clearRampTimers();

    // FASE 1: Texto e interfaz de Home se elevan y disuelven suavemente; el video arranca a velocidad 1.0x normal
    stage.classList.add('is-starting');
    preloadGalleryAssets();

    let entered = false;
    const enterGallery = () => {
      if (entered || currentView !== 'home') return;
      entered = true;
      if (warpTimer) { clearTimeout(warpTimer); warpTimer = null; }
      if (warpEndTimer) { clearTimeout(warpEndTimer); warpEndTimer = null; }
      clearRampTimers();
      activeEnterGallery = null;

      // Clase from-home para orquestar la suave entrada escalonada tipo HUD de controles de galería
      stage.classList.add('from-home');

      // Transición fluida a galería: la foto fija toma el relevo y los controles emergen en cascada armónica
      switchView('gallery');

      // Tras completar la disolvencia y entrada de todos los controles (2000ms), limpiar video y clases fuera de pantalla
      setTimeout(() => {
        stage.classList.remove('from-home');
        stage.classList.remove('is-starting');
        stage.classList.remove('is-warping');
        isStartingGallery = false;
        try {
          if (heroBgVideo) {
            heroBgVideo.pause();
            heroBgVideo.currentTime = 0;
            heroBgVideo.playbackRate = 1.0;
          }
        } catch(e){}
      }, 2000);
    };

    activeEnterGallery = enterGallery;

    if (heroBgVideo) {
      heroBgVideo.muted = true;
      heroBgVideo.defaultMuted = true;

      // FASE 1: Primeros 2.0s a velocidad 100% normal (1.0x) — serenidad, atmósfera real y contemplación
      heroBgVideo.currentTime = 0;
      heroBgVideo.playbackRate = 1.0;
      const playPromise = heroBgVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(enterGallery, 400);
        });
      }

      // FASE 2: Aceleración progresiva a velocidad de crucero 1.66x (de 2.0s a 4.70s)
      warpTimer = setTimeout(() => {
        if (entered || currentView !== 'home') return;
        stage.classList.add('is-warping');

        // Rampa suave desacoplada de la clase CSS para eliminar cualquier tirón gráfico
        const rampUpSteps = [
          { delay: 80,  rate: 1.10 },
          { delay: 160, rate: 1.24 },
          { delay: 240, rate: 1.44 },
          { delay: 320, rate: 1.66 }
        ];

        rampUpSteps.forEach(step => {
          const tid = setTimeout(() => {
            if (!entered && currentView === 'home' && heroBgVideo) {
              heroBgVideo.playbackRate = step.rate;
            }
          }, step.delay);
          rampTimeoutIds.push(tid);
        });

        // FASE 3: Desaceleración y retorno a velocidad 100% normal (de 4.70s a 5.18s)
        const tidDeaccelClass = setTimeout(() => {
          if (!entered && currentView === 'home') {
            stage.classList.remove('is-warping');
          }
        }, 2700); // 2000ms + 2700ms = 4700ms
        rampTimeoutIds.push(tidDeaccelClass);

        // Rampa de frenado progresivo hacia 1.00x exacto:
        const rampDownSteps = [
          { delay: 2700, rate: 1.45 },
          { delay: 2820, rate: 1.28 },
          { delay: 2940, rate: 1.14 },
          { delay: 3060, rate: 1.05 },
          { delay: 3180, rate: 1.00 }
        ];

        rampDownSteps.forEach(step => {
          const tid = setTimeout(() => {
            if (!entered && currentView === 'home' && heroBgVideo) {
              heroBgVideo.playbackRate = step.rate;
            }
          }, step.delay);
          rampTimeoutIds.push(tid);
        });

        // FASE 4: A los 5.75s (con video a velocidad 1.0x normal, nítido y la pantalla LCD al 100%),
        // se inicia la transición match-cut combinada hacia la galería (cero corte, orquestación HUD de controles)
        warpEndTimer = setTimeout(() => {
          enterGallery();
        }, 3750); // 2000ms + 3750ms = 5750ms total
      }, 2000);

      // Fallback de seguridad
      window.setTimeout(enterGallery, 7500);
    } else {
      setTimeout(enterGallery, 400);
    }
  }

  startBtn.addEventListener('click', startCinematicVideoTransition);
  startBtn.addEventListener('touchend', startCinematicVideoTransition);

  /* ── Subtle Mouse Depth Parallax on Hero (Desktop only) ────── */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const heroTextWrapper = document.querySelector('.hero-text-wrapper');
    const heroAtmosphere = document.querySelector('.hero-epic-atmosphere');
    let heroTargetX = 0, heroTargetY = 0;
    let heroCurrentX = 0, heroCurrentY = 0;
    let isParallaxActive = false;

    window.addEventListener('mousemove', (e) => {
      if (currentView !== 'home' || stage.classList.contains('is-starting')) {
        heroTargetX = 0;
        heroTargetY = 0;
        return;
      }
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      heroTargetX = normX * 14;
      heroTargetY = normY * 10;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      heroTargetX = 0;
      heroTargetY = 0;
    });

    function updateHeroParallax() {
      if (currentView === 'home' && !stage.classList.contains('is-starting')) {
        heroCurrentX += (heroTargetX - heroCurrentX) * 0.055;
        heroCurrentY += (heroTargetY - heroCurrentY) * 0.055;
        if (heroTextWrapper) {
          heroTextWrapper.style.transform = `translate3d(${heroCurrentX.toFixed(2)}px, ${heroCurrentY.toFixed(2)}px, 0)`;
        }
        if (heroAtmosphere) {
          heroAtmosphere.style.transform = `translate3d(${(-heroCurrentX * 0.5).toFixed(2)}px, ${(-heroCurrentY * 0.5).toFixed(2)}px, 0) scale(1.02)`;
        }
        isParallaxActive = true;
      } else if (isParallaxActive) {
        if (heroTextWrapper) heroTextWrapper.style.transform = '';
        if (heroAtmosphere) heroAtmosphere.style.transform = '';
        heroCurrentX = 0;
        heroCurrentY = 0;
        heroTargetX = 0;
        heroTargetY = 0;
        isParallaxActive = false;
      }
      requestAnimationFrame(updateHeroParallax);
    }
    requestAnimationFrame(updateHeroParallax);
  }


  /* =========================================================
     CONTACT FORM SUBMISSION
     ========================================================= */
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Reset classes
      contactFeedback.className = 'form-feedback is-sending';
      contactFeedback.textContent = 'Sending...';
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
          contactFeedback.className = 'form-feedback is-success';
          contactFeedback.innerHTML = `
            <svg class="feedback-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="10" cy="10" r="9" opacity="0.35"/>
              <path class="feedback-check-path" d="M6 10.5l3 3 5-5.5"/>
            </svg>
            <span class="feedback-text-block">
              <span class="feedback-main">Message received.</span>
              <span class="feedback-sub">I will be in touch soon.</span>
            </span>`;
          contactForm.reset();
        } else {
          contactFeedback.className = 'form-feedback is-error';
          contactFeedback.innerHTML = `
            <svg class="feedback-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="10" cy="10" r="9" opacity="0.35"/>
              <line x1="10" y1="6" x2="10" y2="11"/><circle cx="10" cy="13.5" r="0.5" fill="currentColor"/>
            </svg>
            <span class="feedback-text-block">
              <span class="feedback-main"></span>
            </span>`;
          contactFeedback.querySelector('.feedback-main').textContent = data.message || 'Could not send message.';
        }
      } catch(err) {
        contactFeedback.className = 'form-feedback is-error';
        contactFeedback.innerHTML = `
          <svg class="feedback-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="10" cy="10" r="9" opacity="0.35"/>
            <line x1="10" y1="6" x2="10" y2="11"/><circle cx="10" cy="13.5" r="0.5" fill="currentColor"/>
          </svg>
          <span class="feedback-text-block">
            <span class="feedback-main">Connection error. Please try again.</span>
          </span>`;
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
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        go(idx + 1, { force: true });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        go(idx - 1, { force: true });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateViewSequence(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateViewSequence(-1);
      }
    } else if (currentView === 'home' || currentView === 'contact') {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateViewSequence(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateViewSequence(-1);
      }
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

  function navigateViewSequence(direction) {
    if (inExploreMode) return;
    const viewSequence = ['home', 'gallery', 'contact'];
    const curViewIdx = viewSequence.indexOf(currentView);
    if (curViewIdx === -1) return;
    const targetIdx = (curViewIdx + direction + viewSequence.length) % viewSequence.length;
    switchView(viewSequence[targetIdx]);
  }

  function updateViewNavButtons() {
    const viewSequence = ['home', 'gallery', 'contact'];
    const curViewIdx = viewSequence.indexOf(currentView);
    if (curViewIdx === -1) return;
    const prevView = viewSequence[(curViewIdx - 1 + viewSequence.length) % viewSequence.length];
    const nextView = viewSequence[(curViewIdx + 1) % viewSequence.length];

    const labels = {
      home: 'Home',
      gallery: 'Gallery',
      contact: 'Contact'
    };

    if (prevBtn) {
      prevBtn.setAttribute('aria-label', `Go to ${labels[prevView] || prevView}`);
      prevBtn.setAttribute('title', `${labels[prevView] || prevView}`);
    }
    if (nextBtn) {
      nextBtn.setAttribute('aria-label', `Go to ${labels[nextView] || nextView}`);
      nextBtn.setAttribute('title', `${labels[nextView] || nextView}`);
    }
  }

  function handleNext(e) {
    if (e) {
      if (e.type === 'touchend') e.preventDefault();
      e.stopPropagation();
    }
    navigateViewSequence(1);
  }

  function handlePrev(e) {
    if (e) {
      if (e.type === 'touchend') e.preventDefault();
      e.stopPropagation();
    }
    navigateViewSequence(-1);
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

  stage.addEventListener('wheel', (event) => {
    if (currentView === 'home') {
      if (event.deltaY > 20) {
        event.preventDefault();
        startCinematicVideoTransition();
      }
      return;
    }
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
        // Vertical swipe on mobile gallery changes continents, or on home enters gallery
        if (currentView === 'gallery') {
          go(idx + (deltaY > 0 ? 1 : -1), { force: true });
        } else if (currentView === 'home' && deltaY > 30) {
          startCinematicVideoTransition();
        }
      }
    } else {
      // Desktop touch fallback
      if (currentView === 'home' && absY > absX && deltaY > 30) {
        startCinematicVideoTransition();
      } else if (currentView === 'gallery') {
        if (absX > absY && absX > 36) {
          go(idx + (deltaX > 0 ? 1 : -1), { force: true });
        } else if (absY > absX && absY > 40) {
          go(idx + (deltaY > 0 ? 1 : -1), { force: true });
        }
      }
    }
  }, { passive: true });


  /* =========================================================
     IMAGE ASSET PROTECTION & ANTI-THEFT (DESKTOP & MOBILE)
     ========================================================= */
  // Prevent context menu (right-click on desktop and long-press menu on mobile)
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('img, .explore-viewer-img, .explore-viewer-container, .bg-layer, .bg-canvas, .dcard, .explore-card')) {
      e.preventDefault();
      return false;
    }
  });

  // Prevent dragging images to desktop or other tabs
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.closest('img, .explore-viewer-img, .bg-layer, .dcard, .explore-card')) {
      e.preventDefault();
      return false;
    }
  });

  // Prevent Ctrl+S / Cmd+S (Save webpage)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
    }
  });


  /* =========================================================
     INITIALIZE BASED ON URL HASH OR PATH
     ========================================================= */
  const initialPath = window.location.pathname.replace('/', '').toLowerCase();
  const hasSpecificHash = window.location.hash && window.location.hash !== '#home' && window.location.hash !== '#';

  if (hasSpecificHash) {
    isHandlingHashChange = true;
    handleHashNavigation();
    isHandlingHashChange = false;
  } else if (initialPath === 'gallery' || initialPath === 'gallery.html') {
    switchView('gallery', { skipHistory: true });
  } else if (initialPath === 'contact' || initialPath === 'contact.html' || initialPath === 'about' || initialPath === 'about.html') {
    switchView('contact', { skipHistory: true });
  } else {
    currentBgUrl = displayImageUrl(continents[0].hero);
    switchView('home', { skipHistory: true });
  }

})();

/* ── Custom Cursor ─────────────────────────────────────────────── */
(function initCursor() {
  // Only on devices with a real pointer (not touch)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let hidden = true;

  // Move dot instantly, ring lerps behind
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    if (hidden) { hidden = false; document.body.classList.remove('csr-hidden'); }
  });

  document.addEventListener('mouseleave', () => document.body.classList.add('csr-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('csr-hidden'));

  // Lerp ring towards mouse
  (function animateRing() {
    rx += (mx - rx) * 0.10;
    ry += (my - ry) * 0.10;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Hover state: buttons / links
  const hoverEls = document.querySelectorAll(
    'a, button, [role="button"], .explore, .spine-item, .view-nav-btn, ' +
    '.explore-nav-arrow, .explore-close-pill, .explore-zoom-btn'
  );
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('csr-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('csr-hover'));
  });

  // Photo state: images / gallery cards expand ring softly
  const photoEls = document.querySelectorAll('.dcard, .explore-viewer-img, .contact-photo img, .bg-layer');
  photoEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('csr-photo'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('csr-photo'));
  });

  // Start hidden until first move
  document.body.classList.add('csr-hidden');
})();