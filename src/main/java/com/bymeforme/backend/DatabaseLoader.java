package com.bymeforme.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import java.nio.file.Files;
import java.io.File;
import java.io.IOException;

@Component
public class DatabaseLoader implements CommandLineRunner{

    @Value("classpath:static/api/food/*")
    private Resource[] resources;

    private final MyImageRepository repository;

    @Autowired
    public DatabaseLoader(MyImageRepository repository) {
        this.repository = repository;
    }

    public void loadImages(String folderName, String subFolder) throws IOException{
        ClassLoader cl = this.getClass().getClassLoader();
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver(cl);
        try {
            Resource resources[] = resolver.getResources("classpath:"+ folderName +"/*.*");
            for (final Resource res : resources) {
                String name = res.getFilename();
                this.repository.save(new MyImage(name, subFolder + name, name.substring(0, name.indexOf("."))));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Override
	public void run(String... strings) throws Exception {
        loadImages("static/api/food", "food/");
        loadImages("static/api/doodle", "doodle/");
    }
    
}
