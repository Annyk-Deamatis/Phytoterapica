import Styles from "./Section2.module.css"
import Filtro from "../images/filtro.png"
import Relevancia from "../images/relevancia.png"

function Section (){
    return(

       <div className={Styles.quadradofiltro}>

            <div className={Styles.filtro}>
                <p>FILTRAR</p>
                <img src={Filtro} alt="filtro" />
            </div>

            <div className={Styles.relevancia}>
                <p>ORDENAR</p>
                <img src={Relevancia} alt="filtro" />
            </div>
        
       </div>

    );

}

export default Section