# meditrack
Submission for GE Digital Industrial IOT Hackathon

By team `sudocode`

[View the presentation](https://drive.google.com/open?id=0B0Q8qfGisPMeUnFWbUF0bTk3bVE)

![](https://raw.githubusercontent.com/littlewonder/meditrack-web/master/screenshots/Meditrack-Screenshot-1.png?token=ASVjeiYH5toqSEdAied4JW2potsEYAllks5Z0TQMwA%3D%3D)


# About this product
Meditrack is a complete answer to the needs of a 21st century patient. In your busy life, you often forgot to take your important pill. Meditrack aims to eradicate the problem of missing a dosage -- or taking a double dose because you forgot.

The project is divided into a native mobile application (for the patients) and a responsive web application (for the pharmacist).

# Motivation behind the Hack
Improper medication use and tracking in the world leads to millions of death all around the world. Meditrack aims to eradicate the problem of missing a dosage -- or taking a double dose because you forgot. Our mission is to give people a tool to take their medications the way they're supposed to and help individuals and caretakers manage the challenges of staying on time up to date and on schedule.

# The Current Product
The 21-day timeframe was little harsh to completely create a fully functional web application and a mobile application and an API service and database to complement it. However, we've managed to create the web application and a functional prototype of the mobile application. There is a database which stores the information of the user and his prescriptions and orders. We developed an API to fetch data from this database. The integration of database and the applications are yet to be done. The main functional part of applications (web and mobile) are done, however other features (like reordering medicine, view all the bills) is yet to be implemented.

# Navigating this repo
### [Web client](https://abhisheksharma.design/meditrack-web)
_Bridging the gap between pharmacists and consumers_

![](https://raw.githubusercontent.com/littlewonder/meditrack-web/master/screenshots/Meditrack-Screenshot-3.png?token=ASVjenct2IMWqBZwj6DrSjQreCHEFNSGks5Z0TQTwA%3D%3D)

The web application is a replacement for the boring billing software you often see at medical stores. We have improved it, with tons of new features and direct integration with the customers’ meditrack mobile application. Pharmacists can process new orders, view already processed orders and keep track of new orders coming from customers.

### Mobile app
_Helping you track your dosages easily_

![](https://raw.githubusercontent.com/littlewonder/meditrack-web/master/screenshots/Meditrack-Screenshot-2.png?token=ASVjeh2gqOri82U3_Tmhfcp0QQMnXp6Uks5Z0TQPwA%3D%3D)

There is a native application (available on both Android and iOS) for the patient to keep track of his medicines and get daily reminders.
#### How to run
- Navigate to the mobile-app folder in the source code.
- Open the terminal and enter the following commands
  
  `npm i`
  
  `npm start`
- Scan the QR code with the expo application available at the Play Store.
- For OSX Users, press i in the command line after npm start to run on ios simulato

### [API and Backend](https://meditrack-api.herokuapp.com)
The engine behind the entire data flow.
* View on [Heroku](https://meditrack-api.herokuapp.com)
* Link to [Postman Collection](https://www.getpostman.com/collections/4ccf60db353ce08efa4c)
