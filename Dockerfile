FROM node:21.6.2

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

ENV NODE_ENV production

RUN npm run build --max-old-space-size=800

EXPOSE 3000

ENV PORT 3000

CMD echo "Omc Space Web [Satori] Image." &&  pnpm run start;
