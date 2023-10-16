import {
  CalendarIcon,
  CurrencyRupeeIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const workerNavigation = [
  { name: "Dashboard", href: "/worker/dashboard", icon: HomeIcon, current: true },
  { name: "Attendance", href: "/worker/attendance", icon: UsersIcon, current: false },
  { name: "Jobs", href: "/worker/jobs", icon: FolderIcon, current: false },
  { name: "Payment", href: "/worker/payment", icon: CalendarIcon, current: false },
];


export const adminNavigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon, current: true },
  { name: "Add Job", href: "/admin/addjob", icon: FolderIcon, current: false },
  { name: "Attendance", href: "/admin/attendance", icon: CalendarIcon, current: false },
  { name: "Employees", href: "/admin/employee", icon: UserGroupIcon, current: false },
  { name: "Payout", href: "/admin/payout", icon: CurrencyRupeeIcon, current: false },
]
