import LoginCard from "../../components/Cards/LoginCard.jsx";
import { useForm } from "react-hook-form";
import Logo from "../../assets/logo/Logo.svg";

export default function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full min-h-screen md:flex-row bg-primary flex flex-col relative justify-center items-center">
        <div className="w-full flex flex-col md:flex-row items-center px-12">
          <div className="hidden md:flex flex-1 justify-center items-center">
            <img
              className="pb-7 w-[10rem] md:w-[25rem] lg:w-[35rem] 2xl:w-[60rem] max-w-none"
              src={Logo}
              alt="logo"
            />
          </div>
          <LoginCard>
            <div className="flex flex-col w-96 justify-center mb-10">
              <div className="flex justify-center mb-8">
                <h1 className="text-accent text-4xl">OPTISTOCK</h1>
              </div>
              <div className="flex justify-center mb-6">
                <h2 className="text-accent font-semibold text-3xl ">Login</h2>
              </div>
              <div className="mt-6 flex flex-col justify-center">
                <form
                  className="flex flex-col gap-10 justify-center w-[80%] mx-auto"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="text-accent rounded-3xl border border-accent/70 hover:border-secondary p-2 transition duration-300"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    {...register("password", { required: true, minLength: 8 })}
                    className="text-accent rounded-3xl border border-accent/70 hover:border-secondary p-2 transition duration-300"
                    type="password"
                    placeholder="password"
                  />
                  <div className="flex flex-row justify-center mt-6 gap-10">
                    <button
                      type="submit"
                      className="rounded-xl shadow-lg shadow-accent bg-accent text-secondary w-35 h-10 hover:shadow-none hover:bg-secondary hover:text-accent border-2 border-accent hover:border-secondary cursor-pointer transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </LoginCard>
        </div>
      </div>
    </>
  );
}
