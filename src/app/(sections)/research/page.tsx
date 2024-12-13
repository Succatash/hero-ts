import SmallCard from "@/components/smallCard";

import Link from "next/link";

const Research = () => {
  const data = [
    { img: "https://github.com/shadcn.png", num: 3, name: "tzvi" },
    { img: "https://github.com/shadcn.png", num: 2, name: "tzvi" },
    { img: "https://github.com/shadcn.png", num: 1, name: "tzvi" },
  ];
  return (
    <div className="">
      {data.map(({ img, num, name }) => (
        <Link href={`soldiers/${name}`} key={1 + num}>
          <SmallCard image={img} name={name} />
        </Link>
      ))}
    </div>
  );
};

export default Research;
