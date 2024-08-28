import Footer from "../Footer/Footer";
import Navbar from "../Navbar/homeNav/Navbar";
import "./ReservationTable.css"
import { Stack, Button } from "@chakra-ui/react";
const reservations = [
  { id: 1, name: "Johann Coetzee", property: "Property 1", checkin: "19/06/2024", checkout: "24/06/2024" },
  { id: 2, name: "Asif Hassam", property: "Property 2", checkin: "19/06/2024", checkout: "19/06/2024" },
  { id: 3, name: "Kago Kola", property: "Property 1", checkin: "25/06/2024", checkout: "30/06/2024" },
];

const ReservationsTable = () => {
  return (
    <>
    <Navbar/>
    <div className="reserve-info">
                <Stack direction='row' spacing={4} align='center' wrap='wrap'>
                    <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                        View Reservations
                    </Button>
                    <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                        View Listings
                    </Button>
                    <Button size="sm" colorScheme='teal' variant='outline' className='searchPageBtn'>
                        Create Listing
                    </Button>
                </Stack>
            </div>
    <div className="reservations-table">
      <h2>My Reservations</h2>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.name}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkin}</td>
              <td>{reservation.checkout}</td>
              <td>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReservationsTable;
