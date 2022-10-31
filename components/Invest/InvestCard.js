import Image from "next/image";
import styles from "../../styles/InvestCard.module.css"

export default function InvestCard(props) {
    return(
        <div className="col-lg-4 d-flex align-items-stretch justify-content-center">
        {/* Card Item */}
            <div className={`card ${styles.card}`}>
        {/*  Title Section*/}
                <h6 className={`card-title ${styles.hashtag}`}>{props.hashtag}</h6>
        {/*  Image + Logo*/}
                <div className={styles.cardImg}>
                    <Image src={props.image} alt="project background image" fill="responsive" object-fit="contain"/>
                    <div className={styles.cardLogo}>
                        <Image src={props.logo} alt="project brand logo" fill="responsive" object-fit="contain" />
                    </div>
                </div>
        {/* Project description + name */}
                <div className={`card-body ${styles.cardBody}`}>
                    <h5 className="card-title">{props.projectName}</h5>
                        <p className="card-text">{props.headline}</p>
                </div>
    {/* Footer + button section */}
                <div className={styles.cardFooter}>
                    <button className={`btn ${styles.investBtn}`}><a href={props.url}>Invest now</a></button>
                </div>
            </div>
        </div>
        
    )
}