interface CardProps {
    image: string,
    title: string,
    price: number
}


export function Card({ image, title, price }: CardProps) {

    return (
        <div className="flex flex-col items-center w-64 pb-4 justify-between rounded-lg shadow-cardShadow">
            <img
                className=" rounded-lg"
                src={image} alt="" />
            <div className="flex flex-col gap-4 items-center pt-4">
                <h2 className="font-normal font-lato text-center">{title}</h2>
                <p className="font-inter font-bold text-lg ">R${price}</p>
            </div>
        </div>
    )
}