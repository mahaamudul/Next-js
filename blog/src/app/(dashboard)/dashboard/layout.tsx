export default function DashboardLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-cols-12">
      <aside className="col-span-3 bg-slate-900 text-white p-6">
        Sidebar
      </aside>

      <main className="col-span-9 p-6">
        {children}
      </main>
    </div>
  );
}