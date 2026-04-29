import PageHeader from "../components/PageHeader";

const orderData = [
    { id: "ORD-001", customer: "Aqila Fadilla", status: "Completed", total: "Rp 1.500.000", date: "2023-10-01" },
    { id: "ORD-002", customer: "Siti Aminah", status: "Pending", total: "Rp 750.000", date: "2023-10-02" },
    { id: "ORD-003", customer: "Andi Wijaya", status: "Cancelled", total: "Rp 200.000", date: "2023-10-02" },
    { id: "ORD-004", customer: "Dewi Lestari", status: "Completed", total: "Rp 3.200.000", date: "2023-10-03" },
    { id: "ORD-005", customer: "Eko Prasetyo", status: "Completed", total: "Rp 450.000", date: "2023-10-04" },
    { id: "ORD-006", customer: "Farah Quinn", status: "Pending", total: "Rp 1.200.000", date: "2023-10-05" },
    { id: "ORD-007", customer: "Gilang Ramadhan", status: "Completed", total: "Rp 900.000", date: "2023-10-05" },
    { id: "ORD-008", customer: "Hani Syifa", status: "Completed", total: "Rp 2.100.000", date: "2023-10-06" },
    { id: "ORD-009", customer: "Indra Bruggman", status: "Cancelled", total: "Rp 150.000", date: "2023-10-07" },
    { id: "ORD-010", customer: "Joko Anwar", status: "Pending", total: "Rp 5.000.000", date: "2023-10-08" },
    { id: "ORD-011", customer: "Kevin Sanjaya", status: "Completed", total: "Rp 850.000", date: "2023-10-08" },
    { id: "ORD-012", customer: "Lestari Putri", status: "Completed", total: "Rp 1.100.000", date: "2023-10-09" },
    { id: "ORD-013", customer: "Maya Ahmad", status: "Pending", total: "Rp 600.000", date: "2023-10-10" },
    { id: "ORD-014", customer: "Nanda Pratama", status: "Completed", total: "Rp 2.750.000", date: "2023-10-11" },
    { id: "ORD-015", customer: "Oscar Lawalata", status: "Completed", total: "Rp 300.000", date: "2023-10-12" },
];

export default function Orders() {
    return (
        <div className="p-6">
            <PageHeader />
            <h1 className="text-2xl font-bold my-4">Data Orders</h1>
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Order ID</th>
                            <th className="px-6 py-3">Customer Name</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Total Price</th>
                            <th className="px-6 py-3">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order) => (
                            <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4">{order.customer}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        order.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-700">{order.total}</td>
                                <td className="px-6 py-4">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}