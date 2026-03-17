import { Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import SectionTitle from "../ui/SectionTitle";
import StatusBadge from "../ui/StatusBadge";
import { Link } from "react-router-dom";

function StudentsPage(props) {
  return (
    <section id="students">
      <SectionTitle
        title="Gestion des étudiants"
        subtitle="Vérifie les cartes étudiantes et consulte les validations en attente."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <Button variant="outline"  className="rounded-2xl">Tous</Button>
        <Button variant="outline" className="rounded-2xl">En attente</Button>
        <Button variant="outline" className="rounded-2xl">Validés</Button>
      </div>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Étudiant</th>
                  <th className="px-6 py-4 font-medium">École</th>
                  <th className="px-6 py-4 font-medium">Date d'envoi</th>
                  <th className="px-6 py-4 font-medium">Expiration carte</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {props.students.map(function (student) {
                  return (
                    <tr key={student.id} className="border-b border-slate-100 text-sm hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-slate-900">{student.name}</p>
                          <p className="text-slate-500">{student.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">{student.school}</td>
                      <td className="px-6 py-4">{student.submittedAt}</td>
                      <td className="px-6 py-4">{student.cardExpiry}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={student.status} />
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" className="rounded-2xl">
                          <Eye className="mr-2 h-4 w-4" />

                        <Button variant="outline" className="rounded-2xl" asChild>
                          <Link to={`${student.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Ouvrir
                          </Link>
                        </Button>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="Carte étudiante"
            className="h-full w-full object-cover"
          />
        </div>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Fenêtre de validation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Nom</p>
              <p className="font-semibold">Lina Dupont</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">École</p>
              <p className="font-semibold">UNIGE</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Date d'expiration</p>
              <p className="font-semibold">2026-09-30</p>
            </div>
            <Textarea className="min-h-[120px] rounded-2xl" placeholder="Motif de rejet si nécessaire" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="destructive" className="flex-1 rounded-2xl">Rejeter</Button>
              <Button className="flex-1 rounded-2xl">Valider</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default StudentsPage;
