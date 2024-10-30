"use server"
import { Invoices } from "@/db/schema";
import {db } from "@/db";
import { redirect } from "next/navigation";

export async function creatAction(formData: FormData) {
    const value = Math.floor(parseFloat(String(formData.get("value")))*100);
    const description = formData.get("description");

    const result = await db.insert(Invoices)
        .values({
            createTs: new Date(),
            value: value,
            description: description as string,
            status: "open"
        })
        .returning(
            {
                id: Invoices.id,
            })

    redirect(`/invoices/${result[0].id}`)
}