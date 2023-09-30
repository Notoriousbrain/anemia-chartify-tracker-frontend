import { useEffect } from "react"
import { Chart } from "chart.js";

export default function FilledLinedCharts() {

      useEffect(() => {
        var ctx = document.getElementById("myChart") as HTMLCanvasElement;
        var myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            datasets: [
              {
                data: [86, 114, 106, 106, 107, 111, 133],
                label: "Applied",
                borderColor: "rgb(62,149,205)",
                backgroundColor: "rgb(62,149,205,0.1)",
              }
            ],
          },
        });
      }, []);


  return (
    <div>
      <h1 className="self-center mt-10 text-xl font-semibold capitalize ">
        6 - 59 Months
      </h1>
      <div className="flex mx-auto my-auto mt-4 ">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}
