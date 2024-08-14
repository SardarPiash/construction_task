import React from "react";
import Img_1 from "../../assets/images/Image 1.svg";
import logo from "../../assets/icon/Icon 3.svg";
import { role } from "../../data/role";
import ImageUrl from "../../component/DynamicImgUrl";
import Benefits from "./Benefits";
import ContactUs from "./ContactUs";

export default function Recruitment() {
  console.log(role);
  return (
    <div className="font-notoSans">
      <div className="bg-white text-black-800 ">
        {/* Hero Section */}
        <section className="text-center w-full  flex mt-20">
          <div className="w-1/2 mt-1">
            <div className="container mx-auto  w-9/12 ">
              <h1 className="text-3xl font-bold mb-9 text-left tracking-widesr leading-snug">
                Your Partner in International Construction Recruitment
              </h1>
              <p className="text-sm mb-3 max-w-3xl mx-auto text-justify">
                "Hire & Fire Job's platform for the construction industry
                connects companies with skilled professionals globally. We
                streamline recruitment processes, ensuring precise matches for
                project requirements through our extensive network and
                industry-specific expertise. Our platform offers tailored
                solutions for construction companies, facilitating efficient
                hiring and workforce management. Partner with us to access a
                pool of qualified talent and optimize your construction projects
                with ease."
              </p>
              <span className="flex justify-items-start">
                <button className="bg-blue-800 text-white px-4 py-2 rounded-sm">
                  Contact Us
                </button>
              </span>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className=" w-9/12 h-full ">
              <img className="w-full h-full rounded-sm" src={Img_1} />
            </div>
          </div>
        </section>

        <section className="bg-white text-black py-16 mt-5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Roles we Fill
            </h2>
            <p className="text-center text-sm mb-10">
              "We fill roles in construction, matching skilled professionals
              like engineers, supervisors,
              <br />
              and laborers to projects requiring expertise and efficiency."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {role.slice(0, 4).map((data, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg text-center"
                  style={{
                    minHeight: "200px",
                    maxWidth: "calc(100% + 30px)",
                    boxShadow:
                      "4px -4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={ImageUrl(data.url,'images')}
                    alt={data.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                  <p className="text-black mb-4 tracking-tighter">
                    {data.description}
                  </p>
                  <button className="text-red-600 font-medium">
                    <div className="flex">
                      <span>Contact Us</span>
                      <img src={logo} alt="Contact Us" />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {role.length % 4 !== 0 && (
              <div className="flex justify-center gap-8 mt-8">
                {role.slice(4, 6).map((data, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg text-center"
                    style={{
                      width: "calc(100% + 30px)",
                      maxWidth: "21.8rem",
                      minHeight: "200px",
                      boxShadow:
                        "4px -4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={ImageUrl(data.url,'images')}
                      alt={data.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                    <p className="text-black mb-4 tracking-tighter">
                      {data.description}
                    </p>
                    <button className="text-red-600 font-medium">
                      <div className="flex">
                        <span>Contact Us</span>
                        <img src={logo} alt="Contact Us" />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Benefits section */}
      <div>
        <Benefits />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
