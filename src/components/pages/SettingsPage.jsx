import { FolderPlus, UserCog } from "lucide-react";
import { Input } from "../ui/input";
import { Card, CardContent,CardHeader, CardTitle  } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import SectionTitle from "../ui/SectionTitle";
function SettingsPage(props) {
  return (
    <section id="settings">
      <SectionTitle
        title="Configuration"
        subtitle="Gère les catégories du système et les comptes administrateurs."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Gestion des catégories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Input className="rounded-2xl" placeholder="Nouvelle catégorie" />
              <Button className="rounded-2xl">
                <FolderPlus className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>

            <div className="space-y-3">
              {props.categories.map(function (category) {
                return (
                  <div key={category} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <p className="font-medium">{category}</p>
                    <Button variant="outline" className="rounded-2xl">Renommer</Button>
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
            <div className="grid gap-3 md:grid-cols-2">
              <Input className="rounded-2xl" placeholder="Nom" />
              <Input className="rounded-2xl" placeholder="Email" />
            </div>
            <Input className="rounded-2xl" placeholder="Rôle" />
            <Button className="w-full rounded-2xl">
              <UserCog className="mr-2 h-4 w-4" />
              Ajouter un administrateur
            </Button>

            <div className="space-y-3 pt-2">
              {props.admins.map(function (admin) {
                return (
                  <div key={admin.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <div>
                      <p className="font-medium">{admin.name}</p>
                      <p className="text-sm text-slate-500">{admin.email}</p>
                    </div>
                    <Badge className="rounded-full">{admin.role}</Badge>
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