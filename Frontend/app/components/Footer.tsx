import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Logo />
          <p className="mt-6 text-[var(--color-silver)] text-sm leading-relaxed">
            The Enterprise Intelligence Layer. Unify knowledge, automate workflows, and deploy intelligent agents across your entire organization.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Platform</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Knowledge Base</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Agent Orchestrator</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Security & Compliance</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">About Us</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Careers</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Blog</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-[var(--color-silver)] hover:text-white transition-colors text-sm">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-silver)] text-sm">
          &copy; {new Date().getFullYear()} CortexAi Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {/* Mock Social Icons */}
          <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">X</div>
          <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">In</div>
          <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center text-white/50 hover:text-white">Gh</div>
        </div>
      </div>
    </footer>
  );
}
