import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, School, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button }   from "../ui/button";
import { Textarea } from "../ui/textarea";
import StatusBadge  from "../StatusBadge";
import SectionTitle from "../SectionTitle";
import { students } from "../data/mockData";
import carte        from "../../assets/carteEtudiant.jpg";

function StudentDetailPage() {
  const { id } = useParams();
  const [rejectReason, setRejectReason] = useState("");

  const student = students.find(function (s) {
    return s.id === Number(id);
  });

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-slate-700">Étudiant introuvable</p>
        <p className="mt-1 text-sm text-slate-400">
          L'identifiant {id} ne correspond à aucun dossier.
        </p>
        <Button asChild className="mt-6 rounded-2xl" variant="outline">
          <Link to="/admin/students">← Retour à la liste</Link>
        </Button>
      </div>
    );
  }

  function handleValidate() {
    alert(`Dossier de ${student.name} validé.`);
  }

  function handleReject() {
    if (!rejectReason.trim()) {
      alert("Saisis un motif de rejet.");
      return;
    }
    alert(`Dossier de ${student.name} rejeté : ${rejectReason}`);
    setRejectReason("");
  }

  return (
    <section className="space-y-6">
      <Button asChild variant="outline" className="rounded-2xl">
        <Link to="/admin/students">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la liste
        </Link>
      </Button>

      <SectionTitle
        title={`Dossier — ${student.name}`}
        subtitle="Consulte le détail du dossier étudiant et effectue la validation."
      />

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-6">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Email</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <School className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">École</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.school}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Date d'envoi</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.submittedAt}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Expiration carte</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.cardExpiry}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Statut actuel</p>
                <div className="mt-2">
                  <StatusBadge status={student.status} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Carte étudiante soumise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img src={carte} alt="Carte étudiante" className="h-72 w-full object-cover" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Décision de validation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-500">
              Vérifie que la carte est valide, lisible et correspond aux informations renseignées.
            </p>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Étudiant</p>
              <p className="mt-1 font-semibold">{student.name}</p>
              <p className="text-sm text-slate-500">{student.email}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">École · Expiration</p>
              <p className="mt-1 font-semibold">{student.school}</p>
              <p className="text-sm text-slate-500">{student.cardExpiry}</p>
            </div>
            <Textarea
              className="min-h-[100px] rounded-2xl"
              placeholder="Motif de rejet (obligatoire pour rejeter)"
              value={rejectReason}
              onChange={function (e) { setRejectReason(e.target.value); }}
            />
            <div className="flex flex-col gap-3">
<Button className="w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700" onClick={handleValidate}>
                ✓ Valider le dossier
              </Button>
              <Button variant="destructive" className="w-full rounded-2xl" onClick={handleReject}>
                Rejeter le dossier
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default StudentDetailPage;