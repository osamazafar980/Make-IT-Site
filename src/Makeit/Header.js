import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Headerop from "./Headerop";
import Notifications from "react-notifications-menu";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import TodayIcon from '@material-ui/icons/Today';
import ForumIcon from '@material-ui/icons/Forum';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { useNavigate } from "react-router-dom";
import "./Header.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useState } from "react";
import Logo from '../components/Logo';



function Header(props) {
  const navigate = useNavigate();

  const DEFAULT_NOTIFICATION = {
    image:
      "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
    message: "Welcome to Makeit .",
    detailPage: "/Recipe",
    receivedTime: "12h ago"
  };
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);

  return (
    <div className="header">
      <div className="header_left">
        <Logo />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        <Headerop
          Icon={HomeIcon}
          title="Home"
          onClick={() => navigate("/Home/"+props.id)}
        />

        <Headerop
          Icon={RestaurantIcon}
          title="Recipe"
          onClick={() => navigate("/MainRecipe")}
        />
        <Headerop
          Icon={ViewInArIcon}
          title="AR"
          onClick={() => navigate("/AR")}
        />
        <Headerop
          Icon={SupervisorAccountIcon}
          title="News Feed"
          onClick={() => navigate("/Feed/"+props.id)
          }
        />
        <Headerop
          Icon={TodayIcon}
          title="Diet Plan"
          onClick={() => navigate("/DietPlan")}
        />


        <Headerop
          Icon={ImageSearchIcon}
          title="Detect"
          onClick={() => navigate("/RecipeDetection")}
        />
        <Headerop
          Icon={ForumIcon}
          title="Feedback"
          onClick={() => navigate("/UserFeedback")}
        />
        {/* Notification section */}

        <div className="notification">
          <Notifications
            data={data}
            header={{
              title: "Notifications",
              option: { text: "View All", onClick: () => console.log("Clicked") }
            }}
            markAsRead={(data) => {
              console.log(data);
            }}

          />
        </div>
        <span className="title_notification">Notifications</span>
        <Headerop
          avatar={true}
          title='Abubakar'
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
export default Header