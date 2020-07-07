package com.bymeforme.backend;

import org.springframework.data.repository.CrudRepository;

public interface MyImageRepository extends CrudRepository<MyImage, Long>  {
    
}