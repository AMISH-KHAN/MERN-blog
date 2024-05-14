

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="bg-gray-900 w-full h-[42rem] top-48 left-[12%] pt-16">

<div className="relative flex w-full ">
  <div className=" ml-44">

<h1 className=" text-blue-400 text-5xl text-center lg:text-left font-extrabold ">Create your Own blog</h1>
<p className="w-full text-center lg:text-left lg:w-[30rem] text-white my-4 text-3xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium culpa officiis repellendus.
</p>

  </div>
<div className="w-[30%] h-[10rem]  ml-28 hidden lg:block absolute right-32" >
  <img className="w-full h-[10rem] object-cover" src="./assests/images/hero-image.jpg" alt="" />
</div>
</div>
</div>
      {/* best blog Section */}

      <section className=" md:px-32 lg:px-44 py-36">
        <h1 className="text-center text-5xl font-bold">
          Some of Our best Blogs
        </h1>
        {/* blog-1 */}
        <div className="flex flex-col-reverse  lg:flex-row mt-32 mx-auto align-middle">
          <div className="w-full lg:w-1/2 ">
            <h1 className=" text-5xl font-bold ">Title</h1>
            <p className="  my-11 text-xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quod, deserunt totam porro ipsa labore ipsum dicta culpa, optio delectus! Aliquam sed odit nobis molestias consequuntur. Accusamus fugit soluta doloremque saepe facilis impedit. Impedit doloremque cupiditate tempora necessitatibus minima quam aliquid id, at rem.</p>
            <button className=" bg-gray-900 rounded-lg text-white text-lg w-36 h-14 cu\">read more</button>
          </div>
          <div className="w-[18rem] md:w-full lg:w-1/2  ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg"  alt="" />
          </div>
        </div>

        {/* blog-2 */}
        <div className="flex flex-col-reverse lg:flex-row-reverse mt-32 mx-auto align-middle">
          <div className="w-full lg:w-1/2 ">
            <h1 className=" text-5xl font-bold ">Title</h1>
            <p className="  my-11 text-xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quod, deserunt totam porro ipsa labore ipsum dicta culpa, optio delectus! Aliquam sed odit nobis molestias consequuntur. Accusamus fugit soluta doloremque saepe facilis impedit. Impedit doloremque cupiditate tempora necessitatibus minima quam aliquid id, at rem.</p>
            <button className=" bg-gray-900 rounded-lg text-white text-lg w-36 h-14 cu\">read more</button>
          </div>
          <div className="w-[18rem] md:w-full lg:w-1/2  ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg"  alt="" />
          </div>
        </div>
        {/* blog-3 */}
        <div className="flex flex-col-reverse  lg:flex-row mt-32 mx-auto align-middle">
          <div className="w-full lg:w-1/2 ">
            <h1 className=" text-5xl font-bold ">Title</h1>
            <p className="  my-11 text-xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quod, deserunt totam porro ipsa labore ipsum dicta culpa, optio delectus! Aliquam sed odit nobis molestias consequuntur. Accusamus fugit soluta doloremque saepe facilis impedit. Impedit doloremque cupiditate tempora necessitatibus minima quam aliquid id, at rem.</p>
            <button className=" bg-gray-900 rounded-lg text-white text-lg w-36 h-14 cu\">read more</button>
          </div>
          <div className="w-[18rem] md:w-full lg:w-1/2  ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg"  alt="" />
          </div>
        </div>

        {/* blog-4 */}
        <div className="flex flex-col-reverse lg:flex-row-reverse mt-32 mx-auto align-middle">
          <div className="w-full lg:w-1/2 ">
            <h1 className=" text-5xl font-bold ">Title</h1>
            <p className="  my-11 text-xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quod, deserunt totam porro ipsa labore ipsum dicta culpa, optio delectus! Aliquam sed odit nobis molestias consequuntur. Accusamus fugit soluta doloremque saepe facilis impedit. Impedit doloremque cupiditate tempora necessitatibus minima quam aliquid id, at rem.</p>
            <button className=" bg-gray-900 rounded-lg text-white text-lg w-36 h-14 cu\">read more</button>
          </div>
          <div className="w-[18rem] md:w-full lg:w-1/2  ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg"  alt="" />
          </div>
        </div>
      </section>

      {/* latest blog */}
      <section className="hidden lg:px-44 lg:block py-28 bg-[#47a7d7]">
          <h1 className="text-center text-5xl font-bold"> Latest Blogs</h1>
        <div className="flex mt-12"> 
          <div className="lg:w-1/3 ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg" alt="" />
          <h1 className="text-2xl text-center font-bold mt-12 hover:underline cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum quasi sit vitae maiores laudantium maxime ab vel, laboriosam alias totam pariatur.</h1>
          </div>
          <div className="lg:w-1/3 ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg" alt="" />
          <h1 className="text-2xl text-center font-bold mt-12 hover:underline cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum quasi sit vitae maiores laudantium maxime ab vel, laboriosam alias totam pariatur.</h1>
          </div>
          <div className="lg:w-1/3 ">
            <img src="./assests/images/best-1.jpg" className=" mt-7 w-[13rem] md:w-3/4 lg:w-4/5 md:h-72 object-cover m-auto rounded-lg drop-shadow-lg" alt="" />
          <h1 className="text-2xl text-center font-bold mt-12 hover:underline cursor-pointer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum quasi sit vitae maiores laudantium maxime ab vel, laboriosam alias totam pariatur.</h1>
          </div>
          </div>
      </section>
    </>
  )
}
