import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

type StatusType = "submitted" | "under_review" | "approved" | "returned" | "expired";

interface StatusBadgeProps {
  status: StatusType;
  showIcon?: boolean;
}

const statusConfig = {
  submitted: {
    label: "Submitted",
    variant: "default" as const,
    icon: Clock,
    className: "bg-info text-info-foreground",
  },
  under_review: {
    label: "Under Review",
    variant: "default" as const,
    icon: AlertCircle,
    className: "bg-warning text-warning-foreground",
  },
  approved: {
    label: "Approved",
    variant: "default" as const,
    icon: CheckCircle,
    className: "bg-success text-success-foreground",
  },
  returned: {
    label: "Returned",
    variant: "default" as const,
    icon: XCircle,
    className: "bg-destructive text-destructive-foreground",
  },
  expired: {
    label: "Expired",
    variant: "default" as const,
    icon: AlertCircle,
    className: "bg-muted text-muted-foreground",
  },
};

const StatusBadge = ({ status, showIcon = true }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`${config.className} gap-1`}>
      {showIcon && <Icon className="h-3 w-3" />}
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
