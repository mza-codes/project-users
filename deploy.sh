cd api/ && npm install
cd ../client/ && yarn install
yarn run deploy
mv dist build
mv build ../api/
