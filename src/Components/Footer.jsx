import Styles from "./Footer.module.css"

function Footer (){
    return(

        <footer className={Styles.pagamento}>

            <div>   
                <div className={Styles.titlesocial}>
                    <p>REDES SOCIAIS</p>

                </div>

                <div className={Styles.redesocial}>
                    <div className={Styles.insta}></div>
                    <div className={Styles.facebook}></div>
                    <div className={Styles.wifi}></div>
                    <div className={Styles.youtube}></div>
                    <div className={Styles.twitter}></div>
                </div>
            </div> 

            <div>   
                <div>
                    <p>FORMAS DE PAGAMENTO</p>

                </div>

                <div className={Styles.redesocial}>
                    <div className={Styles.pix}></div>
                    <div className={Styles.visa}></div>
                    <div className={Styles.mastercard}></div>
                    <div className={Styles.elo}></div>
                    <div className={Styles.american}></div>
                </div>
            </div> 
            

        </footer>
        

);
}
    
export default Footer