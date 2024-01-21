"use client";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex-none sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </Link>
    </div>
  );
};
export default Logo;
