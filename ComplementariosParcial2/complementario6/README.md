# Docker ChatBot de WhatsApp Complementario 6

    -Este chat bot consiste en 2 servidores, por lo que debemos incluirlos en un docker compose
    donde declaramos ambos servidores con sus respectivos dockerfile, indicamos si necesitamos variables de
    entorno o si algun servidor depende de que este iniciado otro.

    -En cada dockerfile se estipulan la imagenes que necesita para funcionar en este caso cada servidor necesita
    de node, al igual que se indica la carpeta donde se guardaran los archivos del servidor.

    Para crear la imagen del docker se utiliza el comando:
        docker-compose --build
    Para ejecutar este docker se utiliza el comando:
        docker-compose up
