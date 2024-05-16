import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "animate.css";
import { toast } from "react-toastify";
import signinAxiosInstance from "../utils/signinAxiosInstance";

const Login = ({ onClose, onSignupClick }) => {
  const handleClose = () => {
    document
      .querySelector(".login-form")
      .classList.add("animate__animated", "animate__fadeOutUp");
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async (formData) => {
    try {
      const response = await signinAxiosInstance.post("/login", formData);
      const data = response.data;
      if (response.status === 200 && data.success) {
        toast.success("Redirecting");
        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const { data } = error.response;
        toast.error(data.message);
      } else {
        toast.error("Internal Server Error");
      }
    }
  };

  return (
    <div className="max-w-[430px] max-h-[500px] w-full h-full bg-white/50 relative p-4 rounded-md flex justify-center items-center animate__animated animate__fadeInDown login-form backdrop-blur-md backdrop-filter border-black border-2 shadow-md shadow-black">
      <div
        className="absolute top-4 right-4 p-1 bg-black/10 rounded-full cursor-pointer"
        onClick={handleClose}
      >
        <IoClose className="text-xl" />
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col space-y-10 items-center">
          <div className="space-y-5">
            <div>
              <div className="space-y-2">
                <label
                  className="uppercase font-bold text-sm text-gray-600"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 5,
                      message: "Username must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 15,
                      message: "Username must not exceed 15 characters",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/10 px-2 py-1 block rounded-lg text-sm md:text-base outline-gray-300 focus:outline-gray-900 min-w-[260px] min-h-[38px]"
                />

                {errors.username && (
                  <p className="max-w-[250px]">{errors.username.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <label
                  className="uppercase font-bold text-sm text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 15,
                      message: "Password must not exceed 15 characters",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/10 px-2 py-1 block rounded-lg text-base md:text-lg outline-gray-300 focus:outline-gray-900 font-bold tracking-widest min-w-[260px] min-h-[38px]"
                />

                {errors.password && (
                  <p className="max-w-[250px]">{errors.password.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <AwesomeButton
              type="primary"
              element={forwardRef((props, ref) => (
                <button ref={ref} {...props} type="submit" />
              ))}
            >
              {isSubmitting ? "PROCESSING" : "LOGIN"}
            </AwesomeButton>

            <span className="text-center text-sm font-bold">OR</span>
            <p className="text-sm text-gray-500">Don't have an account?</p>

            <AwesomeButton
              type="secondary"
              element={forwardRef((props, ref) => (
                <button
                  ref={ref}
                  {...props}
                  type="button"
                  onClick={onSignupClick}
                />
              ))}
            >
              SIGNUP
            </AwesomeButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
