import { Button, Stack } from '@chakra-ui/react'
import "./SearchPage.css"
import SearchResult from './Listing'
import NavbarSearch from './NavbarSearch'
import Footer from './Footer'

const SearchPage = () => {
    return <div className="searchPage">
        <NavbarSearch/>
        <div className="searchPage-info">
            <h1>200+ Airbnb Luxe stays in Bordeaux</h1>
            <Stack direction='row' spacing={4} align='center'>
                <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                    Cancellation Flexibility
                </Button>
                <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                    Type of place
                </Button>
                <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                    Price
                </Button>
                <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                    Rooms and beds
                </Button>
                <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                    More Filters
                </Button>
            </Stack>
        </div>

        <SearchResult
        img="https://a0.muscache.com/im/pictures/856a1ca6-0d04-4d58-93a1-f51fdc6445b9.jpg?im_w=720"
        location="Cape Town, South Africa"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="R1, 404 ZAR / night"
        total="R11700 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720"
        location="Johannesburg, South Africa"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="R1, 450 ZAR/ night"
        total="R10457 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of Johannesburg"
        title="30 mins to Oxford Street, Excel Johannesburg"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="R1, 300 zar / night"
        total="R13200 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-48555131/original/a835a522-5d71-419d-a5b5-241581ef93a4.jpeg?im_w=720"
        location="Sandton, South Africa"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="R1, 250 ZAR/ night"
        total="R12450 total"
      />
      <Footer/>
    </div>
}

export default SearchPage