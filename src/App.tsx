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
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg shadow-[0_40px_40px_rgba(0,0,0,0.04)] font-['Inter'] antialiased tracking-tight">
<div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
<div className="text-xl font-extrabold tracking-tighter text-[#0A192F]">Applica</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-500 font-medium hover:text-amber-600 transition-colors" href="#">How It Works</a>
</div>
<a href="#waitlist" className="bg-amber-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95 inline-block text-center">
                Join Waitlist
            </a>
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
                        We believe you deserve the job <br/>
<span className="text-transparent bg-clip-text gold-gradient">you're qualified for</span>
</h1>
<p className="text-on-primary-container text-xl md:text-2xl leading-relaxed max-w-2xl mb-12">
                        You have the right skills and experience, but generic CVs get filtered out. We believe you should have the absolute best opportunity to land the role you actually want.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="gold-gradient text-white px-8 py-5 rounded-lg font-bold text-lg cinematic-shadow hover:opacity-90 transition-all active:scale-95 text-center" href="#waitlist">
                            Sign up now for early access
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
{/* The How Section */}
<section className="py-40 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Our Approach</span>
<h2 className="text-4xl md:text-5xl font-bold text-primary-container leading-tight mb-8">
                            We make your experience speak their language.
                        </h2>
</div>
<div className="space-y-6">
<p className="text-lg text-on-surface-variant leading-relaxed">
                            Our system reads the job description and maps your real accomplishments to the employer's specific requirements — surfacing the right experience, placing the right keywords, and formatting everything so it gets past automated filters cleanly.
                        </p>
<p className="text-lg text-on-surface-variant leading-relaxed">
                            And it never fabricates. Everything in your tailored application is drawn from what you've actually done.
                        </p>
<div className="pt-4">
<p className="text-xl font-bold text-primary-container italic border-l-4 border-secondary pl-6">
                                Your career, sharper focus.
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* The What Section */}
<section className="py-40 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-black text-primary-container tracking-tighter mb-6">
                        Your complete, tailored application.<br/>In minutes.
                    </h2>
</div>
<div className="grid md:grid-cols-2 gap-12">
{/* Step 1 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="CV Tailoring" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="person working on a sleek laptop showing a resume editing software with modern clean design and focus on typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbe5yG-d_8hQhFuLAj-DyjI3Wq00q3rTE6JUXZdOaSkWYVEsv7ImmAi5rV3gh1bp1OU6i1NHVpE2oa4F76TLmPx3pGuv_t_YRXKekt0BGRar1soVxHM9phHzG8hZYH0lk3O1tAOLfNSaUYyJOsgzx4lS3XG136IIdUpjWVCGxKnSldNLovvwH2VRNQdoW3WgwQIX7Wg9eYGsFh5JQsh0kuE0PyDqEqjprY5aratsEVJqIvO0EBke3WjowBF7_Nsoa4N18pfrlGCOU"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">01</div>
</div>
<h3 className="text-2xl font-bold mb-4">Tailored CV</h3>
<p className="text-on-surface-variant leading-relaxed">Upload the job description and your CV. We restructure it around exactly what that employer is looking for — right experience surfaced, right keywords in place, ATS-ready.</p>
</div>
{/* Step 2 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="Cover Letter" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="overhead view of a workspace with premium stationery and a fountain pen on thick white paper representing elegant formal communication" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWZIDLP06yihPB88wKYGSl0VEV-iG97rSp9yt1vcka6dVlOyjsOCGc_PshzX_vvvN8ShN2t35ZHraHs_keWVywHcktE61vjH-gBFwYvgi9TDyxqOEfL__Kn_o3rLjCTNb6KxVozQ-T5atsi8HLLY6vzs512DMTKII60cPlGGePVfzT2hO7Roxfz_0Q5GolvEF6bUUrKN3SGz-SlKagnKBF-m1HIDA-ez0EnisgNLtcuuTd9VdRFWmLDwi-8n7I_jCTop1plvY-3S0"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">02</div>
</div>
<h3 className="text-2xl font-bold mb-4">Cover Letter That Connects</h3>
<p className="text-on-surface-variant leading-relaxed">Not a template with your name swapped in. A letter that links what you've done to what this role needs — in a tone that sounds like you wrote it on a good day.</p>
</div>
{/* Step 3 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<img alt="Interview Questions" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="close-up of a professional handshake in a sunlit modern glass office building symbolizing successful interview results" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhqf6WlFTLzGFOxASxHv4kCvXUv-9NrrFf1oAAhaYdG2ejtHOn7oSOoWbNb3hfj9IDQe819aKJ6d18AFAK4KxAB3bNm7gxtqL-eJUdVz2xLdQbCXPkWCD_q59B-Dt8mmm13TKUwPHafND2c8tvf3l33uXjUg4ef4C1zno4YPde_lEUKIeHva4Gc-zpJNJBzUZvlB8xUNMq383E09R9AWOKYQLFiZMunEOGGga_huVYDpiXC4hbvRuknp_NcnVjYHcBhP1F7Nt68Fc"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">03</div>
</div>
<h3 className="text-2xl font-bold mb-4">Interview Questions & Answers</h3>
<p className="text-on-surface-variant leading-relaxed">Get the questions they're likely to ask — drawn from the job description, not a generic list. Each comes with a structured answer built from your actual experience.</p>
</div>
{/* Step 4 */}
<div className="group">
<div className="h-64 mb-8 bg-surface-container-low rounded-2xl overflow-hidden relative border border-outline-variant/10 transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary-container/40 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl text-white/60">mic</span>
</div>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary-container">04</div>
</div>
<h3 className="text-2xl font-bold mb-4">Live Interview Simulation</h3>
<p className="text-on-surface-variant leading-relaxed">Practice with a voice-based mock interview tailored to the role. Rehearse your answers out loud so you walk in confident, not improvising on the day.</p>
</div>
</div>
</div>
</section>
{/* Waitlist Form */}
<section className="py-40 bg-surface" id="waitlist">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-primary-container rounded-[2rem] overflow-hidden flex flex-col lg:flex-row">
<div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Sign up now for early access.</h2>
<p className="text-on-primary-container text-xl leading-relaxed mb-10">
                            We believe in what we've built. Join the waitlist today to get priority access and ensure you have the best opportunity to get the job you want.
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
<option className="bg-primary-container">UAE / GCC</option>
</select>
</div>
<button disabled={status === 'loading'} className="w-full gold-gradient text-white font-black py-5 rounded-xl text-lg hover:opacity-90 active:scale-[0.98] transition-all cinematic-shadow mt-4 disabled:opacity-50" type="submit">
                                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                            </button>
                            {status === 'error' && (
                              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                            )}
</form>
)}
</div>
<div className="lg:w-1/2 relative min-h-[400px]">
<img alt="Modern Office" className="absolute inset-0 w-full h-full object-cover" data-alt="abstract architectural shot of a modern glass and steel skyscraper interior at dusk with sophisticated cool lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_v1pRxmffPWSkw4wqi2-Q00fE1PgkFO63Cra7HhRSIx5PM5pDZ7yw8ZW9pVaQ1faUb-wuYfxuQePTWJBGpebs5b2womKdlyPE52UkfxuFEhkOhNxjqXKVEYLhYe_ZpLeE7TQgTqg6YChKsa_x93dcR7KASCGIUhLJ5vQMI4-I10HZ2Q8ba0C5ea_0Ofb6ynRJa1Ccd6dPMSB_UbXE4KaGoEHdziKhh9X71GQ60SLZqx1FbB6r9CFpsuFmZzT6UnwztjueLj4oEk"/>
<div className="absolute inset-0 bg-primary-container/40 backdrop-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-sm text-center">
<h3 className="text-2xl font-black text-white mb-4 leading-tight">Your dream role isn't out of reach.</h3>
<p className="text-on-primary-container text-sm">It's just waiting for the right application.</p>
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
<div className="text-lg font-black text-[#0A192F]">Applica</div>
<div className="flex gap-8 items-center">
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Terms of Service</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">Contact</a>
<a className="text-slate-500 hover:text-amber-500 underline-offset-4 hover:underline transition-all duration-200" href="#">LinkedIn</a>
</div>
<div className="text-slate-500 text-center md:text-right">
                © 2026 Applica. Get Hired Honestly.
            </div>
</div>
</footer>
    </>
  );
}
