package bchr.stdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class StdbApplication {

    public static void main(String[] args) {
        SpringApplication.run(StdbApplication.class, args);
    }

}
