import { useState } from 'react';
import { Card } from './components/Card';
import { CreateModal } from './components/CreateModal';
import './global.css';
import { useFoodData } from './hooks/useFoodData';

export function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hendleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-6 mb-20">
      <h1 className="text-3xl font-semibold font-inter">Cardápio Digital</h1>
      <div className="grid grid-cols-3 gap-8 ">
        {data?.map((foodData, i) =>
          <Card
            image={foodData.image}
            title={foodData.title}
            price={foodData.price}
            key={i}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={hendleOpenModal} />}
      <button
        className="fixed left-5 top-[50%] px-6 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-semibold font-lato"
        onClick={hendleOpenModal}>
        novo
      </button>
    </div>

  )
}