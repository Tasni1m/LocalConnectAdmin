import { useState } from "react";
import { Trash2, Search, MapPin, ArrowUpDown } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button }   from "../ui/button";
import { Badge }    from "../ui/badge";
import SectionTitle from "../SectionTitle";
import { reviews }  from "../data/mockData";

function ReviewsPage() {
  const [search, setSearch]     = useState("");
  const [cityFilter, setCity]   = useState("all");
  const [sortOrder, setSort]    = useState("recent");

  const filtered = reviews
    .filter(function (r) {
      const matchSearch = r.author.toLowerCase().includes(search.toLowerCase()) ||
                          r.text.toLowerCase().includes(search.toLowerCase());
      const matchCity   = cityFilter === "all" || r.city === cityFilter;
      return matchSearch && matchCity;
    })
    .sort(function (a, b) {
      if (sortOrder === "recent") return b.id - a.id;
      return a.id - b.id;
    });

  return (
    <section id="reviews" className="space-y-6">
      <SectionTitle
        title="Modération du contenu"
        subtitle="Surveille les avis publiés et supprime ceux qui posent problème."
      />

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par pseudo ou par mots-clés"
              value={search}
              onChange={function (e) { setSearch(e.target.value); }}
              className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-500"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={cityFilter}
              onChange={function (e) { setCity(e.target.value); }}
              className="w-full appearance-none rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-500"
            >
              <option value="all">Tous les lieux</option>
              <option value="Genève">Genève</option>
              <option value="Carouge">Carouge</option>
            </select>
          </div>

          <div className="relative">
            <ArrowUpDown className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={sortOrder}
              onChange={function (e) { setSort(e.target.value); }}
              className="w-full appearance-none rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-500"
            >
              <option value="recent">Plus récent</option>
              <option value="oldest">Plus ancien</option>
            </select>
          </div>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-sm text-slate-400">
          Aucun avis ne correspond à ta recherche.
        </p>
      )}

      <div className="grid grid-cols-3 gap-4">
        {filtered.map(function (review) {
          return (
            <Card key={review.id} className="overflow-hidden rounded-3xl border-0 shadow-sm">
              <div className="h-48 w-full overflow-hidden bg-slate-100">
                <img src={review.photo} alt={review.merchant} className="h-full w-full object-cover" />
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
                    {review.city}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {review.date}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{review.text}</p>
                <Button variant="destructive" className="mt-5 w-full rounded-2xl">
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