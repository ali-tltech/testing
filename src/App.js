import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './App.css'; // Ensure to include Tailwind's CSS
import Navbar from './components/Navbar';
import { FaReact } from "react-icons/fa";
import PositionCard from './components/PositionCard';
import { SiFlutter, SiAdobephotoshop } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import emailjs from 'emailjs-com';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    experience: '',
    linkedin: '',
    number: '',
    skills: '',
    position: '',
    education: '',
  });

  const openingsPositions = [
    {
      title: "React Developer",
      icon: <FaReact />,
      experience: "2+ years",
      responsibility: "Develop and maintain React applications.",
      fullTime: true,
    },
    {
      title: "Full stack Developer",
      icon: <FaCode />,
      experience: "1+ years",
      responsibility: "Work on server-side logic and database management.",
      fullTime: true,
    },
    {
      title: "Flutter Developer",
      icon: <SiFlutter />,
      experience: "1+ year",
      responsibility: "Design user interfaces and improve user experiences.",
      fullTime: false,
    },
    {
      title: "Graphic Designer",
      icon: <SiAdobephotoshop />,
      experience: "1+ year",
      responsibility: "Design user interfaces and improve user experiences.",
      fullTime: false,
    },
    // Add more positions as needed
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = (title) => {
    setSelectedJobTitle(title);
    setFormData({ ...formData, position: title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedJobTitle("");
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_l0u1r2u', 'template_0y3wvy7', formData, 'xklh-Mc4JkQsNpiXm')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.error('FAILED...', err);
      });

    handleCloseModal(); // Optionally close the modal after submission
  };


  const filteredPositions = openingsPositions.filter((position) =>
    position.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-fit overflow-x-hidden flex flex-col justify-start items-center bg-white">
      <Navbar />

      <div className='flex flex-col items-center overflow-hidden flex-wrap p-2 sm:p-5 md:px-20 lg:px-32 py-10 bg-white w-full f-fit gap-6'>
        <div className='w-full h-fit flex flex-col gap-4'>
          <div className='rounded-full bg-white w-fit py-1 px-3 border-[2px] font-bold font-sans text-black border-red-500'>
            we are hiring
          </div>
          <div className='md:text-[70px] text-[50px] font-sans text-black font-semibold leading-tight'>
            Be part of our mission
          </div>
          <p className='text-start w-fit max-w-[800px] text-xl font-semibold text-red-500'>
            <span className='text-black text-3xl'>"</span>
            we are looking for passionate candidates to join us in our mission. We value flat hierarchies, clear communication, and full ownership and responsibility
            <span className='text-black text-3xl'>"</span>
          </p>
          <div className='w-full flex justify-between items-center gap-6 flex-wrap'>
            <h1 className='text-4xl w-fit font-[600] text-black font-sans '>
              Opening Positions <span className="text-4xl text-red-500 ">{filteredPositions.length}</span>
            </h1>
            <div className='py-2 px-3 flex justify-center items-center border-red-500 border-[2px] text- rounded-full'>
              <input 
                type="text" 
                className='bg-transparent outline-none w-[250px]' 
                placeholder='Search' 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <CiSearch />
            </div>

            <div className='w-full h-fit flex justify-center gap-3 flex-wrap'>
              {filteredPositions.map((position, index) => (
                <div
                  key={index}
                  className="transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn"
                >
                  <PositionCard
                    title={position.title}
                    icon={position.icon}
                    exp={position.experience}
                    responsibility={position.responsibility}
                    fullTime={position.fullTime}
                    handleButtonClick={handleButtonClick}
                  />
                </div>
              ))}
            </div>
            {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-stone-950 bg-opacity-80 backdrop-blur-sm"
          style={{ zIndex: 1000 }} // Ensure this is higher than the PositionCard z-index
        >
          <div className="bg-white p-6  max-w-xl h-[80%] overflow-y-scroll w-full">
            <h2 className="text-2xl text-red-500 font-bold mb-4 font-sans">Apply for {selectedJobTitle} </h2>
            <p className='text-stone-500 font-semibold'>Please also apply using a professional email for better communication with our HR team when submitting your resume</p>
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="Years of experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* LinkedIn URL */}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/your-profile"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Number */}
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Your number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  placeholder="Your skills"
                  rows="3"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                ></textarea>
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Position you're applying for"
                  value={selectedJobTitle}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                  readOnly
                />
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  placeholder="Your highest degree"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className="mt-4 px-4 py-2 bg-stone-800 text-white rounded-3xl"
              >
                Submit
              </button>
            </form>
            <button
              type="button"
              onClick={handleCloseModal}
              className="mt-4 absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded-3xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full h-[500px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
