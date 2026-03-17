import { Trash2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

import SectionTitle from "../ui/SectionTitle";

function ReviewsPage(props) {
  return (
    <section id="reviews">
      <SectionTitle
        title="Modération du contenu"
        subtitle="Surveille les avis publiés et supprime ceux qui posent problème."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {props.reviews.map(function (review) {
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