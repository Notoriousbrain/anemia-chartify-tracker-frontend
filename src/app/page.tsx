"use client";

import { useEffect, useState } from 'react';
import { getData } from '../redux/actions';
import { useAppDispatch } from '@/utility/type';
import FilledLinedCharts from '@/components/FilledLineChart';

export default function Home() {
   const dispatch = useAppDispatch();
  //  const [allData, setAllData] = useState<Array<Object>>([])
  const [state, setState] = useState<Array<String>>([
    "Gujarat",
  ]);

  const [city, setCity] = useState<Array<String>>(["DANG", "PATAN"]);

  const [cat, setCat] = useState<Array<String>>(["Adolescents", "Children", "Mothers", "Index Value", "Pregnant Women", "Toddlers"]);

   useEffect(() => {
     dispatch(getData());
   }, [dispatch]);

   

  return (
    <div className="p-10 min-h-screen">
      <div className="flex justify-evenly">
        <div className="w-[30%]">
          <select
            name="state"
            id="state"
            className="p-2 w-full rounded-md outline-none"
          >
            <option value="">Select the state</option>
            {state &&
              state.map((item: String, key: number) => (
                <option
                  style={{ padding: "10px" }}
                  key={key}
                  value={item.toString()}
                >
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="w-[30%]">
          <select
            name="city"
            id="city"
            className="p-2 w-full rounded-md outline-none"
          >
            <option value="">Select the city</option>
            {city &&
              city.map((item: String, key: number) => (
                <option key={key} value={item.toString()}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <div className="w-[30%]">
          <select
            name="cat"
            id="cat"
            className="p-2 w-full rounded-md outline-none"
          >
            <option value="">Select the category</option>
            {cat &&
              cat.map((item: String, key: number) => (
                <option key={key} value={item.toString()}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center w-full flex-wrap">
        <div className="w-4/5">
          <FilledLinedCharts />
        </div>
      </div>
    </div>
  );
}
