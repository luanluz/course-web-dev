create table projects
(
	project_id int not null auto_increment,
	primary key(project_id),
	project_name varchar(90),
	project_author varchar(90),
	project_license varchar(20),
	project_description varchar(260),
	project_tag varchar(20),
	project_image varchar(200),
	project_file varchar(200)
);

create table comments
(
	comment_id int not null auto_increment,
	primary key(comment_id),
	project_id int not null,
	user varchar(80),
	commet varchar(260),
	foreign key (project_id) references projects(project_id)
);