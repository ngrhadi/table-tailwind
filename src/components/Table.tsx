import React from 'react';
import Dot3 from '../icons/Dot3';
import { Data } from '../App';
import Editing from '../icons/Editing';
import Incomplete from '../icons/Incomplete';
import Done from '../icons/Done';
import Shooting from '../icons/Shooting';
import Review from '../icons/Review';
import { setDisplayDate } from '../utils/DateDisplay';

const Table: React.FunctionComponent<{
  value: Data[];
  handleShort: (properties: keyof Data) => void;
  orderBy?: string;
}> = ({ value, orderBy, handleShort }) => {
  let total = Object(value).length as Number;

  return (
    <div className="max-h-screen overflow-auto scroll-ml-24 bg-transparent md:table-auto md:overflow-x-scroll">
      <table className="table w-full border-spacing-y-3 border-separate">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-gray-400/30 min-w-20 ">Name</th>
            <th className="bg-gray-400/30 min-w-20">Type</th>
            <th className="bg-gray-400/30 min-w-20">Status</th>
            <th className="bg-gray-400/30 min-w-20">Created</th>
            <th className="bg-gray-400/30 w-10 flex-1">Manage</th>
          </tr>
        </thead>
        <tbody className="">
          {value.map((v, i) => (
            <tr key={v.id} className="border-zinc-500 border-5">
              <td className=" rounded-l-lg">{v.name}</td>
              <td className="capitalize">{v.type}</td>
              <td
                className={`${
                  v.status === ('EDITING' as any)
                    ? `text-blue-500`
                    : v.status === ('INCOMPLETE' as any)
                    ? `text-red-600`
                    : `text-green-600`
                } capitalize flex flex-row`}
              >
                {v.status === ('EDITING' as any) ? (
                  <>
                    <Editing />
                    {v.status.toString().toLowerCase()}
                  </>
                ) : v.status === ('INCOMPLETE' as any) ? (
                  <>
                    <Incomplete />
                    {v.status.toString().toLowerCase()}
                  </>
                ) : v.status === ('COMPLETED' as any) ? (
                  <>
                    <Done />
                    {v.status.toString().toLowerCase()}
                  </>
                ) : v.status === ('SHOOTING' as any) ? (
                  <>
                    <Shooting />
                    {v.status.toString().toLowerCase()}
                  </>
                ) : (
                  <>
                    <Review />
                    {v.status.toString().toLowerCase()}
                  </>
                )}
              </td>
              <td className="">{setDisplayDate(v.createdOn.toString())}</td>
              <td className=" rounded-r-lg hover:cursor-pointer">
                <Dot3 />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              Total Data <span>{total?.toString()}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
