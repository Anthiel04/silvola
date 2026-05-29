export const Footer = () => {
  return (
    <div id="ctc" className='w-full bg-slate-950 text-white h-48 flex items-center justify-center p-4'>
      <div className='w-full h-full grid grid-rows-3 gap-4'>
        <a className='md:text-xl font-bold' href='#inicio'>Inicio</a>
        <a className='md:text-xl font-bold' href='#servicios'>Servicios</a>
        <a className='md:text-xl font-bold' href='#sobre'>Sobre nosotros</a>
        <a className='md:text-xl font-bold' href='#ctc'>Contacto</a>
      </div>
      <div className='w-full'>
        <h2 className='text-3xl md:text-7xl font-serif self-center'>Silvola</h2>
      </div>
      <div>
        <p className='w-full'>
          ¿Qué te hace falta mijito? Yo te lo doy
        </p>
      </div>
    </div>
  )
}
