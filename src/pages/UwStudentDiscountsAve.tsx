import { Link } from 'react-router-dom';
import { Download, MapPin } from 'lucide-react';
import { APP_DOWNLOAD_URL, SITE_NAME } from '@/lib/siteConfig';

export default function UwStudentDiscountsAve() {
  return (
    <div>
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          U-District Savings Guide
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          U-District Student Discounts on <span className="text-uw-purple">The Ave</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          Looking for the best U-District student discounts on The Ave? This guide shows you how to find participating
          businesses, verify your student status in the app, and redeem offers in seconds.
        </p>
        <a
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-uw-purple text-white font-bold text-sm rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
        >
          <Download className="w-4 h-4" />
          {`Download ${SITE_NAME} Social App`}
        </a>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3">How to claim discounts as a U-District student</h2>
          <ol className="space-y-3 text-sm text-[#6B6B6B] leading-relaxed list-decimal list-inside">
            <li>Download The Movement Social App and create your student profile.</li>
            <li>Verify your student status with your U-District email.</li>
            <li>Browse active offers and choose your merchant.</li>
            <li>Show your in-app student ID at checkout to redeem instantly.</li>
          </ol>
        </div>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-uw-purple" />
            <h2 className="text-base font-semibold text-[#1A1A1A]">Where to look for deals on The Ave</h2>
          </div>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Start around University Way NE, then branch into nearby streets in the U District. New offers are added as
            local businesses join, so check the app regularly for updates.
          </p>
          <ul className="space-y-2 text-sm text-[#6B6B6B] list-disc list-inside">
            <li>Coffee and quick bites between classes</li>
            <li>Casual dining spots popular with U-District students</li>
            <li>Service businesses and neighborhood essentials</li>
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="rounded-xl border border-[#E8E8E6] p-6 sm:p-8">
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3">How to maximize savings every week</h2>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Build a weekly routine around the businesses you already use. Even small discounts stack quickly over a
            quarter.
          </p>
          <ul className="space-y-2 text-sm text-[#6B6B6B] list-disc list-inside mb-5">
            <li>Check the app before meals or study breaks.</li>
            <li>Prioritize merchants you visit multiple times per week.</li>
            <li>Share offers with roommates and classmates to support local shops together.</li>
          </ul>
          <Link to="/u-district" className="text-sm font-semibold text-uw-purple hover:underline">
            Back to the U-District hub
          </Link>
        </div>
      </section>
    </div>
  );
}


