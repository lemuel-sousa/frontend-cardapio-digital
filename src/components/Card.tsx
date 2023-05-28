interface CardProps {
    image: string,
    title: string,
    price: number,
}

export function Card({ image, title, price }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-60 rounded-lg shadow-cardShadow">
            <img
                className="rounded-tr-lg"
                src={image} alt="" />
            <h2>{title}</h2>
            <p className="w-60 h-48"><b>Preço: {price}</b></p>

        </div>
    )
}