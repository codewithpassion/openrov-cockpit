#!/bin/bash
set -e

cat /etc/hosts
ifconfig
echo 'nameserver 8.8.4.4' > /etc/resolv.conf
echo 'nameserver 208.67.222.222' >> /etc/resolv.conf
echo 'nameserver 208.67.220.220' >> /etc/resolv.conf

# install node.js
apt-get update -qq
<<<<<<< HEAD
apt-get install -y curl build-essential git
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install -y nodejs
sed -i '/function getLocalAddresses() {/a return' /usr/lib/node_modules/npm/node_modules/npmconf/config-defs.js
npm install --loglevel error --production --unsafe-perm

cd src/static
npm install --loglevel error --production
=======
apt-get install -y curl
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install -y nodejs

npm rebuild --loglevel silly 

cd src/static
npm install --loglevel error
>>>>>>> cwp-software/feature/262-aux-servos
npm run bower
cd ../..
