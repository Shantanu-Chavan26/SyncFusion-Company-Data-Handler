import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
// import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  // medicalproBranding,
  // recentTransactions,
  // weeklyStats,
  // dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  const  {currentColor} = useStateContext();
  return (
    <div
      className="mt-12"
      
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-between"/* Div 3 */
>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <p className="font-bold text-3xl text-gray-500">Earnings</p>
            <p className="text-2xl">$63,443.23</p>
          </div>
          <div className="mt-3">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-6 rounded-2xl shadow-md"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center" 
>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl m-3 md:w-780">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:text-red-500 cursor-pointer">
                <span>
                  <GoDot />
                </span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 cursor-pointer hover:drop-shadow-xl text-white bg-green-400 ml-3 text-xs rounded-xl">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  id="sparkline1"
                  height="100px"
                  width="200px"
                  color="#00f"
                  data={SparklineAreaData}
                  type="Line"
                  currentColor="#ff0"
                />
                <p className="text-center font-semibold mt-2">SparkLine Chart</p>
              </div>
              <div className="mt-10 ">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
              <p className="text-center font-semibold mt-2">Monthly Bugdet vs Expense Chart</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
