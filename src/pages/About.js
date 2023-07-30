import React from "react";
import {
  IconAlphabetLatin,
  IconAxe,
  IconBooks,
  IconBrain,
  IconBrandCpp,
  IconBrandGithub,
  IconBrandPython,
  IconBrandReact,
  IconBrandVscode,
  IconChartDots,
  IconChessKnight,
  IconChisel,
  IconClearAll,
  IconCode,
  IconDeviceDesktopBolt,
  IconEmpathize,
  IconPresentation,
  IconUserQuestion,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import {
  AcademicCapIcon,
  ArrowUpRightIcon,
  CubeIcon,
  GlobeAsiaAustraliaIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/ThemeContext";
import ScrollButton from "../components/Scrollbutton";
import "../css/About.css";
import UilLetterHindiA from "../components/UilLetterHindiA";
import {
  EmojioneFlagForFrance,
  EmojioneFlagForTurkey,
  SimpleIconsQt,
  BiWindows,
  LogosArchlinux,
  FileIconsLatex,
  MdiMicrosoftOffice,
  SkillIconsJavaLight,
  MdiTailwind,
} from "../components/EmojioneFlagForFrance";

const About = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="App Fade">
      <div
        className="h-[70vh] p-6 pb-0 pt-0 flex flex-col justify-start items-center
            sm:justify-evenly"
        id="mainbgdark_about"
      >
        <div className="flex justify-center">
          <div
            className="flex flex-col items-center
                md:justify-between md:flex-row-reverse"
          >
            <div
              id={
                theme === "light"
                  ? "introsvg_light_about"
                  : "introsvg_dark_about"
              }
              className="p-4 m-4 min-w-[80vw] min-h-[25vh]
                        md:w-full md:h-full md:min-w-[50vw] md:min-h-[50vh]"
            ></div>
            <div>
              <div
                className="text-5xl text-center p-4
								md:text-7xl
                        "
              >
                <span className="text-accent">Greetings!</span>
              </div>
              <div className="text-3xl break-words p-4 text-center md:text-4xl">
                I am Krishnaraj Thadesar! An Aspiring{" "}
                <span className="text-accent">Data Scientist</span>, a Full
                Stack Developer, and a 3rd year Undergrad at MITWPU in Pune.
                <br></br>
                This page will help you get to know me a little better!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper pb-9 m.t-16">
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>

      {/* section 1 */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-5xl p-4 m-4 mb-0">Who I am</div>
        <IconUserQuestion className="w-16 h-16" />
        <div className="text-center text-2xl md:text-4xl p-4 m-4 break-words xl:w-4/6">
          I am presently a Student at MITWPU, Pune. I would like to become a
          Data Scientist in hopes of following my love for Mathematics and
          Statistics. I am also a Full Stack Developer, and I have worked on
          several projects in the past.
          <div className="join join-vertical w-full mt-5">
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <GlobeAsiaAustraliaIcon className="w-5 h-5" />
                Where Am I from?{" "}
              </div>
              <div className="collapse-content">
                <p className="text-lg md:text-2xl">
                  <ul className="list-inside list-disc">
                    <li className="text-xl md:text-2xl">
                      Born in Jalna, Maharashtra, India
                    </li>
                    <li className="text-xl md:text-2xl">
                      Spent Childhood in Mumbai, India
                    </li>
                    <li className="text-xl md:text-2xl">
                      PreSchool in Dar Es Salaam, Tanzania
                    </li>
                    <li className="text-xl md:text-2xl">
                      Middle and High School in Doha, Qatar
                    </li>
                    <li className="text-xl md:text-2xl">
                      In Pune, India Since College, 2020
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <IconAxe className="w-5 h-5" />
                My Hobbies{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconAxe className="w-5 h-5 md:w-20 md:h-10" />
                    Wood Working
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <CubeIcon className="w-5 h-5 md:w-20 md:h-10" />
                    Cubing
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconChisel className="w-5 h-5 md:w-20 md:h-10" />
                    Carving
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconChessKnight className="w-5 h-5 md:w-20 md:h-10" />
                    Chess
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <IconPresentation className="w-5 h-5" stroke={1.5} />
                Soft Skills{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconEmpathize className="w-5 h-5 md:w-20 md:h-10" />
                    Pursuation
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconUsersGroup className="w-5 h-5 md:w-20 md:h-10" />
                    Public Speaking
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrain className="w-5 h-5 md:w-20 md:h-10" />
                    Critical Thinking
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconChessKnight className="w-5 h-5 md:w-20 md:h-10" />
                    Problem Solving
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconEmpathize className="w-5 h-5 md:w-20 md:h-10" />
                    Empathy
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconChessKnight className="w-5 h-5 md:w-20 md:h-10" />
                    Approachability
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconPresentation className="w-5 h-5 md:w-20 md:h-10" />
                    Presentations
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconUsers className="w-5 h-5 md:w-20 md:h-10" />
                    Leadership
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconClearAll className="w-5 h-5 md:w-20 md:h-10" />
                    Organizational
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <LanguageIcon className="w-5 h-5" />
                Languages{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <UilLetterHindiA className="w-5 h-5 md:w-20 md:h-10" />
                    Gujarati
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <UilLetterHindiA className="w-5 h-5 md:w-20 md:h-10" />
                    Hindi
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <UilLetterHindiA className="w-5 h-5 md:w-20 md:h-10" />
                    Marathi
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconAlphabetLatin className="w-5 h-5 md:w-20 md:h-10" />
                    English
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <EmojioneFlagForFrance className="w-5 h-5 md:w-20 md:h-10" />
                    French Level 1
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <EmojioneFlagForTurkey className="w-5 h-5 md:w-20 md:h-10" />
                    Turkish Level 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="wrapper pb-9">
        .
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>

      {/* section 2 */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-5xl p-4 m-4 mb-0">What I do</div>
        <IconChartDots stroke={1.5} className="w-16 h-16" />
        <div className="text-center text-2xl md:text-4xl p-4 m-4 break-words xl:w-4/6">
          I have a passion for learning to code, and building creating things
          that can help people. Due to that most of my focus in the beginning
          was on making Apps and Games. Since then I have started focusing more
          on Data Science and Statistics due my love for Charts, and just
          analysing data in general. It has been an immensely rewarding
          experience, and I am looking forward to learning more about it.
          <div className="join join-vertical w-full mt-5">
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <GlobeAsiaAustraliaIcon className="w-5 h-5" />
                Primary Focus{" "}
              </div>
              <div className="collapse-content">
                <p className="text-lg md:text-2xl">
                  <ul className="list-inside list-disc">
                    <li className="text-xl md:text-2xl">
                      Data Science, Machine Learning and Data Analysis
                    </li>
                    <li className="text-xl md:text-2xl">
                      Managing Big Data, Visualizing Data and Presenting it well
                    </li>
                    <li className="text-xl md:text-2xl">
                      Managing and Creating large Databases.
                    </li>
                    <li className="text-xl md:text-2xl">
                      Secondary focus on anything creative, be it Software
                      Development, Game Development, or Web Development.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <IconAxe className="w-5 h-5" />
                Expertise{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconPresentation className="w-5 h-5 md:w-20 md:h-10" />
                    Powerpoint Presentations
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <SimpleIconsQt className="w-5 h-5 md:w-20 md:h-10" />
                    PyQT and Tkinter
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconDeviceDesktopBolt className="w-5 h-5 md:w-20 md:h-10" />
                    GUI Development for anything
                  </div>

                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <FileIconsLatex className="w-5 h-5 md:w-20 md:h-10" />
                    LATEX
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <LogosArchlinux className="w-5 h-5 md:w-20 md:h-10" />
                    Arch Linux, Other Distros
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <BiWindows className="w-5 h-5 md:w-20 md:h-10" />
                    Windows and OS Management
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <IconPresentation className="w-5 h-5" stroke={1.5} />
                Programming Languages{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="flex flex-col justify-center items-center align-middle w-full text-2xl">
                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>Python</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={93}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>C / C++</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={80}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>Java</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={70}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>HTML CSS</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={80}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>Javascript</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={70}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex gap-4 items-center justify-between w-96 p-1">
                      <div>SQL</div>
                      <progress
                        className="progress progress-primary w-56 h-6"
                        value={85}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
              <input type="checkbox" />
              <div className="collapse-title md:text-3xl text-2xl font-large flex gap-3 items-center">
                <LanguageIcon className="w-5 h-5" />
                Tools and Frameworks{" "}
              </div>
              <div className="collapse-content">
                <div className="text-lg flex flex-wrap gap-2">
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <SimpleIconsQt className="w-5 h-5 md:w-20 md:h-10" />
                    PyQT and Tkinter
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <SkillIconsJavaLight className="w-5 h-5 md:w-20 md:h-10" />
                    Java Swing and AWT
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandCpp className="w-5 h-5 md:w-20 md:h-10" />
                    SFML
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <MdiMicrosoftOffice className="w-5 h-5 md:w-20 md:h-10" />
                    MS Office, Google Docs
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandVscode className="w-5 h-5 md:w-20 md:h-10" />
                    All Code Editors.
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandPython className="w-5 h-5 md:w-20 md:h-10" />
                    Matplotlib, Numpy, Pandas
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandReact className="w-5 h-5 md:w-20 md:h-10" />
                    React Native and React
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <MdiTailwind className="w-5 h-5 md:w-20 md:h-10" />
                    Tailwind CSS, Bootstrap, Material UI
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandPython className="w-5 h-5 md:w-20 md:h-10" />
                    Pygame
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <FileIconsLatex className="w-5 h-5 md:w-20 md:h-10" />
                    LATEX
                  </div>
                  <div className="badge badge-neutral badge-lg text-xl flex gap-2 justify-center py-4 md:h-16 md:text-2xl md:gap-0 pr-4">
                    <IconBrandGithub className="w-5 h-5 md:w-20 md:h-10" />
                    Git and Github
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="wrapper pb-9">
        .
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>

      {/* section 3 */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-5xl p-4 m-4 mb-0">Education</div>
        <IconBooks stroke={1} className="w-16 h-16" />

        <div className="text-center text-2xl md:text-4xl p-4 m-4 break-words xl:w-4/6">
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointe`}
                  onClick={() => {
                    window.open("http://arunodayaschool.com/");
                  }}
                >
                  Arunodaya Public School
                </span>
                <span className="text-xl">Mumbai, India</span>
                <span className="text-xl">2005 - 2006</span>
              </div>
            </li>
            <li className="step step-primary">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointer`}
                  onClick={() => {
                    window.open("https://indianschooldsm.ac.tz/");
                  }}
                >
                  Indian Public School
                </span>
                <span className="text-xl">Dar Es Salaam, Tanzania</span>
                <span className="text-xl">2006 - 2008</span>
              </div>
            </li>
            <li className="step step-primary">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointer`}
                  onClick={() => {
                    window.open("https://www.stxavierschoolthane.com/");
                  }}
                >
                  St. Xavier's School
                </span>
                <span className="text-xl">Mumbai, India</span>
                <span className="text-xl">2008 - 2011</span>
              </div>
            </li>
            <li className="step step-primary">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointer`}
                  onClick={() => {
                    window.open("https://bhavansqatar.org/");
                  }}
                >
                  Bhavan's Public School
                </span>
                <span className="text-xl">Doha, Qatar</span>
                <span className="text-xl">CBSE 10th - 91.8%</span>
                <span className="text-xl">2011 - 2019</span>
              </div>
            </li>
            <li className="step step-primary">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointer`}
                  onClick={() => {
                    window.open("https://www.mknspune.com/");
                  }}
                >
                  Mansukhbhai Kothari Public School
                </span>
                <span className="text-xl">Pune, India</span>
                <span className="text-xl">CBSE 12th Science - 96.4%</span>
                <span className="text-xl">2011 - 2019</span>
              </div>
            </li>
            <li className="step step-primary mt-4">
              <div className="flex flex-col text-left">
                <span
                  className={`text-2xl ${
                    theme === "light" ? "text-neutral" : "text-primary"
                  } hover:text-accent cursor-pointer`}
                  onClick={() => {
                    window.open("https://www.mitwpu.edu.in/");
                  }}
                >
                  Dr. Vishwanath Karads MIT World Peace University
                </span>
                <span className="text-xl">
                  B.Tech in CSE in Cyber Security & Forensics
                </span>
                <span className="text-xl">Pune, India</span>
                <span className="text-xl">2021 - 2025</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="wrapper pb-9">
        .
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>
      {/* section 4 */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-5xl p-4 m-4 text-center">Work Experience</div>
        <IconCode className="w-16 h-16" />
        <div className="text-center text-2xl md:text-4xl p-4 m-4 break-words xl:w-4/6">
          <ul className="steps steps-vertical">
            <li className="step step-accent">
              <div className="flex flex-col text-left">
                <span
                  className="text-2xl text-accent hover:text-accent cursor-pointer"
                  onClick={() => {
                    window.open("https://www.mknspune.com/");
                  }}
                >
                  Mansukhbhai Kothari Public School
                </span>
                <span className="text-xl">Pune, India</span>
                <span className="text-xl">CBSE 12th Science - 96.4%</span>
                <span className="text-xl">2011 - 2019</span>
              </div>
            </li>
            <li className="step step-accent mt-4">
              <div className="flex flex-col text-left">
                <span
                  className="text-2xl text-accent hover:text-accent cursor-pointer"
                  onClick={() => {
                    window.open("https://www.mitwpu.edu.in/");
                  }}
                >
                  Dr. Vishwanath Karads MIT World Peace University
                </span>
                <span className="text-xl">
                  B.Tech in CSE in Cyber Security & Forensics
                </span>
                <span className="text-xl">Pune, India</span>
                <span className="text-xl">2021 - 2025</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="wrapper pb-9">
        .
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>

      {/* section 5 */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-3xl p-4 m-4 text-center">
          Certifications and Achievements
        </div>
        <AcademicCapIcon className="w-16 h-16 mt-0" />
        <div className="text-center text-2xl md:text-4xl p-4 m-4 break-words xl:w-4/6">
          <ul className="flex justify-center flex-col items-center">
            <li className="text-xl bg-base-200 p-4 rounded-xl my-2 w-fit lg:px-32">
              <div
                className={`text-2xl ${
                  theme === "light" ? "text-neutral" : "text-primary"
                } flex flex-col justify-center`}
              >
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  Deep Learning Specialization
                </a>{" "}
                <div className="text-center p-3 text-base-content">
                  By deeplearning.ai on Coursera
                </div>
              </div>
            </li>
            <li className="text-xl bg-base-200 p-4 rounded-xl my-2 w-fit lg:px-32">
              <div
                className={`text-2xl ${
                  theme === "light" ? "text-neutral" : "text-primary"
                } flex flex-col justify-center`}
              >
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  Deep Learning Specialization
                </a>{" "}
                <div className="text-center p-3 text-base-content">
                  By deeplearning.ai on Coursera
                </div>
              </div>
            </li>
            <li className="text-xl bg-base-200 p-4 rounded-xl my-2 w-fit lg:px-32">
              <div
                className={`text-2xl ${
                  theme === "light" ? "text-neutral" : "text-primary"
                } flex flex-col justify-center`}
              >
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  Deep Learning Specialization
                </a>{" "}
                <div className="text-center p-3 text-base-content">
                  By deeplearning.ai on Coursera
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="wrapper pb-9">
        .
        <div
          className={
            theme === "light"
              ? "divider-light div-transparent-light"
              : "divider-dark div-transparent-dark"
          }
        ></div>
      </div>

      {/*  this is the last section */}

      <section
        id="about_section"
        className="flex flex-col items-center justify-center mb-4 p-4"
      >
        <div className="text-4xl text-center p-4">Interested in Hiring? </div>
        {/* <IconUserQuestion className="w-16 h-16" /> */}
        <div className="text-center text-2xl md:text-4xl break-words xl:w-4/6"></div>
        <NavLink to={"/projects"} className="m-4 mt-10">
          <button className="btn btn-secondary btn-lg ">
            Look at my projects <ArrowUpRightIcon className="w-5 h-5" />
          </button>
        </NavLink>
        <NavLink to={"/contact"} className="m-4">
          <button className="btn btn-secondary btn-lg ">
            Get in touch! <ArrowUpRightIcon className="w-5 h-5" />
          </button>
        </NavLink>
      </section>

      <ScrollButton />
    </div>
  );
};

export default About;
