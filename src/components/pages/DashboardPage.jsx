import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";

function DashboardPage(props) {
  const kpis = props.kpis || [];
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Back-office
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Tableau de bord administrateur
              </h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:w-[420px]">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Dernière mise à jour</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Aujourd’hui</p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-sm text-slate-300">État plateforme</p>
                <p className="mt-2 text-lg font-semibold">Stable</p>
              </div>
            </div>
          </div>
        </div>
        <section className="space-y-8">
          <SectionTitle title="Dashboard global" subtitle="Vue d'ensemble des performances, validations et activité de la plateforme." />
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
            {kpis.map(function (item) {
              return <StatCard key={item.label} item={item} />;
            })}
          </div>
          <div className="grid gap-6 2xl:grid-cols-[2fr_1fr]">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Évolution des inscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                    alt="Graphique des inscriptions"
                    className="h-[380px] w-full object-cover xl:h-[460px]"
                  />
                </div>
      
              </CardContent>
            </Card>
            <div className="grid gap-6">
              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Actions prioritaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl bg-amber-50 p-5">
                    <p className="text-sm text-slate-500">Validation</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">2</p>
                    <p className="mt-1 text-sm text-slate-600">
                      cartes étudiantes en attente
                    </p>
                  </div>
                  <div className="rounded-2xl bg-rose-50 p-5">
                    <p className="text-sm text-slate-500">Modération</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">17</p>
                    <p className="mt-1 text-sm text-slate-600">avis à surveiller</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <p className="text-sm text-slate-500">Croissance</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">+24%</p>
                    <p className="mt-1 text-sm text-slate-600">
                      utilisation des promos
                    </p>
                  </div>
                </CardContent>
              </Card>
            
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;