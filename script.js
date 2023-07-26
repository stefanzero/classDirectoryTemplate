/* This will be our code to fetch data from Airtable to our Glitch. 
  Missing code to LOOP over the DATA and APPEND them in the students profile card -> try using querySelectorAll(.<whatever the class name enter here>)
  PLEASE DO NOT CHANGE WITHOUT CONSULTING --> INSTRUCTOR
*/
const getAirtableData = async () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patwSsvy7Hvo5mSGS.9799e293a34039bfd554077a19779c0bc8b47f161fcda595acaa76f6b26ee9a4`,
    },
  };
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appPABgKKuNzeb4l6/Trainees`,
      options
    );
    const data = await response.json();
    console.log(data);
    for (var i = 0; i < data.records.length; i++) {
    console.log(i);
    }
  } catch (error) {
    console.log(error);
  }
};

getAirtableData();



/* Function to change theme {Dark | Light}. TIPS -> classList.Toggle()*/

/* Function to dynamically change the year date of the footer. TIPS use the date built in function*/

/* Function to loop over students testimonials - footer. TIPS .length*/
