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
    private final MyImageRepository repository;

    @Value("classpath:static/api/food/*")
    private Resource[] resources;

    @Autowired
    public DatabaseLoader(MyImageRepository repository) {
        this.repository = repository;
    }
/*
    public void loadImages(String folderName) throws IOException{
        ClassLoader classLoader = ClassLoader.getSystemClassLoader();
        File file = new File(classLoader.getResource(folderName).getFile());
        String[] fileList = file.list();
        for(String name:fileList){
            this.repository.save(new MyImage(name, "food/" + name, name.substring(0, name.indexOf("."))));
        }
    }


    public void loadImages(String folderName) throws IOException{
    	for (final Resource res : resources) {
            String name = res.getFilename();
            this.repository.save(new MyImage(name, "food/" + name, name.substring(0, name.indexOf("."))));
	    }
    }
*/

    public void loadImages(String folderName) throws IOException{
        ClassLoader cl = this.getClass().getClassLoader();
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver(cl);
        try {
            Resource resources[] = resolver.getResources("classpath:"+ folderName +"/**");
            for (final Resource res : resources) {
                String name = res.getFilename();
                this.repository.save(new MyImage(name, "food/" + name, name.substring(0, name.indexOf("."))));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @Override
	public void run(String... strings) throws Exception {
        loadImages("static/api/food");
	    //this.repository.save(new MyImage("TEST", "food/TEST", "THIS IS A TEST"));
    }
    
}
