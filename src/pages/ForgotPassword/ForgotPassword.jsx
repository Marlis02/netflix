import { TextFields } from "@mui/icons-material";
import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { authContext } from "../../context/authContext";
import { auth } from "../../firebase";
const ForgotPassword = () => {
  const { forgotPass } = useContext(authContext);
  //   const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = ({ email }) => {
    forgotPass(email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form_con">
        <h3 className="sign_in_title">Forgot password</h3>
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
        <Button
          className="sign_in_btn"
          // style={{ marginTop: "10px" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>

      <Link to="/">
        <Button style={{ background: "red", color: "white" }}>Home</Button>
      </Link>
    </div>
  );
};

export default ForgotPassword;
