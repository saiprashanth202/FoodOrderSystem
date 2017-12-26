package com.swhizz.repositories;

import org.springframework.data.repository.CrudRepository;

import com.swhizz.entities.User;

public interface UserRepository extends CrudRepository< User , Long >{

}
