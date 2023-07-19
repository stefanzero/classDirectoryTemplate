/* This will be our code to fetch data from Airtable to our Glitch. 
  PLEASE DO NOT CHANGE WITHOUT CONSULTING --> INSTRUCTOR
*/

const getAirtableData = async () => {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer patwSsvy7Hvo5mSGS.9799e293a34039bfd554077a19779c0bc8b47f161fcda595acaa76f6b26ee9a4`
        }
      };
    try {
        const response = await fetch(`https://api.airtable.com/v0/appPABgKKuNzeb4l6/Trainees`, options);
        const data = await response.json();
        console.log(data)
        

    } catch(error) {
        console.log(error);
    }
}

getAirtableData();