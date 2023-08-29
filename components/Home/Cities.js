import Image from "next/image";
export default function Cities() {
  return (
    <div className="container py-[50px] px[5px]">
      <div>
        <h1 className="heading text-center">CITIES AVAILABLE</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        <div className="flex flex-col justify-end items-center">
          <Image src="/images/islamabad.png" width={200} height={200} alt="" />
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">ISLAMABAD</h2>
        </div>
        <div className="flex flex-col justify-end items-center">
          <Image src='/images/rawalpindi1.png' width={200} height={200} alt=""/>
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">RAWALPINDI</h2>
        </div>
        <div className="flex flex-col justify-end items-center">
          <Image src="/images/wahcantt.png" width={200} height={200} alt="" />
          <h2 className="text-[18px] font-[500] text-center mt-[15px]">WAH CANTT</h2>
        </div>
      </div>
    </div>
  );
}
