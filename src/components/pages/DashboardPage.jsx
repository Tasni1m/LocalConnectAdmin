import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";

function DashboardPage(props) {
  return (
    <section id="dashboard">
      <SectionTitle
        title="Dashboard global"
        subtitle="Vue d'ensemble des performances, validations et activité de la plateforme."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {props.kpis.map(function (item) {
          return <StatCard key={item.label} item={item} />;
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Évolution des inscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Graphique des inscriptions"
                className="h-[320px] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Ici tu peux mettre une vraie image de graphique exportée depuis Canva, Excel ou un autre outil.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Actions prioritaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-sm text-slate-500">Validation</p>
              <p className="mt-2 text-2xl font-bold">2</p>
              <p className="mt-1 text-sm text-slate-600">cartes étudiantes en attente</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-sm text-slate-500">Modération</p>
              <p className="mt-2 text-2xl font-bold">17</p>
              <p className="mt-1 text-sm text-slate-600">avis à surveiller</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-sm text-slate-500">Croissance</p>
              <p className="mt-2 text-2xl font-bold">+24%</p>
              <p className="mt-1 text-sm text-slate-600">utilisation des promos</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default DashboardPage;