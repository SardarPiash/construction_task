import React, { useState } from "react";
import { benefits } from "../../data/benefit";
import ImageUrl from "../../component/DynamicImgUrl";

export default function Benefits() {
  const [datas, setDatas] = useState(benefits);
  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Benefits of Hiring Through Us
        </h2>
        <p className="text-base text-gray-600 mb-12">
          "Benefit from our efficient hiring process, matching qualified
          candidates to your construction <br /> projects, ensuring quality and
          reliability."
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-12">
        {datas.map((data, index) => (
          <div
            key={index}
            className="relative shadow-lg p-8 rounded-lg flex-1 max-w-xs md:max-w-sm mx-auto"
          >
            {/* Small white div */}
            <div
              className="absolute inset-0 bg-white rounded-md"
              style={{
                width: "100%",
                height: "176px",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: 1,
                boxShadow: "4px -4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2)",
              }}
            ></div>

            <div
              className="absolute inset-0 bg-red-600 rounded-b-md"
              style={{
                width: "100%",
                height: "12px",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                zIndex: 1,
                marginTop: "114px",
              }}
            ></div>

            {/* Logo and text */}
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div
                  className="border rounded-full border-red-600 border-dashed flex items-center justify-center"
                  style={{ width: "75px", height: "75px", boxShadow: "4px -4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="bg-red-600 rounded-full p-3 w-14 h-14">
                    <img
                      src={ImageUrl(data.url, "icon")}
                      alt={data.url}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-lg tracking-tighter font-semibold mb-2 text-center">
                {data.title}
              </h3>
              <p className="text-black tracking-tighter text-xs md:text-sm text-center">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
