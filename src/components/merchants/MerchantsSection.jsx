import { Store } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.jsx";
import SearchBar from "../SearchBar.jsx";
import DataTable from "../DataTable.jsx";
import StatusBadge from "../ui/StatusBadge.jsx";
import { merchants } from "../data/mockData.js";

function MerchantsSection() {
  const columns = [
    { key: "name", label: "Commerce" },
    { key: "category", label: "Catégorie" },
    { key: "email", label: "Email" },
    { key: "status", label: "Statut", render: (value) => <StatusBadge status={value} /> },
  ];

  return (
    <section className="rounded-3xl bg-slate-50 p-5">
      <SectionTitle
        icon={Store}
        title="Liste des commerçants"
        subtitle="Suivi des commerces partenaires"
      />
      <SearchBar placeholder="Rechercher un commerçant..." />
      <DataTable columns={columns} data={merchants} />
    </section>
  );
}

export default MerchantsSection;