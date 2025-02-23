import { UsersPrimaryButtons } from "../components/user-primary-button";
import { DashboardBeritaTable } from "./table";

export default function Berita() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">List Berita</h2>
          <p className="text-muted-foreground">
            Daftar berita yang telah dibuat oleh desa
          </p>
        </div>
        <UsersPrimaryButtons title="Tambah Berita" />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DashboardBeritaTable />
      </div>
    </div>
  );
}
