import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "animate.css";
import { toast } from "react-toastify";
import signinAxiosInstance from "../utils/signinAxiosInstance";

const Signup = ({ onClose, onLoginClick }) => {
  const handleClose = () => {
    document
      .querySelector(".signup-form")
      .classList.add("animate__animated", "animate__fadeOutUp");
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();

  const handleSignup = async (formData) => {
    try {
      const response = await signinAxiosInstance.post("/signup", formData);

      const data = await response.data;
      if (response.ok && data.success) {
        toast.success("Signup successfully");
        onLoginClick();
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
    <div className="max-w-[430px] min-h-[500px] w-full h-max bg-white/50 relative p-4 rounded-md flex justify-center items-center animate__animated animate__fadeInDown signup-form backdrop-blur-md backdrop-filter border-black border-2 shadow-md shadow-black">
      <div
        className="absolute top-4 right-4 p-1 bg-black/15 rounded-full cursor-pointer hover:bg-black/10 transition duration-300 ease-in"
        onClick={handleClose}
      >
        <IoClose className="text-xl" />
      </div>
      <form onSubmit={handleSubmit(handleSignup)}>
        <div className="flex flex-col space-y-10 items-center">
          <div className="space-y-5 justify-center items-center flex flex-col">
            <div>
              <div className="space-y-2">
                <label
                  className="uppercase font-bold text-sm text-gray-600"
                  htmlFor="fullname"
                >
                  Fullname
                </label>
                <input
                  id="fullname"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  className="bg-gray-50 border border-gray-300 text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/10 px-2 py-1 block rounded-lg text-sm md:text-base outline-gray-300 focus:outline-gray-900 min-w-[260px] min-h-[38px]"
                  {...register("fullname", {
                    required: "Fullname is required",
                    minLength: {
                      value: 5,
                      message: "Fullname must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 15,
                      message: "Fullname must not exceed 15 characters",
                    },
                  })}
                />

                {errors.fullname && (
                  <p className="max-w-[250px]">{errors.fullname.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <label
                  className="uppercase font-bold text-sm text-gray-600"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  className="bg-gray-50 border border-gray-300 text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/10 px-2 py-1 block rounded-lg text-sm md:text-base outline-gray-300 focus:outline-gray-900 min-w-[260px] min-h-[38px]"
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
                  id="password"
                  type="password"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-900/10 px-2 py-1 block rounded-lg text-base md:text-lg outline-gray-300 focus:outline-gray-900 font-bold tracking-widest min-w-[260px] min-h-[38px]"
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
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&,.])[a-z\d$@$!%*#?&,.]{5,}$/,
                      message:
                        "Password must contain at least 5 letters, 1 number, and 1 symbol",
                    },
                  })}
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
              {isSubmitting ? "PROCESSING" : "SIGNUP"}
            </AwesomeButton>

            <span className="text-center text-sm font-bold">OR</span>
            <p className="text-sm text-gray-500">Already have an account?</p>

            <AwesomeButton
              type="secondary"
              element={forwardRef((props, ref) => (
                <button
                  ref={ref}
                  {...props}
                  type="button"
                  onClick={onLoginClick}
                />
              ))}
            >
              LOGIN
            </AwesomeButton>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
