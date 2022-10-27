package com.ssafy.BravoSilverLife;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BravoSilverLifeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BravoSilverLifeApplication.class, args);
	}

}
