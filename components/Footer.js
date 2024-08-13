export default function Footer() {
  return (
    <footer className="bg-[#1F2937] py-6">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Raymond Jenkins. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
