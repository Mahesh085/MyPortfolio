FROM nginx
MAINTAINER Author Uma Mahesh
LABEL This is my Portfolio 
WORKDIR /root/MyJob
COPY index.html /usr/share/nginx/html

