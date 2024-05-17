package stu.recruitmentweb.jobportal.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import stu.recruitmentweb.jobportal.domain.models.Job;
import stu.recruitmentweb.jobportal.domain.models.Recruitment;

public interface RecruitmentRepositoryCustom {
    Page<Job> searchJob(String name, Pageable pageable);

    Page<Recruitment> getRecruitmentOfRecruiter(Pageable pageable, String createAt, Long jobseekerId, Long recruiterId, Boolean isAnswer, String jobName);
}
