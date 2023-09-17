import Image from "next/image";
export default function TestimonialCard({ review }) {
  const { image, name, email, text } = review;

  return (
    <div className="max-w-[300px] w-[95%] h-auto bg-secondaryBg flex flex-col justify-center items-center px-[20px] mx-auto py-[30px] rounded-xl shadow-lg drop-shadow-lg">
      <div className="rounded-[100%] w-[100px] h-[100%] flex justify-center items-center">
        <Image
          src={image}
          width={70}
          height={70}
          alt=""
          className="rounded-[100%]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[17px] font-[600] text-center my-[5px]">{name}</h1>
        <span className="text-[14px] font-[500] text-center mb-[15px]">
          {email}
        </span>
        <p className="text-[14px] font-[500] text-center opacity-50">
          ❝ {text} ❞
        </p>
      </div>
    </div>
  );
}
