import { Search, Plus, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SectionTitle from "../ui/SectionTitle";
import StatusBadge from "../ui/StatusBadge";
import { merchants } from "../data/mockData";

function MerchantsPage() {
  function handleAddMerchant() {
    alert("Nouveau commerce ajouté.");
  }

  return (
    <section id="merchants" className="space-y-6">
      <SectionTitle
        title="Gestion des commerçants"
        subtitle="Pilote le réseau de partenaires et ajoute de nouveaux commerces."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Répertoire des commerçants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input className="rounded-2xl pl-10" placeholder="Rechercher un commerce" />
            </div>

            <div className="space-y-3">
              {merchants.map(function (merchant) {
                return (
                  <div
                    key={merchant.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{merchant.name}</p>
                        <p className="text-sm text-slate-500">
                          {merchant.category} • {merchant.city}
                        </p>
                      </div>
                      <StatusBadge status={merchant.status} />
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
                      <span>{merchant.offers} offres</span>
                      <span>{merchant.rating} / 5</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Détail commerce</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Café Rhône</h3>
                  <p className="text-sm text-slate-500">Food • Genève</p>
                </div>
                <StatusBadge status="active" />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <p className="text-slate-500">Offres</p>
                  <p className="mt-1 text-2xl font-bold">3</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <p className="text-slate-500">Note moyenne</p>
                  <p className="mt-1 text-2xl font-bold">4.7</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                  <p className="text-slate-500">Avis</p>
                  <p className="mt-1 text-2xl font-bold">2</p>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Derniers avis
                </p>
                <div className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium">Lina</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-current" /> 5
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Très bon accueil et réduction appliquée.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium">Noah</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-current" /> 4
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Service rapide le midi.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Démarchage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input className="rounded-2xl" placeholder="Nom du commerce" />
              <Input className="rounded-2xl" placeholder="Catégorie" />
              <Input className="rounded-2xl" placeholder="Ville" />
              <Button className="w-full rounded-2xl text-black-700" onClick={handleAddMerchant}>
                <Plus className="mr-2 h-4 w-4 text-black-700" />
                Ajouter le partenaire
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default MerchantsPage;