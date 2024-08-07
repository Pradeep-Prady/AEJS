import Image from "next/image";
import Link from "next/link";

const SubServiceItem = ({ items, title, params }) => {
  return (
    <div className={"bg-[#F2F2F2] w-full p-5"}>
      <h1 className="text-[28px] font-semibold text-center my-2"> {title}</h1>

      <div className="w-full flex flex-col gap-3">
        {items.map((item) => (
          <Link
            href={item?.path}
            className="w-full flex  items-center gap-7 border-b
         border-black pb-2"
            key={item.id}
          >

            <div className="w-2/12">
               <div
              className={`w-[75px] px-3 py-5 rounded-md ${
                item?.id === params ? "bg-[#A8D532]" : "bg-white"
              }  h-[80px] flex items-center justify-center`}
            >
              <Image
                className="w-full h-auto"
                src={item.icon.src}
                width={75}
                height={75}
                alt={item.title}
              />
            </div>
            </div>
            <div className="10/12">

            <h3 className="text-[18px] text-primary font-semibold">
              {item.title}
            </h3>
              </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubServiceItem;
