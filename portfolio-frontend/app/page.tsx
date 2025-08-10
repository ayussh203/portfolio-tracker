import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Background />
      <Navbar />
      <section className="relative pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pb-24 lg:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
              Track your <span className="text-indigo-400">portfolio</span> like a pro
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Beautiful insights, real-time prices, and a clean dashboard to keep you focused on what matters.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/register" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
                Get Started
              </Link>
              <a href="#features" className="rounded-xl border border-white/15 px-5 py-3 text-slate-200 transition hover:bg-white/5">
                See Features
              </a>
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <div className="aspect-[16/9] w-full rounded-xl bg-[conic-gradient(at_top_right,_#1f2937,_#111827_25%,_#0b1020_50%,_#1f2937_75%,_#0b1020)]"></div>
            </div>
          </div>
        </Container>
      </section>
      <section id="features" className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Real-time prices",
                desc: "Powered by free APIs; always know what your holdings are worth.",
              },
              {
                title: "Clean dashboard",
                desc: "One glance: total value, top performer, and distribution.",
              },
              {
                title: "Secure by design",
                desc: "Modern best-practices with a privacy-first approach.",
              },
            ].map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section id="why" className="py-12">
        <Container>
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-semibold">Why Portfolia?</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              We cut clutter and help you make faster decisions: automatic 5-stock starter portfolio, quantity=1 for quick demos, and later you can bring your real data.
            </p>
          </div>
        </Container>
      </section>
      <section id="faq" className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold">Is there a backend right now?</h3>
              <p className="mt-2 text-slate-300">Not in this build. Auth and data wiring will connect later.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold">Is it mobile-friendly?</h3>
              <p className="mt-2 text-slate-300">Yes, the layout is fully responsive.</p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}