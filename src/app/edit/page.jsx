"use client";
import { IoPerson } from "react-icons/io5";

function page() {
  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.company.value;
    const website = e.target.website.value;
    const location = e.target.location.value;
    const skills = e.target.skills.value;
    const git = e.target.git.value;
    const shor = e.target.shor.value;
  };
  return (
    <div className="max-w-[800px] m-auto p-4 text-center">
      <div className="flex justify-center flex-col items-start gap-5 mt-4">
        <h1 className="font-bold text-5xl text-[#17a2b8] pt-9">
          Edit Your Profile
        </h1>
        <div className="flex items-center gap-2">
          <IoPerson className="text-2xl" />
          <p className="text-2xl"> Add some changes to your profile</p>
        </div>
        <form
          className="w-[800px] flex flex-col items-start gap-6"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col items-start w-full ">
            <select className="border border-gray-300 rounded-md py-2 px-4 w-full">
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor or Teacher">
                Instructor or Teacher
              </option>
              <option value="Intern">Intern</option>
            </select>
            <p className="text-xs leading-5 mt-2">
              Give us an idea of where you are at in your career
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="company"
              className="w-full border py-2 px-4"
              placeholder="Company"
              type="text"
            />
            <p className="text-xs leading-5">
              Give us an idea of where you are at in your career
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="website"
              className="w-full border py-2 px-4"
              placeholder="Website"
              type="text"
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
            <input
              name="skills"
              className="w-full border py-2 px-4"
              placeholder="* Skills"
              type="text"
            />
            <p className="text-xs leading-5">
              City & state suggested (eg. Boston, MA)
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="git"
              className="w-full border py-2 px-4"
              placeholder="Github Username"
              type="text"
            />
            <p className="text-xs leading-5">
              If you want your latest repos and a Github link, include your
              username
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <input
              name="shor"
              className="w-full border pt-2 pb-7 px-4"
              placeholder="A shor bio of your self"
              type="text"
            />
            <p className="text-xs leading-5">Tell us a little about yourself</p>
          </div>
          <div className="flex items-center gap-8">
            <button className="bg-[#f4f4f4] py-2 px-3">
              Add Social Network Links
            </button>
            <button>Optional</button>
          </div>
          <div className="flex items-center gap-8 pt-10">
            <button type="submit" className="bg-[#17a2b8] text-white py-2 px-4">
              Submit
            </button>
            <button>Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
