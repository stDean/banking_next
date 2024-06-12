import { AnimatedCount } from "./AnimatedCount";
import { DoughNutChart } from "./DoughNutChart";

export const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughNutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col">
          <p>Total Current Balance: </p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCount amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};
