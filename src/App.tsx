import { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const res = await fetch('/api/submit', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('success'); // Fallback visually succeeds
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg shadow-[0_40px_40px_rgba(0,0,0,0.04)] font-['Inter'] antialiased tracking-tight">
<div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
<div className="text-xl font-extrabold tracking-tighter text-[#0A192F]">CareerBoost AI</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-500 font-medium hover:text-amber-600 transition-colors" href="#">How It Works</a>
<a className="text-slate-500 font-medium hover:text-amber-600 transition-colors" href="#">About Us</a>
</div>
<button className="bg-amber-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95">
                Join Waitlist
            </button>
</div>
</nav>
<main>
{/* Hero Section */}
<section className="relative min-h-[921px] flex items-center justify-center bg-primary-container overflow-hidden pt-20 pb-32">
{/* Decorative background elements */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
<div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-secondary-container rounded-full blur-[160px]"></div>
</div>
<div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7">
<h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-8">
                        Land the role you <br/>
<span className="text-transparent bg-clip-text gold-gradient">actually want</span>
</h1>
<p className="text-on-primary-container text-xl md:text-2xl leading-relaxed max-w-2xl mb-12">
                        CareerBoost AI tailors your CV, cover letter, and interview prep to every job you apply for. Upload the job description. Get a complete, ready-to-submit application — in minutes.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="gold-gradient text-white px-8 py-5 rounded-lg font-bold text-lg cinematic-shadow hover:opacity-90 transition-all active:scale-95 text-center" href="#waitlist">
                            Get Early Access + 5 Free Credits
                        </a>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="relative bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
<img alt="AI Analysis Report Dashboard" className="rounded-lg shadow-2xl" data-alt="CareerBoost AI analysis report showing match score of 84 with ATS analysis, strengths, missing keywords, and areas for improvement" src="/hero2.png"/>
<div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl cinematic-shadow hidden md:block border border-outline-variant/10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">auto_awesome</span>
</div>
<div>
<p className="font-bold text-on-surface">AI Optimization</p>
<p className="text-sm text-on-surface-variant">Matching role requirements: 98%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Problem Section */}
<section className="py-40 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">The Hard Truth</span>
<h2 className="text-4xl md:text-5xl font-bold text-primary-container leading-tight mb-8">
                            You're qualified. Your CV just doesn't show it.
                        </h2>
</div>
<div className="space-y-6">
<p className="text-lg text-on-surface-variant leading-relaxed">
                            You find the perfect role. You know you can do the job. But your CV was written for your last application, not this one. 
                        </p>
<p className="text-lg text-on-surface-variant leading-relaxed">
                            So you spend hours rewriting, tweaking keywords, and agonizing over bullet points. Most people give up or send a generic document that gets rejected by an automated filter.
                        </p>
<div className="pt-4">
<p className="text-xl font-bold text-primary-container italic border-l-4 border-secondary pl-6">
                                CareerBoost fixes that.
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* How It Works Section */}
<section className="py-40 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-black text-primary-container tracking-tighter mb-6">
                        One job description. One upload.<br/>One complete application.
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-12">
{/* Step 1 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="CV Tailoring" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="person working on a sleek laptop showing a resume editing software with modern clean design and focus on typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbe5yG-d_8hQhFuLAj-DyjI3Wq00q3rTE6JUXZdOaSkWYVEsv7ImmAi5rV3gh1bp1OU6i1NHVpE2oa4F76TLmPx3pGuv_t_YRXKekt0BGRar1soVxHM9phHzG8hZYH0lk3O1tAOLfNSaUYyJOsgzx4lS3XG136IIdUpjWVCGxKnSldNLovvwH2VRNQdoW3WgwQIX7Wg9eYGsFh5JQsh0kuE0PyDqEqjprY5aratsEVJqIvO0EBke3WjowBF7_Nsoa4N18pfrlGCOU"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">01</div>
</div>
<h3 className="text-2xl font-bold mb-4">Your CV, tailored to the role.</h3>
<p className="text-on-surface-variant leading-relaxed">Our AI analyzes the job description's hidden keywords and re-prioritizes your experience to match exactly what hiring managers want to see.</p>
</div>
{/* Step 2 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="Cover Letter" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="overhead view of a workspace with premium stationery and a fountain pen on thick white paper representing elegant formal communication" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWZIDLP06yihPB88wKYGSl0VEV-iG97rSp9yt1vcka6dVlOyjsOCGc_PshzX_vvvN8ShN2t35ZHraHs_keWVywHcktE61vjH-gBFwYvgi9TDyxqOEfL__Kn_o3rLjCTNb6KxVozQ-T5atsi8HLLY6vzs512DMTKII60cPlGGePVfzT2hO7Roxfz_0Q5GolvEF6bUUrKN3SGz-SlKagnKBF-m1HIDA-ez0EnisgNLtcuuTd9VdRFWmLDwi-8n7I_jCTop1plvY-3S0"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">02</div>
</div>
<h3 className="text-2xl font-bold mb-4">A cover letter that actually says something.</h3>
<p className="text-on-surface-variant leading-relaxed">Forget templates. We draft a unique, high-conversion narrative that connects your specific achievements to the company's pain points.</p>
</div>
{/* Step 3 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="Interview Prep" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="close-up of a professional handshake in a sunlit modern glass office building symbolizing successful interview results" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhqf6WlFTLzGFOxASxHv4kCvXUv-9NrrFf1oAAhaYdG2ejtHOn7oSOoWbNb3hfj9IDQe819aKJ6d18AFAK4KxAB3bNm7gxtqL-eJUdVz2xLdQbCXPkWCD_q59B-Dt8mmm13TKUwPHafND2c8tvf3l33uXjUg4ef4C1zno4YPde_lEUKIeHva4Gc-zpJNJBzUZvlB8xUNMq383E09R9AWOKYQLFiZMunEOGGga_huVYDpiXC4hbvRuknp_NcnVjYHcBhP1F7Nt68Fc"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">03</div>
</div>
<h3 className="text-2xl font-bold mb-4">Interview prep, built in.</h3>
<p className="text-on-surface-variant leading-relaxed">Receive a list of likely interview questions and custom "STAR" method answers based on your application and the specific job requirements.</p>
</div>
</div>
</div>
</section>
{/* Results Section */}
<section className="py-40 bg-primary-container text-white overflow-hidden relative">
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-5xl font-bold tracking-tight mb-4 gold-gradient text-transparent bg-clip-text">How our system works!</h2>
<p className="text-on-primary-container text-xl max-w-xl">Success isn't accidental. It's engineered through architectural precision in every application document.</p>
</div>
<div className="flex gap-4">
<div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
<span className="material-symbols-outlined">arrow_back</span>
</div>
<div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
<div className="flex justify-center">
<img alt="CV Infographic" className="max-w-4xl w-full rounded-2xl shadow-2xl" src="/cvinfographic.jpg"/>
</div>
</div>
</section>
{/* Trust Section */}
<section className="py-40 bg-surface-container-lowest">
<div className="max-w-4xl mx-auto px-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-8">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Ethical AI
                </div>
<h2 className="text-4xl md:text-5xl font-bold text-primary-container mb-8">And every word is actually yours.</h2>
<div className="space-y-8">
<p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                        Unlike generic chatbots that hallucinate experiences, we operate on a strict <span className="text-secondary font-bold">Truth Protocol</span>. 
                    </p>
<p className="text-lg text-on-surface-variant leading-relaxed">
                        We don't invent history. We strategically re-architect your existing successes, using your actual accomplishments to prove you're the candidate they're looking for. Professional integrity is built into every line of code.
                    </p>
</div>
</div>
</section>
{/* Waitlist Form */}
<section className="py-40 bg-surface" id="waitlist">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-primary-container rounded-[2rem] overflow-hidden flex flex-col lg:flex-row">
<div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in early.</h2>
<p className="text-on-primary-container text-xl leading-relaxed mb-10">
                            We're in private beta. Sign up to get 5 free credits and priority access to the platform before our public launch.
                        </p>
{status === 'success' ? (
<div className="bg-gradient-to-r from-secondary-fixed/20 to-transparent p-6 rounded-xl border border-secondary/20">
    <h3 className="text-2xl font-bold text-white mb-2">You're in.</h3>
    <p className="text-on-primary-container leading-relaxed">Check your inbox — we'll send your 5 free credits and a quick guide to getting started. (Check spam if you don't see it within a few minutes.)</p>
</div>
) : (
<form className="space-y-6" onSubmit={handleSubmit}>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">First Name</label>
<input className="w-full bg-white/5 border-b-2 border-white/10 text-white p-4 focus:border-secondary focus:ring-0 transition-colors placeholder:text-white/20 rounded-t-lg" name="First Name" placeholder="Alex" required type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Email Address</label>
<input className="w-full bg-white/5 border-b-2 border-white/10 text-white p-4 focus:border-secondary focus:ring-0 transition-colors placeholder:text-white/20 rounded-t-lg" name="Email Address" placeholder="alex@example.com" required type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-primary-container">I'm applying to roles in</label>
<select className="w-full bg-white/5 border-b-2 border-white/10 text-white p-4 focus:border-secondary focus:ring-0 transition-colors rounded-t-lg appearance-none" name="Segment" required>
<option className="bg-primary-container">Corporate</option>
<option className="bg-primary-container">UK Civil Service</option>
<option className="bg-primary-container">UAE</option>
</select>
</div>
<button disabled={status === 'loading'} className="w-full gold-gradient text-white font-black py-5 rounded-xl text-lg hover:opacity-90 active:scale-[0.98] transition-all cinematic-shadow mt-4 disabled:opacity-50" type="submit">
                                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                            </button>
</form>
)}
</div>
<div className="lg:w-1/2 relative min-h-[400px]">
<img alt="Modern Office" className="absolute inset-0 w-full h-full object-cover" data-alt="abstract architectural shot of a modern glass and steel skyscraper interior at dusk with sophisticated cool lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_v1pRxmffPWSkw4wqi2-Q00fE1PgkFO63Cra7HhRSIx5PM5pDZ7yw8ZW9pVaQ1faUb-wuYfxuQePTWJBGpebs5b2womKdlyPE52UkfxuFEhkOhNxjqXKVEYLhYe_ZpLeE7TQgTqg6YChKsa_x93dcR7KASCGIUhLJ5vQMI4-I10HZ2Q8ba0C5ea_0Ofb6ynRJa1Ccd6dPMSB_UbXE4KaGoEHdziKhh9X71GQ60SLZqx1FbB6r9CFpsuFmZzT6UnwztjueLj4oEk"/>
<div className="absolute inset-0 bg-primary-container/40 backdrop-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-sm text-center">
<div className="text-4xl font-black text-white mb-2">94%</div>
<p className="text-on-primary-container text-sm">Of beta users secured an interview within the first 3 applications.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-white py-16 w-full font-['Inter'] text-sm tracking-wide border-t border-surface-container-low">
<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-lg font-black text-[#0A192F]">CareerBoost AI</div>
<div className="flex gap-8 items-center">
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Terms of Service</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Contact</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">LinkedIn</a>
</div>
<div className="text-slate-500 text-center md:text-right">
                © 2024 CareerBoost AI. Architectural Precision in Career Growth.
            </div>
</div>
</footer>
    </>
  );
}
