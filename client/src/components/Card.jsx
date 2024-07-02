import { useState } from 'react';
import Dialog from './Dialog';
import { useAuth } from '../context/AuthProvider';
import { customFetch } from '../Fetch/fetch';

const Card = ({ id, name, positions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const token = localStorage.getItem('token');

  const addExerToUser = async () => {
    console.log('hello');
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId: user._id, exerciseId: id }),
    };

    const apiUrl = 'http://localhost:5000/api/user/addExersicesToUser';

    const response = await customFetch(apiUrl, options);
    setExersices(response?.data);
  };

  return (
    <div className="relative h-[450px] w-full md:w-[300px]  rounded-lg flex items-center justify-center">
      <img
        className="h-[450px] w-full md:w-[300px] -z-2 rounded-lg absolute border-sky-500 border-[3px]"
        src={positions[0]?.imageUrl}
        alt={'name'}
      />
      <h1 className=" mx-4 place-self-start left-1 absolute top-3 text-white text-xl md:text-4xl font-semibold">
        {name}
      </h1>
      <button
        onClick={openDialog}
        className="absolute bottom-3  border-blue-400 border-2 rounded-lg font-semibold px-3 md:px-6 py-3 text-white"
      >
        Start Assessment
      </button>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <div className="flex flex-wrap gap-2 w-full items-center">
          {positions?.map((e) => (
            <div
              onClick={addExerToUser}
              key={e.imageUrl}
              className="flex flex-col gap-3 cursor-pointer"
            >
              <img
                src={e.imageUrl}
                className="w-[300px] h-[300px] rounded-lg"
              />
              <h1 className="text-center text-xl">{e?.name}</h1>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
};

export default Card;
