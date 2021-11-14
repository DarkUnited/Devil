FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AmdaOfficial/Devil /root/Devil
WORKDIR /root/Devil/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
