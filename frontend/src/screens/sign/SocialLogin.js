import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OnSocialLogin() {
  const params = useParams();
  const navigate = useNavigate();
  const user = {
    accessToken: "",
    code: 0,
    mas: "Success",
    refreshToken: "",
    success: true,
  }
  useEffect(() => {
    const tokens = params.params;
    const refresh_start = tokens?.search("refreshtoken=");
    const access_start = tokens?.search("accesstoken=");

    if (refresh_start === 0 && access_start) {
      console.log(params);
      console.log(tokens);
      console.log(user);

      const refreshtoken = tokens?.slice(refresh_start + 13, access_start - 1);
      const accesstoken = tokens?.slice(access_start + 12, tokens.length);
      user.accessToken = accesstoken
      user.refreshToken = refreshtoken
      if (user !== "") {
        localStorage.setItem("user");
      }
      // localStorage.setItem("user", user || "");
      // localStorage.setItem("refresh_token", refreshtoken || "");


      console.log(params)
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return <div></div>;
}

export default OnSocialLogin;