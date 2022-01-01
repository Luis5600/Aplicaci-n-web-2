# Docker Rest ChatBot de WhatsApp Complementario 7

    -Utilizamos un docker Compose para incluir los dos servicios en este caso el backend rest y la base de datos de mongo

    -Configuramos las variables de entorno dentro de docker compose

    -En el dockerfile se estipulan la imagenes que necesita para funcionar en este caso cada servidor necesita
    de node, al igual que se indica la carpeta donde se guardaran los archivos del servidor.

    Para crear la imagen del docker compose se utiliza el comando:
        docker-compose --build
    Para ejecutar este docker se utiliza el comando:
        docker-compose up


