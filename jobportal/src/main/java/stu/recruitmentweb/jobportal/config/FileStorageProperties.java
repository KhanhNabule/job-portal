package stu.recruitmentweb.jobportal.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(
        prefix = "file",
        ignoreUnknownFields = true,
        ignoreInvalidFields = true
)
public class FileStorageProperties {
    private String uploadDir;

    public FileStorageProperties() {
        // TODO document why this constructor is empty
    }

    public String getUploadDir() {
        return this.uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }


}

