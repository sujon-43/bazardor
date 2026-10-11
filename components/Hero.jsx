import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-green-700 text-sm font-semibold mb-2">আজকের বাজারদর</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            প্রয়োজনীয় পণ্যের দাম এক নজরে
          </h1>
          <p className="text-gray-600 mb-5">
            চাল, ডাল, তেল, সবজি, মাছ ও মাংসসহ নিত্যপ্রয়োজনীয় পণ্যের দৈনিক দাম ও দামের ওঠানামা জানুন।
          </p>
          <a href="#সব-পণ্য" className="btn bg-green-600 text-white hover:bg-green-700">
            সব পণ্য দেখুন
          </a>
        </div>
        <div className="flex justify-center">
          <Image src="/bazar-hero.png" alt="বাজার" width={320} height={260} priority />
        </div>
      </div>
    </section>
  );
}
