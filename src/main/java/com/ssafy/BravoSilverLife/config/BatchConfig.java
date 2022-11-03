//package com.ssafy.BravoSilverLife.config;
//
//import com.ssafy.BravoSilverLife.service.MMSService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.batch.core.Job;
//import org.springframework.batch.core.Step;
//import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
//import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
//import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
//import org.springframework.batch.repeat.RepeatStatus;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Slf4j
//@Configuration
//@EnableBatchProcessing
//@RequiredArgsConstructor
//public class BatchConfig {
//
//    private final JobBuilderFactory jobBuilderFactory;
//    private final StepBuilderFactory stepBuilderFactory;
//
//    private final MMSService mmsService;
//
//
//    @Bean
//    public Job job() {
//
//        Job job = jobBuilderFactory.get("job")
//                .start(step())
//                .build();
//
//        return job;
//    }
//
//    @Bean
//    public Step step() {
//        return stepBuilderFactory.get("step")
//                .tasklet((contribution, chunkContext) -> {
//                    log.info("Start!");
//
//                String access_token = mmsService.userAuth();
//
//
//
//                    log.info("Finish!");
//                    return RepeatStatus.FINISHED;
//                })
//                .build();
//    }
//}
//
