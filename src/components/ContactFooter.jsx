import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <div id="contact" className="relative">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-3xl font-bold">Let’s Plan Your Dream Event</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Tell us about your vision and we’ll craft a bespoke experience that feels uniquely yours.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <p className="flex items-center gap-2"><Mail size={16} /> hello@artculture.events</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +1 (555) 0199-2025</p>
              <p className="flex items-center gap-2"><MapPin size={16} /> 88 Luxury Ave, Suite 12, New York, NY</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full grid place-items-center bg-[#b64d6d]/10 text-[#b64d6d] hover:bg-[#b64d6d]/20"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full grid place-items-center bg-[#b64d6d]/10 text-[#b64d6d] hover:bg-[#b64d6d]/20"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full grid place-items-center bg-[#b64d6d]/10 text-[#b64d6d] hover:bg-[#b64d6d]/20"><Linkedin size={18} /></a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-900/60 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-600 dark:text-zinc-400">Name</label>
                <input className="mt-1 w-full px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-[#b64d6d] outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-zinc-600 dark:text-zinc-400">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-[#b64d6d] outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs text-zinc-600 dark:text-zinc-400">Event Type</label>
                <select className="mt-1 w-full px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-[#b64d6d] outline-none">
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Concert</option>
                  <option>House Warming</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-600 dark:text-zinc-400">Date</label>
                <input type="date" className="mt-1 w-full px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-[#b64d6d] outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-zinc-600 dark:text-zinc-400">Message</label>
                <textarea rows={4} className="mt-1 w-full px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-[#b64d6d] outline-none" placeholder="Tell us more about your event..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#b64d6d] text-white hover:shadow-md transition">Send Inquiry</button>
          </motion.form>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="w-full h-64 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
            <iframe
              title="ArtCulture Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24147.64299363027!2d-73.9968649!3d40.7306107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzUwLjIiTiA3M8KwNTknMzMuMCJX!5e0!3m2!1sen!2sus!4v1689876543210"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <a href="#home" className="font-serif text-xl font-bold"><span className="text-[#b64d6d]">Art</span>Culture</a>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Luxury event planning and management for unforgettable experiences.</p>
          </div>
          <div>
            <p className="font-medium">Quick Links</p>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#home" className="hover:text-[#b64d6d]">Home</a></li>
              <li><a href="#services" className="hover:text-[#b64d6d]">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#b64d6d]">Portfolio</a></li>
              <li><a href="#vendors" className="hover:text-[#b64d6d]">Vendors</a></li>
              <li><a href="#contact" className="hover:text-[#b64d6d]">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Policies</p>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-[#b64d6d]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#b64d6d]">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-[#b64d6d]">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Follow</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full grid place-items-center bg-zinc-100 dark:bg-zinc-800 hover:text-[#b64d6d]"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full grid place-items-center bg-zinc-100 dark:bg-zinc-800 hover:text-[#b64d6d]"><Facebook size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full grid place-items-center bg-zinc-100 dark:bg-zinc-800 hover:text-[#b64d6d]"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-8 text-zinc-500">© 2025 ArtCulture. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
