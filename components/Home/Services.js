import Image from "next/image";
export default function Services() {
  return (
    <div className="container py-[50px] px-[5px]">
      <div>
        <h1 className="heading text-center">OUR SERVICES</h1>
      </div>

      <div className="flex flex-wrap gap-[50px] justify-center mt-[40px]">
        <div className="border-[2px] border-textColor rounded-[10px] p-[15px]">
          <Image src="/images/venues.png" width={150} height={150} alt="" />
          <h3 className="text-[16px] font-[700] mt-4 text-center">
            Wedding Venues
          </h3>
        </div>

        <div className="border-[2px] border-textColor rounded-[10px] p-[15px]">
          <Image
            src="/images/photography.png"
            width={150}
            height={150}
            alt=""
          />
          <h3 className="text-[16px] font-[700] mt-4 text-center">
            Photography
          </h3>
        </div>

        <div className="border-[2px] border-textColor rounded-[10px] p-[15px]">
          <Image src="/images/decor.png" width={150} height={150} alt="" />
          <h3 className="text-[16px] font-[700] mt-4 text-center">Decor</h3>
        </div>

        <div className="border-[2px] border-textColor rounded-[10px] p-[15px]">
          <Image src="/images/catering.png" width={150} height={150} alt="" />
          <h3 className="text-[16px] font-[700] mt-4 text-center">Catering</h3>
        </div>
      </div>
    </div>
  );
}
