# notes-app-devops - Complete DevOps Project by mlinx (mee001)

**Live Demo:** http://20.219.113.35:8080
**Repo:** https://github.com/mee001/notes-app-devops
**Date:** 27/09/2026

## Tech Stack
- Azure VM (Debian 12) via Terraform
- Docker + Docker Compose
- Ansible Automation
- MongoDB + Node.js Notes App + Nginx

## Projects Completed

### Project 1-4: Setup
- Dockerfile, docker-compose.yml, nginx.conf, k8s

### Project 5: Terraform + Docker + Ansible (100% DONE)
- **Terraform:** Created Debian 12 VM - IP 20.219.113.35
- **Docker:** Installed docker.io, docker-compose in VM
- **Manual Deploy:** git clone + docker-compose up -d --build => 2 containers UP
- **Ansible:** inventory.ini + deploy.yml => ping pong + PLAY RECAP ok=5 failed=0
- **Verification:** http://20.219.113.35:8080 LIVE - My Docker Notes working

## How to Run
```bash
# Manual
git clone https://github.com/mee001/notes-app-devops.git
cd notes-app-devops
docker-compose up -d --build

# Automated with Ansible
cd ansible
ansible -i inventory.ini debian -m ping
ansible-playbook -i inventory.ini deploy.yml
