import InvitationCard from "@/Components/profile_DashBoard/Invitation/InviteCard";
import ContentBox from "@/assets/userDashBoard/ContentBox.png";
import { useEffect } from "react";
import useAuth from "../../../lib/useAuth.js";
import { useNavigate } from "react-router-dom";
import { getInvitations } from "../services.js";
import getUser from "../userService.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvitationsSuccess, fetchInvitationsFailure } from "../../../redux/team/teamSlice";

function Invitations() {
  const dispatch = useDispatch();
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const { user, token } = getUser();
  const invitations = useSelector((state) => state.team.invitations);
  const status = useSelector((state) => state.team.status);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getInvitations({ userId: user._id, token });
        if (res?.success) {
          dispatch(fetchInvitationsSuccess(res.teams));
          toast("Invitations Fetched successfully!", {
            icon: "🚀",
            duration: 2000,
            className: "toast-blue",
          });
        } else {
          dispatch(fetchInvitationsFailure(res.message));
          toast.error(res.message, {
            style: {
              marginTop: "50px",
            },
          });
        }
      } catch (err) {
        dispatch(fetchInvitationsFailure("Something went wrong. Please try again."));
        toast.error("Something went wrong. Please try again.", {
          className: "toast-error",
        });
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch, token, user._id]);

  return (
    <div
      className="overflow-y-scroll md:w-[74vw] bg-white custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute top-[60px] flex pt-20 p-5 md:p-10  h-full md:h-auto"
      style={{
        height: "calc(104vh - 98px)",
        backgroundImage: `url(${ContentBox})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {status === "succeeded" && invitations.length > 0 ? (
        <div className="w-full flex gap-4 text-xl flex-col">
          <div className="font-sfText leading-tight text-2xl mb-5 font-bold">
            Received Invitations
          </div>
          <div
            className="overflow-y-scroll flex flex-col gap-5 
                 [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-thumb]:rounded-full 
                [&::-webkit-scrollbar-thumb]:bg-dark_secondary
                max-h-[600px] md:max-h-[450px]"
          >
            {invitations.map((invite) => (
              <InvitationCard key={invite._id} invite={invite} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-center tracking-widest text-4xl font-bebas">
          No Invitation
        </div>
      )}
    </div>
  );
}

export default Invitations;