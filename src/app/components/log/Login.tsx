import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (email === "try@example.com" && password === "trylogin") {
      setLoginSuccess(true);
      setErrorMessage("");
    } else {
      setLoginSuccess(false);
      if (email !== "try@example.com" && password !== "trylogin") {
        setErrorMessage("Email dan Password salah, harap cek kembali");
      } else if (email !== "try@example.com") {
        setErrorMessage("Email salah");
      } else {
        setErrorMessage("Password salah");
      }
    }
  };

  const handleLogout = () => {
    setLoginSuccess(false);
    setEmail(""); // Reset nilai email ke string kosong
    setPassword(""); // Reset nilai password ke string kosong
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center rounded-2xl bg-gray-100 p-4">
          <div
            className="w-80 h-80 flex items-center justify-center"
            style={{ backgroundImage: `url('/background/topography.svg')` }}
          >
            <div className="bg-black bg-opacity-80 m-4 rounded-2xl">
              <div className="p-4 text-center text-white">
                <h1 className="font-prefix text-2xl pb-2">Log in account?</h1>
                <p className="font-description">
                  Please enter the email and password provided in the notes.
                </p>
              </div>
            </div>
          </div>

          <div className="w-80 border-black border rounded-2xl p-4">
            <div className="p-4">
              <h2 className="text-center text-3xl font-title text-gray-900">
                {loginSuccess ? "Login Berhasil" : "Sign in to your account"}
              </h2>
            </div>

            {loginSuccess ? (
              <button
                onClick={handleLogout}
                className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-red-500 font-prefix"
              >
                Logout
              </button>
            ) : (
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <input type="hidden" name="remember" defaultValue="true" />

                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 pr-10 bg-gray-200 font-prefix"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage("");
                    }}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="relative block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 pr-10 bg-gray-200 font-prefix"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute z-10 inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <IconEye /> : <IconEyeOff />}
                  </button>
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-sm">{errorMessage}</div>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-500 font-prefix"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8">
          <h1 className="font-prefix text-2xl">Notes:</h1>
          <p className="font-description">
            Please try the accounts below to log in.
          </p>
          <p className="font-description">Email: try@example.com</p>
          <p className="font-description">Password: trylogin</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
