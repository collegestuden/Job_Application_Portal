// // import {
// //   DollarCircleOutlined,
// //   EyeOutlined,
// //   ClockCircleOutlined,
// //   ShoppingOutlined,
// //   UserOutlined,
// // } from "@ant-design/icons";
// // import { Card, Space, Table, Typography } from "antd";
// // import { useEffect, useState } from "react";
// // import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
// // // import Header from './Header'
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// // import { Bar } from "react-chartjs-2";

// // // import NavBar from '../NavBar'
// // // import NavBar1 from "../NavBar1";
// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // function AdminHome() {
// //   const [orders, setOrders] = useState(0);
// //   const [inventory, setInventory] = useState(0);
// //   const [customers, setCustomers] = useState(0);
// //   const [revenue, setRevenue] = useState(0);

// //   useEffect(() => {
// //     getOrders().then(() => {
// //       setOrders(2563);
// //       setRevenue(1000);
// //     });
// //     getInventory().then(() => {
// //       setInventory(2000);
// //     });
// //     getCustomers().then(() => {
// //       setCustomers(1000);
// //     });
// //   }, []);

// //   return (
// //   <div className='App1'>
  
// //     <div className="SideMenuAndPageContent">
// //     {/* <Header/> */}
    
// //     <div className="das">
// //     <Space size={20} direction="vertical">
// //       <Typography.Title level={4}>Dashboard</Typography.Title>
// //       <Space direction="horizontal" style={{minWidth:'870px'}}>
// //         <DashboardCard
// //           icon={
// //             <EyeOutlined
// //               style={{
// //                 color: "green",
// //                 backgroundColor: "rgba(0,255,0,0.25)",
// //                 borderRadius: 20,
// //                 fontSize: 24,
// //                 padding: 8,
// //               }}
// //             />
// //           }
// //           title={"Page Viewed"}
// //           value={orders}
// //         />
// //         <DashboardCard
// //           icon={
// //             <ShoppingOutlined
// //               style={{
// //                 color: "blue",
// //                 backgroundColor: "rgba(0,0,255,0.25)",
// //                 borderRadius: 20,
// //                 fontSize: 24,
// //                 padding: 8,
// //               }}
// //             />
// //           }
// //           title={"Total Request"}
// //           value={inventory}
// //         />
// //         <DashboardCard
// //           icon={
// //             <UserOutlined
// //               style={{
// //                 color: "purple",
// //                 backgroundColor: "rgba(0,255,255,0.25)",
// //                 borderRadius: 20,
// //                 fontSize: 24,
// //                 padding: 8,
// //               }}
// //             />
// //           }
// //           title={"Approved"}
// //           value={customers}
// //         />
// //         <DashboardCard 
// //           icon={
// //             <DollarCircleOutlined
// //               style={{
// //                 color: "red",
// //                 backgroundColor: "rgba(255,0,0,0.25)",
// //                 borderRadius: 20,
// //                 fontSize: 24,
// //                 padding: 8,
// //               }}
// //             />
// //           }
// //           title={"Rejected"}
// //           value={revenue}
// //           style={{minWidth:'850px'}}
// //         />
// //         <DashboardCard
// //               icon={
// //                 <ClockCircleOutlined  // Use ClockCircleOutlined for pending status
// //                   style={{
// //                     color: "orange",  // Adjust color as needed
// //                     backgroundColor: "rgba(255,165,0,0.25)",  // Adjust background color as needed
// //                     borderRadius: 20,
// //                     fontSize: 24,
// //                     padding: 8,
// //                   }}
// //                 />
// //               }
// //               title={"Pending"}
// //               value={revenue}
// //             />
// //       </Space>
// //       <Space  style={{minWidth:'1070px'}}>
// //         <RecentOrders />
// //         <DashboardChart />
// //       </Space>
// //     </Space>
// //     </div>
// //     </div>
// //     </div>
// //   );
// // }

// // function DashboardCard() {
// //   return (
// //     <Card>
// //       <Space direction="horizontal">
         
// //       </Space>
// //     </Card>
// //   );
// // }
// // function RecentOrders() {
// //   const [dataSource, setDataSource] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const staticDataSource = [
// //     {
// //       key: '1',
// //       title: 'Scheme 1',
// //       quantity: 'User 123',
// //       discountedPrice: 'John Doe',
// //       approvalStatus: 'Approved',
// //     },
// //     {
// //       key: '2',
// //       title: 'Scheme 2',
// //       quantity: 'User 456',
// //       discountedPrice: 'Jane Doe',
// //       approvalStatus: 'Pending',
// //     },
// //     {
// //       key: '3',
// //       title: 'Scheme 3',
// //       quantity: 'User 789',
// //       discountedPrice: 'Alice Smith',
// //       approvalStatus: 'Rejected',
// //     },
// //     // Add more static data as needed
// //   ];
  
// //   useEffect(() => {
// //     setLoading(true);
// //     getOrders().then((res) => {
// //       setDataSource(res.products.splice(0, 3));
// //       setLoading(false);
// //     });
// //   }, []);

// //   return (
// //     <div style={{width:'450px'}}>
// //     <Typography.Text>Recent Requests</Typography.Text>
// //       <Space direction="vertical" style={{ marginTop: '16px'}}>
// //         <Table
// //           columns={[
// //             {
// //               title: 'Scheme',
// //               dataIndex: 'title',
// //             },
// //             {
// //               title: 'UserId',
// //               dataIndex: 'quantity',
// //             },
// //             {
// //               title: 'UserName',
// //               dataIndex: 'discountedPrice',
// //             },
// //             {
// //               title: 'Approve/Reject/Pending',
// //               dataIndex: 'approvalStatus',
// //             },
// //           ]}
// //           dataSource={staticDataSource}
// //           pagination={false}

// //           style={{width:'550px',height:'200px'}}
          
// //         />
// //       </Space>
// //       </div>
// //   );
// // }

// // function DashboardChart() {
// //   const [reveneuData, setReveneuData] = useState({
// //     labels: [],
// //     datasets: [],
// //   });

// //   useEffect(() => {
// //     getRevenue().then((res) => {
// //       const labels = res.carts.map((cart) => {
// //         return cart.userId ;
// //       });
// //       const data = res.carts.map((cart) => {
// //         return cart.discountedTotal;
// //       });

// //       const dataSource = {
// //         labels,
// //         datasets: [
// //           {
// //             label: "Loan Applied As Of Now",
// //             data: data,
// //             backgroundColor: "rgba(255, 0, 0, 1)",
// //           },
// //         ],
// //       };

// //       setReveneuData(dataSource);
// //     });
// //   }, []);

// //   const options = {
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         position: "bottom",
// //       },
// //       title: {
// //         display: true,
// //         text: "Most Frequently Loan Applied User",
// //       },
// //     },
// //   };

// //   return (
// //     <Card style={{ width: 500, height: 300 ,marginLeft:'100px',marginTop:'50px'}}>
// //       <Bar options={options} data={reveneuData} />
// //     </Card>
// //   );

// // }
// // export default AdminHome;



// import { Link } from 'react-router-dom';
// import {
//     DollarCircleOutlined,
//     EyeOutlined,
//     ClockCircleOutlined,
//     ShoppingOutlined,
//     UserOutlined,
//   } from "@ant-design/icons";
//   import { Card, Space, Statistic, Table, Typography } from "antd";
//   import { useEffect, useState } from "react";
//   import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
//   // import Header from './Header'
//   import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from "chart.js";
//   import { Bar } from "react-chartjs-2";
  
//   // import NavBar from '../NavBar'
//   // import NavBar1 from "../NavBar1";
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );
  
//   function AdminHome() {
//     const [orders, setOrders] = useState(0);
//     const [inventory, setInventory] = useState(0);
//     const [customers, setCustomers] = useState(0);
//     const [revenue, setRevenue] = useState(0);
  
//     useEffect(() => {
//       getOrders().then((res) => {
//         setOrders(2563);
//         setRevenue(1000);
//       });
//       getInventory().then((res) => {
//         setInventory(2000);
//       });
//       getCustomers().then((res) => {
//         setCustomers(1000);
//       });
//     }, []);
  
//     return (
//     <div className='App1'>
     
//       <div className="SideMenuAndPageContent">
//       {/* <Header/> */}
      
//       <div className="das">
//       <Space size={20} direction="vertical">
//         <Typography.Title level={4}>Dashboard</Typography.Title>
//         <Space direction="horizontal" style={{minWidth:'870px'}}>
//           <DashboardCard
//             icon={
//               <EyeOutlined
//                 style={{
//                   color: "green",
//                   backgroundColor: "rgba(0,255,0,0.25)",
//                   borderRadius: 20,
//                   fontSize: 24,
//                   padding: 8,
//                 }}
//               />
//             }
//             title={"Page Viewed"}
//             value={orders}
//           />
//           <DashboardCard
//             icon={
//               <ShoppingOutlined
//                 style={{
//                   color: "blue",
//                   backgroundColor: "rgba(0,0,255,0.25)",
//                   borderRadius: 20,
//                   fontSize: 24,
//                   padding: 8,
//                 }}
//               />
//             }
//             title={"Total Request"}
//             value={inventory}
//           />
//           <DashboardCard
//             icon={
//               <UserOutlined
//                 style={{
//                   color: "purple",
//                   backgroundColor: "rgba(0,255,255,0.25)",
//                   borderRadius: 20,
//                   fontSize: 24,
//                   padding: 8,
//                 }}
//               />
//             }
//             title={"Approved"}
//             value={customers}
//           />
//           <DashboardCard 
//             icon={
//               <DollarCircleOutlined
//                 style={{
//                   color: "red",
//                   backgroundColor: "rgba(255,0,0,0.25)",
//                   borderRadius: 20,
//                   fontSize: 24,
//                   padding: 8,
//                 }}
//               />
//             }
//             title={"Rejected"}
//             value={revenue}
//             style={{minWidth:'850px'}}
//           />
//           <DashboardCard
//                 icon={
//                   <ClockCircleOutlined  // Use ClockCircleOutlined for pending status
//                     style={{
//                       color: "orange",  // Adjust color as needed
//                       backgroundColor: "rgba(255,165,0,0.25)",  // Adjust background color as needed
//                       borderRadius: 20,
//                       fontSize: 24,
//                       padding: 8,
//                     }}
//                   />
//                 }
//                 title={"Pending"}
//                 value={revenue}
//               />
//         </Space>
//         <Space  style={{minWidth:'1070px'}}>
//           <RecentOrders />
//           <DashboardChart />
//         </Space>
//       </Space>
//       </div>
//       </div>
//       </div>
//     );
//   }
//   function Sidebar() {
//     return (
//       <div className="sidebar">
//         <h2>Sidebar</h2>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//           {/* Add more sidebar items based on your application structure */}
//         </ul>
//       </div>
//     );
//   }
  
//   function DashboardCard({ title, value, icon }) {
//     return (
//       <Card>
//         <Space direction="horizontal">
//           {icon}
//           <Statistic title={title} value={value} />
//         </Space>
//       </Card>
//     );
//   }
//   function RecentOrders() {
//     const [dataSource, setDataSource] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const staticDataSource = [
//       {
//         key: '1',
//         title: 'Scheme 1',
//         quantity: 'User 123',
//         discountedPrice: 'John Doe',
//         approvalStatus: 'Approved',
//       },
//       {
//         key: '2',
//         title: 'Scheme 2',
//         quantity: 'User 456',
//         discountedPrice: 'Jane Doe',
//         approvalStatus: 'Pending',
//       },
//       {
//         key: '3',
//         title: 'Scheme 3',
//         quantity: 'User 789',
//         discountedPrice: 'Alice Smith',
//         approvalStatus: 'Rejected',
//       },
//       // Add more static data as needed
//     ];
    
//     useEffect(() => {
//       setLoading(true);
//       getOrders().then((res) => {
//         setDataSource(res.products.splice(0, 3));
//         setLoading(false);
//       });
//     }, []);
  
//     return (
//       <div style={{width:'450px'}}>
//       <Typography.Text>Recent Requests</Typography.Text>
//         <Space direction="vertical" style={{ marginTop: '16px'}}>
//           <Table
//             columns={[
//               {
//                 title: 'Scheme',
//                 dataIndex: 'title',
//               },
//               {
//                 title: 'UserId',
//                 dataIndex: 'quantity',
//               },
//               {
//                 title: 'UserName',
//                 dataIndex: 'discountedPrice',
//               },
//               {
//                 title: 'Approve/Reject/Pending',
//                 dataIndex: 'approvalStatus',
//               },
//             ]}
//             dataSource={staticDataSource}
//             pagination={false}
  
//             style={{width:'550px',height:'200px'}}
            
//           />
//         </Space>
//         </div>
//     );
//   }
  
//   function DashboardChart() {
//     const [reveneuData, setReveneuData] = useState({
//       labels: [],
//       datasets: [],
//     });
  
//     useEffect(() => {
//       getRevenue().then((res) => {
//         const labels = res.carts.map((cart) => {
//             return `User-${cart.userId}`;
//           });
//         const data = res.carts.map((cart) => {
//           return cart.discountedTotal;
//         });
  
//         const dataSource = {
//           labels,
//           datasets: [
//             {
//               label: "Loan Applied As Of Now",
//               data: data,
//               backgroundColor: "rgba(255, 0, 0, 1)",
//             },
//           ],
//         };
  
//         setReveneuData(dataSource);
//       });
//     }, []);
  
//     const options = {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "bottom",
//         },
//         title: {
//           display: true,
//           text: "Most Frequently Loan Applied User",
//         },
//       },
//     };
  
//     return (
//       <Card style={{ width: 500, height: 300 ,marginLeft:'100px',marginTop:'50px'}}>
//         <Bar options={options} data={reveneuData} />
//       </Card>
//     );
  
//   }
//   export default AdminHome;
// Import necessary dependencies
import { Link } from 'react-router-dom';
import '../style/Dash.css'
import Nav from './Nav';
import { DollarCircleOutlined, EyeOutlined, ClockCircleOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Navigation Bar component


// AdminHome component
function AdminHome() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(2563);
      setRevenue(1000);
    });
    getInventory().then((res) => {
      setInventory(2000);
    });
    getCustomers().then((res) => {
      setCustomers(1000);
    });
  }, []);

  return (
    <div className='App1'>
      {/* Include the NavBar component */}
     <Nav/>
      <div className="PageContent">
        <Space size={20} direction="vertical">
        <Typography.Text className="mm">DashBoard</Typography.Text>
          <Space direction="horizontal" style={{ minWidth: '870px' }}>
            <DashboardCard
              icon={
                <EyeOutlined
                  style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Page Viewed"}
              value={orders}
            />
            <DashboardCard
              icon={
                <ShoppingOutlined
                  style={{
                    color: "blue",
                    backgroundColor: "rgba(0,0,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Total Request"}
              value={inventory}
            />
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Applied"}
              value={customers}
            />
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  style={{
                    color: "red",
                    backgroundColor: "rgba(255,0,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Permium Customers"}
              value={revenue}
              style={{ minWidth: '850px' }}
            />
            <DashboardCard
              icon={
                <ClockCircleOutlined
                  style={{
                    color: "orange",
                    backgroundColor: "rgba(255,165,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Pending"}
              value={revenue}
            />
          </Space>
          <Space style={{ minWidth: '1070px' }}>
            <RecentOrders />
            <DashboardChart />
          </Space>
        </Space>
      </div>
    </div>
  );
}

// DashboardCard component
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

// RecentOrders component
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const staticDataSource = [
    {
      key: '1',
      title: 'Job A',
      quantity: 'User 123',
      discountedPrice: 'John Doe',
      approvalStatus: 'Premium User',
    },
    {
      key: '2',
      title: 'Job B',
      quantity: 'User 456',
      discountedPrice: 'Jane Doe',
      approvalStatus: 'Normal User',
    },
    {
      key: '3',
      title: 'Job C',
      quantity: 'User 789',
      discountedPrice: 'Alice Smith',
      approvalStatus: 'Premium User',
    },
    // Add more static data as needed
  ];

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ width: '450px' }}>
      <Typography.Text className="mm">Recent Requests</Typography.Text>
      <Space direction="vertical" style={{ marginTop: '16px' }}>
        <Table
          columns={[
            {
              title: 'Job',
              dataIndex: 'title',
            },
            {
              title: 'UserId',
              dataIndex: 'quantity',
            },
            {
              title: 'UserName',
              dataIndex: 'discountedPrice',
            },
            {
              title: 'Premium User/Normal User',
              dataIndex: 'approvalStatus',
            },
           
          ]}
          dataSource={staticDataSource}
          pagination={false}

          style={{ width: '550px', height: '200px' }}
        />
      </Space>
    </div>
  );
}

// DashboardChart component
function DashboardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Job Applied User",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Most Frequently Job Applied User",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 300, marginLeft: '100px', marginTop: '50px' }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}

export default AdminHome;
