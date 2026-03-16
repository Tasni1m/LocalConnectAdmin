import { BarChart3, Users, Store } from "lucide-react";
import SectionTitle from "./ui/SectionTitle.jsx";
import StatCard from "./ui/StatCard.jsx";
import { students, merchants } from "./data/mockData.js";

function StatisticsSection() {
  const activeStudents = students.filter((s) => s.status === "Actif").length;
  const validatedMerchants = merchants.filter((m) => m.status === "Validé").length;
  const pendingAccounts = [
    ...students.filter((s) => s.status === "En attente"),
    ...merchants.filter((m) => m.status === "En attente"),
  ].length;

  return (
    <section>
      <SectionTitle
        icon={BarChart3}
        title="Statistiques"
        subtitle="Vue d'ensemble de la plateforme"
      />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          icon={Users}
          label="Étudiants inscrits"
          value={students.length}
          detail={`${activeStudents} comptes actifs`}
        />
        <StatCard
          icon={Store}
          label="Commerçants inscrits"
          value={merchants.length}
          detail={`${validatedMerchants} comptes validés`}
        />
        <StatCard
          icon={BarChart3}
          label="Comptes en attente"
          value={pendingAccounts}
          detail="À valider par l'administrateur"
        />
      </div>
    </section>
  );
}

export default StatisticsSection;