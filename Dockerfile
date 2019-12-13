FROM node:12-alpine

WORKDIR /opt/app

# install node & npm
RUN apk upgrade --no-cache && \
    apk add --no-cache alpine-sdk curl autoconf automake libtool

# clean
RUN rm -rf /opt/app/*

RUN git clone https://github.com/openvenues/libpostal && \
    cd libpostal && \
    ./bootstrap.sh && \
    ./configure --datadir=/opt/libpostal_data && \
    make && \
    sudo make install

RUN sudo npm install -g node-gyp

COPY . /opt/app

RUN npm install
ENV PORT 80

CMD ["npm", "start"]

EXPOSE 80
