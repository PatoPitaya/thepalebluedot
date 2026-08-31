const slides = [
  {
    key: 'africa',
    accent: '#E8935B',
    title: 'África',
    coords: '02°S · Serengeti, Tanzania',
    description: 'Sabanas que se pierden en el horizonte, luz dorada al amanecer y un silencio que solo interrumpe el viento entre las acacias.',
    image: 'https://images.unsplash.com/photo-1754662104555-ba06003183f2?auto=format&fit=crop&w=2400&q=80'
  },
  {
    key: 'asia',
    accent: '#4FA98A',
    title: 'Asia',
    coords: '08°S · Bali, Indonesia',
    description: 'Terrazas de arroz talladas en la ladera, templos entre la niebla y calas turquesa escondidas al final de cada sendero.',
    image: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=2400&q=80'
  },
  {
    key: 'australia',
    accent: '#D9683B',
    title: 'Oceanía',
    coords: '25°S · Territorio del Norte',
    description: 'Desiertos rojos que cambian de color con el sol, arrecifes infinitos bajo el agua y un cielo que de noche no tiene fin.',
    image: 'https://images.unsplash.com/photo-1760504008367-bca2f23a6541?auto=format&fit=crop&w=2400&q=80'
  }
];

const contactQuestions = [
  {
    question: '¿Cómo reservo una sesión?',
    answer: 'Envíame tu idea, la ciudad y una fecha aproximada. Con eso preparo la disponibilidad y el formato de sesión.'
  },
  {
    question: '¿Qué tipo de proyectos aceptas?',
    answer: 'Trabajo retratos, viajes, contenido editorial y sesiones visuales para marcas o proyectos personales.'
  },
  {
    question: '¿Cuándo respondes?',
    answer: 'Las consultas suelen recibir respuesta dentro de 24 a 48 horas.'
  }
];

const emptyContactForm = {
  name: '',
  email: '',
  message: ''
};

function getRoute() {
  return window.location.pathname === '/contact' ? 'contact' : 'home';
}

function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Escribe un nombre o el nombre del proyecto.';
  }

  if (!values.email.trim()) {
    errors.email = 'Añade un correo para responderte.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Introduce un correo válido.';
  }

  if (!values.message.trim()) {
    errors.message = 'Describe tu consulta antes de enviarla.';
  } else if (values.message.trim().length < 12) {
    errors.message = 'Añade un poco más de contexto para poder ayudarte mejor.';
  }

  return errors;
}

function formatSubmissionDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Sin fecha';
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [route, setRoute] = React.useState(getRoute());
  const [transitionState, setTransitionState] = React.useState('entering');
  const [prompt, setPrompt] = React.useState('Crea un itinerario de 4 días con amaneceres, cafés y miradores al atardecer.');
  const [vake, setVake] = React.useState({
    title: 'Vake · Ruta de silencio',
    summary: 'Una idea breve de viaje lista para transformar en una experiencia cargada de detalle y atmósfera.',
    highlights: ['Atmósfera contemplativa', 'Ritmo pausado', 'Puntos de descanso y luz']
  });
  const [feedback, setFeedback] = React.useState('Listo para crear tu próximo prompt.');
  const [contactForm, setContactForm] = React.useState(emptyContactForm);
  const [contactErrors, setContactErrors] = React.useState({});
  const [contactLoading, setContactLoading] = React.useState(false);
  const [contactFeedback, setContactFeedback] = React.useState('Describe tu idea y recibirás una respuesta por correo.');
  const [recentContacts, setRecentContacts] = React.useState([]);
  const [recentContactsLoading, setRecentContactsLoading] = React.useState(false);
  const transitionTimerRef = React.useRef(null);

  React.useEffect(() => {
    const initialTimer = window.setTimeout(() => setTransitionState('idle'), 220);
    return () => window.clearTimeout(initialTimer);
  }, []);

  React.useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    function handlePopState() {
      setRoute(getRoute());
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = route === 'contact' ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, [route]);

  React.useEffect(() => {
    if (route !== 'contact') return;

    let cancelled = false;

    async function loadRecentContacts() {
      setRecentContactsLoading(true);

      try {
        const response = await fetch('/api/contact');
        if (!response.ok) {
          throw new Error('No se pudieron cargar las consultas recientes.');
        }

        const payload = await response.json();
        if (!cancelled) {
          setRecentContacts(payload.submissions || []);
        }
      } catch (error) {
        if (!cancelled) {
          setRecentContacts([]);
        }
      } finally {
        if (!cancelled) {
          setRecentContactsLoading(false);
        }
      }
    }

    loadRecentContacts();

    return () => {
      cancelled = true;
    };
  }, [route]);

  const changeSlide = React.useCallback((nextIndex) => {
    if (nextIndex === activeIndex) return;
    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    setTransitionState('exiting');
    transitionTimerRef.current = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setTransitionState('entering');
      transitionTimerRef.current = window.setTimeout(() => {
        setTransitionState('idle');
        transitionTimerRef.current = null;
      }, 1200);
    }, 420);
  }, [activeIndex]);

  React.useEffect(() => {
    if (route !== 'home') return;

    const timer = window.setInterval(() => {
      changeSlide((activeIndex + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [activeIndex, changeSlide, route]);

  const slide = slides[activeIndex];
  const contentPhaseClass = transitionState === 'exiting' ? 'content-exiting' : transitionState === 'entering' ? 'content-entering' : 'content-idle';

  function navigateTo(nextRoute) {
    const nextPath = nextRoute === 'contact' ? '/contact' : '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setRoute(nextRoute);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFeedback('Generando el Vake desde el backend...');

    try {
      const response = await fetch('/api/compose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue válida');
      }

      const payload = await response.json();
      setVake(payload.vake);
      setFeedback(payload.message);
    } catch (error) {
      setFeedback('No se pudo conectar con la API. Revisa el backend.');
    }
  }

  function handleContactChange(event) {
    const { name, value } = event.target;
    const nextForm = Object.assign({}, contactForm, { [name]: value });
    setContactForm(nextForm);

    if (contactErrors[name]) {
      const nextErrors = validateContactForm(nextForm);
      setContactErrors((current) => Object.assign({}, current, { [name]: nextErrors[name] }));
    }
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContactForm(contactForm);
    setContactErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setContactFeedback('Revisa los campos marcados antes de enviar.');
      return;
    }

    setContactLoading(true);
    setContactFeedback('Enviando tu consulta...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || 'No se pudo enviar la consulta');
      }

      setRecentContacts([
        {
          submitted_at: new Date().toISOString(),
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message
        }
      ].concat(recentContacts).slice(0, 5));
      setContactForm(emptyContactForm);
      setContactErrors({});
      setContactFeedback(payload.message);
    } catch (error) {
      setContactFeedback(error.message || 'No se pudo conectar con el backend de contacto.');
    } finally {
      setContactLoading(false);
    }
  }

  if (route === 'contact') {
    return React.createElement(
      'div',
      { className: 'stage contact-view', style: { '--accent': '#E8935B' } },
      React.createElement('div', { className: 'bg-layer bg-idle', style: { backgroundImage: "url('/images/optimized/contact/PJO05448.webp')" } }),
      React.createElement('div', { className: 'overlay overlay-idle' }),
      React.createElement(
        'nav',
        { className: 'nav' },
        React.createElement('div', { className: 'wordmark' }, 'Meridian', React.createElement('small', null, '· cuadernos de viaje')),
        React.createElement(
          'ul',
          { className: 'nav-links' },
          React.createElement('li', null, React.createElement('a', { href: '/', onClick: (event) => { event.preventDefault(); navigateTo('home'); } }, 'Diario')),
          React.createElement('li', null, React.createElement('a', { href: '/', onClick: (event) => { event.preventDefault(); navigateTo('home'); } }, 'Rutas')),
          React.createElement('li', null, React.createElement('a', { href: '/contact', className: 'nav-link-active', onClick: (event) => { event.preventDefault(); navigateTo('contact'); } }, 'Contacto'))
        ),
        React.createElement('div', { className: 'nav-cta' }, React.createElement('button', { className: 'icon-btn', type: 'button', 'aria-label': 'Buscar' }, '⌕'), React.createElement('button', { className: 'signup', type: 'button' }, 'Escribir ahora'))
      ),
      React.createElement(
        'main',
        { className: 'contact-shell' },
        React.createElement(
          'section',
          { className: 'contact-hero' },
          React.createElement('div', { className: 'contact-copy' }, React.createElement('p', { className: 'coords' }, 'Contacto directo'), React.createElement('h1', { className: 'contact-title' }, 'Un espacio para preguntas, ideas y nuevas sesiones.'), React.createElement('p', { className: 'contact-desc' }, 'Si quieres reservar una sesión, pedir información o compartir una idea visual, este espacio reúne las preguntas más comunes y un punto claro de contacto.')),
          React.createElement('div', { className: 'contact-image-frame' }, React.createElement('img', { src: '/images/optimized/contact/PJO05448.webp', alt: 'Sesión fotográfica de contacto', className: 'contact-image' }))
        ),
        React.createElement(
          'section',
          { className: 'question-area' },
          React.createElement('div', { className: 'question-intro' }, React.createElement('span', { className: 'pill' }, 'Preguntas'), React.createElement('h2', null, 'Preguntas frecuentes'), React.createElement('p', null, 'Respuestas rápidas para que sepas qué enviar y cómo empezar la conversación.')),
          React.createElement('div', { className: 'question-grid' }, contactQuestions.map((item) => React.createElement('article', { key: item.question, className: 'question-card' }, React.createElement('h3', null, item.question), React.createElement('p', null, item.answer))))
        ),
        React.createElement(
          'section',
          { className: 'question-panel' },
          React.createElement('div', null, React.createElement('span', { className: 'pill pill-soft' }, 'Consulta'), React.createElement('h2', null, 'Haz tu pregunta'), React.createElement('p', null, 'Escríbeme con tu idea, ciudad y fecha tentativa para responderte con una propuesta adecuada.')),
          React.createElement(
            'form',
            { className: 'contact-form', onSubmit: handleContactSubmit },
            React.createElement('div', { className: 'form-field' }, React.createElement('input', { type: 'text', name: 'name', value: contactForm.name, onChange: handleContactChange, placeholder: 'Nombre o proyecto', 'aria-label': 'Nombre o proyecto', 'aria-invalid': Boolean(contactErrors.name), className: contactErrors.name ? 'field-error' : '' }), contactErrors.name ? React.createElement('span', { className: 'field-help' }, contactErrors.name) : null),
            React.createElement('div', { className: 'form-field' }, React.createElement('input', { type: 'email', name: 'email', value: contactForm.email, onChange: handleContactChange, placeholder: 'Correo electrónico', 'aria-label': 'Correo electrónico', 'aria-invalid': Boolean(contactErrors.email), className: contactErrors.email ? 'field-error' : '' }), contactErrors.email ? React.createElement('span', { className: 'field-help' }, contactErrors.email) : null),
            React.createElement('div', { className: 'form-field form-field-wide' }, React.createElement('textarea', { rows: '5', name: 'message', value: contactForm.message, onChange: handleContactChange, placeholder: 'Cuéntame tu pregunta o el tipo de sesión que buscas', 'aria-label': 'Pregunta o mensaje', 'aria-invalid': Boolean(contactErrors.message), className: contactErrors.message ? 'field-error' : '' }), contactErrors.message ? React.createElement('span', { className: 'field-help' }, contactErrors.message) : null),
            React.createElement('button', { className: 'submit-btn', type: 'submit', disabled: contactLoading }, contactLoading ? 'Enviando...' : 'Enviar consulta')
          ),
          React.createElement('p', { className: 'feedback' }, contactFeedback)
        ),
        React.createElement(
          'section',
          { className: 'question-panel recent-panel' },
          React.createElement('div', null, React.createElement('span', { className: 'pill' }, 'Público'), React.createElement('h2', null, 'Consultas recientes'), React.createElement('p', null, 'Últimos mensajes recibidos desde el formulario de contacto.')),
          recentContactsLoading ? React.createElement('p', { className: 'feedback' }, 'Cargando consultas recientes...') : null,
          !recentContactsLoading && recentContacts.length === 0 ? React.createElement('p', { className: 'feedback' }, 'Todavía no hay consultas guardadas.') : null,
          !recentContactsLoading && recentContacts.length > 0 ? React.createElement('div', { className: 'recent-list' }, recentContacts.map((item, index) => React.createElement('article', { key: `${item.email}-${item.submitted_at}-${index}`, className: 'recent-card' }, React.createElement('div', { className: 'recent-card-top' }, React.createElement('h3', null, item.name), React.createElement('span', null, formatSubmissionDate(item.submitted_at))), React.createElement('p', { className: 'recent-email' }, item.email), React.createElement('p', null, item.message)))) : null
        )
      )
    );
  }

  return React.createElement(
    'div',
    { className: 'stage', style: { '--accent': slide.accent } },
    React.createElement('div', { className: `bg-layer ${transitionState === 'exiting' ? 'bg-exiting' : transitionState === 'entering' ? 'bg-entering' : 'bg-idle'}`, style: { backgroundImage: `url('${slide.image}')` } }),
    React.createElement('div', { className: `overlay ${transitionState === 'exiting' ? 'overlay-exiting' : transitionState === 'entering' ? 'overlay-entering' : 'overlay-idle'}` }),
    React.createElement(
      'nav',
      { className: 'nav' },
      React.createElement('div', { className: 'wordmark' }, 'Meridian', React.createElement('small', null, '· cuadernos de viaje')),
      React.createElement('ul', { className: 'nav-links' },
        React.createElement('li', null, React.createElement('a', { href: '/', className: 'nav-link-active', onClick: (event) => event.preventDefault() }, 'Diario')),
        React.createElement('li', null, React.createElement('a', { href: '/', onClick: (event) => event.preventDefault() }, 'Rutas')),
        React.createElement('li', null, React.createElement('a', { href: '/contact', onClick: (event) => { event.preventDefault(); navigateTo('contact'); } }, 'Contacto'))
      ),
      React.createElement('div', { className: 'nav-cta' }, React.createElement('button', { className: 'icon-btn', type: 'button', 'aria-label': 'Buscar' }, '⌕'), React.createElement('button', { className: 'signup', type: 'button', onClick: () => navigateTo('contact') }, 'Empezar viaje'))
    ),
    React.createElement(
      'div',
      { className: 'spine' },
      React.createElement('div', { className: 'spine-line' }),
      slides.map((entry, index) => React.createElement('button', { key: entry.key, type: 'button', className: `spine-item${activeIndex === index ? ' active' : ''}`, onClick: () => changeSlide(index) }, React.createElement('span', { className: 'num' }, String(index + 1).padStart(2, '0')), entry.title === 'Oceanía' ? 'Oceanía' : entry.title, React.createElement('span', { className: 'dot' })))
    ),
    React.createElement(
      'div',
      { className: 'content' },
      React.createElement('div', { className: `hero-copy ${contentPhaseClass}` }, React.createElement('p', { className: 'coords' }, slide.coords), React.createElement('h1', { className: 'title' }, slide.title), React.createElement('p', { className: 'desc' }, slide.description), React.createElement('button', { className: 'explore', type: 'button' }, 'Explore')),
      React.createElement(
        'div',
        { className: `composer-card ${contentPhaseClass}` },
        React.createElement('div', { className: 'composer-head' }, React.createElement('span', { className: 'pill' }, 'Prompt'), React.createElement('span', { className: 'pill pill-soft' }, 'Vake')),
        React.createElement('form', { className: 'composer-form', onSubmit: handleSubmit }, React.createElement('label', { className: 'composer-label', htmlFor: 'prompt' }, 'Describe tu idea'), React.createElement('textarea', { id: 'prompt', rows: '5', value: prompt, onChange: (event) => setPrompt(event.target.value) }), React.createElement('button', { className: 'submit-btn', type: 'submit' }, 'Crear Vake')),
        React.createElement('div', { className: 'vake-card' }, React.createElement('p', { className: 'vake-label' }, 'Resultado'), React.createElement('h2', null, vake.title), React.createElement('p', null, vake.summary), React.createElement('ul', null, vake.highlights.map((item) => React.createElement('li', { key: item }, item)))),
        React.createElement('p', { className: 'feedback' }, feedback)
      )
    ),
    React.createElement(
      'div',
      { className: `bottom-bar ${contentPhaseClass}` },
      React.createElement('div', { className: 'pagecount' }, React.createElement('b', null, String(activeIndex + 1).padStart(2, '0')), ' / 03'),
      React.createElement('div', { className: 'track' }),
      React.createElement('div', { className: 'arrows' }, React.createElement('button', { className: 'arrow-btn', type: 'button', onClick: () => changeSlide((activeIndex - 1 + slides.length) % slides.length) }, '←'), React.createElement('button', { className: 'arrow-btn', type: 'button', onClick: () => changeSlide((activeIndex + 1) % slides.length) }, '→'))
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null, React.createElement(App)));
