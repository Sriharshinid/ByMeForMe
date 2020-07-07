package com.bymeforme.backend;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MyImage {
    private @Id @GeneratedValue Long id;
    private String fileName;
    private String fullPath;
    private String description;

    private MyImage() {}

    public MyImage(String fileName, String fullPath, String description) {
        this.fileName = fileName;
        this.fullPath = fullPath;
        this.description = description;
    }

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		MyImage myImage = (MyImage) o;
		return Objects.equals(id, myImage.id) &&
			Objects.equals(fileName, myImage.fileName) &&
			Objects.equals(fullPath, myImage.fullPath) &&
            Objects.equals(description, myImage.description);
	}

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
    }
    
    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFullPath() {
        return fullPath;
    }

    public void setFullPath(String fullPath) {
        this.fullPath = fullPath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
	public String toString() {
		return "MyImage{" +
			"id=" + id +
            ", fileName='" + fileName + '\'' +
            ", fullPath='" + fullPath + '\'' +
			", description='" + description + '\'' +
			'}';
	}

    public String toImgGridJSONString() {
        return "{ src: " + fullPath + ", \n" +
            "thumbnail: " + fullPath + ", \n" +
            "caption: " + description + ", \n" +
            "thumbnailWidth: 320, \n thumbnailHeight: 212 }";
    }

}