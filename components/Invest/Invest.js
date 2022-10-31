import InvestCard from "./InvestCard";
import styles from "../../styles/Invest.module.css";
import dataParser from "../../utilities/dataParser";

const investments = [
  {
    hashtag: "#web3",
    projectName:"NeoSwap",
    image:"/images/bgImg.jpeg",
    logo:"/images/companyLogo.jpeg",
    headline:"Perfect NFT swaps,by design."
  },
  {
    hashtag: "#ESGxTech",
    projectName:"Cerqular",
    image:"/images/bgImg.jpeg",
    logo:"/images/companyLogo.jpeg",
    headline:"The largest and fastest growing sustainable marketplace."
  },
   {
    hashtag: "#Industry4.0",
    projectName:"Antiverse",
    image:"/images/bgImg.jpeg",
    logo:"/images/companyLogo.jpeg",
    headline:"Engineering the future of drug discovery"
  },
  {
    hashtag: "#web3",
    projectName:"Bunch Live",
    image:"/images/bgImg.jpeg",
    logo:"/images/companyLogo.jpeg",
    headline:"Roblox meets Discord on the blockchain."
  },
  {
    hashtag: "#Hello",
    projectName:"Yes ",
    image:"/images/bgImg.jpeg",
    logo:"/images/companyLogo.jpeg",
    headline:"Lorem impsum dolor sit amet."
  }
]

export default function Invest(){
  return(
    <div>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Investment Opportunities</h1>
          <p className={styles.introText}>Investment opportunities on this platform are available to only Professional Investors as defined in the Securities and Futures Ordinance (SFO) of Hong Kong SAR</p>
      </div>
    <div className={`container-fluid ${styles.investNow}`}>
      {/* Populate x3 images wide grid */}
      {investments?
      dataParser(investments, 3).map(
        (row,idx) =>
          <div className="row" key={idx}>
            {row.map((item,idx) =>
              <InvestCard
              key={idx}
              hashtag={item.hashtag}
              projectName={item.projectName}
              image={item.image}
              logo={item.logo}
              headline={item.headline}
              />
            )}
          </div>
        )
        :null}
      </div>
    </div>
    )
}