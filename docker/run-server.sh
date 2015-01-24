sudo docker stop inviuserver && sudo docker rm inviuserver
sudo docker run --name inviuserver -d -p 8080:80 nginx:invius
