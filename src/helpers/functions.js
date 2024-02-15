import { useDispatch } from "react-redux";
import { RESET_AUTH, logout } from "../redux/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};

export const useLogoutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      dispatch(RESET_AUTH());
      await dispatch(logout());
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return logoutUser;
};
