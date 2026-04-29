import PageHeader from "../components/PageHeader";



const customerData = [

    { id: "C001", name: "Aqila Fadilla", email: "aqila@mail.com", phone: "08123456789", loyalty: "Gold" },

    { id: "C002", name: "Siti Aminah", email: "siti@mail.com", phone: "08123456790", loyalty: "Silver" },

    { id: "C003", name: "Andi Wijaya", email: "andi@mail.com", phone: "08123456791", loyalty: "Bronze" },

    { id: "C004", name: "Dewi Lestari", email: "dewi@mail.com", phone: "08123456792", loyalty: "Gold" },

    { id: "C005", name: "Eko Prasetyo", email: "eko@mail.com", phone: "08123456793", loyalty: "Silver" },

    { id: "C006", name: "Farah Quinn", email: "farah@mail.com", phone: "08123456794", loyalty: "Gold" },

    { id: "C007", name: "Gilang Ramadhan", email: "gilang@mail.com", phone: "08123456795", loyalty: "Bronze" },

    { id: "C008", name: "Hani Syifa", email: "hani@mail.com", phone: "08123456796", loyalty: "Silver" },

    { id: "C009", name: "Indra Bruggman", email: "indra@mail.com", phone: "08123456797", loyalty: "Bronze" },

    { id: "C010", name: "Joko Anwar", email: "joko@mail.com", phone: "08123456798", loyalty: "Gold" },

    { id: "C011", name: "Kevin Sanjaya", email: "kevin@mail.com", phone: "08123456799", loyalty: "Silver" },

    { id: "C012", name: "Lestari Putri", email: "lestari@mail.com", phone: "08123456800", loyalty: "Bronze" },

    { id: "C013", name: "Maya Ahmad", email: "maya@mail.com", phone: "08123456801", loyalty: "Gold" },

    { id: "C014", name: "Nanda Pratama", email: "nanda@mail.com", phone: "08123456802", loyalty: "Silver" },

    { id: "C015", name: "Oscar Lawalata", email: "oscar@mail.com", phone: "08123456803", loyalty: "Bronze" },

];



export default function Customers() {

    return (

        <div className="p-6">

            <PageHeader />

            <h1 className="text-2xl font-bold my-4">Data Customers</h1>

            <div className="overflow-x-auto shadow-md rounded-lg">

                <table className="w-full text-sm text-left text-gray-500">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">

                        <tr>

                            <th className="px-6 py-3">Customer ID</th>

                            <th className="px-6 py-3">Customer Name</th>

                            <th className="px-6 py-3">Email</th>

                            <th className="px-6 py-3">Phone</th>

                            <th className="px-6 py-3">Loyalty</th>

                        </tr>

                    </thead>

                    <tbody>

                        {customerData.map((cust) => (

                            <tr key={cust.id} className="bg-white border-b hover:bg-gray-50">

                                <td className="px-6 py-4 font-medium text-gray-900">{cust.id}</td>

                                <td className="px-6 py-4">{cust.name}</td>

                                <td className="px-6 py-4">{cust.email}</td>

                                <td className="px-6 py-4">{cust.phone}</td>

                                <td className="px-6 py-4">

                                    <span className={`px-2 py-1 rounded text-xs font-bold ${

                                        cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :

                                        cust.loyalty === 'Silver' ? 'bg-gray-200 text-gray-700' : 'bg-orange-100 text-orange-700'

                                    }`}>

                                        {cust.loyalty}

                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}