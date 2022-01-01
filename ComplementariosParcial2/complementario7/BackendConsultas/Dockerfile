#Indicamos la imagen que necesitamos para ejecutar el servidor en este caso node
FROM node
#Indicamos la carpeta donde copiaremos los archivos
COPY . /consultas
#Indicacamos la carpeta donde se encuentran los archivos del servidor
WORKDIR /consultas
#Comando de intalacion de los paquetes 
RUN npm install
#Indicamos el script a ejecutar para iniciar el servidor
ENTRYPOINT ["npm","start"]