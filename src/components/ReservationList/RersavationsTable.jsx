import { useEffect, useState } from "react";
import "./ReservationTable.css"
import Cookies from 'universal-cookie';
import axios from "axios";

const reservations = [
  { id: 1, name: "Johann Coetzee", property: "Property 1", checkin: "19/06/2024", checkout: "24/06/2024" },
  { id: 2, name: "Asif Hassam", property: "Property 2", checkin: "19/06/2024", checkout: "19/06/2024" },
  { id: 3, name: "Kago Kola", property: "Property 1", checkin: "25/06/2024", checkout: "30/06/2024" },
];

const ReservationsTable = () => {
  const cookies = new Cookies();
  const loggedInUser = cookies.get('loggedInUser')
  const [reservations, setResevations] = useState([]);
  const fetchData = async (id) => {
    try {
      const data = await axios.get(`http://localhost:5000/api/reservations/host`, {
        headers: {
          Authorization: `Bearer ${loggedInUser.token}`,
          'Content-Type': 'application/json',
        }
      });

      setResevations(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>

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
              {reservations?.map((reservation, i) => {
                console.log(reservation)
                const { checkInDate, checkOutDate, createdAt, guests, totalPrice, updatedAt, user } = reservation;

                console.log(loggedInUser.user.id)
                if (reservation.user == loggedInUser.user.id) {
                  return <tr key={i}>
                    <td>{reservation?.user}</td>
                    <td>{reservation?.accommodation?.name}</td>
                    <td>{checkInDate}</td>
                    <td>{checkOutDate}</td>
                    <td>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                }
              })}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default ReservationsTable;
