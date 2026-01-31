import LoginCard from "../../components/Cards/LoginCard.jsx";
import Logo from "../../assets/logo/Logo.svg";
import VertcalNavBar from "../../components/Navbar/VerticalNavBar.jsx";
import CustomButton from "../../components/Buttons/CustomButton.jsx";
import { IconHelp } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const VerticalNavBarItems = [{ text: "Contact" }, { text: "About" }];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="h-screen flex flex-col bg-primary justify-start"
      >
        <VertcalNavBar
          left={
            <IconHelp className="rounded-3xl text-accent hover:text-secondary hover:bg-accent cursor-pointer transition-all" />
          }
          right={
            <div className="flex flex-row gap-6">
              {VerticalNavBarItems.map((item, index) => (
                <button
                  className="text-accent bg-primary hover:text-accent/50 cursor-pointer transition-all duration-300 shadow-accent underline"
                  key={index}
                >
                  {item.text}
                </button>
              ))}
              <CustomButton className="w-35 h-10 text-primary hover:text-accent bg-accent hover:bg-secondary rounded-3xl cursor-pointer transition-colors duration-400 shadow-accent shadow-sm hover:shadow-gray-330">
                Sign up
              </CustomButton>
            </div>
          }
        />
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="w-full flex max-w-6xl mx-auto flex-col md:flex-row justify-center items-center px-12 lg:gap-32 xl:gap-40">
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <img
                className="border-none pb-10 hidden lg:block lg:w-[30rem] 2xl:w-[45rem] max-w-none z-0 "
                src={Logo}
                alt="logo"
              />
            </div>
            <LoginCard>
              <div className="flex flex-col w-110 justify-center mb-10">
                <div className="flex justify-center mb-8 text-shadow-2xs text-center">
                  <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl pt-5 font-semibold drop-shadow-lg">
                    Welcom Back
                  </h1>
                </div>
                <div className="flex justify-center mb-6">
                  <h2 className="text-accent text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
                    Personal Information
                  </h2>
                </div>
                <div className="mt-6 flex flex-col justify-center">
                  <form
                    className="flex flex-col gap-3 justify-center w-[80%] mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Email is incorect",
                        },
                      })}
                      className="text-accent rounded-3xl border border-accent/70 hover:border-secondary p-2 transition duration-300"
                      type="email"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className="text-red-500">{errors.email.message}</div>
                    )}
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      className="text-accent rounded-3xl border border-accent/70 hover:border-secondary p-2 transition duration-300"
                      type="password"
                      placeholder="password"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    <div className="flex flex-row justify-end">
                      <button className="text-sm text-accent/45 hover:text-accent transition-colors underline cursor-pointer">
                        Forget password?
                      </button>
                    </div>
                    <div className="flex flex-row justify-center mt-6 gap-10">
                      <CustomButton
                        type="submit"
                        className="rounded-3xl shadow-lg shadow-accent bg-accent text-secondary w-full h-12 hover:shadow-gray-330 hover:bg-secondary hover:text-accent border-2 border-accent hover:border-secondary cursor-pointer transition-colors duration-400"
                      >
                        Submit
                      </CustomButton>
                    </div>
                  </form>
                  <div className="relative w-full my-10">
                    <hr className="border-accent/40" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary px-2 text-accent text-sm">
                      OR
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <span className="text-gray-500">
                      Don't have an account?
                      <button className="text-accent font-semibold hover:text-accent/50 transition-colors underline cursor-pointer">
                        Sign up
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </LoginCard>
          </div>
        </div>
      </motion.div>
    </>
  );
}
