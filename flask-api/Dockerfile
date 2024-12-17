FROM python:3.8-slim
WORKDIR /app
COPY . .
RUN pip install flask requests flask-cors
EXPOSE 5000
CMD ["python", "app.py"]
