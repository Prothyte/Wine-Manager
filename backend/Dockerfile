FROM python:3.9.6-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /opt/winemanager_backend && \
    useradd backend && \
        addgroup backend && \
            addgroup backend backend

WORKDIR /opt/winemanager_backend

COPY ./winemanager_backend/* /opt/winemanager_backend/

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

USER backend

RUN sed -i "s/\r$//g" /opt/winemanager_backend/entrypoint.sh
RUN chmod +x /opt/winemanager_backend/entrypoint.sh

ENTRYPOINT [ "/opt/winemanager_backend/entrypoint.sh" ]