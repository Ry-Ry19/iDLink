import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ApplyForID from "./pages/ApplyForID";
import RevalidateID from "./pages/RevalidateID";
import TrackStatus from "./pages/TrackStatus";
import ContractExpiration from "./pages/ContractExpiration";
import ReviewApplication from "./pages/ReviewApplication";
import RecordsManagement from "./pages/RecordsManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<ApplyForID />} />
          <Route path="/revalidate" element={<RevalidateID />} />
          <Route path="/track" element={<TrackStatus />} />
          <Route path="/contract" element={<ContractExpiration />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          
          {/* Employee Routes */}
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          
          {/* Staff Routes */}
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/pending" element={<ReviewApplication />} />
          <Route path="/staff/approved" element={<StaffDashboard />} />
          <Route path="/staff/returned" element={<StaffDashboard />} />
          <Route path="/staff/records" element={<RecordsManagement />} />
          <Route path="/staff/logs" element={<StaffDashboard />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
