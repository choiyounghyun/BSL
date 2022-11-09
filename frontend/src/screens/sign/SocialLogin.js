import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OnSocialLogin({ getUserData }) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const tokens = params.params;

    const refresh_start = tokens?.search("refreshtoken=");
    const access_start = tokens?.search("accesstoken=");

    if (refresh_start === 0 && access_start) {
      const refreshtoken = tokens?.slice(refresh_start + 13, access_start - 1);
      const accesstoken = tokens?.slice(access_start + 12, tokens.length);
      localStorage.setItem("token", accesstoken || "");
      localStorage.setItem("refresh_token", refreshtoken || "");

      /* eslint-disable */
      getUserData(params.params || "");
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <div></div>;
}

export default OnSocialLogin;