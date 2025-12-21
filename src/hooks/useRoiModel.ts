/**
 * ROI Calculation Model
 * Conservative estimates based on industry data
 */

export interface RoiInputs {
  tables: number;
  guestsPerDay: number;
  avgBill: number;
  internationalGuests?: number;
}

export interface RoiOutputs {
  additionalOrdersPerDay: number;
  monthlyRevenue: number;
  timeSavedPerDay: number; // in minutes
}

/**
 * Calculate ROI based on inputs
 * Conservative assumptions:
 * - 15% of guests make additional orders (conservative)
 * - Average additional order value: 30% of main bill
 * - Time saved: 2 minutes per guest interaction
 */
export function calculateRoi(inputs: RoiInputs): RoiOutputs {
  const { guestsPerDay, avgBill } = inputs;

  // Conservative: 15% of guests make additional orders
  const guestsWithAdditionalOrders = Math.floor(guestsPerDay * 0.15);
  
  // Average additional order: 30% of main bill
  const avgAdditionalOrderValue = avgBill * 0.3;
  
  // Additional orders per day
  const additionalOrdersPerDay = guestsWithAdditionalOrders;
  
  // Daily additional revenue
  const dailyAdditionalRevenue = additionalOrdersPerDay * avgAdditionalOrderValue;
  
  // Monthly revenue (30 days)
  const monthlyRevenue = dailyAdditionalRevenue * 30;
  
  // Time saved: 2 minutes per guest (fewer questions, faster ordering)
  const timeSavedPerDay = guestsPerDay * 2;

  return {
    additionalOrdersPerDay: Math.round(additionalOrdersPerDay),
    monthlyRevenue: Math.round(monthlyRevenue),
    timeSavedPerDay: Math.round(timeSavedPerDay),
  };
}

