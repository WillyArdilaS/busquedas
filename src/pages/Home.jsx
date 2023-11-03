import img1 from "../assets/Img1.png"
import img2 from "../assets/Img2.png"
import img3 from "../assets/Img3.png"

const Home = () => {
  return (
    <>
      <div className=" flex" >
          <section className="w-4/5"> 
              <h1 className="pt-40 pl-16 font-title text-8xl text-left font-black text-gray-900 animate-fade-down animate-once animate-ease-out 
              animate-duration-[2500]">App de búsquedas</h1>

              <h2 className="pt-16 ml-16 w-3/4 text-2xl font-paragraph font-medium text-black animate-fade-down animate-once animate-delay-500 animate-ease-out 
              animate-duration-[2500]">
                ¡Bienvenido! En esta página podrás explorar el funcionamiento de los diferentes tipos de búsquedas tanto internas como externas, además de aquellas basadas en índices. 
              </h2>
              
              <h2 className="pt-16 ml-16 w-3/4 text-2xl font-paragraph font-medium text-black animate-fade-down animate-once animate-delay-500 animate-ease-out 
              animate-duration-[2500]">
                Disfruta y aprende con esta experiencia interactiva donde podrás ver cómo se agregan, eliminan y buscan claves en distintas estructuras de datos.
              </h2>
          </section>

          <section id="images"  className="flex flex-col items-start mt-12 w-2/5">
              <div className="w-1/2 animate-fade-right animate-once animate-ease-out animate-fill-both">
                  <img src={img1} alt="Imagen del home 1" className="object-cover" />
              </div>

              <div className="w-1/2">
                  <img src={img2}  alt="Imagen del home 2" className="object-cover ml-48 -mt-8 animate-fade-left animate-once animate-ease-out animate-fill-both animate-delay-500"/>
              </div>
              
              <div className="w-2/5">
                  <img src={img3}  alt="Imagen del home 3" className="object-cover -mt-16 animate-fade-right animate-once animate-ease-out animate-fill-both animate-delay-1000"/>
              </div>
          </section>
      </div>
  </>
  )
}

export default Home