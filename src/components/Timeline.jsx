// import React from "react";
import PropTypes from "prop-types";
import EachTimeline from "./EachTimeLine";

const Timeline = () => {
  const timelines = [
    {
      title: "TM30 Academy",
      text: ".",
      id: "faq1",
      date: "March 15, 2022",
      direction: "left",
      githubLink: "https://github.com/Joshjay05/Tm30-Academy",
      website: "https://tmacademy.tm30.net/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "Teens-Literacy Foundation",
      text: ".",
      id: "faq2",
      direction: "right",
      date: "October 11, 2023",
      githubLink: "https://github.com/Joshjay05/teens-litereacy",
      website: "https://teensliteracyfoundation.org/",
      organization: "Teens-Literacy Foundation",
    },
    {
      title: "GWC WaitList",
      text: ".",
      id: "faq3",
      direction: "left",
      date: "June 05, 2023",
      githubLink: "https://github.com/Joshjay05/New-WaitList",
      website: "https://waitlist.gwctechhub.com/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "GWCTechSChoolAfrica Website",
      text: ".",
      id: "faq4",
      direction: "right",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/GWC",
      website: "https://gwc-school-22dv.vercel.app/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "TMSaaS Admin-Dashboard",
      text: ".",
      id: "faq5",
      direction: "left",
      date: "ongoing",
      githubLink: "https://github.com/Joshjay05/TmSaas",
      website: "https://tm-saas-28xp.vercel.app/",
      organization: "TM30 Global Solutions",
    },
    {
      title: "GWC-Student Dashboard",
      text: "",
      id: "faq6",
      direction: "right",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Student_dashboard",
      website: "https://student-dashboard-7sim.vercel.app/",
      organization: "GWCTechSchoolAFrica",
    },
    {
      title: "GWC-Teacher's Dashboard",
      text: ".",
      id: "faq6",
      direction: "left",
      date: "Ongoing",
      githubLink: "#",
      website: "",
      organization: "GWC-TechSchool Africa",
    },
    {
      title: "CHATTER APP",
      text: ".",
      id: "faq6",
      direction: "left",
      date: "Ongoing",
      githubLink: "https://github.com/Joshjay05/Chatter_Page",
      website: "",
      organization: "Personal",
    },
  ];
  return (
    <div className="w-full  py-8 flex flex-col justify-around">
      {timelines?.map((timeline, index) => (
        <EachTimeline
          key={timeline.id}
          id={timeline.id}
          direction={timeline.direction}
          text={timeline.text}
          title={timeline.title}
          index={index}
          date={timeline.date}
          website={timeline.website}
          organization={timeline.organization}
        />
      ))}
    </div>
  );
};

Timeline.propTypes = {
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      direction: PropTypes.oneOf(["left", "right"]).isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Timeline;
