import HeaderBox from "@/components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const loggedInUser = { name: "Dean" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedInUser.name || "Guest"}
            subtext="Access and manage your account and transaction"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000}
          />
        </header>
      </div>
    </section>
  );
};

export default HomePage;
