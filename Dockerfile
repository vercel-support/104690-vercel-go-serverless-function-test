
FROM node:18-alpine

ENV VERCEL_TOKEN="__YOUR__TOKEN__"
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

WORKDIR /app
COPY . /app
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm i -g vercel

EXPOSE 3000
CMD ["sh", "-c", "vercel dev --listen 3000 -t ${VERCEL_TOKEN} --yes"]