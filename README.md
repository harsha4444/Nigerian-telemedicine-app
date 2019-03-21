# Nigerian-telemedicine-app

Telemedicine app is to automate the appointment process of patients.
Currently, the project relies on human clerks to manually take calls and enter data.
Project idea is to build an app that would allow prospective patients to automatically submit their contact information for followup with a physician.
Objective :
Registers patients based on contact information entered into the app.
App Flow:
Steps
1. Build a "Frontend-only" version of the application
1. Data-entry page
2. Verification page
3. Successful transaction page
4. Unsuccessful transaction page
2. Integrate the application with the OpenMRS API backend
3. Publish app on appropriate platform
A user enters his/her name, phone number, and chief complaint in a simple form. The user taps a "Complete" button and is then asked to verify that the information is correct. If the user information is incorrect, the user taps a "Back" button and corrects his/her information. If the information is correct, the user taps the "Request Consult" button and the information entered is sent to the OpenMRS API.
In the background, the app checks if the information was successfully received by the API. If the information was not successfully received (due to network errors, etc.) the app displays an appropriate and helpful error message. If the information was successfully received, the app displays a success message, along with information about when the user can expect a call from a physician.
