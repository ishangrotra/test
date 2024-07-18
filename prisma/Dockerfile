FROM node:18-alpine

WORKDIR /app

COPY prisma/schema.prisma ./prisma/

RUN npm install -g prisma

RUN prisma generate

EXPOSE 5555

CMD ["prisma", "studio", "--host", "0.0.0.0"]