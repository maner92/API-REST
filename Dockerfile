FROM python:3.8-slim

WORKDIR /eSports

COPY Logica ./Logica
COPY Servicios ./Servicios

RUN apt-get update
RUN apt-get install -y gcc
RUN apt-get install -y default-libmysqlclient-dev
RUN pip install --upgrade pip
RUN pip install -r Servicios/requirements.txt
ENV PYTHONPATH="$PYTHONPATH:/"

EXPOSE 8000
CMD [ "python", "./Servicios/manage.py", "runserver", "0.0.0.0:8000" ]

