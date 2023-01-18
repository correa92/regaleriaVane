import "./Footer.css";

const { DateTime } = require("luxon");

let anioActual = DateTime.now().year;
const link = "https://www.linkedin.com/in/correa-alejandro-ezequiel-dev92/";

const footer = () => {
  return (
    <div className="container_footer">
      <div className="footer">
        <h6>
          &copy; CopyRight 2022-{anioActual} - <span> Regalería Vane</span>
        </h6>
      </div>
      <div className="design">
        <a href={link}>
         Designed & Developed By Correa Alejandro
        </a>
      </div>
    </div>
  );
};

export default footer;
