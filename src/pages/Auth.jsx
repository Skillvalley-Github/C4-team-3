import img from "../assets/illustration/login_illu.svg";
import { useState, useEffect } from "react";
import supabase from "../api";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data.user !== null) {
      window.location.href = "/profile";
    } else {
      alert(error.message)
    }
  };

  return (
    <div>
      <section className="w-full h-4">
        <h1>Navbar</h1>
      </section>
      <section className="w-full items-center justify-center flex flex-col min-h-[calc(100vh-1rem)] sm:flex-row">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-72 h-48">
            <img src={img} alt="login illustration" />
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="h-full flex flex-col items-center justify-center ">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col p-12 border-solid rounded-lg border-2 border-gray-600"
            >
              <label
                id="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-500 block w-full p-2.5 "
                placeholder="john.doe@company.com"
                required
              />
              <label
                id="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border placeholder:text-2xl focus-visible:outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                placeholder="........"
                required
              />
              <button className="rounded-lg p-2 bg-green-500 m-4" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
