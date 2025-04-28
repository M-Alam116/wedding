import useApi from "@/hooks/useApi";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Alert, Snackbar } from "@mui/material";

export default function Booking() {
  const router = useRouter();
  const { marqueeId, menuId, hallId, total_price } = router.query;

  const accessToken = Cookies.get("accessToken");
  const [user, setUser] = useState(null);

  const { data, loading, error, fetchData } = useApi();

  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      const user = userData ? JSON.parse(userData) : null;
      setUser(user);
    }
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user || !accessToken) {
      setSnackbarMessage("User not logged in!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (!marqueeId || !menuId) {
      setSnackbarMessage("Missing hall or menu ID!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const payload = {
      user: user.id,
      marquee: Number(marqueeId),
      hall: Number(hallId),
      menu: Number(menuId),
      total_price: total_price,
      date: bookingDate,
      time: bookingTime,
    };

    fetchData({
      method: "POST",
      url: `/api/api/marquees/${marqueeId}/bookings/`,
      data: payload,
    });
  };

  useEffect(() => {
    if (loading) {
      setSnackbarMessage("Booking in progress...");
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } else if (error) {
      setSnackbarMessage(error.response?.data?.message || "Booking failed!");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } else if (data) {
      setSnackbarMessage(data.message || "Booking successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setBookingDate("");
      setBookingTime("");
    }
  }, [data, error, loading, router]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container min-h-screen">
      <div className="">
        <div className="w-full bgGradient flex flex-col justify-center items-center py-16">
          <h1 className="secondaryFont heading text-[30px] font-[700] text-white text-center">
            DA WEDDING WHISPER
          </h1>
          <Link href="/">
            <div className="flex items-center gap-[10px] cursor-pointer">
              <BsFillArrowLeftCircleFill className="w-7 h-7 mx-auto mt-[10px]" />
              <p className="text-[18px] font-[600] mt-[7px]">Home</p>
            </div>
          </Link>
        </div>

        <form
          onSubmit={handleBooking}
          className="col-span-1 flex flex-col items-center md:col-span-3 px-[10px] md:px-[20px] py-[50px]"
        >
          <h1 className="secondaryFont text-[20px] font-[600] mb-4">
            BOOKING DETAILS
          </h1>

          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]"
            >
              BOOKING DATE:
            </label>
            <input
              type="date"
              id="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="time"
              className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]"
            >
              TIME:
            </label>
            <input
              type="time"
              id="time"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            />
          </div>

          <div className="mt-[30px]">
            <button type="submit" className="btn">
              BOOK NOW
            </button>
          </div>
        </form>
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
