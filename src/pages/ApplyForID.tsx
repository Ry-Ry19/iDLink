import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const ApplyForID = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    idType: "",
    department: "",
    studentNumber: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    navigate("/track");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Apply for ID</h1>
            <p className="text-muted-foreground">Fill out the form below to submit your ID application.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Please provide your accurate personal details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle>ID Details</CardTitle>
                <CardDescription>Select your ID type and department/college.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="idType">ID Type *</Label>
                    <Select value={formData.idType} onValueChange={(value) => setFormData({ ...formData, idType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student ID</SelectItem>
                        <SelectItem value="employee">Employee ID</SelectItem>
                        <SelectItem value="faculty">Faculty ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department/College *</Label>
                    <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coe">College of Engineering</SelectItem>
                        <SelectItem value="cas">College of Arts and Sciences</SelectItem>
                        <SelectItem value="cba">College of Business Administration</SelectItem>
                        <SelectItem value="ictc">ICTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentNumber">Student/Employee Number *</Label>
                  <Input
                    id="studentNumber"
                    value={formData.studentNumber}
                    onChange={(e) => setFormData({ ...formData, studentNumber: e.target.value })}
                    placeholder="e.g., 2021-12345"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle>Document Uploads</CardTitle>
                <CardDescription>Upload required documents (max 5MB per file).</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photo">2x2 Photo *</Label>
                  <div className="flex items-center gap-4">
                    <Input id="photo" type="file" accept="image/*" required />
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signature">E-Signature *</Label>
                  <div className="flex items-center gap-4">
                    <Input id="signature" type="file" accept="image/*" required />
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cor">Certificate of Registration (COR)</Label>
                  <div className="flex items-center gap-4">
                    <Input id="cor" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button type="submit" className="gradient-primary text-primary-foreground">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyForID;
