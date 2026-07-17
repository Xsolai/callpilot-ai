# CallPilot AI

CallPilot AI is a frontend-only SaaS demonstration for AI calling agent operations. It includes a complete marketing funnel and an interactive workspace for campaigns, agents, live call supervision, contacts, analytics, integrations, settings, and billing.

All calls, people, phone numbers, transcripts, payments, metrics, and integrations are deterministic mock data. This repository contains no dialer, telephony backend, private API, credentials, production authentication, or customer information.

## Routes

Public: `/`, `/pricing`, `/login`, `/signup`, `/forgot-password`, `/checkout`, `/onboarding`

Workspace: `/app/mission-control`, `/app/agents`, `/app/campaigns`, `/app/calls`, `/app/contacts`, `/app/analytics`, `/app/integrations`, `/app/settings`, `/app/settings/billing`

## Development

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Built with Next.js App Router, TypeScript, Tailwind CSS, Phosphor Icons, Recharts, and browser-local demo state.

Created by Ahsan Inam for XsolAI. © 2026 XsolAI. All rights reserved.

