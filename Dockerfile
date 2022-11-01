FROM openjdk:11
ADD /build/libs/BravoSilverLife-0.0.1-SNAPSHOT.jar app.jar
RUN if [ -e /var/run/docker.sock ]; then chown jenkins:jenkins /var/run/docker.sock; fi
ENV JAVA_OPTS=""
ENTRYPOINT ["java","-jar","/app.jar"]

