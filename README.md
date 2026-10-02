# 📝 Notes App Fullstack - MERN on K8s (Project 4)

Deployed MERN stack on local Kubernetes (k3d/k3s) with 5 pods Running, MongoDB persistence, and clean GitHub workflow.

**GitHub:** `mee001/notes-app-fullstack` | **Commit:** `5190133` | **Size:** 8.61 KiB clean (fixed 222MB terraform binary issue)

### 🏗️ Architecture
- **Frontend:** React + Nginx - port 80
- **Backend:** Node.js/Express - `backend-service:3000` -> `/api/notes` returns `[]` when Mongo connected
- **Database:** MongoDB with PVC + Secret - `mongo-service:27017`
- **K8s:** 5 pods `1/1 Running` (frontend, backend, mongo)

### 🚀 Proof - This project completed
```bash
kubectl get pods
# frontend-xxx 1/1 Running
# backend-xxx  1/1 Running  
# mongo-xxx    1/1 Running

kubectl port-forward svc/backend-service 3000:3000 &
curl http://localhost:3000/api/notes
# []  -> Mongo connected, fresh DB

kubectl get svc
# backend-service:3000, mongo-service:27017, frontend-service:80
