import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { SquarePlus } from "lucide-react";
import Link from "next/link";

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
    <main className="h-full">
      <p className="bg-yellow-100 text-sm text-yellow-800 text-center px-3 py-2 rounded-lg mb-6">
        Displaying all invoices for public demo. Creation is disabled.
      </p>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-semibold">Invoices</h1>

        <Button className="inline-flex gap-2" variant="ghost" asChild>
          <Link href="/invoices/new">
            <SquarePlus className="w-6 h-6" />
            create invoice
          </Link>
        </Button>
      </div>

      <DataTable columns={columns} data={data} />
    </main>
  );
}
