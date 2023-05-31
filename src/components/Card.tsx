interface CardProps {
    image: string,
    title: string,
    price: number
}


export function Card({ image, title, price }: CardProps) {

    return (
        <div className="flex flex-col items-center justify-between w-64 h-96 pb-4 rounded-lg shadow-cardShadow">
            <img
                className=" rounded-lg rounded-tr-lg "
                src={image} alt="" />
            <h2 className="font-semibold font-sans">{title}</h2>
            <p><b>Preço:</b>{price}</p>

        </div>
    )
}