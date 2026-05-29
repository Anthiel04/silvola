export const LinkElement = ({ name, img, alt, description }: { name: string, img: string, alt: string, description: string }) => {
    return (
        <div className="flex flex-col bg-white p-4 justify-center rounded-3xl">
            <div className="w-fit">
                <img className="object-center" src={img} alt={alt} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl">{name}</h3>
                <p className="wrap-anywhere">{description}</p>
                <a className="bg-gray-400 px-4 py-2 self-end rounded-md max-w-2xl transition-all duration-75 hover:scale-110" href="">Visitar</a>
            </div>
        </div>
    )
}
