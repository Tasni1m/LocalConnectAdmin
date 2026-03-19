import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../ui/SectionTitle";
import StatusBadge from "../ui/StatusBadge";
import { students } from "../data/mockData";

function StudentsPage() {
  return (
    <section id="students" className="space-y-6">
      <SectionTitle
        title="Gestion des étudiants"
        subtitle="Vérifie les cartes étudiantes et consulte les validations en attente."
      />

      <div className="mb-4 flex flex-wrap gap-3">
        <Button variant="outline" className="rounded-2xl">
          Tous
        </Button>
        <Button variant="outline" className="rounded-2xl">
          En attente
        </Button>
        <Button variant="outline" className="rounded-2xl">
          Validés
        </Button>
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
                  <th className="px-6 py-4 font-medium">Temps session</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map(function (student) {
                  return (
                    <tr
                      key={student.id}
                      className="border-b border-slate-100 text-sm hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">
                          {student.name}
                        </p>
                        <p className="text-slate-500">{student.email}</p>
                      </td>
                      <td className="px-6 py-4">{student.school}</td>
                      <td className="px-6 py-4">{student.submittedAt}</td>
                      <td className="px-6 py-4">{student.cardExpiry}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={student.status} />
                      </td>
                      <td className="px-6 py-4">{student.sessionTime}</td>
                      <td className="px-6 py-4">
                        <Button variant="outline" className="rounded-2xl" asChild>
                          <Link to={`${student.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Ouvrir
                          </Link>
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
    </section>
  );
}

export default StudentsPage;