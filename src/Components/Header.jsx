import logo from "../images/logosite.png"
import Styles from "./Header.module.css"
import lupa from "../images/lupa.png"
import porcentagem from "../images/percentage-circle.png"
import conta from "../images/conta.png"
import carrinho from "../images/carrinho-de-compras.png"

function Header (){
    return(

        <header className={Styles.header}>

            <div className={Styles.quadradologo}>
            <img src={logo} alt="foto" />
            </div>

            <div className={Styles.menudireito}>
                <div className={Styles.pesquisa}>
                    <img src={lupa} alt="foto" />
                    <p> O que você procura?</p>
                </div>

                <div className={Styles.promo}>
                    <p> -5% NA PRIMEIRA COMPRA </p>
                    <img src={porcentagem} alt="foto" />
                </div>

                <div className={Styles.iconsmenu}>
                    <img src={conta} alt="usuario" />
                </div>

                <div className={Styles.iconsmenu}>
                    <img src={carrinho} alt="usuario" />
                </div>
            </div>
        </header>

    );

}

export default Header