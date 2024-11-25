import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Link href="/">
      <div className={cn("", className)} {...props}>
        {props.name}
      </div>
    </Link>
  );
};

export default Logo;
