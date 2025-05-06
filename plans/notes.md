# What is the app? 
The app is a court reserving app to allow users to reserve a tennis court by date and time slots. 
# What is the core functionality
The core functionality of the app is the user can log in / sign up. Once signed up they can choose a court from a list and they can reserve it at a certain date for some time blocks. They can also view active reservations and cancel them. Active reservations should not show up anymore after the timeslot. 
# Data modeling
There are going to be different entities. There is a user with a username, email, and list of reservations. There are courts. Each court has a list of time slots. There is a resrevation which is a court id, reservation id, the user id, the date and the time. 
# Pages / Views
- Login page
- Signup page
- Home page 
  - List of courts
- Your reservations
- Specific court
  - Select a date and then a time slot
# Actions
- On the login page, the user can log in. If they have no account, they can go to the sign up page. 
- Once logged in / signed up, the user is taken to the home page. The home page has a list of courts as well as a way to get to the current reservations tab.
- The current reservations tab has a list of active reservations, i.e., reservations beyond the current date. These can be deleted. 
- Clicking a court takes you to a page where you can choose a date that is within one year from the current date. Then you get a list of time slots of which you can select one or more. 
- Then, the user can log out with a button at the top.
# Technologies
- Express/Node backend
- React frontend
- Prisma with Postresql for database
- Deploy front end to Vercel, backend to Railway
# Notes on database / schema
- User
  - username (unique key)
  - password (hashed with bcrypt)
  - reservations 
- Court 
  - id
  - available time slots
- Reservation
  - court id
  - reservation id
  - user id
  - time slot

random add to test
