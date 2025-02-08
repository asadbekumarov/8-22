"use client";
import { baseUrl } from "@/utils/api";

import axios from "axios";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";

function Page() {
  const [currentJob, setCurrentJob] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${baseUrl}profile/experience`, {
        job: e.target.job.value,
        company: e.target.company.value,
        location: e.target.location.value,
        skills: e.target.skills.value,
        from: e.target.fromDate.value,
        to: currentJob ? null : e.target.toDate.value,
        description: e.target.des.value,
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-[800px] m-auto p-4 text-center">
      <div className="flex justify-center flex-col items-start gap-5 mt-4">
        <h1 className="font-bold text-5xl text-[#17a2b8] pt-9">
          Add Experience
        </h1>
        <div className="flex items-center gap-2">
          <IoPerson className="text-2xl" />
          <p className="text-xl">
            Add any developer/programming positions that you have had in the
            past
          </p>
        </div>
        <form
          className="w-[800px] flex flex-col items-start gap-6"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col items-start w-full">
            <input
              name="job"
              className="w-full border py-2 px-4"
              placeholder="Job Title"
              type="text"
              required
            />
            <p className="text-xs leading-5">
              Give us an idea of where you are at in your career
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="company"
              className="w-full border py-2 px-4"
              placeholder="Company"
              type="text"
              required
            />
            <p className="text-xs leading-5">
              Could be your own company or one you work for
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="location"
              className="w-full border py-2 px-4"
              placeholder="Location"
              type="text"
            />
            <p className="text-xs leading-5">
              Could be your own or a company website
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="text-base font-bold leading-6">From Date</p>
            <input
              name="fromDate"
              className="w-full border py-2 px-4"
              type="date"
              required
            />
            <span className="flex items-center py-7 gap-2">
              <input
                type="checkbox"
                checked={currentJob}
                onChange={() => setCurrentJob(!currentJob)}
              />
              <p> Current Job</p>
            </span>
            {!currentJob && (
              <>
                <p className="text-base font-bold leading-6">To Date</p>
                <input
                  name="toDate"
                  className="w-full border py-2 px-4"
                  type="date"
                />
              </>
            )}
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="des"
              className="w-full border pt-2 pb-7 px-4"
              placeholder="Job Description"
              type="text"
            />
            <p className="text-xs leading-5">Tell us a little about yourself</p>
          </div>
          <div className="flex items-center gap-8 pt-5">
            <button type="submit" className="bg-[#17a2b8] text-white py-2 px-4">
              Submit
            </button>
            <button type="button">Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
