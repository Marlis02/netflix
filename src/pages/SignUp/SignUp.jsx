import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Button, TextField } from "@mui/material";
import "./style.css";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const pwd = watch("password");
  const { handleSignUp } = useContext(authContext);
  const navigate = useNavigate();

  const onSubmit = (data, navigate) => {
    console.log(data);
    handleSignUp(data, navigate);
  };
  return (
    <div className="sign_up">
      <div className="sign_up_container">
        <form onSubmit={handleSubmit(onSubmit)} className="form_con">
          <h3 className="sign_up_title">Sign up</h3>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                label="Email"
                {...field}
                variant="outlined"
                className="sgin_up_inp"
              />
            )}
          />
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{ required: "password is required" }}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                {...field}
                variant="outlined"
                className="sgin_up_inp"
                label="Password :"
                type="password"
              />
            )}
          />
          <Controller
            name="password_again"
            control={control}
            defaultValue=""
            rules={{
              required: "Confirm password is required",
              validate: (value) => value === pwd || "The passwords don't match",
            }}
            render={({ field }) => (
              <TextField
                error={!!errors.password_again}
                helperText={errors.password_again?.message?.toString()}
                {...field}
                variant="outlined"
                className="sgin_up_inp"
                label="Сonfirm password :"
                type="password"
              />
            )}
          />
          <div className="link_sign">
            <p style={{ color: "rgb(115,115,115)", fontWeight: "500" }}>
              Already have an account?{" "}
              <Link
                to="/sign-in"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Sign In
              </Link>
            </p>
          </div>

          <Button className="sign_up_btn" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// {...register("email", {
//   pattern: {
//     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//     message: "Entered value does not match email format",
//   },
// })}
