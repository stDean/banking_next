import HeaderBox from "@/components/HeaderBox";
import { RightSideBar } from "@/components/RightSideBar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const loggedInUser = {
    firstName: "Dean",
    lastName: "Sheriff",
    email: "deans@gmail.com",
  };

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

        {/* RECENT TRANSACTIONS */}
        RECENT TRANSACTIONS
      </div>

      {/* Right Side Bar */}
      <RightSideBar
        user={loggedInUser}
        transactions={[]}
        banks={[{ currentBalance: 1250 }, { currentBalance: 3400 }]}
      />
    </section>
  );
};

export default HomePage;
