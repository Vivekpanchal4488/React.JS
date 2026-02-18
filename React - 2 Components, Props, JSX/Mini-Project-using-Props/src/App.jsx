import React from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Uber",
      datePosted: "10 weeks ago",
      post: "Java Backend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Airbnb",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      companyName: "Infosys",
      datePosted: "1 month ago",
      post: "Associate Software Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$18/hr",
      location: "Pune, India",
    },
  ];

  return (
    <>
      <div className="parent">
        {jobOpenings.map(function (elem, idx) {
          return (
            <div key={idx}>
              (
              <Card
                company={elem.companyName}
                post={elem.post}
                date={elem.datePosted}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
                logo={elem.brandLogo}
              />
              );
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
