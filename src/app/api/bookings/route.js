import { connect } from "@/app/lib/dbConnect";
import { getToken } from "next-auth/jwt";
import { revalidatePath } from "next/cache";
const bookingCollection = connect("bookings");

export async function GET(request) {
  const result = await bookingCollection.find().toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { bookingData } = await request.json();

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const newBooking = {
    ...bookingData,
    userEmail: token?.email,
    userName: token?.name,
    status: "pending",
    date: new Date().toISOString(),
  };

  const result = await bookingCollection.insertOne(newBooking);

  revalidatePath("/privateRoute/myBookings");

  return Response.json(result);
}
