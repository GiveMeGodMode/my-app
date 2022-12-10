import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.logo}>LIVE-TYR</div>
      <p>
        Единый многоканальный номер: +7 (495) 151-88-08
        <br />
        <br />
        Уполномоченные агентства ООО "Туристическая компания Капри
        <sup>&#xa9;</sup>"
      </p>
    </footer>
  );
};
export default Footer;
