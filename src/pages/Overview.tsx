import PageHeader from "../component/PageHeader";
import SummaryCards from "../component/SummaryCards";
import RevenueChart from "../component/RevenueChart";

 type OverviewPageProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function OverviewPage({ searchTerm, setSearchTerm}: OverviewPageProps) {
 

  return (
    <>
    <PageHeader
      title="Dashboard Overview"
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />
      <SummaryCards/>
      <RevenueChart/>
    </>
  );
}
export default OverviewPage;