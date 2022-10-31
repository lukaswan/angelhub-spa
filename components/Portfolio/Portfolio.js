import PortfolioCard from "./PortfolioCard";
import styles from "../../styles/Portfolio.module.css";
import dataParser from "../../utilities/dataParser";

const successes = [
  {
    category:"Web3",
    projects:
    [
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:"EXIT 19X RETURN"
      },
      {
        projectName:"Animoca",
        image:"/images/image1.jpeg",
        unicorn:true,
        annotation:""
        
      },
      {
        projectName:"Metakey",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
        
      },
      {
        projectName:"Coda",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
        
      },
      {
        projectName:"BNV",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
        
      },
      {
        projectName:"Klang",
        image:"/images/image1.jpeg",
        unicorn:false,
        
      },
      {
        projectName:"Village",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      }
    ]
  },
  {
    category:"Fintech",
    projects:
    [
      {
        projectName:"KYC",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:"MARK UP"
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
    ]
  },
  {
    category:"ESGxTech",
    projects:
    [
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:"EXIT"
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:"MARK UP"
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        annotation:""
      },

      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
      {
        projectName:"Welab",
        image:"/images/image1.jpeg",
        unicorn:true,
        annotation:""
      }
    ]
  },
  {
    category:"Industry4",
    projects:
    [
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      },
      {
        projectName:"Sandbox",
        image:"/images/image1.jpeg",
        unicorn:false,
        annotation:""
      }
    ]
  },
]

export default function Portfolio() {
    return(
        <div className={`container-fluid text-center ${styles.portfolio}`}>
          <h1 className={`${styles.title}`}>Successful Portfolio Companies</h1>
          <div className="row">
            {/* Populate 2 cards per column */}
          {successes?dataParser(successes,2).map((row,idx)=>{
            return(
              <div key={idx} className="col-sm-12 col-lg-6 g-0">
                {row.map((data,idx)=>{
                  return(
                    <PortfolioCard
                    key={idx}
                    category={data.category}
                    projects={data.projects}
                    />
                  )
                })}
              </div>
            )
          })
          :null}
          </div>
        </div>
    )
}