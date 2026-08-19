"use client";

import { Star, CheckCircle, MessageSquareQuote } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { Marquee } from "@/components/ui/marquee";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-cream-50 relative overflow-hidden content-auto">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-florida-powder/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-florida-powder text-florida-darkRose text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Star className="w-3.5 h-3.5 fill-florida-rose text-florida-rose" />
            <span>Впечатления наших гостей</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight">
            Честные отзывы о «Флориде»
          </h2>

          <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed">
            Мы бережно храним каждый отклик и гордимся оценкой 5.0 на независимых картах Иркутска.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-medium text-burgundy">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-rose-100 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Рейтинг 5.0 в <strong>2ГИС</strong></span>
              <span className="text-amber-500">★★★★★</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-rose-100 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Рейтинг 5.0 в <strong>Яндекс Картах</strong></span>
              <span className="text-amber-500">★★★★★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Carousel of Reviews */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:50s] py-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="w-[320px] sm:w-[400px] bg-white rounded-3xl p-6 sm:p-7 border border-rose-100/90 shadow-card-subtle flex flex-col justify-between shrink-0 hover:border-florida-rose/50 transition-colors"
            >
              <div>
                {/* Header: Rating & Source */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cream-100 border border-rose-100 text-[10px] font-semibold text-burgundy-muted">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{review.source}</span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="text-xs text-florida-darkRose font-semibold mb-3 flex items-center gap-1.5">
                  <span>{review.service}</span>
                  {review.master && (
                    <span className="text-burgundy-soft font-normal">
                      · мастер {review.master}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-burgundy/90 leading-relaxed italic relative pl-3 border-l-2 border-florida-powder">
                  «{review.text}»
                </p>
              </div>

              {/* Author & Date */}
              <div className="pt-4 mt-4 border-t border-rose-100 flex items-center justify-between text-xs text-burgundy-muted">
                <span className="font-bold font-serif text-burgundy text-sm">
                  {review.author}
                </span>
                <span className="text-[11px]">{review.date}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
