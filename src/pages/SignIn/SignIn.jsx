import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { authContext } from "../../context/authContext";

const SignIn = () => {
  const { handleSignIn } = useContext(authContext);
  const navigate = useNavigate();
  //=============================password================

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //---------------------------------------------------

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    handleSignIn(data, navigate);

    console.log(data);
  };
  return (
    <div className="sign_in">
      <div className="sign_in_container">
        <form onSubmit={handleSubmit(onSubmit)} className="form_con">
          <h3 className="sign_in_title">Sign in</h3>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
                className="sgin_in_inp"
                variant="outlined"
                label="email"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <div className="pass">
                <TextField
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message?.toString()}
                  className="sgin_in_inp"
                  variant="outlined"
                  label="password"
                  type={showPassword ? "password" : "text"}
                />
                <span className="eye" onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </div>
            )}
          />
          <div className="link_sign">
            <p style={{ color: "rgb(115,115,115)", fontWeight: "500" }}>
              New to our site?{" "}
              <Link
                to="/sign-up"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {" "}
                Sign up{" "}
              </Link>
            </p>
          </div>
          <Button
            className="sign_in_btn"
            // style={{ marginTop: "10px" }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
