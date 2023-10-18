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
  { name: "Dashboard", href: "./dashboard", icon: HomeIcon, current: false },
  { name: "Attendance", href: "attendance", icon: UsersIcon, current: false },
  { name: "Jobs", href: "jobs", icon: FolderIcon, current: false },
  { name: "Payment", href: "payment", icon: CalendarIcon, current: false },
];


export const adminNavigation = [
  { name: "Dashboard", href: "dashboard", icon: HomeIcon, current: false },
  { name: "Add Job", href: "addjob", icon: FolderIcon, current: false },
  { name: "Attendance", href: "attendance", icon: CalendarIcon, current: false },
  { name: "Employees", href: "employee", icon: UserGroupIcon, current: false },
  { name: "Payout", href: "payout", icon: CurrencyRupeeIcon, current: false },
]
