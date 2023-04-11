import React from "react";

const Ipdcosnultancy = () => {
  return (
    <div>
      <div className="w-full font-bold text-end text-3xl bg-green-800 pr-14 py-4 p-2">
        OPD CONSULTANCY{" "}
      </div>

      <div className="flex flex-row ">
        <div className="w-full font-semibold bg-gray-500 p-2 basis-1/4">
          SelectConsultant
          <input type="text" className="bg-white border-b border-black  m-2" />
        </div>
        <div className="w-full font-semibold bg-gray-500 p-2">
          Sync
          <input type="text" className="bg-white border-b border-black  m-8" />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4  ">
          <div className="flex flex-row ">
            <div className="w-full font-semibold bg-gray-500 p-2 basis-1/4">
              Patient name
              <input
                type="text"
                className="bg-white border-b border-black  m-2"
              />
            </div>
            <div className="w-full font-semibold bg-gray-500 p-2">
              EMR No.
              <input
                type="text"
                className="bg-white border-b border-black  m-2 px-2"
              />
            </div>
          </div>
          <br />
          <textarea
            className="w-full px-5 py-20 my-2 rounded outline-blue-200 border border-gray-500"
            rows="5"
            name="textData"
          ></textarea>
        </div>

        <div className="col-span-8 ml-8">
          <div className="flex flex-nowrap">
            Prescription
            <input
              type="text"
              className="px-2 py-2 my-2 mx-2 border-spacing-2 border-2 border-zinc-700 "
            />
            <button className="border-zinc-500 w-14 font-semibold ">
              {" "}
              Print{" "}
            </button>
          </div>
          <div className="flex flex-row   py-4 space-x-2">
            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2  ">
              <p className="float-left font-bold">Investigations</p>
              <input type="text" className="px-2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 bg-white ">
                  Save
                </button>
              </div>

              <div className="my-3">
                <textarea
                  className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                  rows="5"
                  name="textData"
                ></textarea>
              </div>
            </div>

            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2">
              <p className="float-left font-bold">Diagnosis</p>
              <input type="text" className="px--2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 bg-white">
                  Save
                </button>
              </div>
              <div className="my-3">
                <textarea
                  className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                  rows="5"
                  name="textData"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-row mx-2 space-x-2">
            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2 ">
              <p className="float-left font-bold">Medicines</p>
              <input type="text" className="px-2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 bg-white">
                  Save
                </button>
              </div>

              <div className="my-3">
                <textarea
                  className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                  rows="5"
                  name="textData"
                ></textarea>
              </div>
            </div>
            <br />
            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2">
              <p className="float-left font-bold">Others</p>
              <input type="text class" className="px-2 mx-2 " />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 bg-white">
                  Save
                </button>
              </div>
              <div className="my-3">
                <textarea
                  className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                  rows="5"
                  name="textData"
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <div className="bg-orange-200 p-5 mx-15 py-5 border">
            <p className="float-left font-bold">
              Signature of Treatment Consultant{" "}
            </p>
            <input type="text" className="px-8 mx-2" />
            <div className="flex float-right space-x-5 mb-3 mx-4">
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Save
              </button>
            </div>

            <div className="my-3">
              <textarea
                className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                rows="5"
                name="textData"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipdcosnultancy;
