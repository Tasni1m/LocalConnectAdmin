import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { kpis, students } from "../data/mockData";

function DashboardPage() {
  const pendingStudents = students.filter(function (student) {
    return student.status === "pending";
  }).length;

  const moderationKpi = kpis.find(function (item) {
    return item.label === "Avis à modérer";
  });

  const promosKpi = kpis.find(function (item) {
    return item.label === "Promos utilisées";
  });

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Back-office
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Tableau de bord
        </h1>
      </div>

      <SectionTitle
        title="Vue d'ensemble"
        subtitle="Performances, validations et activité de la plateforme."
      />

      <div className="grid grid-cols-4 gap-5">
        {kpis.map(function (item) {
          return <StatCard key={item.label} item={item} />;
        })}
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Évolution des inscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="../../assets/graphique.png"
                alt="Graphique des inscriptions"
                className="h-80 w-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Actions prioritaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Validation
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {pendingStudents}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                cartes étudiantes en attente
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Modération
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {moderationKpi ? moderationKpi.value : "—"}
              </p>
              <p className="mt-1 text-sm text-slate-600">avis à surveiller</p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Croissance promos
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {promosKpi ? promosKpi.delta : "—"}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                utilisation des promos
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default DashboardPage;