import { Users, Store, Ticket, ShieldCheck } from "lucide-react";
import cafeParis from "../../assets/cafeParis.jpg"; 

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
    lastSessionDate: "13.02.2026",
    cardExpiry: "2026-09-30",
  },
  {
    id: 2,
    name: "Noah Martin",
    email: "noah.martin@hesge.ch",
    school: "HES-SO",
    submittedAt: "2026-03-11",
    status: "validated",
    lastSessionDate: "03.02.2025",
    cardExpiry: "2026-08-31",
  },
];
export const merchantRequests = [
  {
    id: 1,
    name: "Boulangerie du Centre",
    category: "Food",
    city: "Genève",
    email: "contact@boulangerie-centre.ch",
    status: "pending",
  },
  {
    id: 2,
    name: "FitZone Studio",
    category: "Sport",
    city: "Carouge",
    email: "hello@fitzone.ch",
    status: "pending",
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
    email: "contact@caferhone.ch",
    phone: "+41 22 111 22 33",
    address: "Rue du Rhône 15, 1204 Genève",
    description:
      "Café partenaire proposant des réductions étudiantes sur certaines boissons et menus.",
    photo:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "UrbanFit Club",
    category: "Sport",
    status: "inactive",
    city: "Carouge",
    offers: 2,
    rating: 4.3,
    email: "info@urbanfit.ch",
    phone: "+41 22 444 55 66",
    address: "Route de Saint-Julien 8, 1227 Carouge",
    description:
      "Salle de sport locale souhaitant développer les abonnements étudiants.",
    photo:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
];

export const reviews = [
  {
    id: 1,
    author: "Sami",
    merchant: "Café Rhône",
    rating: 5,
    text: "Top, promo bien appliquée et équipe sympa.",
    city: "Genève",    
    date: "12.03.2026",
    photo: cafeParis,
  },
];

export const categories = ["Food", "Mode", "Tech", "Sport", "Culture"];

export const admins = [
  { id: 1, name: "Admin Principal", email: "admin@localconnect.ch", role: "Super Admin" },
];