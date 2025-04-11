import React from "react"


function App() {
  return(
    <div className="cntaner bg-gradient-to-br from-blue-500 to-pink-500 w-screen h-screen flex items-center justify-center">
      <div className="box h-[550px] w-[990px] flex items-center justify-center rounded-md">

        <div className="box1 bg-white h-[550px] w-[495px]  rounded-l-md text-center">
                <h2 className="text-2xl font-bold text-center mt-8">Login</h2>
                <form>
                  <div className="mt-12">
                     <label className="block text-l mt-1">Email</label>
                     <input type="text" placeholder="Enter your email"
                     className="w-[422px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                  </div>
                  <div className="mt-14">
                     <label className="block text-l mt-1">Password</label>
                     <input type="text" placeholder="Enter your password"
                     className="w-[422px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                  </div>
                  <button type="submit" className="mt-6 w-[288px] bg-gradient-to-br from-blue-500  to-pink-500 px-2 py-4 font-semibold ronded-lg transition text-center">Log in</button>
                </form>
                <p className="mt-5 text-center text-sm">
                  Don't have an account?{" "}
                  <span className="text-blue-500 cursor-pointer hover:underline">Sign up</span>
                </p>
        </div>
        <div className="box2 bg-cover bg-center w-[495px] h-[550px] rounded-r-md "
            style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')"}} >
        </div>
      </div>
    </div>
    
  )
}
export default App

