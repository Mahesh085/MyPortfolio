FROM nginx
MAINTAINER Author Uma Mahesh
LABEL This is my Portfolio 
WORKDIR /var/lib/jenkins/workspace/MyPortfolio
COPY . /usr/share/nginx/html

