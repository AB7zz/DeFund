import React from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Navbar from "./Navbar";
import Footer from "./Footer";

const data = {
transactions: 200,
paid: 120,
unpaid: 80,
chitAmount: 100000,
chitAmountPaid: 30000,
monthlyPerformance: [
{ month: "Jan", collected: 20000, disbursed: 10000, defaults: 2, delays: 1 },
{ month: "Feb", collected: 30000, disbursed: 20000, defaults: 0, delays: 3 },
{ month: "Mar", collected: 25000, disbursed: 15000, defaults: 1, delays: 2 },
{ month: "Apr", collected: 28000, disbursed: 18000, defaults: 1, delays: 1 },
{ month: "May", collected: 32000, disbursed: 22000, defaults: 0, delays: 2 },
{ month: "Jun", collected: 28000, disbursed: 20000, defaults: 2, delays: 1 },
],
defaultRate: 0.1,
delayRate: 0.15,
roi: 0.2,
amountHistory: [
{ month: "Jan", total: 10000 },
{ month: "Feb", total: 40000 },
{ month: "Mar", total: 60000 },
{ month: "Apr", total: 80000 },
{ month: "May", total: 120000 },
{ month: "Jun", total: 150000 },
],
};

const COLORS = ["#0088FE", "#FFBB28"];

const Analytics = () => {
return (
<div>
<Navbar />

<div className="flex flex-wrap justify-center gap-8 p-8 mt-20">
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Number of Transactions</h3>
<p className="text-5xl font-bold">{data.transactions}</p>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Percentage of Participants
Who Paid</h3>
<PieChart width={200} height={200}>
<Pie data={[{ name: "Paid", value: data.paid }, { name: "Unpaid",
value: data.unpaid }]} dataKey="value" nameKey="name" cx="50%"
cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8">
{data.paid > 0 && <Cell key="paid" fill={COLORS[0]} />}
{data.unpaid > 0 && <Cell key="unpaid" fill={COLORS[1]} />}
</Pie>
<Tooltip />
</PieChart>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Percentage of Chit Amount Paid</h3>
<PieChart width={200} height={200}>
<Pie data={[{ name: "Paid", value: data.chitAmountPaid }, { name:
"Unpaid", value: data.chitAmount - data.chitAmountPaid }]}
dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60}
outerRadius={80} fill="#8884d8">
{data.chitAmountPaid > 0 && <Cell key="paid" fill={COLORS[0]} />}
{data.chitAmount - data.chitAmountPaid > 0 && <Cell key="unpaid"
fill={COLORS[1]} />}
</Pie>
<Tooltip />
</PieChart>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Monthly Performance</h3>
<LineChart width={350} height={250} data={data.monthlyPerformance}>
<XAxis dataKey="month" />
<YAxis />
<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="collected" stroke="#8884d8" />
<Line type="monotone" dataKey="disbursed" stroke="#82ca9d" />
<Line type="monotone" dataKey="defaults" stroke="#FF0000" />
</LineChart>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Default Rate</h3>
<p className="text-5xl font-bold">{data.defaultRate * 100}%</p>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Delay Rate</h3>
<p className="text-5xl font-bold">{data.delayRate * 100}%</p>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Return on Investment</h3>
<p className="text-5xl font-bold">{data.roi * 100}%</p>
</div>
<div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 rounded-lg shadow-lg p-6">
<h3 className="text-lg font-medium mb-4">Amount History</h3>
<LineChart width={350} height={200} data={data.amountHistory}>
<XAxis dataKey="month" />
<YAxis />
<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="total" stroke="#8884d8" />
</LineChart>
</div>
</div>
<Footer />
</div>
);
};

export default Analytics;
