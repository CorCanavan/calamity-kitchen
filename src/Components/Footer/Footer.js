import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <section className="createdBy-info">
        {/* <h3>Created By:</h3>
        <p className="footer-name">Corinne Canavan</p> */}
        {/* <span className="created-by"> <h3>Created By:</h3> Corinne Canavan</span> */}
        <p className="created-by">Created By: <span className="footer-name">Corinne Canavan</span></p>
        <span className="contact-info"><a className="createdBy-link" href="https://github.com/CorCanavan">GitHub | </a>
        <a className="createdBy-link" href="mailto:corinne.canavan@gmail.com">Gmail | </a>
        <a className="createdBy-link" href="https://www.linkedin.com/in/corinnecanavan/">LinkedIn</a></span>
      </section>
    </footer>
  )
}

export default Footer;