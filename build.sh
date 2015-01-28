cp ./docker/Dockerfile ./
sudo docker build -t nginx:invius .
rm -rf ./Dockerfile
./docker/run-server.sh
