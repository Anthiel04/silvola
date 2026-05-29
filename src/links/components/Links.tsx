import { LinkElement } from './LinkElement'

export const Links = () => {
    return (
        <div id='enlaces' className='w-full grid grid-cols-3 gap-4 md:gap-8 justify-center'>
            <LinkElement description='De caja como debe ser, nueva a estrenar con olor a yuma' img="/assets/wanderlust.png" alt='La Fina Vista previa' name="La Silvola Fina" />
            <LinkElement description='Contando una nueva historia, nada muere, reciclada' img="/assets/wanderlust.png" alt='De Calle Vista previa' name="La Silvola de Calle" />
            <LinkElement description='Servicios de software para celulares y laptops' img="/assets/wanderlust.png" alt='TechServ Vista previa' name="TechServ" />
            <LinkElement description='Maripositas chinas por encargo' img="/assets/wanderlust.png" alt='MarChi Vista previa' name="MarChi" />
            <LinkElement description='Tour' img="/assets/wanderlust.png" alt='Wander Vista previa' name="Wanderlust" />
            <LinkElement description='Creador' img="/assets/wanderlust.png" alt='Portfolio Vista previa' name="Portfolio" />
        </div>
    )
}
