FROM nginx
MAINTAINER Author Uma Mahesh
LABEL This is my Portfolio 
WORKDIR /root/MyJob
COPY script.js style.css index.html /usr/share/nginx/html

