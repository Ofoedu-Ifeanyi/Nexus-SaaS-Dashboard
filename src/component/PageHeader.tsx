import { FaBell } from "react-icons/fa";

type PageHeaderProps = {
  title: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function PageHeader({ title, searchTerm, setSearchTerm}: PageHeaderProps) {
  return (
    <div className="page-heading">
      <h1>{title}</h1>

      <header className="top-header">
        <input type="text" placeholder="Search anything..." value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} />
        <button aria-label="Notifications">
          <FaBell size={20} />
        </button>
      </header>
    </div>
  );
}

export default PageHeader;
