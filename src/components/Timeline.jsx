// import React from "react";
import EachTimeline from "./EachTimeLine";

const Timeline = () => {
  const timelines = [
    {
      title: "TM30 Academy",
      text: " ",
      id: "faq1",
      date: "March 15, 2022",
      direction: "left",
      githubLink: "https://github.com/Joshjay05/Tm30-Academy",
      website: "https://tmacademy.tm30.net/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Teens-Literacy Foundation",
      text: " ",
      id: "faq2",
      direction: "right",
      date: "October 11, 2023",
      githubLink: "https://github.com/Joshjay05/teens-literacy",
      website: "https://teensliteracyfoundation.org/",
      organization: "Teens-Literacy Foundation",
    },
    {
      title: "GWC WaitList",
      text: " ",
      id: "faq3",
      direction: "left",
      date: "June 05, 2023",
      githubLink: "https://github.com/Joshjay05/New-WaitList",
      website: "https://waitlist.gwctechhub.com/",
      organization: "GWCTechSchoolAfrica",
    },
    {
      title: "GWCTechSChoolAfrica Website",
      text: " ",
      id: "faq4",
      direction: "right",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/GWC",
      website: "https://gwc-school-22dv.vercel.app/",
      organization: "GWCTechSchoolAfrica",
    },
    {
      title: "TMSaaS Admin-Dashboard",
      text: " ",
      id: "faq5",
      direction: "left",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/TmSaas",
      website: "https://tm-saas-28xp.vercel.app/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "GWC-Student Dashboard",
      text: " ",
      id: "faq6",
      direction: "right",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Student_dashboard",
      website: "https://student-dashboard-7sim.vercel.app/",
      organization: "GWCTechSchoolAfrica",
    },
    {
      title: "GWC-Teacher's Dashboard",
      text: "",
      id: "faq7", // Updated to be unique
      direction: "left",
      date: "Ongoing",
      githubLink: "#",
      website: "",
      organization: "GWC-TechSchool Africa",
    },
    {
      title: "CHATTER APP",
      text: "",
      id: "faq8", // Updated to be unique
      direction: "right",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Chatter_Page",
      website: "",
      organization: "Personal",
    },
  ];

  return (
    <div className="w-full py-8 flex flex-col justify-around">
      {timelines.map((timeline, index) => (
        <EachTimeline
          key={timeline.id}
          id={timeline.id}
          direction={timeline.direction}
          text={timeline.text}
          title={timeline.title}
          index={index}
          date={timeline.date}
          website={timeline.website}
          githubLink={timeline.githubLink}
          organization={timeline.organization}
        />
      ))}
    </div>
  );
};

export default Timeline;
