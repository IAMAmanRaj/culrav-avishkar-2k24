import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/General/Footer";
import Navbar from "./Components/General/Navbar";
import ForgetPassword from "./pages/Auth/ForgetPassword/Forgetpassword";
import ForgetPasswordTokenVerification from "./pages/Auth/ForgetPassword/PasswordTokenVerification";
import Login from "./pages/Auth/Login/LoginPage";
import OutsideRegistration from "./pages/Auth/OutsideRegistration/OutsideRegistrationPage";
import Register from "./pages/Auth/Register/RegisterPage";
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail";
import AvishkarEvents from "./pages/Avishkar/AllEvents";
import AvishkarEvent from "./pages/Avishkar/EventPage";
import AvishkarLanding from "./pages/Avishkar/LandingPage";
import CulravEvents from "./pages/Culrav/AllEvents";
import CulravEvent from "./pages/Culrav/EventPage";
import CulravLanding from "./pages/Culrav/LandingPage";
import Home from "./pages/Home/HomePage";
import PayFeesPage from "./pages/PayFees/PayRegistrationFeePage";
import Team from "./pages/Team/TeamPage";
import PrivateRoute from "./Components/General/PrivateRoute";
import UserProfilePage from "./pages/UserDashboard/UserDashboardPage";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    let title = "";

    switch (pathname) {
      case "/":
        title += "Home";
        break;
      case "/login":
        title += "Login";
        break;
      case "/registration":
        title += " Registration";
        break;
        case "/verify-email":
        title += " Verify Email";
        break;
      case "/outside-registration":
        title += " Outside Registration";
        break;
      case "/outside-registration/payFee":
        title += " Pay Fees";
        break;
      case "/culrav-landing":
        title += " Culrav";
        break;
      case "/culravevents":
        title += " Culrav Events";
        break;
      case "/culraveventpage":
        title += " Culrav Event Page";
        break;
      case "/avishkar-landing":
        title += " Avishkar";
        break;
      case "/avishkarevents":
        title += " Avishkar Events";
        break;
      case "/avishkareventpage":
        title += " Avishkar Event Page";
        break;
      case "/team":
        title += " Team";
        break;
      case "/profile":
        title += " Profile";
        break;
      default:
        title += "";
    }

    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path="/forget-password-token-verification" element={<ForgetPasswordTokenVerification />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/outside-registration" element={<OutsideRegistration />} />
        <Route path="/outside-registration/payFee" element={<PayFeesPage />} />
        <Route path="/Culrav-Landing" element={<CulravLanding />} />
        <Route path="/CulravEvents" element={<CulravEvents />} />
        <Route path="/CulravEventPage" element={<CulravEvent />} />
        <Route path="/Avishkar-Landing" element={<AvishkarLanding />} />
        <Route path="/AvishkarEvents" element={<AvishkarEvents />} />
        <Route path="/AvishkarEventPage" element={<AvishkarEvent />} />
        <Route path="/team" element={<Team />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<UserProfilePage />} />
        </Route>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;