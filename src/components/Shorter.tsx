import { useState } from 'react';
import { Data } from '../App';
import Dropdown from '../icons/Dropdown';
import Sort1 from '../icons/Sort1';
import Sort2 from '../icons/Sort2';

const Shorter: React.FC<{
  value: Data[];
  handleShort: (value: keyof Data) => void;
  orderBy: boolean;
}> = ({ handleShort, orderBy }) => {
  const [sortForName, setSortForName] = useState<boolean>(true);
  const [sortForStatus, setSortForStatus] = useState<boolean>(true);

  return (
    <div className="card">
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-sm backdrop-grayscale-0 bg-white/30 hover:bg-white/50 text-zinc-800 hover:cursor-pointer"
        >
          Short By <Dropdown />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white mr-1 w-32"
        >
          <li>
            <p
              onClick={() => {
                handleShort('name');
                setSortForName(!sortForName);
              }}
            >
              Name
              <span>{sortForName ? <Sort1 /> : <Sort2 />}</span>
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                handleShort('status');
                setSortForStatus(!sortForStatus);
              }}
            >
              Status
              <span>{sortForStatus ? <Sort1 /> : <Sort2 />}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shorter;
