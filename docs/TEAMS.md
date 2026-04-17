# Agent Teams Plan — Homesphere

## หลักการ
- ใช้ **Agent Team** (experimental) แยกตาม phase
- **Figma phase**: ใช้ agent เดียวเสมอ (consistency)
- **Prep / Build phase**: ใช้ team ได้ (งานแยก module)
- Display mode: `in-process` (Shift+Down สลับ teammate, Ctrl+T ดู task list)

---

## Team 1: `Homesphere-Prep` (Phase 1 — Design Brief)

| Teammate | Role | Skills | Output |
|---|---|---|---|
| `ux-architect` | UX / Information Architect | `ui-ux-designer`, `mobile-design` | `docs/design-brief/01-sitemap.md`, `02-user-flows.md` |
| `design-system-lead` | Design System / Visual | `ui-ux-pro-max`, `web-design-guidelines`, `radix-ui-design-system` | `docs/design-brief/03-component-inventory.md`, `04-brand-direction.md` |
| `data-architect` | Data / Content Model | `database-design`, `backend-architect` | `docs/design-brief/05-content-model.md` |

**Lead (me)**: coordinate, synthesize → `docs/design-brief/README.md`

---

## Team 2: `Homesphere-Design` (Phase 2 — ไม่ใช่ team)
- Single persistent agent: `homesphere-designer`
- ใช้ Figma MCP
- ไม่ spawn teammate เพิ่ม — consistency สำคัญกว่า parallelism

---

## Team 3: `Homesphere-Build` (Phase 3 — Implementation)

| Teammate | Role | Owns |
|---|---|---|
| `fullstack-storefront` | Public-facing build | `/(storefront)/*` pages, components, customer-facing API |
| `fullstack-admin` | CMS + backend ops | Payload collections, admin customization, order/payment logic |
| `qa-engineer` | Testing + quality | Playwright E2E, a11y audit, Lighthouse, cross-browser |

**ทำไมแบ่ง fullstack แบบนี้?**
แบ่งตาม **feature/module** (storefront vs admin) ไม่ใช่ layer (FE vs BE) — เพราะ Next.js + Payload กลืนเส้น FE/BE อยู่แล้ว + ลด file conflict

---

## Lifecycle
1. Prep team → ทำ brief → **cleanup** ก่อนขึ้น Phase 2
2. Designer (single) → ทำ Figma → ไม่มีทีมต้อง cleanup
3. Build team → dev + test → cleanup ตอน ship

## Hygiene
- เมื่อจบแต่ละ phase ใช้คำสั่ง "Clean up the team" ให้ lead เคลียร์ resource
- Shutdown teammate ทีละคนก่อน cleanup (ตาม docs)
- Limitations ที่ต้องระวัง: no `/resume` support, no nested teams, 1 team ต่อ session

## References
- [Agent Teams docs](https://code.claude.com/docs/en/agent-teams)
- [CLAUDE.md](../CLAUDE.md)
- [docs/SKILLS.md](./SKILLS.md)
