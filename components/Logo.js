import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="text-decoration-none">
        <h4 className="text-success">Signature Farms</h4>
      </a>
    </Link>
  );
};

export default Logo;
