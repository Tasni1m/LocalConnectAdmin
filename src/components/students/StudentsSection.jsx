import { Users } from "lucide-react";
import SectionTitle from "./components/ui/SectionTitle.jsx";
import SearchBar from "../components/SearchBar.jsx";
import DataTable from "../components/DataTable.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { students } from "../components/data/mockData.js";

function StudentsSection() {
  const columns = [
    { key: "name", label: "Nom" },
    { key: "school", label: "Établissement" },
    { key: "email", label: "Email" },
    { key: "status", label: "Statut", render: (value) => <StatusBadge status={value} /> },
  ];
  return (
    <section className="rounded-3xl bg-slate-50 p-5">
      <SectionTitle
        icon={Users}
        title="Liste des étudiants"
        subtitle="Gestion et consultation des comptes étudiants"
      />
      <SearchBar placeholder="Rechercher un étudiant..." />
      <DataTable columns={columns} data={students} />
    </section>
  );
}

export default StudentsSection;