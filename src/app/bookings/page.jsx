export const metadata = {
  title: "Bookings",
};

const getBookings = async () => {
  const result = await fetch("http://localhost:3000/api/bookings");

  return await result.json();
};

const page = async () => {
  const bookings = await getBookings();

  return <div className="container mx-auto">{bookings.length}</div>;
};

export default page;
