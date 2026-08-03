export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-10 mt-14">
      <div className="text-gray-400 text-center">
        © {new Date().getFullYear()} Augusto Manuel. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
