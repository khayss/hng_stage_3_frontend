import Image from "next/image";

type BrandLogoProps = {
  name: string;
  imgUrl: string;
};

export default function BrandLogo({ imgUrl, name }: BrandLogoProps) {
  return (
    <div className="flex flex-col items-center w-full text-[clamp(0.625rem, 0.2416rem + 1.573vw, 1.5rem)] gap-10">
      <div className="bg-light-gray rounded-full flex items-center justify-center aspect-square w-[42px] md:w-[62px] lg:w-[82px] xl:w-[100px]">
        <div className="max-w-[42%] aspect-square w-full">
          <Image
            width={100}
            height={100}
            src={imgUrl}
            alt={name}
            className="w-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-nowrap text-x-small md:text-logo-title">{name}</h3>
    </div>
  );
}
