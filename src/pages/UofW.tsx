import { MapPin, GraduationCap, Download } from 'lucide-react';
import { SITE_NAME, APP_DOWNLOAD_URL } from '@/lib/siteConfig';

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

export default function UofW() {
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
          UofW
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          {`The ${SITE_NAME} at `}<span className="text-uw-purple">UofW.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          {`The official ${SITE_NAME} hub for UofW. Exclusive student discounts activated by The Movement in the UofW University District - The Ave, Wallingford, Montlake, University Village, and Roosevelt.`}
        </p>
        <a
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-uw-purple text-white font-bold text-sm rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
        >
          <Download className="w-4 h-4" />
          {`Download the ${SITE_NAME} App`}
        </a>
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
            {`University Way NE, locally known as "The Ave" or University Way, is the heart of student life near UofW. The UofW University District includes The Ave, Wallingford, Montlake, University Village, and Roosevelt, and The Movement is activating merchants across the area to offer exclusive discounts to UofW student ID holders.`}
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

      {/* How it works at UofW */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-5">
          How it works at UofW
        </h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: `Download the ${SITE_NAME} App`,
              desc: 'Available free on iOS and Android. Sign up with your UofW email to verify your student status.',
            },
            {
              step: '2',
              title: 'Browse The Ave merchants',
              desc: 'See all active and upcoming discounts from local merchants on the 4500 block of University Way NE.',
            },
            {
              step: '3',
              title: 'Show your digital student ID',
              desc: 'Present your in-app student ID at any Movement partner merchant to redeem your discount instantly.',
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
