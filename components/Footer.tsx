import Container from "@/components/Container";


export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <Container>
        <div className="py-10 text-sm opacity-80">
          <div className="font-medium opacity-100">Dandylion Strategy</div>
          <div>Clarity that drives growth.</div>
          <div className="mt-3 flex gap-4">
            <a href="mailto:hello@dandylion.co.nz">Email</a>
            <a href="#" className="hover:opacity-80">LinkedIn</a>
          </div>
          <div className="mt-4 opacity-60">
            © {new Date().getFullYear()} Dandylion Strategy
          </div>
        </div>
      </Container>
    </footer>
  );
}
