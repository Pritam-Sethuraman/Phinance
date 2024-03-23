import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/logo.png";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-24 p-2 gap-2">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center rounded-full"
        >
          <Image priority src={LogoImage} alt="Logo" className="light:invert" />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
