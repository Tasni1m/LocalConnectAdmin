const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "students", label: "Étudiants", icon: Users },
  { id: "merchants", label: "Commerçants", icon: Store },
  { id: "reviews", label: "Avis", icon: ShieldCheck },
  { id: "settings", label: "Paramètres", icon: Settings },
];

const kpis = [
  { label: "Étudiants inscrits", value: "2 486", delta: "+12%", icon: Users },
  { label: "Commerçants partenaires", value: "138", delta: "+6%", icon: Store },
  { label: "Promos utilisées", value: "18 920", delta: "+24%", icon: Ticket },
  { label: "Avis à modérer", value: "17", delta: "-8%", icon: ShieldCheck },
];

const students = [
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
  {
    id: 3,
    name: "Sofia Almeida",
    email: "sofia.almeida@etu.unige.ch",
    school: "UNIGE",
    submittedAt: "2026-03-10",
    status: "pending",
    cardExpiry: "2026-07-15",
  },
];

const merchants = [
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
  }
];