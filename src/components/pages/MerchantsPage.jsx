import { Search, Plus } from "lucide-react"; 
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button }    from "../ui/button";
import { Input }     from "../ui/input";
import SectionTitle  from "../SectionTitle";
import StatusBadge   from "../StatusBadge";
import { merchants } from "../data/mockData";
import { Link }      from "react-router-dom";

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
                  <div key={merchant.id} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{merchant.name}</p>
                        <p className="text-sm text-slate-500">{merchant.category} • {merchant.city}</p>
                      </div>
                      <StatusBadge status={merchant.status} />
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
                      <span>{merchant.offers} offres</span>
                      <span>{merchant.rating} / 5</span>
                    </div>
                    <Button variant="outline" className="mt-4 rounded-2xl" asChild>
                      <Link to={`${merchant.id}`}>Ouvrir</Link>
                    </Button>
                  </div>
                );
              })}
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
            <Button variant="secondary" className="w-full rounded-2xl" onClick={handleAddMerchant}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter le partenaire
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default MerchantsPage;