# Project 5 - Terraform + Docker + Ansible Deployment

**Student:** mlinx (mee001)
**Date:** 27/09/2026 17:59
**VM IP:** 20.219.113.35
**OS:** Debian 12 on Azure
**Repo:** https://github.com/mee001/notes-app-devops
**Live URL:** http://20.219.113.35:8080

---

### 1. Terraform - Create VM
- Created Debian 12 VM using Terraform on Azure
- IP: 20.219.113.35

### 2. Docker Installation (in VM)
- sudo apt update
- sudo apt install docker.io docker-compose git -y
- sudo systemctl enable --now docker

### 3. Manual Deployment
- git clone https://github.com/mee001/notes-app-devops.git
- cd notes-app-devops
- docker-compose up -d --build
- docker ps shows 2 containers UP

### 4. Ansible Automation (from Laptop)
inventory.ini:
[debian]
20.219.113.35 ansible_user=azureuser ansible_ssh_private_key_file=~/.ssh/id_rsa

Result:
ansible -m ping => SUCCESS pong
ansible-playbook deploy.yml => PLAY RECAP ok=5 failed=0

### 5. Final Verification
- Browser: http://20.219.113.35:8080 LIVE
- App: My Docker Notes - Deployed with Docker + Nginx
- Notes:
    1. Terraform Debian V12
    2. Docker install
    3. Manual Docker-Compose app Run
    4. 17:59, 27/09/2026

Status: Project 5 100% COMPLETE
