import { useEffect, useState } from "react";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";
import useAuth from "../../../lib/useAuth.js"
import getUser from "../userService.js";
import { useNavigate } from "react-router-dom";
import { updateResume } from "../services";
import toast from "react-hot-toast";



const UploadResume = () => {

  const isAuthenticated = useAuth()
  const {user, token} = getUser()

  const navigate = useNavigate()
  const [link, setLink] = useState(""); 

  useEffect(() => {
    if(!isAuthenticated){
      navigate("/")
    }
  }, [isAuthenticated])

  const handleUpload = async() => {
    try{
      const res = await updateResume({email:user.email, resumeLink:link, token})
      if(res?.success){
        toast("Resume Updated!", {
          icon: '🚀',
          duration: 2000,
          className: "toast-blue"
        });
        console.log(res?.message)
      }
    }catch(err){
      toast.error(res?.message, { className: "toast-error" });
      console.log(err)
    }
  }

  const handleInputChange = (e) => {
    setLink(e.target.value); 
  };

  return (
    <div 
    className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute  flex justify-center items-center h-full md:h-auto"
    style={{
      height: '100%',
      backgroundImage: `url(${ContentBox})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
    }}>
      <div className="text-xs xs:text-sm md:text-lg rounded-md px-9 py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px]">
        <div className="w-full h-[90px] md:h-[120px] flex justify-center">
          <h1 className="font-bionix text-[30px] md:text-5xl text-white">Upload Resume</h1>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <div className="w-full h-10">
              <h1 className="font-Sfpro text-[24px] text-white">Resume Drive Link</h1>
            </div>

            <input
              className="h-14 px-6 py-3 font-Sfpro text-[17px] text-white bg-lightMineshaft placeholder-gray- placeholder: placeholder:font-Sfpro focus:ring-2 focus:ring-scheduleOrange focus:outline-none rounded-md"
              type="text"
              value={link}
              onChange={handleInputChange}
              placeholder="Enter your resume link"
            />
          </div>

          <div className="flex flex-col w-full gap-3 items-center">
            <p className="text-center text-[17px] text-scheduleOrange font-Sfpro">Make Sure it is public</p>
            <button
              className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[50px] w-[215px] py-[8px] px-[29px]"
              onClick={handleUpload}
            >
              UPLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
