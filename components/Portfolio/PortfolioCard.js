import dataParser from "../../utilities/dataParser";
import styles from "../../styles/PortfolioCard.module.css";
import { useState } from "react";

export default function SuccessfulPortfolioCard({category,projects}) {

  //Collapse the div on small screen
  let [toggled, setToggled]=useState(false);
  const handleClick = () => {
    setToggled(!toggled);
  }
    return(
      <div>
        <div className={`card ${styles.card}`}>
          <div className={`card-title ${styles.cardTitle}`} onClick={handleClick}>{category}</div>
          <div className={toggled?`card-body`:`card-body d-none d-md-block`}>
            {/* Populate x3 images wide grid */}
            {projects?
            dataParser(projects, 3).map(
              (row,idx) =>
                <div className={`row ${styles.imageRow}`} key={idx}>
                  {row.map((item,idx) =>{
                    return(
                    <div key={idx} className={`col-sm-4 d-flex-column ${styles.projectImg}`} style={{backgroundImage:`url(${item.image})`}}>
                    {item.unicorn?<p className={`${styles.unicorn}`}><img src="/images/unicorn.png" alt="Unicorn"/> Unicorn</p>:null}
                    </div>
                  )}
                  )}
              </div>
            )
          :null}
          </div>
        </div>
      </div>
    )
}