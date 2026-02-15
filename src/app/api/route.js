export const bookings = [
  {
    id: 1,
    service: "sdada",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Api Created",
  });
}
