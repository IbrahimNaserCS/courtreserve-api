# Login/Signup
1. /login (already created)
2. /signup (already created)
# Courts
1. GET /courts 
  - Returns a list of court names along with their ids to be shown on the homepage 
2. GET /reservations/userid
  - Returns a list of active reservations with reservation id, court name, and date. 
3. GET /courts/courtid
  - Returns a list of dates unavailable to make sure React doesn't render those.
4. POST /reservations
  - Adds a reservation for a user at a court at a certain date that was chosen. n 
5. DELETE /reservations/reservationid
  - Deletes a certain reservation
