import { transporter } from "@/lib/emailTransporter";
import { getInvoiceTemplate } from "@/lib/invoiceTemplate";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  try {
    const { bookingData } = await request.json();
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return Response.json({ error: "User not authenticated" }, { status: 401 });
    }

    const mailOptions = {
      from: `"CareNest" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: `Your CareNest Booking Invoice - ${bookingData.service}`,
      html: getInvoiceTemplate(bookingData),
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Invoice email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email", details: error.message }, { status: 500 });
  }
}
