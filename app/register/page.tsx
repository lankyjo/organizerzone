"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const fields = [
  { type: "text", placeholder: "Enter your username", label: "Username" },
  { type: "email", placeholder: "Enter your email", label: "Email Address" },
  {
    type: "tel",
    placeholder: "Enter your phone number",
    label: "Phone Number",
  },
  { type: "password", placeholder: "Enter your password", label: "Password" },
  {
    type: "text",
    placeholder: "Enter referral code (Optional)",
    label: "Referral Code",
  },
];
export default function RegisterPage() {
  return (
    <section className="w-full lg:h-dvh lg:p-0 md:p-10 p-5 relative flex justify-center items-center lg:text-gray-900 text-white">
      <div className="  bg-white/30 backdrop-blur-xl w-full rounded-lg p-10 lg:p-0 lg:px-10 lg:py-6 lg:overflow-y-auto flex-1/2 space-y-2 flex justify-center items-center flex-col lg:space-y-3 lg:h-full lg:rounded-none lg:bg-white/90  ">
        <form className="space-y-3  w-full max-w-[500px] mx-auto">
          <h1 className="text-3xl capitalize">Create account</h1>
          {fields.map((field) => (
            <InputField
              key={field.placeholder}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
            />
          ))}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <small>
              I agree to Ogaticket{" "}
              <span className="text-primary">
                <a href="">terms & policy</a>
              </span>
            </small>
          </div>
          <div>
            <button className="w-full cursor-pointer text-white bg-primary py-3 rounded-lg">
              Create an Account
            </button>
          </div>
        </form>
        <div>
          <p>
            Already have an account?{" "}
            <span className="text-primary">
              <Link href="/login">login</Link>
            </span>
          </p>
        </div>

        {/* <div className=" max-w-[500px] text-center my-4 flex items-center w-full justify-center">
          <hr className="w-full border-gray-300 lg:border-gray-400" />
          <span className="mx-2 text-gray-200 lg:text-gray-800">or</span>
          <hr className="w-full border-gray-300 lg:border-gray-400" />
        </div>

        <div className=" w-full max-w-[500px] mx-auto">
          <button className="w-full cursor-pointer py-3 rounded-lg flex items-center gap-2 justify-center border border-white lg:border-gray-500 lg:text-gray-800 text-white">
            <span>
              <FcGoogle />
            </span>
            <span>Sign up with google</span>
          </button>
        </div> */}
      </div>
      <div className="absolute pointer-events-none select-none inset-0 -z-[1] lg:relative lg:flex-1/2 lg:h-full">
        <video className="w-full h-full object-cover" muted autoPlay loop>
          <source src="/placeholder1.mp4" />
        </video>
        {/* <div className="absolute hidden   md:flex p-4 md:flex-col justify-start items-end inset-0 bg-black/50 text-center">
          <Image
            src={"/logo.crop.png"}
            width={100}
            height={100}
            alt="logo"
            className=" z-50"
          />
        </div> */}
      </div>
    </section>
  );
}

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

const InputField = ({ type, placeholder, label }: InputProps) => {
  return (
    <div>
      <label
        className="block text-sm text-white lg:text-gray-600"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="border border-white lg:border-gray-500 rounded-md w-full p-2 placeholder:text-xs placeholder:text-gray-300"
        type={type}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};
