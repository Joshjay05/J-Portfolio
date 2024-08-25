import { Fragment, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
// import { FaTwitter } from "react-icons/fa";
import resume from "./files/resume.pdf";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";

const Intro = () => {
  const [displayTypeAnime, setDisplayTypeAnime] = useState("none");

  useEffect(() => {
    const timeTypeAnime = setTimeout(() => {
      setDisplayTypeAnime("block");
    }, 1300);
    return () => {
      clearTimeout(timeTypeAnime);
    };
  }, []);

  return (
    <Fragment>
      <section className="mt-20 pb-5 shadow-md">
        <div className="py-16 px-6 md:px-12 lg:px-20 xl:px-28">
          <p
            className="text-xl sm:text-2xl font-montserrat text-aliceblue"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            Hi Guys!
          </p>
          <p
            className="mt-5 text-xl sm:text-2xl text-aliceblue"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            My name is{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl font-lobster text-yellow-400">
              Odelade Jesulona Joshua
            </span>
          </p>
          <p
            className={`mt-8 text-xl sm:text-2xl text-aliceblue transition-all duration-500 ease-in ${
              displayTypeAnime === "block" ? "block" : "hidden"
            }`}
          >
            I
            <TypeAnimation
              sequence={[
                " am a Frontend Developer Specialized in React & Next.js ",
                2000,
                " Build cutting-edge web applications!,   ",
                2000,
                " love JavaScript & TypeScript",
                1000,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-between mt-10"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
          >
            <a className="mt-10 flex flex-row items-center sm:items-start">
              <a
                href="#projects"
                className="text-yellow-400 border border-yellow-400 px-4 py-2 md:px-6 md:py-3 bg-gray-800 rounded hover:bg-gray-900"
              >
                View Projects
              </a>
              <motion.a
                href={resume}
                className="px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white rounded hover:bg-gray-900"
                whileHover={{ scale: 1.1 }}
              >
                Download CV
              </motion.a>
            </a>
            <div className="flex lg:flex-col sm:flex-row items-center gap-5 relative mt-10 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/jesulona-joshua-608037141/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
              >
                <BsLinkedin className="text-xl" />
              </a>
              <a
                href="https://wa.me/+2348160147822"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
              >
                <BsWhatsapp className="text-xl" />
              </a>
              <a
                href="mailto:odeladejesulona@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
              >
                <CgMail className="text-xl" />
              </a>
              <a
                href="https://github.com/Joshjay05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aliceblue hover:scale-110 transition-all duration-200 ease-in-out"
              >
                <BsGithub className="text-xl" />
              </a>
              <div className="absolute bottom-10 sm:bottom-32 lg:bottom-44 right-2 w-px h-10 sm:h-20 bg-aliceblue"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
