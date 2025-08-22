# 🌸 Sakura Stack — *Code in Bloom* 🌸

> *“Where code learns to fly on paper cranes and servers hum lullabies.”*

<p align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="480" alt="Anime Sky">
</p>

---

## ✨ Overview

Welcome to **Sakura Stack**, a lovingly crafted **monorepo** that brings frontend and backend together under an **anime sky**.  

This repository contains code and technologies spanning:

- 🎨 **Frontend**: React.js, Tailwind CSS, HTML, CSS, JavaScript  
- ⚔️ **Backend**: Node.js, Rust  
- 🧩 **Data Layer**: Prisma + MongoDB  
- 🐳 **DevOps**: Docker, Kubernetes, Cloud Computing  
- 🏯 **Monorepo Tooling**: pnpm / workspaces  

Whether you’re building dazzling UIs or tuning high-performance backend services, **Sakura Stack** wraps developer ergonomics in a gentle, animated theme inspired by anime visuals and cozy storytelling.

---

## 🌸 What is a Monorepo?

A **monorepo** (*monolithic repository*) is where **multiple projects or services live inside a single repository**, instead of each project having its own.  

Think of it like a **shared anime guild hall** where  
- mages (frontend),  
- warriors (backend), and  
- alchemists (infra)  

all train together and grow stronger as a unit.  

### ✅ Benefits
- **Shared dependencies** → no duplicate code  
- **Atomic commits** → update frontend + backend + infra in one go  
- **Easier refactoring** → rename functions across all services at once  
- **Consistent tooling** → one pipeline for linting, testing, builds  
- **Code visibility** → everyone can see the whole system in one place  

### ⚠️ Trade-offs
- Repo can grow **large**  
- Needs **workspace tools** (pnpm, yarn, Nx, Turborepo)  
- Harder **access control** for separate teams  

---

## 🎨 Anime Palette

- **Primary**: `#FADADD` (sakura pink)  
- **Accent**: `#7EE7C8` (gentle mint)  
- **Dark**: `#0F172A` (midnight sky)  
- **Glow**: `#FFD166` (warm light)  

Use Tailwind CSS utilities to bring this color story alive.

---

## 🚀 Quickstart

> Assumes you have `node`, `pnpm`, `docker`, and `kubectl` installed.

```bash
# Clone the repo
git clone <your-repo-url>
cd sakura-stack

# Install dependencies
pnpm install

# Run frontend
pnpm --filter web dev

# Run backend
pnpm --filter api dev

# Start with Docker
docker compose -f infra/docker/docker-compose.yml up --build

# Deploy to Kubernetes
kubectl apply -f infra/k8s/
