import { Link } from 'react-router-dom';
import { Compass, Download } from 'lucide-react';
import { APP_DOWNLOAD_URL } from '@/lib/siteConfig';

export default function UniversityDistrictSavingsGuide() {
  return (
    <div>
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          UW Seattle Guide
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          University District Student <span className="text-uw-purple">Savings Guide</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          Use this UW-focused savings guide to find student discounts across the University District, including The Ave,
          Wallingford, Montlake, Roosevelt, and University Village.
        </p>
        <a
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-uw-purple text-white font-bold text-sm rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
        >
          <Download className="w-4 h-4" />
          Get the Social App
        </a>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-4 h-4 text-uw-purple" />
            <h2 className="text-base font-semibold text-[#1A1A1A]">Neighborhood-by-neighborhood strategy</h2>
          </div>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Plan your routine by area so you can consistently save without changing your schedule.
          </p>
          <ul className="space-y-2 text-sm text-[#6B6B6B] list-disc list-inside">
            <li>
              <strong>The Ave:</strong> Start with daily essentials and frequent food stops.
            </li>
            <li>
              <strong>Wallingford + Roosevelt:</strong> Check for weekly errands and group outings.
            </li>
            <li>
              <strong>Montlake + University Village:</strong> Use for destination visits and higher-ticket purchases.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3">Monthly student savings framework</h2>
          <ul className="space-y-2 text-sm text-[#6B6B6B] list-disc list-inside">
            <li>Week 1: Identify your top three recurring spending categories.</li>
            <li>Week 2: Match each category to active merchants in the app.</li>
            <li>Week 3: Track what you redeemed and adjust your routine.</li>
            <li>Week 4: Repeat and expand into one new area of the U District.</li>
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3">Related guides</h2>
          <div className="space-y-2">
            <Link to="/uw-student-discounts-the-ave" className="block text-sm font-semibold text-uw-purple hover:underline">
              UW Student Discounts on The Ave
            </Link>
            <Link to="/students" className="block text-sm font-semibold text-uw-purple hover:underline">
              Student benefits overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
