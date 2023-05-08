import Styles from "./Vegano.module.css"
import vegano from "../images/vegano-green-icon - Copia.svg"
import pata from "../images/pata-green-icon.svg"
import gotas from "../images/gotas-green-icon.svg"

function Diferencial (){
    return(

        <section className={Styles.diferencial}>

            <div className={Styles.bloco1}>
                <div className={Styles.vegano}>
                    <div>
                    <img src={vegano} alt="vegano" />
                    </div>

                    <div className={Styles.title_vegan}>
                        <h2>Vegano</h2>
                        <p>sem componentes de origem animal</p>
                    </div>
                </div>
            </div>

            <div className={Styles.bloco1}>
                <div className={Styles.pata}>
                    <div>
                        <img src={pata} alt="vegano" />
                    </div>

                    <div className={Styles.title_vegan}>
                        <h2>Cruelty-Free</h2>
                        <p>não testado em animais</p>
                    </div>
                </div>
            </div>

            <div className={Styles.bloco1}>
                <div className={Styles.gotas}>
                        <div>
                            <img src={gotas} alt="vegano" />
                        </div>

                        <div className={Styles.title_vegan}>
                            <h2>100% Puro</h2>
                            <p>óleos puros e naturais</p>
                        </div>
                    </div>
                </div>
        </section>
        

);
}
    
export default Diferencial