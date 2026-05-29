import { LinkElement } from './LinkElement'

export const Links = () => {
    return (
        <div className='w-full grid grid-cols-1 p-4 md:grid-cols-3 gap-4 md:gap-8 justify-center'>
            <LinkElement  href='https://lafina-henna.vercel.app/' description='De caja como debe ser, nueva a estrenar con olor a yuma' img="/assets/wanderlust.png" alt='La Fina Vista previa' name="La Silvola Fina" />
            <LinkElement  href='' description='Contando una nueva historia, nada muere, reciclada' img="/assets/wanderlust.png" alt='De Calle Vista previa' name="La Silvola de Calle" />
            <LinkElement  href='' description='Servicios de software para celulares y laptops' img="/assets/wanderlust.png" alt='TechServ Vista previa' name="TechServ" />
            <LinkElement  href='' description='Maripositas chinas por encargo' img="/assets/wanderlust.png" alt='MarChi Vista previa' name="MarChi" />
            <LinkElement  href='' description='Tour' img="/assets/wanderlust.png" alt='Wander Vista previa' name="Wanderlust" />
            <LinkElement  href='' description='Creador' img="/assets/wanderlust.png" alt='Portfolio Vista previa' name="Portfolio" />
        </div>
    )
}
