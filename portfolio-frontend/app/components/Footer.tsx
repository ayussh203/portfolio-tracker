import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-slate-400">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Portfolia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}