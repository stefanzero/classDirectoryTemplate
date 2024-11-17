/*
 */

const images = [
  {
    id: 'slide-0',
    alt: 'carousel image 0',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/1.jpg?v=1691515131242',
  },
  {
    id: 'slide-1',
    alt: 'carousel image 1',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/2.jpeg?v=1691515141512',
  },
  {
    id: 'slide-2',
    alt: 'carousel image 2',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/3.jpeg?v=1691515141540',
  },
  {
    id: 'slide-3',
    alt: 'carousel image 3',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/4.jpeg?v=1691515144476',
  },
  {
    id: 'slide-4',
    alt: 'carousel image 4',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/5.jpeg?v=1691515144267',
  },
  {
    id: 'slide-5',
    alt: 'carousel image 5',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/6.jpg?v=1691515145920',
  },
  {
    id: 'slide-6',
    alt: 'carousel image 6',
    src: 'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/7.jpg?v=1691515147685',
  },
];

/*
Data to be added to Airtable
*/

const students = [
  {
    color: 'Red',
    name: 'Abishek Lakandri',
    role: 'Cybersecurity Specialist',
    image:
      'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/Abishek.jpg?v=1691513787019',
    description: `I am Abishek Lakandri, hailing from Nepal. My journey brought me
                to the US in 2018, driven by a thirst for knowledge. Joining the
                Navy for expanded educational opportunities, I'm carving my
                path. Currently pursuing a Computer Science degree at California
                Institute of Arts and Technology, my focus lies in
                Cybersecurity. Alongside my academic journey, I've attained ITF,
                A+ Core 1, and Google Cybersecurity certifications. These
                milestones mark my dedication to understanding technology and
                safeguarding digital spaces. Curiosity has been my guiding star
                since childhood, fueling my constant exploration of various
                technological domains. From Nepal to the US, from the Navy to
                academia, I'm on a relentless pursuit to grasp the intricacies
                of technology and contribute to a secure digital world.`,
    facebook: 'https://www.facebook.com/lakandri.abhi',
    twitter: 'https://twitter.com/abhi1954',
    linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
    email: 'mailto:abishek.lakandri69@gmail.com',
    briefcase: 'https://boiling-solstice-century.glitch.me/',
  },
  {
    color: 'Pink',
    name: 'Aman Minapara',
    role: 'IT Sales Specialist',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00937.jpg?v=1691530346423',
    description:
      'I am an aspiring Technical Sales Specialist along with being an aspiring software engineer. Working with people and leading teams has always been something that has been a part of me although it did take some time for me to realize this and actually implement this into my life. I come from your typical big Indian family background, although I also grew up with people from such diverse backgrounds and cultures.It wasn’t always like. In my family, I was always the quiet kid who loved to learn anything and everything from tech to aviation, or even just watching tons of videos on how to put a screen protector on without any bubbles of course. The change from quiet and held back happened when I got my first job as a Hotel Manager and had to work with people everyday, from there everything shifted. Fast forward to today, the tech sales industry has been a fascinating new discovery for me because it connects two things that mean a lot to me, working with people and gaining knowledge in the tech industry.',
    facebook: 'https://www.facebook.com/lakandri.abhi',
    twitter: 'https://twitter.com/abhi1954',
    linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
    email: 'mailto:abishek.lakandri69@gmail.com',
    briefcase: 'https://boiling-solstice-century.glitch.me/',
  },
  {
    name: 'Anna He',
    role: 'Data Analyst',
    image:
      'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00608.jpg?v=1691514052211',
    description:
      "Hi, I'm Anna! I am a Bay Area native passionate about data, IT, and bridging the gap between technology and people. I am a recent graduate of UCSC (go slugs!) and look forward to entering the workforce. I am currently seeking roles related to software engineering, data analysis, IT, and design. Please feel free to reach me at my contacts, I would love to connect!",
    facebook: 'https://www.facebook.com/anna.he.9465/',
    twitter: 'https://twitter.com/annahe6',
    linkedin: 'https://www.linkedin.com/in/annahedev/',
    email: 'mailto:annahesf@gmail.com',
    briefcase: 'https://anna-about-me.glitch.me/',
    color: 'Purple',
  },
  {
    name: 'Ashley Sese',
    role: 'Full Stack Software Developer',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00657.jpg?v=1691514041722',
    description:
      'A dedicated mom to a joyful 2-year-old, a recent graduate of UC Berkeley Coding Bootcamp (March 2023), and an aspiring Software Developer. Trying to find a balance of parenthood and programming.',
    facebook: 'https://www.facebook.com/ashleyrean.sese',
    twitter: 'https://twitter.com/wtfashleetah',
    linkedin: 'https://www.linkedin.com/in/ashleyrean/',
    email: 'mailto:sese.ashrean@gmail.com',
    briefcase: 'https://ashrean.github.io/hw2-ProfessionalPortfolio/',
    color: 'Deep-Purple',
  },
  {
    name: 'Benedicto Navarro',
    role: 'Data Analyst',
    image:
      'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00529.jpg?v=1691514066267',
    description:
      "Aspiring Data Analyst You can tell how good a taqueria is by their burrito! Besides always being hungry, I'm a minimlist at heart so I find peace and joy by keeping my life simple.",
    facebook: '',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/benedictonavarro',
    email: 'mailto:benedictonavarro93@gmail.com',
    briefcase: 'https://about-me-ben93.glitch.me/',
    color: 'Indigo',
  },
  {
    name: 'Elhadi Adam',
    role: 'IT',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00332.jpg?v=1691514028528',
    description:
      'Hi, Im Elhadi. I was born and raised in Omdurman, Sudan. I came to the US in December 2018 at the age of 22. I’m proud to be a part of SUMMER COHORT 2023 at Goodwill, Such an amazing class with wonderful instructors! Thank you for this great learning experience.',
    facebook: 'https://www.facebook.com/profile.php?id=100003920823921',
    twitter: 'https://twitter.com/AlhadiAdam7',
    linkedin: 'http://www.linkedin.com/in/elhadi-adam/',
    email: 'mailto:elhadiadam53@gmail.com',
    briefcase: 'https://oceanic-colossal-wire.glitch.me/',
    color: 'Blue',
  },
  {
    name: 'Elias Ramirez',
    role: 'IT / Software Developer',
    image:
      'https://cdn.glitch.me/b3ff15bf-b6fd-42b1-9468-aaeb79ddda9e/DSC00693.jpg?v=1691449262761',
    description: 'Aspiring IT professional',
    facebook: '',
    twitter: 'https://twitter.com/scifinology',
    linkedin: 'https://www.linkedin.com/in/eliasramirezcarrillo/',
    email: 'mailto:eliasramirezcarrillo@gmail.com',
    briefcase: 'https://eliasramirezcarrillo.com/portfolio',
    color: 'Cyan',
  },
  {
    name: 'Faizan Shaikh',
    role: 'IT Professional | Project Manager',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00395.jpg?v=1691514061753',
    description:
      'In Karachi, Pakistan, I was born and raised, cherishing the culture and warmth of their homeland. In 2004, I migrated to San Francisco, California, embracing adventure. Living in five different neighborhoods, I explored the city on a motorcycle and played sports passionately. I became a devoted fan of the local sports teams like warriors, giants, and 49ers.Initially working in construction, life took a turn when I got hit by a car. Determined to follow my passion for technology, I pursued a career in the field, building upon past IT experience. Through challenges and triumphs, I emerged resilient and hopeful, holding dear the memories of their journey and looking ahead to a bright future in the city my home.',
    facebook: 'https://www.facebook.com/aladdin.maru.5',
    twitter: 'https://twitter.com/sfaizan1202',
    linkedin: 'https://www.linkedin.com/in/fshaikh2/',
    email: 'mailto:faizanshaikh02@yahoo.com',
    briefcase: 'https://plume-sprinkle-satellite.glitch.me/',
    color: 'Teal',
  },
  {
    name: 'Jennifer Torres Orellana',
    role: 'Aspiring IT Professional',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00441.jpg?v=1691514080594',
    description:
      "I am a motivated and enthusiastic aspiring software developer with a strong passion for coding and problem-solving. Currently pursuing a degree in Web Development , I am eager to leverage my technical skills and knowledge to contribute to the development of innovative software solutions. I have a solid foundation in programming fundamentals and have gained practical experience through my internship at Bank of the West and 12- week Boot camp with the help of YearUp Bay Area and Goodwill/Dev/Mission. Proficient in languages such as HTML,CSS, Python, and JavaScript. When you don't find me next to a computer trying to learning new languages you can find me hiking with my 3 dogs Milo,Chunky and Smokey or cruising down California finding new adventures.",
    facebook: '',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/jenniferto94',
    email: 'mailto:jennifertorresorellana@gmail.com',
    briefcase: '',
    color: 'Green',
  },
  {
    name: 'Natnael Metaferia',
    role: 'IT',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00343.jpg?v=1691514069414',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi explicabo magni deleniti repudiandae, fugit sequi veniam laborum illum quos animi distinctio molestias ipsam et quod, repellendus ratione. Est, non aspernatur.',
    facebook: 'https://www.facebook.com/lakandri.abhi',
    twitter: 'https://twitter.com/abhi1954',
    linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
    email: 'mailto:abishek.lakandri69@gmail.com',
    briefcase: 'https://boiling-solstice-century.glitch.me/',
    color: 'Lime',
  },
  {
    name: 'Nikolajs Adams',
    role: 'Aspiring IT Professional',
    image:
      'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00044.jpg?v=1691514082558',
    description:
      'Greetings, I am Nikolajs Adams, a highly motivated individual with a strong desire to excel in the IT industry. Witnessing the remarkable progress of autonomous vehicle technology ignited my passion for all things related to technology and IT. I make it a daily habit to actively seek out and acquire new knowledge in this field, and I am eager to begin my journey towards a fulfilling career in this exciting industry.',
    facebook: '',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/nikolajsadams925/',
    email: 'mailto:adamsnikolajs@gmail.com',
    briefcase: 'https://brash-ripe-feet.glitch.me',
    color: 'Yellow',
  },
  {
    name: 'Paolo Gaudiel',
    role: 'Full Stack Software Developer',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00757.jpg?v=1691527426602',
    description:
      "Hi, I'm Paolo Gaudiel and I'm an aspiring Software Developer! I went to University of California, Los Angeles for my undergraduate degree in Psychobiology. After going through the biotech and pharmaceutical industry being initially interested in medicine, I realized I wanted to be in a completely different field and am now focused on breaking into tech.",
    facebook: '',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/paologaudiel/',
    email: 'mailto:paologaudiel@gmail.com',
    briefcase: 'https://lighthearted-puffpuff-984500.netlify.app/',
    color: 'Amber',
  },
  {
    name: 'Kevin (Wen Hao) Li',
    role: 'Software Developer',
    image:
      'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/kevin.jpg?v=1691528061151',
    description:
      "I am a software engineer who wants to be apart of the future in the tech world. I am currently an upcoming senior at San Francisco State University studying Computer Science. My passions are exploring the city, playing video games with my friends, and doing new things such as going rafting, karting, and sky-diving. Don't be afraid to reach out, let's connect!",
    facebook: '',
    twitter: 'https://twitter.com/carerit2002',
    linkedin: 'https://www.linkedin.com/in/wen-hao-kevin-li/',
    email: 'kevnli2002@gmail.com',
    briefcase: 'https://gossamer-comet-pie.glitch.me/',
    color: 'Orange',
  },
];

const testimonials = [
  {
    text: 'Great introduction into the world of IT and coding. I have a new found appreciation for front-end developers as I find myself nitpicking webpages when texts/photos aren’t aligned properly.',
    author: 'Benedicto Navarro',
  },
  {
    text: 'This class is beyond what I expected, learned so much during the small amount of time given. The instructors were so supportive and gave valuable feedback.',
    author: 'Jennifer Torres Orellana',
  },
  {
    text: "This class has helped me become more accountable and focus more on the product and quality of my work rather than simply completing it. As for professional growth, I believe that I've improved in being able to ask for help but also providing others with help when needed.",
    author: 'Paolo Gaudiel',
  },
  {
    text: 'This class was amazing I was able to learn programming and IT fundamentals during a short period of time.',
    author: 'Elhadi Adams',
  },
  {
    text: 'All the staff has been so supportive in my journey. Not only have I gained more technical skills, I have learned so much about what it means to be in a team.',
    author: 'Anna He',
  },
  {
    text: 'I had a wonderful learning journey in this class. The support from the instructors and peers made the learning process enjoyable. Highly recommended!',
    author: 'Ashley Sese',
  },
  {
    text: "Still reminicing that first phone call I had with my program manager 'Justin Dematra' at a safeway parking lot. Of course at the time, I did not know where any of this would lead me, I just knew that i've always been interested in the entire tech industry as a whole. Lo and behold, the practical knowledge I gained here is what I consider to be invaluable. Thank you for such a fantastic experience and with the opportunity to network with such great people!",
    author: 'Aman Minapara',
  },
  {
    text: 'I had an amazing time in this class. The challenging projects helped me grow as a developer, and I am excited to pursue a career in web development. Closing the Opportunity Divide in Tech World.',
    author: 'Faizan Shaikh',
  },
  {
    text: "I chose to jumpstart my IT career through enrollment in the Goodwill/Dev Mission IT program. This journey has proven exceptionally rewarding. I've transformed from someone without any coding knowledge to someone who can adeptly create personal web pages. Furthermore, I've acquired the expertise to build a custom PC from the ground up, along with numerous other valuable skills. The program's efficacy and my personal advancement are undeniably praiseworthy.",
    author: 'Nikolajs Adams',
  },
  {
    text: 'Amazing class with excellent instructors! I gained a lot of valuable skills and knowledge. Thank you for this wonderful learning experience.',
    author: 'Natnael Metaferia',
  },
  {
    text: 'This class was a game-changer for me. I now have a deep understanding of web development and feel confident in my coding abilities.',
    author: 'Elias Ramirez',
  },
  {
    text: 'Joining this class was the best decision. The curriculum, instructors, and support from peers were top-notch.',
    author: 'Kevin (Wen Hao) Li',
  },
  {
    text: 'Highly recommended class! It provided me with a solid foundation in web development and inspired me to pursue further learning in this field.',
    author: 'Abishek Lakandri',
  },
];

const container = document.getElementById('apprenticeship');
const articleTemplate = document.getElementById('article-template');

const addStudents = () => {
  students.forEach((student) => {
    const article = articleTemplate.content.cloneNode(true);
    const column = document.createElement('div');
    column.classList.add('col-md-4', 'col-sm-6', 'col-xs-12');
    column.appendChild(article);
    column.querySelector('.material-card').classList.add(student.color);
    column.querySelector('.mc-name').textContent = student.name;
    column.querySelector('.mc-role').textContent = student.role;
    column.querySelector('.img-responsive').src = student.image;
    column.querySelector('.mc-description').textContent = student.description;
    column.querySelector('.fa-facebook').href = student.facebook;
    column.querySelector('.fa-twitter').href = student.twitter;
    column.querySelector('.fa-linkedin').href = student.linkedin;
    column.querySelector('.fa-envelope').href = student.email;
    column.querySelector('.fa-briefcase').href = student.github;
    container.appendChild(column);
  });
};

const testimonialsContainer = document.getElementById('testimonials-container');
const testimonialTemplate = document.getElementById('testimonial-template');
const addTestimonials = () => {
  testimonials.forEach((testimonial) => {
    const testimonialElement = testimonialTemplate.content.cloneNode(true);
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.appendChild(testimonialElement);
    div.querySelector('.testimonial-span').textContent = testimonial.text;
    div.querySelector('.testimonial-author').textContent = testimonial.author;
    testimonialsContainer.appendChild(div);
  });
};
addStudents();
addTestimonials();
