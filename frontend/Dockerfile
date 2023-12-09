FROM node:18.17.0-alpine

WORKDIR /usr/src/app

# build後下記のコマンドを実行(一度TS環境作成した後は再作成不要)
#docker-compose run --rm front sh -c 'npx create-next-app src --typescript'

#コンテナ初回起動時、必要なライブラリをインストールする
RUN yarn install
RUN yarn add axios
RUN yarn add -D prettier eslint-config-prettier
RUN yarn add -D tailwindcss postcss autoprefixer cssnano
RUN yarn add next
RUN yarn tailwindcss init -p
RUN yarn add -D eslint-plugin-tailwindcss