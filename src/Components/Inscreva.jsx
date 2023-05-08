import Styles from "./Inscreva.module.css"

function Inscreva (){
    return(

        <section className={Styles.section3}>

            <div className={Styles.inscrevase}>
                <p><span> INSCREVA-SE </span><br />E RECEBA NOVIDADES E PROMOÇÕES</p>
            </div>

            <div className={Styles.email}>
                <input type="email"  placeholder="Seu e-mail"/>
            </div>

            <div className={Styles.assinar}>
                <p>ASSINAR NEWSLETTER</p>
            </div>

        </section>
        

);
}
    
export default Inscreva