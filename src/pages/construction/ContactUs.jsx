import React, { useState } from "react";
import bgImg from "../../assets/images/Background image 2.svg";
import locationIcon from "../../assets/icon/Icon 8.svg";
import phoneIcon from "../../assets/icon/Icon 9.svg";
import mailIcon from "../../assets/icon/Icon 10.svg";
import Card from "../../component/Card";
import '../construction/contact.css';

const ContactUs = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState("");
  const [showCard, setShowCard] = useState(false); // State to control the Card visibility

  function handleSubmit(e) {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setMsgError("");
    let flag = true;

    if (name === "") {
      setNameError("Enter First Name");
      flag = false;
      return;
    }

    if (email === "") {
      setEmailError("Enter Email");
      flag = false;
      return;
    }

    if (phone === "") {
      setPhoneError("Enter Phone Number");
      flag = false;
      return;
    }

    if (msg === "") {
      setMsgError("Enter Your Message");
      flag = false;
      return;
    }

    if (flag === true) {
      setShowCard(true); 
    }
  }

  function handleCloseCard() {
    setShowCard(false); 
  }

  return (
    <div ref={ref} className="font-notoSans">
      <div
        className="bg-white mx-auto mt-6 flex flex-col md:flex-row md:w-7/12 w-full h-auto md:h-82 mb-20"
        style={{
          boxShadow:
            "4px -4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="relative custom-width-mobile ml-3 md:ml-0 md:custom-width-desktop md:h-full h-80">
          <img
            src={bgImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="text-center w-full h-72 md:w-3/4 md:h-5/7 md:text-left">
              <div className="text-white text-sm md:text-3xl font-bold">Contact Us</div>
              <div className="text-white text-xs md:text-sm font-normal mt-2 md:mt-4">
                Say Something to start a live chat
              </div>
              <div className="flex flex-col md:flex-row items-start mt-4 md:mt-4">
                <div className="flex">
                  <div className="flex items-center bg-blue-900 w-12 h-12 rounded md:mb-4">
                    <img className="px-3 py-3" src={locationIcon} alt="Location" />
                  </div>
                  <div className="text-white text-left ml-4">
                    <div>Company Location</div>
                    <div className="text-xs">
                      Bucuresti Sectorul1, Strada ING.
                      <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start mt-4 md:mt-7">
                <div className="flex">
                  <div className="flex items-center bg-blue-900 w-12 h-12 rounded md:mb-4">
                    <img className="px-3 py-3" src={phoneIcon} alt="Phone" />
                  </div>
                  <div className="text-white ml-4 text-left">
                    <div>Phone Number</div>
                    <div className="text-xs">+(40) 7372 28622</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start mt-4 md:mt-7">
                <div className="flex">
                  <div className="flex items-center bg-blue-900 w-12 h-12 rounded mb-4 md:mb-0">
                    <img className="px-3 py-3" src={mailIcon} alt="Email" />
                  </div>
                  <div className="text-white ml-4 text-left">
                    <div>Email Address</div>
                    <div className="text-xs">career@hireandfire.eu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex-1 ml-0 md:ml-10 p-6">
          <div className="mt-4 md:mt-12">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="h-10 border border-black rounded-md text-black font-notoSans text-sm w-full md:w-96"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-red-600 text-sm">{nameError}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="h-10 border border-black rounded-md text-black font-notoSans text-sm mt-8 w-full md:w-96"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                className="h-10 border border-black rounded-md text-black font-notoSans text-sm mt-8 w-full md:w-96"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Write Your Message"
                className="h-28 pb-16 border border-black rounded-md text-black font-notoSans text-sm mt-8 w-full md:w-96"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setMsg(e.target.value)}
              />
              {msgError && <p className="text-red-600 text-sm">{msgError}</p>}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-700 ml-24 md:ml-36 text-white py-2 px-4 mt-6 rounded-md hover:bg-blue-800 transition ease-in-out duration-300 font-notoSans text-sm"
          >
            Send Message
          </button>
        </div>
      </div>

      {showCard && (
        <Card
          name={name}
          email={email}
          phone={phone}
          msg={msg}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
});

export default ContactUs;
