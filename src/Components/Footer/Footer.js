import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <section className="createdBy-info">
        <p className="created-by">Created By: <span className="footer-name">Corinne Canavan</span></p>
        <div className="contact-info">
          <a className="createdBy-link" href="https://github.com/CorCanavan">GitHub | </a>
          <a className="createdBy-link" href="mailto:corinne.canavan@gmail.com">Gmail | </a>
          <a className="createdBy-link" href="https://www.linkedin.com/in/corinnecanavan/">LinkedIn</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;