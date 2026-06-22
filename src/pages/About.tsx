import { Target, Users, TrendingUp, Heart } from 'lucide-react';
import { useState } from 'react';
import { SITE_NAME } from '@/lib/siteConfig';

const VALUES = [
      {
    icon: Target,
    title: 'Our Mission',
    description:
      `${SITE_NAME} connects college students with exclusive discounts from local merchants through our social app. Every offer on this hub is only redeemable via the app — creating a verified, win-win ecosystem that drives foot traffic to businesses while helping students save.`,
  },
  {
    icon: Users,
    title: 'For Students',
    description:
      `${SITE_NAME} app is the only way to verify your student status and claim the merchant offers listed on this hub. Download the app, verify your enrollment, and unlock exclusive discounts at merchants on The Ave instantly.`,
  },
  {
    icon: TrendingUp,
    title: 'For Merchants',
    description:
      `Local businesses gain access to a loyal, engaged customer base of thousands of college students through ${SITE_NAME} app. No upfront costs, no complicated setup — just activate your discount and watch verified student foot traffic grow.`,
  },
  {
    icon: Heart,
    title: 'Community First',
    description:
      `We are building more than a discount platform. ${SITE_NAME} strengthens the bond between students and their local community, keeping dollars circulating within the neighborhoods that matter most — all through a single, trusted app.`,
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const HOW_ITEMS = [
    {
      title: 'Earn by posting',
      content:
        'Users earn by creating and sharing content such as photos, videos, status updates and blogs. Earnings accumulate daily and are deposited to the user balance.',
    },
    {
      title: 'Earn by selling & sharing',
      content:
        'Sell products or provide services to earn currency on the platform; buyers and sellers can transact peer-to-peer within the marketplace.',
    },
    {
      title: 'Earn by transporting',
      content:
        'Transporters earn for picking up and delivering items bought or shared through the platform, creating flexible local work opportunities.',
    },
    {
      title: 'Platform roles',
      content:
        'Engineers, educators, moderators and arbitrators are paid with platform currency for their contributions; many operational roles are crowdsourced to users.',
    },
    {
      title: 'Use & cash out',
      content:
        'Users can spend currency in the marketplace, redeem discounts at local merchants, or withdraw funds to more than 100 fiat currencies.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          {`About ${SITE_NAME}`}
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          Building bridges between <span className="text-uw-purple">students</span> and <span className="text-uw-purple">local business.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto">
          {`${SITE_NAME} is a student discount activation platform. Every offer on this hub is exclusively available and redeemable through the ${SITE_NAME} app — the only way to verify your student status and claim these deals.`}
        </p>
      </section>

      {/* Media & Resources: images, logos, patents */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-20">
        <div className="rounded-2xl p-6 sm:p-8 border border-[#E8E8E6]">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">Media & Resources</h2>

          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">Graphics and resources referenced from the Movement QA site.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold mb-2">Product components</h4>
              <img src="https://qa.movement.college/Theme/FrontPage/Images/section-3-full-image.webp" alt="Product components" className="w-full rounded-md shadow-sm" />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Industry references</h4>
              <div className="flex gap-3 items-center">
                <img src="https://qa.movement.college/Theme/FrontPage/Images/brand1.webp" alt="Brand 1" className="w-24 h-12 object-contain" />
                <img src="https://qa.movement.college/Theme/FrontPage/Images/brand2.webp" alt="Brand 2" className="w-24 h-12 object-contain" />
              </div>
            </div>
          </div>

          <h4 className="text-sm font-semibold mb-2">Patents & Technical Links</h4>
          <ul className="list-disc list-inside text-xs text-[#6B6B6B] mb-4">
            <li><a href="https://patents.google.com/patent/US20060276171" className="underline text-uw-purple">US20060276171 — Virtual currency</a></li>
            <li><a href="https://www.google.com/patents/CA2621108A1" className="underline text-uw-purple">CA2621108A1 — Applications in social networks / transactions</a></li>
          </ul>

          <h4 className="text-sm font-semibold mb-2">Video & Media</h4>
          <p className="text-xs text-[#6B6B6B] leading-relaxed mb-3">No video file was publicly linked on the QA front page. If you provide a video URL (YouTube, Vimeo, or MP4), I can embed it here. For now, here's a link to the QA site media:</p>
          <a href="https://qa.movement.college/" target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-uw-purple underline">Open Movement QA site media</a>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-[#E8E8E6] p-6 hover:border-uw-purple/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-uw-purple/10 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-uw-purple" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{v.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-uw-purple">8</p>
              <p className="text-[11px] text-[#9E9E9E] mt-1">Merchants on The Ave</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-uw-purple">3</p>
              <p className="text-[11px] text-[#9E9E9E] mt-1">Active partners</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-uw-purple">1</p>
              <p className="text-[11px] text-[#9E9E9E] mt-1">Campus — UofW</p>
            </div>
          </div>
        </div>
      </section>
      {/* How it Works (Accordion) */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="rounded-2xl p-6 sm:p-8 border border-[#E8E8E6]">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">How it Works</h2>

          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Each day, users learn how much they earned from all their activities, with their funds deposited in their account balance. Below are the main ways users earn and use currency on the platform.
          </p>

          <div className="space-y-3">
            {HOW_ITEMS.map((item, idx) => (
              <div key={item.title} className="border border-[#E8E8E6] rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#FBFBFB]"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-sm font-semibold text-[#1A1A1A]">{item.title}</span>
                  <span className="text-uw-purple text-lg">{openIndex === idx ? '−' : '+'}</span>
                </button>

                <div className={`${openIndex === idx ? 'block' : 'hidden'} px-4 pb-4 text-sm text-[#6B6B6B]`}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* External: Welcome to the Movement (copied from qa.movement.college) */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-20">
        <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Welcome to the all-new Movement</h2>

        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
          The Movement is a collaboration between technologists and top economists and political scientists. It is the world's first fully-integrated social network, cryptocurrency and transactions-infused marketplace, crowdsourced worker, transportation, education, judicial and political system — uniquely of the people, by the people, for the people.
        </p>

        <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">Help launch a groundbreaking social platform</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
          Imagine a vastly-improved Facebook seamlessly integrated with a modernized eBay, Uber and stable Bitcoin. The Movement prioritizes people over profits and is built to fight income inequality and climate change while empowering small businesses with technology, tools and customers.
        </p>

        <div className="my-6">
          <img src="https://qa.movement.college/Theme/FrontPage/Images/section-3-full-image.webp" alt="Movement feature" className="w-full rounded-lg shadow-sm" />
        </div>

        <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">A currency powering a new global economy</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
          The Movement invented virtual currency and has built widely tested product features that enable users to earn by posting, selling, sharing, transporting goods, and performing work for the platform. Users can spend currency in a peer-to-peer marketplace or cash out to more than 100 currencies.
        </p>

        <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">Built on innovation</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
          The Movement's inventions are referenced across the industry and the project was designed and built by engineers and product leaders with deep experience across technology, economics and public policy.
        </p>

        <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">About the Movement</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">
          The Movement's mission is to empower people by enabling opportunity, hope and influence. It aims to achieve this mission using a transformative economy that helps people earn, shop and socialize while making local communities stronger.
        </p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Interested in getting involved? Reach out at <a href="mailto:jon.waite@sales.movement.college" className="underline text-uw-purple">jon.waite@sales.movement.college</a> to learn about territory ownership, campus roles, merchant participation, and student opportunities.
        </p>
      </section>
    </div>
  );
}
