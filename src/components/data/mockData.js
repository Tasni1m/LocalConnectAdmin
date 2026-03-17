import { Users, Store, Ticket, ShieldCheck } from "lucide-react";

export const kpis = [
  { label: "Étudiants inscrits", value: "2 486", delta: "+12%", icon: Users },
  { label: "Commerçants partenaires", value: "138", delta: "+6%", icon: Store },
  { label: "Promos utilisées", value: "18 920", delta: "+24%", icon: Ticket },
  { label: "Avis à modérer", value: "17", delta: "-8%", icon: ShieldCheck },
];

export const students = [
  {
    id: 1,
    name: "Lina Dupont",
    email: "lina.dupont@etu.unige.ch",
    school: "UNIGE",
    submittedAt: "2026-03-12",
    status: "pending",
    cardExpiry: "2026-09-30",
  },
  {
    id: 2,
    name: "Noah Martin",
    email: "noah.martin@hesge.ch",
    school: "HES-SO",
    submittedAt: "2026-03-11",
    status: "validated",
    cardExpiry: "2026-08-31",
  },
];

export const merchants = [
  {
    id: 1,
    name: "Café Rhône",
    category: "Food",
    status: "active",
    city: "Genève",
    offers: 3,
    rating: 4.7,
  },
  {
    id: 2,
    name: "UrbanFit Club",
    category: "Sport",
    status: "inactive",
    city: "Carouge",
    offers: 2,
    rating: 4.3,
  },
];

export const reviews = [
  {
    id: 1,
    author: "Sami",
    merchant: "Café Rhône",
    rating: 5,
    text: "Top, promo bien appliquée et équipe sympa.",
    photo: "https://via.placeholder.com/400x250?text=Avis+1",
  },
];

export const categories = ["Food", "Mode", "Tech", "Sport", "Culture"];

export const admins = [
  { id: 1, name: "Admin Principal", email: "admin@localconnect.ch", role: "Super Admin" },
];