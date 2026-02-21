import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const bookingCollection = connect("bookings");

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 404,
      message: "Invalid Id!",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await bookingCollection.findOne(query);

  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 404,
      message: "Invalid Id!",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await bookingCollection.deleteOne(query);

  revalidatePath("/privateRoute/myBookings");

  return Response.json(result);
}
