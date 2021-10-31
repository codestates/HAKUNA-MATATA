#!/bin/bash
cd /home/ubuntu/HAKUNA-MATATA/server

export PORT_NUMVER=$(aws ssm get-parameters --region ap-northeast-2 --names PORT_NUMVER --query Parameters[0].Value | sed 's/"//g')

export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASS=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASS --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')

export ADMIN_USER_LOGIN=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_ADMIN_USER_LOGIN --query Parameters[0].Value | sed 's/"//g')
export ADMIN_USER_EMAIL=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_ADMIN_USER_EMAIL --query Parameters[0].Value | sed 's/"//g')
export ADMIN_UESRS_PASS=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_ADMIN_UESRS_PASS --query Parameters[0].Value | sed 's/"//g')

export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')

export CLIENT_ORIGIN=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_CLIENT_ORIGIN --query Parameters[0].Value | sed 's/"//g')
export CLIENT_ORIGIN_SUB=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_CLIENT_ORIGIN_SUB --query Parameters[0].Value | sed 's/"//g')

export AWS_S3_ACCESS_KEY_ID=$(aws ssm get-parameters --region ap-northeast-2 --names S3_ACCESS_KEY_ID --query Parameters[0].Value | sed 's/"//g')
export AWS_S3_SECRET_ACCESS_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names S3_SECRET_ACCESS_KEY --query Parameters[0].Value | sed 's/"//g')
export AWS_S3_REGION=$(aws ssm get-parameters --region ap-northeast-2 --names S3_REGION --query Parameters[0].Value | sed 's/"//g')

export GITHUB_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_GITHUB_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export GITHUB_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names HAKU_GITHUB_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')

cd bin
authbind --deep pm2 start www.js
