import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Store, Mail, MapPin, Phone, Tag, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button }    from "../ui/button";
import { Textarea }  from "../ui/textarea";
import StatusBadge   from "../StatusBadge";
import SectionTitle  from "../SectionTitle";
import { merchants } from "../data/mockData";

function MerchantDetailPage() {
  const { id } = useParams();
  const [rejectReason, setRejectReason] = useState("");

  const merchant = merchants.find(function (m) {
    return m.id === Number(id);
  });

  if (!merchant) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-slate-700">Commerçant introuvable</p>
        <p className="mt-1 text-sm text-slate-400">
          L'identifiant {id} ne correspond à aucun dossier commerçant.
        </p>
        <Button asChild className="mt-6 rounded-2xl" variant="outline">
          <Link to="/admin/merchants">← Retour à la liste</Link>
        </Button>
      </div>
    );
  }

  function handleValidate() {
    alert(`Candidature de "${merchant.name}" validée.`);
  }

  function handleReject() {
    if (!rejectReason.trim()) {
      alert("Saisis un motif de refus.");
      return;
    }
    alert(`Candidature de "${merchant.name}" refusée : ${rejectReason}`);
    setRejectReason("");
  }

  return (
    <section className="space-y-6">
      <Button asChild variant="outline" className="rounded-2xl">
        <Link to="/admin/merchants">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la liste
        </Link>
      </Button>

      <SectionTitle
        title={`Dossier commerçant — ${merchant.name}`}
        subtitle="Consulte les informations du commerce et valide ou refuse la candidature."
      />

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Informations du commerce</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Store className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Nom</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Tag className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Catégorie</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.category}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Ville</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Téléphone</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.phone || "Non renseigné"}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Email</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.email || "Non renseigné"}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Adresse</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{merchant.address || "Non renseignée"}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Description</p>
                  <p className="mt-1 text-sm text-slate-700">{merchant.description || "Aucune description."}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Statut actuel</p>
              <div className="mt-2">
                <StatusBadge status={merchant.status} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Décision de validation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-500">
              Vérifie les informations avant de valider le partenariat.
            </p>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Commerce</p>
              <p className="mt-1 font-semibold">{merchant.name}</p>
              <p className="text-sm text-slate-500">{merchant.email}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Catégorie · Ville</p>
              <p className="mt-1 font-semibold">{merchant.category}</p>
              <p className="text-sm text-slate-500">{merchant.city}</p>
            </div>
            <Textarea
              className="min-h-[100px] rounded-2xl"
              placeholder="Motif de refus (obligatoire pour refuser)"
              value={rejectReason}
              onChange={function (e) { setRejectReason(e.target.value); }}
            />
            <div className="flex flex-col gap-3">
<Button className="w-full rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700" onClick={handleValidate}>
                ✓ Valider la candidature
              </Button>
              <Button variant="destructive" className="w-full rounded-2xl" onClick={handleReject}>
                Refuser la candidature
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default MerchantDetailPage;