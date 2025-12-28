export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>SPHURAN 4.0</h4>
          <p>
            Annual Technical Fest<br />
            Electrical Engineers' Society<br />
            <strong>Department of Electrical Engineering, IIEST Shibpur</strong>
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Ruman Paul: <a href="tel:+918709825784">+91 XXXXXXXX</a><br />
            Ambhirin Roy: <a href="tel:+917890938525">+91 XXXXXXXX</a><br />
            Aminul Islam: <a href="tel:+916376153144">+91 9064767147</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <p>
            <a
              href="https://www.instagram.com/_sphuran.ees"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <br />
            <a
              href="https://www.linkedin.com/company/sphuran-iiests"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a href="mailto:secretary@sphuran@eesiiests.org">secretary@eesiiests.org</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SPHURAN | Electrical Engineers’ Society</p>
      </div>
    </footer>
  );
}