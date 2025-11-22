import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StaffSidebar from "@/components/StaffSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatusBadge from "@/components/StatusBadge";
import { Search, Edit, Trash2 } from "lucide-react";

const RecordsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const records = [
    { id: "APP001", name: "Juan Dela Cruz", idNumber: "2021-12345", department: "Engineering", status: "approved" as const, date: "2024-01-15" },
    { id: "APP002", name: "Maria Santos", idNumber: "2021-54321", department: "Arts & Sciences", status: "approved" as const, date: "2024-01-14" },
    { id: "APP003", name: "Pedro Garcia", idNumber: "2021-11111", department: "Business Admin", status: "under_review" as const, date: "2024-01-13" },
    { id: "APP004", name: "Ana Lopez", idNumber: "2021-22222", department: "Engineering", status: "submitted" as const, date: "2024-01-12" },
    { id: "APP005", name: "Carlos Reyes", idNumber: "2021-33333", department: "ICTC", status: "returned" as const, date: "2024-01-11" },
  ];

  const filteredRecords = records.filter((record) => {
    const matchesSearch = 
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.idNumber.includes(searchTerm) ||
      record.id.includes(searchTerm);
    const matchesFilter = filterStatus === "all" || record.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn userRole="staff" userName="Admin User" />
      
      <div className="flex flex-1">
        <StaffSidebar />
        
        <main className="flex-1 bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Manage Records</h1>
              <p className="text-muted-foreground">Search, filter, and manage all ID application records.</p>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>All Records</CardTitle>
                <CardDescription>Comprehensive list of all ID applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, ID number, or application ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="returned">Returned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>App ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>ID Number</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRecords.map((record) => (
                        <TableRow key={record.id} className="hover:bg-muted/30">
                          <TableCell className="font-medium">{record.id}</TableCell>
                          <TableCell>{record.name}</TableCell>
                          <TableCell>{record.idNumber}</TableCell>
                          <TableCell>{record.department}</TableCell>
                          <TableCell>
                            <StatusBadge status={record.status} />
                          </TableCell>
                          <TableCell>{record.date}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  Showing {filteredRecords.length} of {records.length} records
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RecordsManagement;
