export default function LoginCard({ children }) {
  return (
    <>
      <div className="bg-primary p-4 w-full h-auto justify-center flex rounded-2xl max-w-md md:max-w-md sm:max-w-sm lg:max-w-lg ">
        {children}
      </div>
    </>
  );
}
