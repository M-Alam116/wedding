import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Snackbar, Alert } from "@mui/material";
import useApi from "@/hooks/useApi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function SignUpWithEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const router = useRouter();

  const { data, loading, error, fetchData } = useApi();
  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
    fetchData: fetchLogin,
  } = useApi();

  const { data: userData, fetchData: fetchUserData } = useApi();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setSnackbarMessage("Passwords do not match!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    fetchData({
      method: "POST",
      url: "/api/users/",
      data: {
        username: formValues.username,
        email: formValues.email,
        phone_number: formValues.phone,
        city: formValues.city,
        password: formValues.password,
        first_name: formValues.firstName,
        last_name: formValues.lastName,
      },
    });
  };

  useEffect(() => {
    if (loading) {
      setSnackbarMessage("Signing up...");
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } else if (error) {
      setSnackbarMessage(error.response?.data?.message || "Sign up failed!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } else if (data) {
      setSnackbarMessage(data.message || "Sign up successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      fetchLogin({
        method: "POST",
        url: "/auth/token/login/",
        data: {
          email: formValues.username,
          password: formValues.password,
        },
      });

      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
        city: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [data, error, loading]);

  useEffect(() => {
    if (loginLoading) {
      setSnackbarMessage("Signing in...");
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } else if (loginError) {
      setSnackbarMessage(
        loginError.response?.data?.message || "Sign in failed!"
      );
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } else if (loginData) {
      setSnackbarMessage(loginData.message || "Sign in successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      Cookies.set("accessToken", loginData.auth_token, { expires: 7 }); // expires in 7 days
      fetchUserData({
        method: "GET",
        url: "/api/users/me",
      });
    }
  }, [loginData, loginError, loginLoading]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("/");
    }
  }, [userData]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/* Registration form */}
      <div className="w-full flex flex-col justify-center px-[10px] md:px-[50px] py-[50px]">
        <div className="">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[2rem] sm:gap-[0px] sm:justify-between mb-[4rem]">
            <div>
              <Link href="/">
                <button className="btn rounded-sm">Go to Home</button>
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[16px] font-[500] text-center">
                Having Trouble?
              </h2>
              <Link
                href="/contact"
                className="text-[16px] font-[500] text-primaryColor text-center"
              >
                Get Help
              </Link>
            </div>
          </div>
          <h1 className="text-[25px] font-[700] text-primaryColor text-left">
            Sign up
          </h1>
        </div>

        <form onSubmit={handleSignup}>
          <div className="flex justify-between sm:gap-[3rem] flex-col sm:flex-row">
            <div className="flex flex-col w-full">
              <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
                First Name <span className="text-black text-[16px]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                required
                className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
                Last Name <span className="text-black text-[16px]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                required
                className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              Username <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              Email <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              Phone Number <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              required
              pattern="[0-9]*"
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              City <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              Create Password <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
            {showPassword ? (
              <BiShowAlt
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPassword}
              />
            ) : (
              <BiHide
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPassword}
              />
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-[16px] font-[400] text-black opacity-80 mt-[25px]">
              Confirm Password <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type={showPasswordConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
            {showPasswordConfirm ? (
              <BiShowAlt
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPasswordConfirm}
              />
            ) : (
              <BiHide
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPasswordConfirm}
              />
            )}
          </div>

          <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center sm:justify-between gap-[2rem] sm:gap-0 mt-[3rem]">
            <div className="w-full flex flex-col">
              <h1 className="text-[16px] font-[500] text-black text-center">
                Already have an account?
              </h1>
              <Link
                href="/login"
                className="text-[16px] font-[500] text-primaryColor text-center"
              >
                Sign In
              </Link>
            </div>

            <div className="w-full flex justify-center sm:justify-end">
              <button type="submit" className="btn rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-[100%] h-auto hidden md:block">
        <Image
          src="/images/signup.png"
          width={500}
          height={1500}
          alt="signup image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
