DROP SCHEMA IF EXISTS `timviec`;

CREATE SCHEMA `timviec`;
USE `timviec`;

CREATE TABLE users (
	`id` bigint(20) NOT NULL auto_increment,
    `email` varchar(255) DEFAULT NULL,
    `email_verified` bit(1) DEFAULT NULL,
    `image_url` varchar(255) DEFAULT NULL,
    `name` varchar(255) default null,
    `password` VARCHAR(255) default null,
    `provider` varchar(255) DEFAULT NULL,
    `provider_id` varchar(255) DEFAULT NULL,
    `is_locked` bit(1) default null,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE tbl_jobseeker (
	`id` bigint(20) not null auto_increment,
    `phone` varchar(255) default null,
    `user_id` bigint(20) default null,
    PRIMARY KEY(`id`),

	KEY `FK_USERS_idj` (`user_id`),
	CONSTRAINT `FK_USERS_job` FOREIGN KEY (`user_id`)
	REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE tbl_advertisement (
	`id` bigint(20) not null auto_increment,
    `image` longtext default null,
    `title` varchar(255),
    `user_id` bigint(20),
    `description` varchar(255) default null,
    primary key(`id`),
    KEY `FK_USERS_ida` (`user_id`),
	CONSTRAINT `FK_USERS_ads` FOREIGN KEY (`user_id`)
	REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

create TABLE tbl_company (
	`id` bigint(20) not null auto_increment,
    `address` varchar(255) default null,
    `description` nvarchar(255) default null,
    `image` varchar(255) default null,
    `name` varchar(255) default null,
    `personal_size` int(11) default null,
    `website` varchar(255) default null,
    primary key(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE tbl_recruiter (
	`id` bigint(20) not null auto_increment,
    `address` varchar(200) default null,
    `gender` bit(1) default null,
    `phone` varchar(255) default null,
    `skype_account` varchar(255) default null,
    `workplace` varchar(255) default null,
    `company_id` bigint(20) default null,
    `user_id` bigint(20) default null,
    primary key(`id`),

    KEY `FK_USERS_idr` (`user_id`),
	CONSTRAINT `FK_USERS_rec` FOREIGN KEY (`user_id`)
	REFERENCES `users` (`id`),

	KEY `FK_COMPANY_idx` (`company_id`),
	CONSTRAINT `FK_COMPANY` FOREIGN KEY (`company_id`)
	REFERENCES `tbl_company` (`id`)
)  ENGINE=InnoDB AUTO_INCREMENT=1;

 CREATE TABLE category (
 	`id` bigint(20) not null auto_increment,
    `name` varchar(255) default null,
     primary key(`id`)
 )  ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE tbl_job (
	`id` bigint(20) not null auto_increment,
    `company_name` varchar(255) default null,
    `address` varchar(255) default null,
    `deadline` datetime default null,
    `description` varchar(255) default null,
    `job_title` varchar(255) default null,
    `language` varchar(255) default null,
    `level` varchar(255) default null,
    `max_salary` decimal(19,2) default null,
    `min_salary` decimal(19,2) default null,
    `require_job` varchar(255) default null,
    `status` varchar(255) default null,
    `types_of_cv` varchar(255) default null,
    `welfare` varchar(255) default null,
    `recruiter_id` bigint(20) default null,
	`category_id` bigint(20) default null,
	primary key(`id`),

	KEY `FK_RECRUITER_idx` (`recruiter_id`),
	CONSTRAINT `FK_RECRUITER` FOREIGN KEY (`recruiter_id`)
	REFERENCES `tbl_recruiter` (`id`),

	KEY `FK_CATEGORY_idx` (`category_id`),
	CONSTRAINT `FK_CATEGORY` FOREIGN KEY (`category_id`)
	REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE roles (
	`id` bigint(20) not null auto_increment,
    `name` varchar(60) default null,
    primary key(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE user_roles (
	`user_id` bigint(20) not null,
    `role_id` bigint(20) not null,
    primary key(`user_id`,`role_id`),
    KEY `FK_USERS_idur` (`user_id`),
	CONSTRAINT `FK_USERS_usr` FOREIGN KEY (`user_id`)
	REFERENCES `users` (`id`),

	KEY `FK_ROLES_idx` (`role_id`),
	CONSTRAINT `FK_ROLES` FOREIGN KEY (`role_id`)
	REFERENCES `roles` (`id`)
) ENGINE=InnoDB;

CREATE TABLE tbl_curriculum_vitae (
	`id` bigint(20) not null auto_increment,
    `file_cv` varchar(255) default null,
    `name` varchar(255) default null,
    `status` bit(1) default null,
    `jojobbseeker_id` bigint(20) default null,
    primary key(`id`),

	KEY `FK_JOBSEEKER_idc` (`jobseeker_id`),
	CONSTRAINT `FK_JOBSEEKER_cur` FOREIGN KEY (`jobseeker_id`)
	REFERENCES `tbl_jobseeker` (`id`)
)  ENGINE=InnoDB AUTO_INCREMENT=1;

INSERT INTO users (email, email_verified, name, password, provider, is_locked)
VALUES ('master@gmail.com', 0, 'master','$2a$10$9QsxeUHb6Ze3nuHuroLTy.WakP2.Rgglj3xzzt8AppxwWwSluJADK', 'local', 0);

INSERT INTO roles(`id`, `name`)
VALUES(1, 'ROLE_ADMIN');

INSERT INTO roles(`id`, `name`)
VALUES(2, 'ROLE_JOBSEEKER');

 INSERT INTO roles(`id`, `name`)
 VALUES(3, 'ROLE_RECRUITER');

 INSERT INTO category(`name`)
VALUES('IT');

INSERT INTO category(`name`)
 VALUES('Marketing');

INSERT INTO user_roles(`user_id`,`role_id`)
VALUES(1,1);

ALTER TABLE tbl_company
MODIFY description LONGTEXT CHARACTER SET utf8mb4;

ALTER TABLE tbl_advertisement
MODIFY description LONGTEXT CHARACTER SET utf8mb4;








