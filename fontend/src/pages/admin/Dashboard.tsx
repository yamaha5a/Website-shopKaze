import React, { useEffect, useRef } from 'react';
import Header from '../../components/admin/Header';
import Navbar from '../../components/admin/Navbar';
import Footer from '../../components/admin/Footer';
import Chart from 'chart.js/auto';

const Dashboard: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Get the canvas element
    const ctx1 = document.getElementById("chart-line") as HTMLCanvasElement;
    if (ctx1) {
      // Destroy existing chart if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const gradientStroke1 = ctx1.getContext("2d")?.createLinearGradient(0, 230, 0, 50);
      
      if (gradientStroke1) {
        gradientStroke1.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
        gradientStroke1.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
        gradientStroke1.addColorStop(0, 'rgba(94, 114, 228, 0)');

        // Create new chart instance
        chartRef.current = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Mobile apps",
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 0,
              borderColor: "#5e72e4",
              backgroundColor: gradientStroke1,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              maxBarThickness: 6
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                  drawBorder: false,
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  borderDash: [5, 5]
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: '#fbfbfb',
                  font: {
                    size: 11,
                    family: "Open Sans",
                    style: 'normal',
                  },
                }
              },
              x: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  borderDash: [5, 5]
                },
                ticks: {
                  display: true,
                  color: '#ccc',
                  padding: 20,
                  font: {
                    size: 11,
                    family: "Open Sans",
                    style: 'normal',
                  },
                }
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="g-sidenav-show bg-gray-100">
      <div className="min-height-300 bg-dark position-absolute w-100"></div>
      <Header />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          {/* Stats Cards */}
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                        <h5 className="font-weight-bolder">$53,000</h5>
                        <p className="mb-0">
                          <span className="text-success text-sm font-weight-bolder">+55%</span>
                          since yesterday
                        </p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                        <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add other stat cards similarly */}
          </div>

          {/* Charts Row */}
          <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card z-index-2 h-100">
                <div className="card-header pb-0 pt-3 bg-transparent">
                  <h6 className="text-capitalize">Sales overview</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-arrow-up text-success"></i>
                    <span className="font-weight-bold">4% more</span> in 2021
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                  </div>
                </div>
              </div>
            </div>
            {/* Add the carousel component here */}
          </div>

          {/* Tables and Categories */}
          <div className="row mt-4">
            {/* Add Sales by Country table and Categories sections */}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
