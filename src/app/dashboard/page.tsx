import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: new Date(Date.now()).toLocaleDateString("en-us"),
      customer: "John Doe",
      email: "m@example.com",
      status: "open",
      amount: 100,
    },
    {
      id: "728ed52r",
      date: new Date(Date.now()).toLocaleDateString("en-us"),
      customer: "John Doe",
      email: "b@example.com",
      status: "paid",
      amount: 100,
    },
    {
      id: "728ed52d",
      date: new Date(Date.now()).toLocaleDateString("en-us"),
      customer: "John Doe",
      email: "p@example.com",
      status: "void",
      amount: 100,
    },
    // ...
  ];
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
