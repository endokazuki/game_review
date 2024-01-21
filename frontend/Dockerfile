FROM node:18.17.0-alpine

WORKDIR /usr/src/app

# build後下記のコマンドを実行(一度TS環境作成した後は再作成不要)
#docker-compose run --rm front sh -c 'npx create-next-app gamefront --typescript'

RUN yarn install
RUN yarn tailwindcss init -p

#コンテナ初回起動時、必要なライブラリをインストールする
# RUN yarn add axios
# RUN yarn add -D prettier eslint-config-prettier
# RUN yarn add -D tailwindcss postcss autoprefixer cssnano
# RUN yarn add next
# RUN yarn add -D eslint-plugin-tailwindcss
# RUN yarn add react-select