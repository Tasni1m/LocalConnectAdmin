import { Trash2, Search, MapPin, ArrowUpDown } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import SectionTitle from "../ui/SectionTitle";
import { reviews } from "../data/mockData";

function ReviewsPage() {
  return (
    <section id="reviews" className="space-y-6">
      <SectionTitle
        title="Modération du contenu"
        subtitle="Surveille les avis publiés et supprime ceux qui posent problème."
      />

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par pseudo ou par mots-clés"
              className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select className="w-full appearance-none rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none">
              <option>Tous les lieux</option>
              <option>Genève</option>
              <option>Carouge</option>
              <option>Lausanne</option>
            </select>
          </div>

          <div className="relative">
            <ArrowUpDown className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select className="w-full appearance-none rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none">
              <option>Trier par date</option>
              <option>Plus récent</option>
              <option>Plus ancien</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {reviews.map(function (review) {
          return (
            <Card
              key={review.id}
              className="overflow-hidden rounded-3xl border-0 shadow-sm"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={review.photo}
                  alt={review.merchant}
                  className="h-full w-full object-cover"
                />
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-slate-500">{review.merchant}</p>
                  </div>
                  <Badge className="rounded-full">{review.rating} / 5</Badge>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    Genève
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    12.03.2026
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {review.text}
                </p>

                <Button
                  variant="destructive"
                  className="mt-5 w-full rounded-2xl"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Supprimer l'avis
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ReviewsPage;