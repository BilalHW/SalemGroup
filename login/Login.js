import React from "react";
const Login = () => {
    return(
    <>
        <div class="h-screen w-full bg-purple flex flex-col justify-center items-center ">
            <form>
            <div className="bg-white px-5 py-10 rounded-xl shadow-2xl max-w-md items-center justify-center">
                
                <div className="space-y-4">
                <h1 className="text-center text-2xl font-bold text-black">
                    Login to your account
                </h1>
                <div>
                    <label for="username" className="block mb-1 text-gray-600 ">
                    UserName
                    </label>
                    <input
                    required
                    name="username"
                    type="text"
                    className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                    />
                </div>
                <div>
                    <label for="email" className="block mb-1 text-gray-600 ">
                    Password
                    </label>
                    <input
                    required
                    name="password"
                    type="password"
                    className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                    />
                </div>
                </div>

                <div className=" w-full py-1 mt-4 bg-purple rounded-lg text-white items-center">
                <Button
                    label="Login"
                    btnStyle={" text-white text-xl items-center"}
                    onClick={(e) => handleSubmit(e)}
                />
                </div>
                <div className="flex flex-col justify-center mt-10">
                <div>
                    <p>
                    New to Mobility?{" "}
                    <span className="hover:text-purple hove:text-purple px-2 ">
                        <a href="/#" className>
                        Sign Up
                        </a>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            </form>

        </div>
    </>
    )
}
export default Login;
