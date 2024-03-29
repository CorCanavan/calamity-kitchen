import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <section className="created-by-info">
        <p className="created-by">Created By: <span className="footer-name">Corinne Canavan</span></p>
        <div className="contact-info">
          <a className="info-link" href="https://github.com/CorCanavan">GitHub | </a>
          <a className="info-link" href="mailto:corinne.canavan@gmail.com">Gmail | </a>
          <a className="info-link" href="https://www.linkedin.com/in/corinnecanavan/">LinkedIn</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;