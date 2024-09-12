import Link from "next/link";
import { Facebook02Icon, InstagramIcon } from "hugeicons-react";

const Socials = ({ className }) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <span className="hidden sm:flex pr-8">Follow Us:</span>
      <Link
        href="https://www.facebook.com/people/Powell-United-Methodist-Church-Preschool/61550998390123/"
        aria-label="Link to our Facebook Page"
        target="_blank"
        prefetch={false}
      >
        <Facebook02Icon size={48} />
      </Link>
    </div>
  );
};

export default Socials;
