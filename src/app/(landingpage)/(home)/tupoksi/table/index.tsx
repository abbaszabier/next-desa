"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Tupoksi[] = [
  {
    id: "1",
    jabatan: "Kepala Desa",
    tugas:
      "Memimpin penyelenggaraan pemerintahan desa, pembangunan, pembinaan kemasyarakatan, dan pemberdayaan masyarakat desa.",
    fungsi:
      "Mengkoordinasikan seluruh perangkat desa dalam menjalankan tugas pemerintahan dan pembangunan.",
  },
  {
    id: "2",
    jabatan: "Sekretaris Desa",
    tugas:
      "Membantu Kepala Desa dalam bidang administrasi pemerintahan desa serta mengkoordinasikan pelaksanaan tugas perangkat desa lainnya.",
    fungsi:
      "Mengelola administrasi desa dan menyusun laporan penyelenggaraan pemerintahan desa.",
  },
  {
    id: "3",
    jabatan: "Bendahara Desa",
    tugas:
      "Mengelola keuangan desa, termasuk penerimaan, penyimpanan, pengeluaran, dan pertanggungjawaban keuangan desa.",
    fungsi:
      "Menjaga transparansi dan akuntabilitas dalam pengelolaan anggaran desa.",
  },
  {
    id: "4",
    jabatan: "Kasi Pemerintahan",
    tugas:
      "Melaksanakan urusan pemerintahan, ketertiban, dan pelayanan administrasi di desa.",
    fungsi:
      "Membantu Kepala Desa dalam penyelenggaraan pemerintahan desa serta ketertiban umum.",
  },
  {
    id: "5",
    jabatan: "Kasi Pelayanan",
    tugas:
      "Menyelenggarakan pelayanan kepada masyarakat dalam berbagai bidang sesuai dengan tugasnya.",
    fungsi:
      "Menjamin terselenggaranya pelayanan publik yang efektif dan efisien.",
  },
];

export type Tupoksi = {
  id: string;
  jabatan: string;
  tugas: string;
  fungsi: string;
};

export const columns: ColumnDef<Tupoksi>[] = [
  {
    accessorKey: "jabatan",
    header: "Jabatan",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("jabatan")}</div>
    ),
  },
  {
    accessorKey: "tugas",
    header: "Tugas dan Fungsi",
    cell: ({ row }) => <div>{row.getValue("tugas")}</div>,
  },
  {
    accessorKey: "fungsi",
    header: "Fungsi",
    cell: ({ row }) => <div>{row.getValue("fungsi")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tupoksi = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(tupoksi.jabatan)}
            >
              Copy Jabatan
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function TupoksiTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter jabatan..."
          value={(table.getColumn("jabatan")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("jabatan")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
