
import { useState } from "react";
import PageHeader from "../component/PageHeader";

type Customer = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive";
};

const initialCustomers: Customer[] = [
  { id: 1, name: "ifeanyi", email: "ifeanyi@example.com", status: "Active" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", status: "Active" },
  { id: 3, name: "Michael Obi", email: "michaelobi@example.com", status: "Inactive" },
  { id: 4, name: "Grace owen", email: "grace@example.com", status: "Active" },
  { id: 5, name: "David Johnson", email: "david@example.com", status: "Inactive" },
];

type CustomersProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};
function Customers({ searchTerm, setSearchTerm}: CustomersProps) {
    const [customers] = useState<Customer[]>(initialCustomers);
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("ascending");

    const filteredCustomers = customers.filter((customer) => {
        const matchesSearch =
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "All" || customer.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);

    return sortOrder === "ascending" ? comparison : -comparison;
        });

    const totalCustomers = customers.length;

        const activeCustomers = customers.filter(
        (customer) => customer.status === "Active"
        ).length;

        const inactiveCustomers = customers.filter(
        (customer) => customer.status === "Inactive"
    ).length;

    return (
        <>
        <PageHeader
        title="Customers"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />

        <section className="analytics-section">
            <h2>Customer Management</h2>
            <p>View and manage your customers here.</p>
            
            <div className="customer-summary">
            <div className="customer-summary-card">
                <p>Total Customers</p>
                <h2>{totalCustomers}</h2>
            </div>

            <div className="customer-summary-card">
                <p>Active Customers</p>
                <h2>{activeCustomers}</h2>
            </div>

            <div className="customer-summary-card">
                <p>Inactive Customers</p>
                <h2>{inactiveCustomers}</h2>
            </div>
            </div>

         <div className="customer-controls">
            <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
            >
                <option value="All">All Customers</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
            
            <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            aria-label="Sort customers by name"
            >
            <option value="ascending">Name: A–Z</option>
            <option value="descending">Name: Z–A</option>
            </select>

            <button
            type="button"
            onClick={() => {
                setSearchTerm("");
                setStatusFilter("All");
                setSortOrder("ascending");
            }}
            >
            Clear Filters
            </button>

        </div>

            
     <div className="customer-list">
        {sortedCustomers.length > 0 ? (
            sortedCustomers.map((customer) => (
            <div className="customer-row" key={customer.id}>
                <div>
                <h3>{customer.name}</h3>
                <p>{customer.email}</p>
                </div>

                <span
                className={`customer-status ${customer.status.toLowerCase()}`}
                >
                {customer.status}
                </span>
            </div>
            ))
        ) : (
            <p className="empty-state">
            No customers found. Try another search or filter.
            </p>
        )}
     </div>

      </section>
    </>
    );
}

export default Customers;
