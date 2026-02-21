import { connect } from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

const bookingCollection = connect("bookings");

export async function GET(request) {
  const session = await getServerSession(authOptions);

  const result = await bookingCollection
    .find({ userEmail: session?.user?.email })
    .toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { bookingData } = await request.json();

  const session = await getServerSession(authOptions);

  const newBooking = {
    ...bookingData,
    userEmail: session?.user?.email,
    userName: session?.user?.name,
    status: "pending",
    date: new Date().toISOString(),
  };

  const result = await bookingCollection.insertOne(newBooking);

  revalidatePath("/privateRoute/myBookings");

  return Response.json(result);
}
