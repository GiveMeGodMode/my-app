import ProductItem from "./item/ProductItem";
import style from "./overlay.module.css";

const Overlay = (props) => {
    return (
        <div className={style.overlay}>
            <div className={style.product}>
                <div className={style.title_block}>
                    <h2>Заявки</h2>

                    <button className={style.close_btn} onClick={props.closeOverlay}>
                        X
                    </button>
                </div>
                {props.overlayProp.length > 0 ? (
                    <div className={style.product_list}>
                        {props.overlayProp.map((obj) => {
                            return (
                                <ProductItem
                                    id={obj.id}
                                    key={obj.id}
                                    title={obj.title}
                                    price={obj.price}
                                    img={obj.img}
                                    deleteItems={props.deleteItems}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <h3>Заявок нет</h3>
                )}
                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_summ}>{props.totalPrice}</p>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
