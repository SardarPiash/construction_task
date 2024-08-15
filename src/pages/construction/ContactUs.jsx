import React, { useState } from "react";
import bgImg from "../../assets/images/Background image 2.svg";
import locationIcon from "../../assets/icon/Icon 8.svg";
import phoneIcon from "../../assets/icon/Icon 9.svg";
import mailIcon from "../../assets/icon/Icon 10.svg";

const ContactUs = React.forwardRef((props, ref) => {
  const [name,setName] = useState("")
  const [nameError,setNameError] = useState("")
  const [email,setEmail] = useState("")
  const [emailError,setEmailError] = useState("")
  const [phone,setPhone] = useState("")
  const [phoneError,setPhoneError] = useState("")
  const [msg,setMsg] = useState("")
  const [msgError,setMsgError] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    setNameError("")
    setEmailError("")
    setPhoneError("")
    setMsgError("")
    let flag = true;

    if(name === ""){
       setNameError("Enter Frist Name");
       flag = false
       return
    }else {
      setNameError("")
      flag = true
    }

    if(email === ""){
      setEmailError("Enter Email");
      flag = false
      return
   }else {
     setEmailError("")
     flag = true
   }

   if(phone === ""){
    setPhoneError("Enter Phone Number");
    flag = false
    return
 }else {
   setPhoneError("")
   flag = true
 }

 if(msg === ""){
  setMsgError("Enter Your Massage");
  flag = false
  return
}else {
 setMsgError("")
 flag = true
}

if(flag === true){
  alert("submit")
}else{
  return
}
  }
  return (
    <div ref={ref} className="font-notoSans">
      <div
        className="bg-white w-7/12 h-82 mb-20 mx-auto flex mt-6"
        style={{
          boxShadow:
            "4px -4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="relative w-96 h-full" style={{ width: "393px" }}>
          <img
            src={bgImg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 items-center justify-center">
            <div className="w-4/5 h-4/5 mx-auto mt-20">
              <div className="ml-6">
                <div className="text-white text-3xl font-bold">Contact Us</div>

                <div className="text-white text-sm font-normal mt-4">
                  Say Something to start a live chat
                </div>
                <div className="flex mt-7">
                  <div className="bg-blue-900 w-12 h-12 rounded ">
                    <img className="px-3 py-3" src={locationIcon} />
                  </div>
                  <div className="text-white ml-4 mt-0.5">
                    <div>Company Location</div>
                    <div className="text-xs">
                      Bucuresti Sectorul1, Strada ING.
                      <br /> ZABLOVSCHI, Nr. 10,BIROUL 1
                    </div>
                  </div>
                </div>

                <div className="flex mt-7">
                  <div className="bg-blue-900 w-12 h-12 rounded ">
                    <img className="px-3 py-3" src={phoneIcon} />
                  </div>
                  <div className="text-white ml-4 mt-0.5">
                    <div>Phone Number</div>
                    <div className="text-xs">+(40) 7372 28622</div>
                  </div>
                </div>

                <div className="flex mt-7">
                  <div className="bg-blue-900 w-12 h-12 rounded ">
                    <img className="px-3 py-3" src={mailIcon} />
                  </div>
                  <div className="text-white ml-4 mt-0.5">
                    <div>Email Address</div>
                    <div className="text-xs">career@hireandfire.eu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-2/4 ml-10">
          <div className="mt-12 ml-20">
            <div>
            <input
              type="text"
              placeholder="First Name"
              className="h-10 border border-black rounded-md text-black font-notoSans text-sm"
              style={{ width: "385px", paddingLeft: "10px" }}
              onChange={(e)=>{setName(e.target.value)}}
            />
            {nameError && <p className="text-red-600  text-sm">{nameError}</p>}
            </div>
            <div>
            
            <input
              type="email"
              placeholder="Email"
              className="h-10 border  border-black rounded-md text-black font-notoSans text-sm mt-8"
              style={{ width: "385px", paddingLeft: "10px" }}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            {emailError && <p className="text-red-600  text-sm">{emailError}</p>}
            </div>
            <div>
            
            <input
              type="number"
              placeholder="Phone Number"
              className="h-10 border border-black rounded-md text-black font-notoSans text-sm mt-8"
              style={{ width: "385px", paddingLeft: "10px" }}
              onChange={(e)=>{setPhone(e.target.value)}}
            />
            {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
            </div>
            <div>
            
            <input
              type="text"
              placeholder="Write Your Message"
              className="h-28 pb-16 border border-black rounded-md text-black font-notoSans text-sm mt-8"
              style={{ width: "385px", paddingLeft: "10px" }}
              onChange={(e)=>{setMsg(e.target.value)}}
            />
            {msgError && <p className="text-red-600 text-sm ">{msgError}</p>}
            </div>
          </div>

          <button onClick={handleSubmit} className="bg-blue-700 text-white py-2 px-2 ml-48 mt-6 rounded-md hover:bg-blue-800 transition ease-in-out duration-300 font-notoSans text-sm">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
});

export default ContactUs;
