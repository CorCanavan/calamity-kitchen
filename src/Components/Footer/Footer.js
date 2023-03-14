import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <section className="createdBy-info">
        <h3>Created By:</h3>
        <p className="footer-name">Corinne Canavan</p>
        <a className="createdBy-link" href="https://github.com/CorCanavan">GitHub</a>
        <a className="createdBy-link" href="https://www.linkedin.com/in/corinnecanavan/">LinkedIn</a>
        <a className="createdBy-link" href="mailto:corinne.canavan@gmail.com">Gmail</a>
      </section>
      <section className="resources-info">
        <h3>Resources:</h3>
        <a className="resources-link" href="https://gadhagod.github.io/Hyrule-Compendium-API/#/">Hyrule Compendium API</a>
        <a className="resources-link" href="https://artsyomni.com/hyliaserif">Hylia Serif Font</a>
      </section>
    </footer>
  )
}

export default Footer;