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
            {/* Populate images grid */}
            <div className={`row ${styles.imageRow}`}>
              {projects?
                projects.map(((item,idx) => {
                return(
                  <>
                    <a href="#" key={idx} className={`col-sm-6 d-flex-column ${styles.projectImg}`} style={{backgroundImage:`url(${item.image})`}}>
                      <div>
                        {item.unicorn?<p className={`${styles.unicorn}`}><img src="/images/unicorn.png" alt="Unicorn"/> Unicorn</p>:null}
                      </div>
                    </a>
                  </>
                )
                }))
              :null}
            </div>
          </div>
        </div>
      </div>
    )
}