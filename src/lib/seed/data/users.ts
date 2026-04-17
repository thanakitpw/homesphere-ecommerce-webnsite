// Users seeded via supabase.auth.admin.createUser (service role).
// Password is shared across demo users; admin has a separate one.
// Rotate after demo delivery.

export const DEMO_PASSWORD = "Homesphere!2026";
export const ADMIN_PASSWORD = "HomesphereAdmin!2026";

export const usersSeed = [
  {
    email: "admin@homesphere.demo",
    password: ADMIN_PASSWORD,
    role: "admin" as const,
    full_name: "Admin Homesphere",
    phone: "0800000001",
  },
  {
    email: "somchai@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "สมชาย ใจดี",
    phone: "0812345678",
    tier: "gold" as const,
  },
  {
    email: "malee@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "มาลี ใจงาม",
    phone: "0823456789",
    tier: "silver" as const,
  },
  {
    email: "somsak@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "สมศักดิ์ มีสุข",
    phone: "0834567890",
  },
  {
    email: "nat@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "Nat Phusri",
    phone: "0845678901",
  },
  {
    email: "praew@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "แพรว สวยใส",
    phone: "0856789012",
    tier: "gold" as const,
  },
  {
    email: "james@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "James Wilson",
    phone: "0867890123",
  },
  {
    email: "paula@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "Paula Chen",
    phone: "0878901234",
  },
  {
    email: "oliver@example.com",
    password: DEMO_PASSWORD,
    role: "customer" as const,
    full_name: "Oliver Tan",
    phone: "0889012345",
  },
];
