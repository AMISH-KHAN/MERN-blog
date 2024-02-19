// import React from 'react'

export default function Header() {
  return (
    <>
      <header className=" bg-gray-900 h-[42rem] w-full px-48">
        <nav className="py-9  ">
          < div className="w-full  relative ">
          <div className=" text-white text-3xl max-w-fit ">
            BlogLogo
          </div>
            <div className=" absolute right-0 top-0">
              <ul className="flex flex-col md:flex-row gap-6 justify-center text-white text-xl">
                <li><a href="">blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">link</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="my-[4rem] mx-28 py-3">
          <h1 className=" text-blue-400 text-5xl font-extrabold ">Create your Own blog</h1>
          <p className="w-[40rem] text-white my-4 text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium culpa officiis repellendus.
          </p>
        </div>
      </header>
    </>
  )
}
