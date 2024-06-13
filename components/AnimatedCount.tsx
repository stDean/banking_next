"use client";

import CountUp from "react-countup";

export const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="." prefix="$" end={amount} />
    </div>
  );
};
