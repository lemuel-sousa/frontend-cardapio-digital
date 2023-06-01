import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../hooks/useFoodDataMutate";
import { FoodData } from "../interface/FoodData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label className="text-gray-900 font-bold mb-2 text-lg">{label}</label>
            <input className="p-3 border-2 border-gray-400 text-black text-opacity-90 text-lg rounded-xl w-full mb-3" value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }

        mutate(foodData);
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])


    return (
        <div className="fixed bg-black bg-opacity-40 inset-0 overflow-hidden w-screen h-screen flex items-center justify-center z-10"
        >
            <div className="bg-white p-6  w-3/5 rounded-3xl flex flex-col items-center justify-between">
                <h2 className="text-3xl font-semibold text-gray-800">Cadastre um novo item no Cardápio</h2>
                <form className="w-[96%]">

                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />

                </form>
                <div className="flex items-center gap-28 mt-7 ">
                    <button className="p-4 bg-cyan-600 rounded-lg text-white hover:bg-red-700">fechar</button>
                    <button
                        className=" w-24 p-4 bg-cyan-600 rounded-lg text-white hover:bg-green-600"
                        onClick={submit}
                    >
                        {isLoading ? 'postando...' : 'postar'}
                    </button>
                </div>
            </div>
        </div>
    )
}