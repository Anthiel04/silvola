export const Header = () => {
  return (
    <div className='fixed flex justify-around items-center w-full h-16 bg-slate-950 text-white'>
      <div className=''>
        <p className="text-xl md:text-3xl font-serif font-stretch-110% leading-2.5 tracking-tight">Silvola</p>
      </div>
      <nav className=''>
        <ul className='appearance-none flex gap-4'>
          <li><a className="text-md md:text-xl" href="#inicio">Inicio</a></li>
          <li><a className="text-md md:text-xl" href="#servicios">Servicios</a></li>
          <li><a className="text-md md:text-xl" href="#sobre">Sobre Nosotros</a></li>
          <li><a className="text-md md:text-xl" href="#ctc">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}
