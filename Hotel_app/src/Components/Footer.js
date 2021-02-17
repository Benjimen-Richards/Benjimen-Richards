import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="footer">
      <hr />
      <h3>
        &copy; Benjimen Richards {props.year} {props.month}
      </h3>
    </div>
  );
};
export default Footer;
