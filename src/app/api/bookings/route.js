import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
const bookingCollection = connect("bookings");

export async function GET(request) {
  const result = await bookingCollection.find().toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { bookingData } = await request.json();

  const newBooking = {
    ...bookingData,
    status: "pending",
    date: new Date().toISOString(),
  };

  const result = await bookingCollection.insertOne(newBooking);

  revalidatePath("/bookings");

  return Response.json(result);
}
