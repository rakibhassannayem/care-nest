import { connect } from "@/app/lib/dbConnect";
const bookingCollection = connect("bookings");

export async function GET(request) {
  const result = await bookingCollection.find().toArray();

  return Response.json(result);
}

export async function POST(request) {
  const { service } = await request.json();

  if (!service || typeof service !== "string") {
    return Response.json({
      status: 400,
      message: "please send a service",
    });
  }

  const newService = {
    service,
    date: new Date().toISOString(),
  };

  const result = await bookingCollection.insertOne(newService);

  return Response.json(result);
}
