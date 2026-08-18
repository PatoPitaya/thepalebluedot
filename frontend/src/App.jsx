import { useEffect, useState } from 'react';
import contactImage from '../../images/contact/PJO05448.jpg';

const slides = [
  {
    key: 'africa',
    accent: '#E8935B',
    title: 'África',
    coords: '02°S · Serengeti, Tanzania',
    description:
      'Sabanas que se pierden en el horizonte, luz dorada al amanecer y un silencio que solo interrumpe el viento entre las acacias.',
    image: 'https://images.unsplash.com/photo-1754662104555-ba06003183f2?auto=format&fit=crop&w=2400&q=80'
  },
  {
    key: 'asia',
    accent: '#4FA98A',
    title: 'Asia',
    coords: '08°S · Bali, Indonesia',
    description:
      'Terrazas de arroz talladas en la ladera, templos entre la niebla y calas turquesa escondidas al final de cada sendero.',
    image: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?auto=format&fit=crop&w=2400&q=80'
  },
  {
    key: 'australia',
    accent: '#D9683B',
    title: 'Oceanía',
    coords: '25°S · Territorio del Norte',
    description:
      'Desiertos rojos que cambian de color con el sol, arrecifes infinitos bajo el agua y un cielo que de noche no tiene fin.',
    image: 'https://images.unsplash.com/photo-1760504008367-bca2f23a6541?auto=format&fit=crop&w=2400&q=80'
  }
];

const initialVake = {
  title: 'Vake · Ruta de silencio',
  summary: 'Una idea breve de viaje lista para transformar en una experiencia cargada de detalle y atmósfera.',
  highlights: ['Atmósfera contemplativa', 'Ritmo pausado', 'Puntos de descanso y luz']
};

const contactQuestions = [
  {
    question: '¿Cómo puedo pedir una sesión fotográfica?',
    answer: 'Cuéntame el tipo de proyecto, la fecha estimada y la ubicación. Con eso preparo una propuesta inicial y disponibilidad.'
  },
  {
    question: '¿Trabajas retratos, viajes o marcas?',
    answer: 'Sí. La agenda está abierta para retrato editorial, fotografía de viaje, campañas pequeñas y contenido visual para marcas.'
  },
  {
    question: '¿En cuánto tiempo respondes?',
    answer: 'Las consultas se responden normalmente dentro de 24 a 48 horas con siguientes pasos claros.'
  }
];

function App() {
  const emptyContactForm = {
    name: '',
    email: '',
    message: ''
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentView, setCurrentView] = useState('home');
  const [prompt, setPrompt] = useState('Crea un itinerario de 4 días con amaneceres, cafés y miradores al atardecer.');
  const [vake, setVake] = useState(initialVake);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('Listo para crear tu próximo prompt.');
  const [contactForm, setContactForm] = useState(emptyContactForm);
  const [contactErrors, setContactErrors] = useState({});
  const [contactLoading, setContactLoading] = useState(false);
  const [contactFeedback, setContactFeedback] = useState('Describe tu idea y recibirás una respuesta por correo.');
  const [recentContacts, setRecentContacts] = useState([]);
  const [recentContactsLoading, setRecentContactsLoading] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = currentView === 'contact' ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, [currentView]);

  useEffect(() => {
    if (currentView !== 'contact') {
      return;
    }

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
        console.error(error);
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
  }, [currentView]);

  const currentSlide = slides[activeIndex];

  function validateContactForm(values) {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Escribe un nombre o el nombre del proyecto.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Añade un correo para poder responderte.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Introduce un correo válido.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Describe tu consulta antes de enviarla.';
    } else if (values.message.trim().length < 12) {
      nextErrors.message = 'Añade un poco más de contexto para poder ayudarte mejor.';
    }

    return nextErrors;
  }

  function formatSubmissionDate(value) {
    if (!value) {
      return 'Sin fecha';
    }

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

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setFeedback('Generando el Vake desde el backend...');

    try {
      const response = await fetch('/api/compose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error('No se pudo completar la solicitud');
      }

      const payload = await response.json();
      setVake(payload.vake);
      setFeedback(payload.message);
    } catch (error) {
      console.error(error);
      setFeedback('No se pudo conectar con la API. Revisa el backend.');
    } finally {
      setLoading(false);
    }
  }

  function handleContactChange(event) {
    const { name, value } = event.target;
    setContactForm((current) => {
      const nextForm = {
        ...current,
        [name]: value
      };

      if (contactErrors[name]) {
        setContactErrors((currentErrors) => ({
          ...currentErrors,
          [name]: validateContactForm(nextForm)[name]
        }));
      }

      return nextForm;
    });
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

      setContactFeedback(payload.message);
      setContactForm(emptyContactForm);
      setContactErrors({});
      setRecentContacts((current) => [
        {
          submitted_at: new Date().toISOString(),
          ...contactForm
        },
        ...current
      ].slice(0, 5));
    } catch (error) {
      console.error(error);
      setContactFeedback(error.message || 'No se pudo conectar con el backend de contacto.');
    } finally {
      setContactLoading(false);
    }
  }

  return (
    <div className={`stage ${currentView === 'contact' ? 'contact-view' : 'home-view'}`} style={{ '--accent': currentSlide.accent }}>
      <div className="bg-layer active" style={{ backgroundImage: `url('${currentSlide.image}')` }} />
      <div className="overlay" />

      <nav className="nav">
        <div className="wordmark">
          Meridian <small>· cuadernos de viaje</small>
        </div>
        <ul className="nav-links">
          <li><button type="button" className={`nav-link-btn ${currentView === 'home' ? 'active' : ''}`} onClick={() => setCurrentView('home')}>Diario</button></li>
          <li><button type="button" className={`nav-link-btn ${currentView === 'home' ? 'active' : ''}`} onClick={() => setCurrentView('home')}>Rutas</button></li>
          <li><button type="button" className={`nav-link-btn ${currentView === 'contact' ? 'active' : ''}`} onClick={() => setCurrentView('contact')}>Contacto</button></li>
        </ul>
        <div className="nav-cta">
          <button className="icon-btn" aria-label="Buscar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
          <button className="signup" type="button" onClick={() => setCurrentView('contact')}>Escribir ahora</button>
        </div>
      </nav>

      {currentView === 'home' ? (
        <>
          <div className="spine">
            {slides.map((slide, index) => (
              <button
                key={slide.key}
                type="button"
                className={`spine-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="num">{String(index + 1).padStart(2, '0')}</span>
                {slide.title === 'Oceanía' ? 'Oceanía' : slide.title}
                <span className="dot" />
              </button>
            ))}
          </div>

          <div className="content">
            <div className="hero-copy">
              <p className="coords">{currentSlide.coords}</p>
              <h1 className="title">{currentSlide.title}</h1>
              <p className="desc">{currentSlide.description}</p>
              <button className="explore" type="button">Explorar la ruta</button>
            </div>

            <div className="composer-card">
              <div className="composer-head">
                <span className="pill">Prompt</span>
                <span className="pill pill-soft">Vake</span>
              </div>
              <form onSubmit={handleSubmit} className="composer-form">
                <label htmlFor="prompt" className="composer-label">Describe tu idea</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  rows={5}
                />
                <button className="submit-btn" type="submit" disabled={loading}>
                  {loading ? 'Generando...' : 'Crear Vake'}
                </button>
              </form>

              <div className="vake-card">
                <p className="vake-label">Resultado</p>
                <h2>{vake.title}</h2>
                <p>{vake.summary}</p>
                <ul>
                  {vake.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="feedback">{feedback}</p>
            </div>
          </div>

          <div className="bottom-bar">
            <div className="pagecount">{String(activeIndex + 1).padStart(2, '0')} / 03</div>
            <div className="track" />
            <div className="arrows">
              <button className="arrow-btn" type="button" onClick={() => setActiveIndex((value) => (value - 1 + slides.length) % slides.length)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button className="arrow-btn" type="button" onClick={() => setActiveIndex((value) => (value + 1) % slides.length)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <main className="contact-shell">
          <section className="contact-hero">
            <div className="contact-copy">
              <p className="coords">Contacto directo</p>
              <h1 className="contact-title">Un espacio para preguntas, ideas y nuevas sesiones.</h1>
              <p className="contact-desc">
                Si quieres reservar una sesión, pedir información o compartir una idea visual, este espacio reúne las preguntas más comunes y un punto claro de contacto.
              </p>
            </div>
            <div className="contact-image-frame">
              <img src={contactImage} alt="Sesión fotográfica de contacto" className="contact-image" />
            </div>
          </section>

          <section className="question-area">
            <div className="question-intro">
              <span className="pill">Preguntas</span>
              <h2>Preguntas frecuentes</h2>
              <p>Respuestas rápidas para que sepas qué enviar y cómo empezar la conversación.</p>
            </div>
            <div className="question-grid">
              {contactQuestions.map((item) => (
                <article key={item.question} className="question-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="question-panel">
            <div>
              <span className="pill pill-soft">Consulta</span>
              <h2>Haz tu pregunta</h2>
              <p>Escríbeme con tu idea, ciudad y fecha tentativa para responderte con una propuesta adecuada.</p>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Nombre o proyecto"
                  aria-label="Nombre o proyecto"
                  aria-invalid={Boolean(contactErrors.name)}
                  className={contactErrors.name ? 'field-error' : ''}
                />
                {contactErrors.name ? <span className="field-help">{contactErrors.name}</span> : null}
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Correo electrónico"
                  aria-label="Correo electrónico"
                  aria-invalid={Boolean(contactErrors.email)}
                  className={contactErrors.email ? 'field-error' : ''}
                />
                {contactErrors.email ? <span className="field-help">{contactErrors.email}</span> : null}
              </div>
              <div className="form-field form-field-wide">
                <textarea
                  rows={5}
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Cuéntame tu pregunta o el tipo de sesión que buscas"
                  aria-label="Pregunta o mensaje"
                  aria-invalid={Boolean(contactErrors.message)}
                  className={contactErrors.message ? 'field-error' : ''}
                />
                {contactErrors.message ? <span className="field-help">{contactErrors.message}</span> : null}
              </div>
              <button className="submit-btn" type="submit" disabled={contactLoading}>
                {contactLoading ? 'Enviando...' : 'Enviar consulta'}
              </button>
            </form>
            <p className="feedback">{contactFeedback}</p>
          </section>

          <section className="question-panel recent-panel">
            <div>
              <span className="pill">Panel interno</span>
              <h2>Consultas recientes</h2>
              <p>Últimos mensajes recibidos desde el formulario de contacto.</p>
            </div>
            {recentContactsLoading ? <p className="feedback">Cargando consultas recientes...</p> : null}
            {!recentContactsLoading && recentContacts.length === 0 ? <p className="feedback">Todavía no hay consultas guardadas.</p> : null}
            {!recentContactsLoading && recentContacts.length > 0 ? (
              <div className="recent-list">
                {recentContacts.map((item, index) => (
                  <article key={`${item.email}-${item.submitted_at}-${index}`} className="recent-card">
                    <div className="recent-card-top">
                      <h3>{item.name}</h3>
                      <span>{formatSubmissionDate(item.submitted_at)}</span>
                    </div>
                    <p className="recent-email">{item.email}</p>
                    <p>{item.message}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
