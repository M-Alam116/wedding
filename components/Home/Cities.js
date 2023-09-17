import Image from "next/image";
export default function Cities() {
  return (
    <div className="container py-[50px] px[5px]">
      <div>
        <h1 className="heading text-center">CITIES AVAILABLE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[3rem]">
        <div className="flex flex-col justify-end items-center px-[10px] sm:px-[0px]">
          <div className="relative overflow-hidden rounded-[20px]">
            <Image
              src="/images/islamabad.png"
              width={350}
              height={230}
              alt=""
              className="rounded-[20px] hover:scale-110 duration-500"
            />
          </div>
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">
            ISLAMABAD
          </h2>
        </div>
        <div className="flex flex-col justify-end items-center px-[10px] sm:px-[0px]">
          <div className="relative overflow-hidden rounded-[20px]">
            <Image
              src="/images/rawalpindi.png"
              width={350}
              height={230}
              alt=""
              className="rounded-[20px] hover:scale-110 duration-500"
            />
          </div>
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">
            RAWALPINDI
          </h2>
        </div>
        <div className="flex flex-col justify-end items-center px-[10px] sm:px-[0px]">
          <div className="relative overflow-hidden rounded-[20px]">
            <Image
              src="/images/wahcantt.png"
              width={350}
              height={230}
              alt=""
              className="rounded-[20px] hover:scale-110 duration-500"
            />
          </div>
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">
            WAH CANTT
          </h2>
        </div>
      </div>
    </div>
  );
}
