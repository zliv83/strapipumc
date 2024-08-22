import Link from "next/link";
import { Facebook02Icon, InstagramIcon } from "hugeicons-react";

const Socials = ({ className }) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <span className="hidden sm:flex pr-8">Follow Us:</span>
      <Link
        href="https://www.facebook.com"
        aria-label="Link to our Facebook Page"
        target="_blank"
      >
        <Facebook02Icon size={48} />
      </Link>
      <Link
        href="https://www.instagram.com"
        aria-label="Link to our Instagram page"
        target="_blank"
      >
        <InstagramIcon size={48} />
      </Link>
    </div>
  );
};

export default Socials;
