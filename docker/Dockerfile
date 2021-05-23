FROM centos:centos7

# general installation
RUN yum install -y epel-release
RUN yum install -y nodejs npm

# set path
ENV PATH $PATH=:/usr/local/bin:/usr/bin

# set working directory
RUN mkdir -p /usr/web/p5_previewer
WORKDIR /usr/web/p5_previewer

#ARG PROJECT_ROOT <- use it when setting volumes

# node.js settings
COPY . /usr/web/p5_previewer
RUN npm install

EXPOSE 8080