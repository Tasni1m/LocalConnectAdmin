import { FolderPlus, UserCog, Pencil, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import SectionTitle from "../SectionTitle";
import { categories, admins } from "../data/mockData";

function SettingsPage() {
  function handleAddCategory() {
    alert("Catégorie ajoutée.");
  }

  function handleAddAdmin() {
    alert("Administrateur ajouté.");
  }

  return (
    <section id="settings" className="space-y-6">
      <SectionTitle
        title="Configuration"
        subtitle="Gère les catégories du système et les comptes administrateurs."
      />

      <div className="grid grid-cols-2 gap-6">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Gestion des catégories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Input className="rounded-2xl" placeholder="Nouvelle catégorie" />
              <Button variant="secondary" className="shrink-0 rounded-2xl" onClick={handleAddCategory}>
                <FolderPlus className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>

            <div className="space-y-2">
              {categories.map(function (category) {
                return (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <p className="text-sm font-medium text-slate-900">{category}</p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="rounded-xl">
                        <Pencil className="mr-1.5 h-3.5 w-3.5" />
                        Renommer
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Gestion des administrateurs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input className="rounded-2xl" placeholder="Nom complet" />
              <Input className="rounded-2xl" placeholder="Adresse e-mail" />
            </div>

            <Input className="rounded-2xl" placeholder="Rôle (ex: Modérateur)" />

            <Button  variant="secondary" className="w-full rounded-2xl" onClick={handleAddAdmin}>
              <UserCog className="mr-2 h-4 w-4" />
              Ajouter l'administrateur
            </Button>

            <div className="space-y-2 pt-2">
              {admins.map(function (admin) {
                return (
                  <div
                    key={admin.id}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{admin.name}</p>
                      <p className="text-xs text-slate-500">{admin.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full text-xs">{admin.role}</Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-rose-600 hover:bg-rose-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SettingsPage;