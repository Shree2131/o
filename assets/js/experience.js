AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Tech Recruiter ",
    cardImage: "assets/images/experience-page/workfall.jpg",
    place: "Workfall",
    time: "(June,2023 - present)",
    desp: "<li>Recruited top-tier tech talent for Workfall.</li><li>Implemented innovative recruitment strategies and improved hiring processes.</li><li>Fostered strong relationships with candidates and hiring stakeholders.</li>",
  },
  {
    title: "Marketing Intern",
    cardImage: "assets/images/experience-page/cli.png",
    place: "Chakraborty & Lahkar Innovations Pvt. Ltd.",
    time: "(May,2023 - present)",
    desp: "<li>Assisted in developing and implementing social media strategies.</li><li>Created engaging content for various marketing channels.</li><li>Contributed to the growth of brand awareness and audience engagement.</li>",
  },
  {
    title: "Data Analyst Intern",
    cardImage: "assets/images/experience-page/oasis.jpg",
    place: "Oasis Infobyte",
    time: "(June, 2023 - present)",
    desp: "<li>Analyzed complex datasets to derive actionable insights.</li> <li>Developed and implemented data-driven strategies.</li> <li>Created insightful reports and visualizations.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


// Hackathon Section




