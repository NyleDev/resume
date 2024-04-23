const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const resume = 
    {
        Personal_Information:
        [ 
          {
            Name:"Chenhier Nyle Arsa",
            Address:"Escario st.kamputhaw cebu city",
            ContactNo:"09662081906",
            Email:"chenhiernylearsa18@gmail.com",
            Birthdate:"August 15 2003",
            Gender:"male",
          }  
        ],
        About_me:[
            {
            Description: "I'm a skilled front-end developer specializing in HTML, CSS, and JavaScript. With 10years of experience, I excel at creating user-friendly web interfaces. I'm eager to contribute my expertise to the Company and collaborate with a dynamic team.",
        }
    ],

      Skills:[
        {
        Language:"HTML,CSS,JavaScript,PHP",
        Webdesign:"Figma",

      }
    ],

      
     Education: [
        { 
            Degree:'Bachelor of Science in Information Technology',
            Instution: 'University of Southern Philippines Foundation',
            Year:'2019-2021',
        

      }
    ],
    
    
   Personal_Reference: [
         { 
            Name:'John Doe',
            Contact: '09955656564',
            Relationship: 'Married',



    }
],

 Work_Experience: [
    {
        Company: 'ABC Inc.',
        Job_Title: 'Front-end Developer',
        Start_Date:'01/01/2020',

    }
],

};
res.send(resume);
});
app.listen(port, () => {
  console.log(`Server Running on port ${port}!`);
});