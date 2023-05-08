import Styles from "./Menu.module.css"

function Header (){
    return(

       <div className={Styles.links}>

            <p>ÓLEOS ESSENCIAIS</p>
            <p>ÓLEOS VEGETAIS</p>
            <p>SINERGIAS</p>
            <p>COSMÉTICOS NATURAIS</p>
            <p>HIGIENE PESSOAL</p>
            <p>AROMATIZADORES</p>
            <p>SUPLEMENTOS</p>
            <p>ACESSÓRIOS</p>
            <p>OFERTAS</p>
            <p>CONSULTOR(A)</p>
        
       </div>

    );

}

export default Header