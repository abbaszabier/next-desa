import { UsersPrimaryButtons } from "../components/user-primary-button";
import { DashboardDestinasiTable } from "./table";

export default function Destinasi() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">List Destinasi</h2>
          <p className="text-muted-foreground">
            Daftar destinasi yang telah dibuat oleh desa
          </p>
        </div>
        <UsersPrimaryButtons title="Tambah Destinasi" />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DashboardDestinasiTable />
      </div>
    </div>
  );
}
