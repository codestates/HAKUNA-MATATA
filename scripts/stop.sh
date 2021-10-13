#!/bin/bash
cd /home/ubuntu/HAKUNA-MATATA/server
sudo pm2 stop bin>www.js 2> /dev/null || true
sudo pm2 delete bin>www.js 2> /dev/null || true