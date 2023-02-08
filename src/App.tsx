import { useEffect, useState } from 'react';
import Shorter from './components/Shorter';
import Table from './components/Table';
import { sort } from './utils/Comparator';
export interface Data {
  id: string;
  name: string;
  status: string;
  type: string;
  createdOn: string;
  archived: boolean;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [orderBy, setOrderBy] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<keyof Data>('name');
  const [sortedData, setsortedData] = useState(sort(data, sortBy, orderBy));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3002/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const handleSort = (property: keyof Data) => {
    setSortBy(property);
    setOrderBy(!orderBy);
    setsortedData(sort(sortedData, property, !orderBy));
  };

  return (
    <div className="h-full min-w-full flex flex-col items-start px-6">
      <div className="card py-6 pl-8">
        <p className="text-2xl">
          <strong>Hello</strong> You..!
        </p>
        <p>Here are the list project you submited</p>
      </div>
      <div className="card min-h-screen overflow-auto mb-5 min-w-full backdrop-grayscale-0 bg-white/30 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col">
            <div className="flex w-full justify-between items-center align-middle pb-3">
              <p className="text-2xl font-bold">Recent Project</p>
              <Shorter
                handleShort={handleSort}
                value={data}
                orderBy={orderBy}
              />
            </div>
            <Table value={data} handleShort={handleSort} orderBy="asc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
