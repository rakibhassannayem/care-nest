export const getInvoiceTemplate = (booking) => {
  const { service, bookingType, duration, totalCost, division, district, city, area, address } = booking;

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #4f46e5; padding: 30px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Booking Invoice</h1>
        <p style="margin: 5px 0 0; opacity: 0.9;">Thank you for choosing CareNest!</p>
      </div>
      
      <div style="padding: 30px;">
        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 18px; color: #1e293b; margin-bottom: 15px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Service Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; width: 40%;">Service Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-weight: 600;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b;">Booking Type:</td>
              <td style="padding: 10px 0; color: #1e293b; text-transform: capitalize;">${bookingType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b;">Duration:</td>
              <td style="padding: 10px 0; color: #1e293b;">${duration} ${bookingType === "hourly" ? "Hours" : "Days"}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="font-size: 18px; color: #1e293b; margin-bottom: 15px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Location</h2>
          <p style="color: #475569; line-height: 1.6; margin: 0;">
            ${address}<br>
            ${area ? area + ", " : ""}${city}<br>
            ${district}, ${division}
          </p>
        </div>

        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 20px; font-weight: 700; color: #1e293b;">Total Amount:</span>
            <span style="font-size: 24px; font-weight: 800; color: #4f46e5;">৳${totalCost}</span>
          </div>
        </div>
      </div>

      <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 14px;">
        <p style="margin: 0;">If you have any questions, please contact our support team.</p>
        <p style="margin: 5px 0 0;">&copy; 2026 CareNest. All rights reserved.</p>
      </div>
    </div>
  `;
};
