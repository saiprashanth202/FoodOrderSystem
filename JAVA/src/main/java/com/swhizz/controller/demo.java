package com.swhizz.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class demo {
	
   

	@RequestMapping("/hello")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    

}
