import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StaffSidebar from "@/components/StaffSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, XCircle, Users } from "lucide-react";

const StaffDashboard = () => {
  const stats = [
    { title: "Pending Applications", value: "24", icon: Clock, color: "text-warning" },
    { title: "Approved Today", value: "18", icon: CheckCircle, color: "text-success" },
    { title: "Returned Applications", value: "5", icon: XCircle, color: "text-destructive" },
    { title: "Total Users", value: "1,248", icon: Users, color: "text-info" },
  ];

  const recentActivity = [
    { id: "APP205", applicant: "Juan Dela Cruz", action: "Submitted", time: "5 mins ago" },
    { id: "APP204", applicant: "Maria Santos", action: "Approved", time: "15 mins ago" },
    { id: "APP203", applicant: "Pedro Garcia", action: "Returned", time: "1 hour ago" },
    { id: "APP202", applicant: "Ana Lopez", action: "Submitted", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn userRole="staff" userName="Admin User" />
      
      <div className="flex flex-1">
        <StaffSidebar />
        
        <main className="flex-1 bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">ICTC Admin Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage ID applications system-wide.</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {stats.map((stat) => (
                <Card key={stat.title} className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-base"
                    >
                      <div>
                        <p className="font-semibold">{activity.id}</p>
                        <p className="text-sm text-muted-foreground">{activity.applicant}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
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

export default StaffDashboard;
