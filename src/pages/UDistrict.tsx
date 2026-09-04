import { MapPin, GraduationCap } from 'lucide-react';
import { SITE_NAME } from '@/lib/siteConfig';

const MERCHANTS_ON_THE_AVE = [
  'Maison Blanc Salon',
  'One Bite Cafe',
  "Mama Grande's Cafe",
  'The Dish Cafe',
  'Caravan Halal',
  'Scorpio Cafe',
  'Almanqal Mediterranean Grill',
  'Jewel of India',
];

export default function UDistrict() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-uw-purple flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-uw-gold" />
          </div>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          U-District
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          {`${SITE_NAME} at `}<span className="text-uw-purple">U-District.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          {`The official ${SITE_NAME} hub for U-District. Explore student discounts at Maison Blanc Salon, One Bite Cafe, Mama Grande's Cafe, and other local favorites across The Ave, Wallingford, Montlake, University Village, and Roosevelt.`}
        </p>
      </section>

      {/* The Ave Focus */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-uw-purple" />
            <h2 className="text-base font-semibold text-[#1A1A1A]">
              The Ave, Montlake, Roosevelt, Wallingford, and University Village
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
            {`University Way NE, locally known as "The Ave" or University Way, is the heart of student life near U-District. The Movement is activating student discounts at trusted local businesses like Maison Blanc Salon, One Bite Cafe, and Mama Grande's Cafe, plus growing merchant options across The Ave, Wallingford, Montlake, University Village, and Roosevelt.`}
          </p>

          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9E9E9E] mb-3">
            Merchants on our roadmap
          </h3>
          <div className="flex flex-wrap gap-2">
            {MERCHANTS_ON_THE_AVE.map((name) => (
              <span
                key={name}
                className="text-xs px-3 py-1.5 rounded-full bg-[#F9F9F7] text-[#6B6B6B] border border-[#E8E8E6]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works at U-District */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-5">
          How it works at U-District
        </h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: `Download ${SITE_NAME} Social App`,
              desc: 'Available free on iOS and Android. Sign up with your U-District email to verify your student status.',
            },
            {
              step: '2',
              title: 'Browse The Ave merchants',
              desc: 'See all active and upcoming discounts from local merchants on the 4500 block of University Way NE.',
            },
            {
              step: '3',
              title: 'Show your digital student ID',
              desc: 'Present your in-app student ID at any partner merchant in The Movement network to redeem your discount instantly.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 p-4 rounded-xl border border-[#E8E8E6] hover:border-uw-purple/30 transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-uw-purple/10 flex items-center justify-center text-xs font-bold text-uw-purple shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#1A1A1A] mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

