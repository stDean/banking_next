import HeaderBox from "@/components/HeaderBox";
import { RecentTransactions } from "@/components/RecentTransactions";
import { RightSideBar } from "@/components/RightSideBar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const HomePage = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  const loggedInUser = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedInUser.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={`${loggedInUser?.firstName}`}
            subtext="Access and manage your account and transaction"
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        {/* RECENT TRANSACTIONS */}
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      {/* Right Side Bar */}
      <RightSideBar
        user={loggedInUser}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default HomePage;
