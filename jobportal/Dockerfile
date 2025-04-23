FROM maven:3.9.6-eclipse-temurin-17 AS build
COPY --chown=maven:maven . /khanhduyvu/jobportal
WORKDIR /khanhduyvu/jobportal

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-alpine
EXPOSE 8080
COPY --from=build /khanhduyvu/jobportal/target/jobportal-0.0.1-SNAPSHOT.jar /khanhduyvu/jobportal.jar

ENTRYPOINT [ "java", "-jar", "/khanhduyvu/jobportal.jar" ]