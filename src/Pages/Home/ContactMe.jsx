export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact-title">Contactez moi</h2>
      </div>
      <form
        action="https://formspree.io/f/xyzzpqln"
        method="POST"
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Prénom</span>
            <input
              type="text"
              className="contact--input"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Nom</span>
            <input
              type="text"
              className="contact--input"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">E-mail</span>
            <input
              type="email"
              className="contact--input"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Numéro de téléphone</span>
            <input
              type="tel"
              className="contact--input"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choisir un sujet</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input"
            required
          >
            <option value="">Sélectionnez-en un...</option>
            <option value="Collaboration professionnelle">Collaboration professionnelle</option>
            <option value="Création de site web">Création de site web</option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input"
            name="message"
            id="message"
            rows="8"
            placeholder="Taper votre message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">J'accepte les conditions</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Soumettre
          </button>
        </div>
      </form>
    </section>
  );
}
