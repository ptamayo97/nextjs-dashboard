"use server";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("amount"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  //   const rawFormData = Object.fromEntries(formData.entries());
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  //Test it out:

  //   console.log(typeof rawFormData.amount);
}
