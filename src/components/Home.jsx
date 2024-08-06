import Banner from "./Banner"
import Discover from "./Discover"
import Footer from "./Footer"
import GiftCards from "./GiftCards"
import HostingQuestions from "./HostingQuestions"
import InspirationGetaways from "./InspirationGetaways"
import NextTrip from "./NextTrip"
import Search from "./Search"

function Home() {
  return (
    <div>
        <div style={{background:"black"}}>
     <Search/>
     <Banner/>
     </div>
     <NextTrip/>
     <Discover/>
     <GiftCards/>
     <HostingQuestions/>
     <InspirationGetaways/>
     <Footer/>

    </div>
  )
}

export default Home
