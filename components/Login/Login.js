import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiShowAlt, BiHide } from "react-icons/bi";
import useApi from "@/hooks/useApi";
import { Snackbar, Alert } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { data, loading, error, fetchData } = useApi();

  const { data: userData, fetchData: fetchUserData } = useApi();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordInputType = () => {
    return showPassword ? "text" : "password";
  };

  const handleSignin = (e) => {
    e.preventDefault();
    fetchData({
      method: "POST",
      url: "/auth/token/login/",
      data: {
        email: formValues.email,
        password: formValues.password,
      },
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (loading) {
      setSnackbarMessage("Signing in...");
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } else if (error) {
      setSnackbarMessage(error.response?.data?.message || "Sign in failed!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } else if (data) {
      setSnackbarMessage(data.message || "Sign in successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setFormValues({
        email: "",
        password: "",
      });
      Cookies.set("accessToken", data.auth_token, { expires: 7 }); // expires in 7 days
      fetchUserData({
        method: "GET",
        url: "/api/users/me",
      });
    }
  }, [data, error, loading]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("/");
    }
  }, [userData]);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/*=============== Registration form ========== */}
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
                href="/"
                className="text-[16px] font-[500] text-primaryColor text-center"
              >
                Get Help
              </Link>
            </div>
          </div>
          <h1 className="text-[25px] font-[700] text-primaryColor text-left">
            Log In
          </h1>
        </div>

        <form onSubmit={handleSignin}>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Username <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Password <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type={getPasswordInputType()}
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
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

          <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center sm:justify-between gap-[2rem] sm:gap-0 mt-[3rem]">
            <div className="w-full flex flex-col">
              <h1 className="text-[16px] font-[500] text-black text-center">
                Don't have an account?
              </h1>
              <Link
                href="/signup"
                className="text-[16px] font-[500] text-primaryColor text-center inline"
              >
                sign up
              </Link>
            </div>

            <div className="w-full flex justify-center sm:justify-end">
              <button type="submit" className="btn rounded-md">
                Log in
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
          alt="Signup Image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
